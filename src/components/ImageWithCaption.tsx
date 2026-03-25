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
    <figure className="w-full space-y-3">
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      
      {(caption || credit) && (
        <figcaption className="text-sm text-gray-600 leading-relaxed">
          {caption && (
            <p className="mb-1">{caption}</p>
          )}
          {credit && (
            <p className="text-xs text-gray-500 italic">
              {credit}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption;
