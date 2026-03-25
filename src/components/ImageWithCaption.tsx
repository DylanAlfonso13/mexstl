"use client";

import React from 'react';
import Image from 'next/image';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  priority?: boolean;
}

/**
 * Museum-style single image with caption
 * Clean, minimal presentation for archival content
 */
const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
  credit,
  priority = false
}) => {
  return (
    <figure className="w-full space-y-3" role="figure">
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
        />
      </div>
      
      {(caption || credit) && (
        <figcaption className="text-sm sm:text-base text-gray-600 leading-relaxed px-1">
          {caption && (
            <p className="mb-1 font-[family-name:var(--font-manrope)]">{caption}</p>
          )}
          {credit && (
            <p className="text-xs sm:text-sm text-gray-500 italic">
              {credit}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption;
