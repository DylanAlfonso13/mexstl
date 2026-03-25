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
  description: string;
  image?: string;
  images?: ImageData[];
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
  description,
  image,
  images,
  language,
  isFirst,
  isLast,
  isMapInteractive = false,
  onEnterView
}) => {
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
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
          bg-white/90 backdrop-blur-md
          p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16
          rounded-2xl shadow-2xl
          max-w-4xl xl:max-w-5xl w-full
          ${isMapInteractive ? 'pointer-events-none' : 'pointer-events-auto'}
          transform transition-all duration-700 ease-out
          ${hasBeenSeen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Era Label */}
        {era && (
          <div className="mb-4 md:mb-5">
            <span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-mexRed border-b-2 border-mexRed pb-1"
              aria-label={`Time period: ${era}`}
            >
              {era}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-gray-900 font-[family-name:var(--font-outfit)] leading-tight">
          {title}
        </h2>

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
              priority={isFirst}
            />
          </div>
        )}

        {/* Description */}
        <div className="prose prose-lg md:prose-xl max-w-none">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose text-gray-800 font-[family-name:var(--font-manrope)]">
            {description}
          </p>
        </div>
      </article>
    </section>
  );
};

export default StorySection;
