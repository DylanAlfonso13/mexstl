"use client";

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { XMarkIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  captionHref?: string;
  credit?: string;
  priority?: boolean;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
  captionHref,
  credit,
  priority = false
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <figure className="w-full space-y-3" role="figure">
        <div
          className="relative w-full aspect-[4/3] bg-black rounded-md overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-zoom-in group"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center"
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
          />
          <div className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ArrowsPointingOutIcon className="w-4 h-4" />
          </div>
        </div>

        {(caption || credit) && (
          <figcaption className="text-sm sm:text-base text-gray-600 leading-relaxed px-1">
            {caption && (
              <p className="mb-1 font-[family-name:var(--font-manrope)]">
                {captionHref ? (
                  <a
                    href={captionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 italic hover:text-gray-700 transition-colors duration-200"
                  >
                    {caption}
                  </a>
                ) : caption}
              </p>
            )}
            {credit && (
              <p className="text-xs sm:text-sm text-gray-500 italic">{credit}</p>
            )}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {lightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          {(caption || credit) && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded-md text-center max-w-xl">
              {caption && <p>{caption}</p>}
              {credit && <p className="text-gray-400 italic text-xs mt-1">{credit}</p>}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default ImageWithCaption;

