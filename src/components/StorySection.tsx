"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ImageCarousel from './ImageCarousel';
import ImageWithCaption from './ImageWithCaption';

interface ImageData {
  src: string;
  caption: {
    en: string;
    es: string;
  };
  credit?: string;
  citation?: number;
}

interface Citation {
  num: number;
  url: string;
  text: string;
  curated?: boolean; // From a chapter's `sources` (full Chicago citation) vs. an auto-generated link label
}

interface Source {
  text: string;
  url: string;
}

// Description hrefs may carry #:~:text= fragments or trailing slashes that the
// curated source URLs don't, so compare without them
function normalizeUrl(url: string): string {
  return url.replace(/#.*$/, '').replace(/\/+$/, '');
}

const CITATION_LINK_CLASS = 'underline underline-offset-1 hover:text-mexRed transition-colors duration-200 break-words';

// For curated Chicago citations, underline/link only the trailing URL and leave
// the descriptive text (which may contain <i> for journal titles) plain. For
// auto-generated footnotes, whose text is just a link label, link the whole label.
function formatCitationHtml(citation: Citation): string {
  const match = citation.text.match(/^(.*?)(https?:\/\/\S+?)(\.?)$/);
  if (match) {
    const [, before, url, trailing] = match;
    return `${before}<a href="${url}" target="_blank" rel="noopener noreferrer" class="${CITATION_LINK_CLASS}">${url}</a>${trailing}`;
  }
  // Curated citation with no visible URL yet (e.g. embedded link pending) — keep
  // the text plain; there's nothing to underline.
  if (citation.curated) {
    return citation.text;
  }
  return `<a href="${citation.url}" target="_blank" rel="noopener noreferrer" class="italic ${CITATION_LINK_CLASS}">${citation.text}</a>`;
}

// Private-use chars mark a pending citation until it's moved to the sentence end
const CITE_OPEN = '\uE000';
const CITE_CLOSE = '\uE001';
const CITE_PLACEHOLDER = new RegExp(`${CITE_OPEN}(\\d+)${CITE_CLOSE}`, 'g');

// A period only ends a sentence when it isn't an initial ("Nicholas F.") or a known
// abbreviation ("St. Louis", "U.S."), and is followed by whitespace or the string end.
const SENTENCE_END =
  /(?<!\b[A-Z])(?<!\b(?:St|Mr|Mrs|Ms|Dr|Jr|Sr|Sra|Srta|vs|etc|Inc|Co|Ave|No|Vol|EE|UU))([.!?]["”’]?)(?=\s|$)/g;

function citationSup(num: number): string {
  return `<sup data-citation="${num}" style="color:#C8102E;font-weight:700;font-size:0.7em;cursor:pointer" title="View citation ${num}">[${num}]</sup>`;
}
// one more test
/** Pulls the pending placeholders out of one sentence and re-emits them, deduplicated,
 *  after its closing punctuation. */
function flushSentence(chunk: string): string {
  const nums: number[] = [];
  const stripped = chunk.replace(CITE_PLACEHOLDER, (_match, num: string) => {
    nums.push(Number(num));
    return '';
  });
  return stripped + [...new Set(nums)].map(citationSup).join('');
}

/** Moves every pending citation marker to the end of the sentence it sits in, so
 *  markers never interrupt a sentence mid-clause. */
function markersToSentenceEnds(text: string): string {
  const chunks: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  SENTENCE_END.lastIndex = 0;
  while ((match = SENTENCE_END.exec(text)) !== null) {
    const end = match.index + match[0].length;
    chunks.push(flushSentence(text.slice(lastIndex, end)));
    lastIndex = end;
  }
  chunks.push(flushSentence(text.slice(lastIndex)));

  return chunks.join('');
}

/** Strips the <a> links from HTML (they render as plain text — the anchor only marks
 *  which footnote applies and where), then emits a [N] superscript at the end of each
 *  citing sentence. Returns the modified HTML alongside a deduplicated citations list.
 *  When curated sources are provided they become the citation list (numbered in
 *  source order, matched to links by URL); otherwise citations are derived from
 *  the links themselves. */
function processDescriptionLinks(html: string, sources?: Source[]): { processedHtml: string; citations: Citation[] } {
  const citations: Citation[] = (sources ?? []).map((source, index) => ({
    num: index + 1,
    url: source.url,
    text: source.text,
    curated: true
  }));
  const urlToNum = new Map<string, number>(
    citations.map((citation) => [normalizeUrl(citation.url), citation.num])
  );
  let counter = citations.length + 1;

  const withPlaceholders = html.replace(
    /<a[^>]+href="([^"]*)"[^>]*>(.*?)<\/a>/g,
    (_match, url: string, text: string) => {
      const key = normalizeUrl(url);
      if (!urlToNum.has(key)) {
        urlToNum.set(key, counter);
        citations.push({ num: counter, url, text });
        counter++;
      }
      return `${text}${CITE_OPEN}${urlToNum.get(key)}${CITE_CLOSE}`;
    }
  );

  return { processedHtml: markersToSentenceEnds(withPlaceholders), citations };
}

interface StorySectionProps {
  era?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageCaption?: string;
  imageCaptionHref?: string;
  images?: ImageData[];
  sources?: Source[];
  language: 'en' | 'es';
  isFirst: boolean;
  isLast: boolean;
  isMapInteractive?: boolean;
  onEnterView: () => void;
}

/**
 * Museum-style story section for scrollytelling
 * Large, content-first presentation with archival images
 */
const StorySection: React.FC<StorySectionProps> = ({
  era,
  title,
  subtitle,
  description,
  image,
  imageCaption,
  imageCaptionHref,
  images,
  sources,
  language,
  isFirst,
  isLast,
  isMapInteractive = false,
  onEnterView
}) => {
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const [isFootnoteOpen, setIsFootnoteOpen] = useState(false);
  const [highlightedCitation, setHighlightedCitation] = useState<number | null>(null);
  const citationRefs = useRef<Record<number, HTMLElement | null>>({});

  const { processedHtml, citations } = processDescriptionLinks(description, sources);

  const scrollToCitation = (num: number) => {
    if (!num) return;
    setIsFootnoteOpen(true);
    setTimeout(() => {
      citationRefs.current[num]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setHighlightedCitation(num);
      setTimeout(() => setHighlightedCitation(null), 1500);
    }, 320);
  };

  const handleCitationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const sup = (e.target as HTMLElement).closest('sup[data-citation]');
    if (!sup) return;
    scrollToCitation(parseInt(sup.getAttribute('data-citation') ?? '0', 10));
  };

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setHasBeenSeen(true);
      onEnterView();
    }
  }, [inView, onEnterView]);

  // Determine which image component to use
  const hasMultipleImages = images && images.length > 0;
  const hasSingleImage = !hasMultipleImages && image;

  return (
    <section
      ref={ref}
      className={`
        min-h-screen flex justify-center px-4 sm:px-6 lg:px-8
        ${isFirst ? 'items-start pt-24 sm:pt-28 md:pt-32' : 'items-center pt-20'}
        ${isLast ? 'pb-32 md:pb-40' : 'pb-20'}
      `}
      aria-label={`Story section: ${title}`}
    >
      <article
        className={`
          bg-white
          p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16
          rounded-2xl shadow-2xl
          max-w-4xl xl:max-w-5xl w-full
          ${isMapInteractive ? 'pointer-events-none' : 'pointer-events-auto'}
          transform transition-[opacity,transform] duration-500 ease-out
          ${hasBeenSeen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Era Label */}
        {era && (
          <div className="mb-4 md:mb-5">
            <span 
              className="inline-block text-lg sm:text-xl md:text-2xl font-semibold tracking-widest uppercase text-mexRed border-b-2 border-mexRed pb-1"
              aria-label={`Time period: ${era}`}
            >
              {era}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-[family-name:var(--font-outfit)] leading-tight mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 italic font-[family-name:var(--font-manrope)] mb-6 md:mb-8">
            {subtitle}
          </p>
        )}

        {/* Images */}
        {hasMultipleImages && (
          <div className="mb-6 md:mb-8">
            <ImageCarousel
              images={images.map(img => ({
                src: img.src,
                caption: img.caption[language],
                credit: img.credit,
                citation: img.citation
              }))}
              onCitationClick={scrollToCitation}
              priority={isFirst}
            />
          </div>
        )}

        {hasSingleImage && (
          <div className="mb-6 md:mb-8">
            <ImageWithCaption
              src={image}
              alt={title}
              caption={imageCaption}
              captionHref={imageCaptionHref}
              priority={isFirst}
            />
          </div>
        )}

        {/* Description */}
        <div className="prose prose-lg md:prose-xl max-w-none" onClick={handleCitationClick}>
          <p
            className="text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose text-gray-800 font-[family-name:var(--font-manrope)]"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </div>

        {/* Citations footnote */}
        {citations.length > 0 && (
          <div className="mt-6 md:mt-8">
            <button
              onClick={() => setIsFootnoteOpen(prev => !prev)}
              className="flex items-center gap-1.5 text-sm italic text-gray-500 hover:text-gray-700 transition-colors duration-200 font-[family-name:var(--font-manrope)]"
              aria-expanded={isFootnoteOpen}
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8" cy="5.5" r="0.9" fill="currentColor"/>
                <line x1="8" y1="7.5" x2="8" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Learn More
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isFootnoteOpen ? 'max-h-[60rem]' : 'max-h-0'
              }`}
            >
              <div className="pt-3 space-y-1">
                {citations.map((citation) => (
                  <p
                    key={citation.num}
                    ref={(el) => { citationRefs.current[citation.num] = el; }}
                    className={`text-xs font-[family-name:var(--font-manrope)] leading-relaxed transition-colors duration-300 rounded px-1 -mx-1 ${
                      highlightedCitation === citation.num ? 'text-mexRed bg-red-50' : 'text-mexRed/70'
                    }`}
                  >
                    <span className="font-semibold not-italic">[{citation.num}]</span>{' '}
                    <span dangerouslySetInnerHTML={{ __html: formatCitationHtml(citation) }} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default StorySection;
