"use client";

import React, { useEffect, useState } from 'react';
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
  language: 'en' | 'es';
  isFirst: boolean;
  isLast: boolean;
  isMapInteractive?: boolean;
  footnote?: string;
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
  language,
  isFirst,
  isLast,
  isMapInteractive = false,
  footnote,
  onEnterView
}) => {
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const [isFootnoteOpen, setIsFootnoteOpen] = useState(false);

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
                credit: img.credit
              }))}
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
        <div className="prose prose-lg md:prose-xl max-w-none">
          <p
            className="text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose text-gray-800 font-[family-name:var(--font-manrope)] [&_a]:text-mexRed [&_a]:underline [&_a]:underline-offset-2 [&_a]:font-semibold hover:[&_a]:opacity-80"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Footnote */}
        {footnote && (
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
                isFootnoteOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="text-xs text-gray-400 italic leading-relaxed font-[family-name:var(--font-manrope)] pt-3">
                {footnote}
              </p>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default StorySection;
