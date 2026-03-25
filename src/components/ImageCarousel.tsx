"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ImageData {
  src: string;
  caption: string;
  credit?: string;
}

interface ImageCarouselProps {
  images: ImageData[];
  priority?: boolean;
}

/**
 * Museum-style image carousel with navigation
 * Supports keyboard, touch, and click navigation
 */
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, priority = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentIndex(images.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, images.length]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="w-full space-y-4"
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Main Image Container */}
      <div className="relative group">
        <div 
          className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden border border-gray-200 shadow-md group-hover:shadow-lg transition-shadow duration-300"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.caption}
            fill
            className="object-cover object-center transition-opacity duration-500"
            priority={priority && currentIndex === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
          />
        </div>

        {/* Navigation Buttons - Only show if multiple images */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-mexRed focus:ring-offset-2 hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" aria-hidden="true" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-mexRed focus:ring-offset-2 hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" aria-hidden="true" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Caption */}
      <figcaption className="text-sm sm:text-base text-gray-600 leading-relaxed px-1">
        <p className="mb-1 font-[family-name:var(--font-manrope)]">{currentImage.caption}</p>
        {currentImage.credit && (
          <p className="text-xs sm:text-sm text-gray-500 italic">
            {currentImage.credit}
          </p>
        )}
      </figcaption>

      {/* Dot Indicators - Only show if multiple images */}
      {images.length > 1 && (
        <div 
          className="flex justify-center gap-2 pt-2"
          role="tablist"
          aria-label="Image pagination"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mexRed focus:ring-offset-2 ${
                index === currentIndex
                  ? 'bg-mexRed w-8 sm:w-10'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to image ${index + 1} of ${images.length}`}
              aria-selected={index === currentIndex}
              aria-current={index === currentIndex ? 'true' : 'false'}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
