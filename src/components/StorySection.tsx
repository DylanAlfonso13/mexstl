"use client";

import React, { useEffect } from 'react';
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
  onEnterView
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onEnterView();
    }
  }, [inView, onEnterView]);

  // Determine which image component to use
  const hasMultipleImages = images && images.length > 0;
  const hasSingleImage = !hasMultipleImages && image;

  return (
    <div
      ref={ref}
      className={`
        min-h-screen flex justify-center px-4 sm:px-6 lg:px-8
        ${isFirst ? 'items-start pt-24 sm:pt-28 md:pt-32' : 'items-center pt-20'}
        ${isLast ? 'pb-32 md:pb-40' : 'pb-20'}
      `}
    >
      <article
        className={`
          bg-white bg-opacity-90 backdrop-blur-md
          p-8 sm:p-10 md:p-12 lg:p-16
          rounded-2xl shadow-2xl
          max-w-5xl w-full
          transform transition-all duration-700 ease-out
          ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Era Label */}
        {era && (
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-mexRed border-b-2 border-mexRed pb-1">
              {era}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 font-[family-name:var(--font-outfit)] leading-tight">
          {title}
        </h2>

        {/* Images */}
        {hasMultipleImages && (
          <div className="mb-8">
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
          <div className="mb-8">
            <ImageWithCaption
              src={image}
              alt={title}
              priority={isFirst}
            />
          </div>
        )}

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-loose text-gray-700 whitespace-pre-line">
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default StorySection;
