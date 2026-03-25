"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { XMarkIcon } from '@heroicons/react/24/outline';
import StorySection from './StorySection';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ImageData {
  src: string;
  caption: {
    en: string;
    es: string;
  };
  credit?: string;
}

interface Chapter {
  id: string;
  era?: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  center: [number, number];
  zoom: number;
  pitch?: number;
  bearing?: number;
  image?: string;
  images?: ImageData[];
  sources?: {
    en: string[];
    es: string[];
  };
}

interface ScrollytellingMapProps {
  chapters: Chapter[];
  language: 'en' | 'es';
}

const ScrollytellingMap: React.FC<ScrollytellingMapProps> = ({ chapters, language }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
  
  // Initialize map with interactions disabled
  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: chapters[0].center,
      zoom: chapters[0].zoom,
      pitch: chapters[0].pitch || 0,
      bearing: chapters[0].bearing || 0,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      doubleClickZoom: false,
      touchZoomRotate: false
    });

    mapRef.current = map;

    return () => {
      map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Handle escape key to exit map interaction mode
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMapInteractive) {
        exitMapMode();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMapInteractive]);

  const activateMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollZoom.enable();
      mapRef.current.dragPan.enable();
      mapRef.current.dragRotate.enable();
      mapRef.current.doubleClickZoom.enable();
      mapRef.current.touchZoomRotate.enable();
      setIsMapInteractive(true);
    }
  };

  const exitMapMode = () => {
    if (mapRef.current) {
      mapRef.current.scrollZoom.disable();
      mapRef.current.dragPan.disable();
      mapRef.current.dragRotate.disable();
      mapRef.current.doubleClickZoom.disable();
      mapRef.current.touchZoomRotate.disable();
      setIsMapInteractive(false);
    }
  };

  const flyToChapter = (chapter: Chapter) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: chapter.center,
        zoom: chapter.zoom,
        pitch: chapter.pitch || 0,
        bearing: chapter.bearing || 0,
        duration: 2000,
        essential: true
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" role="region" aria-label="Interactive story map">
      {/* Fixed Map Background */}
      <div 
        ref={mapContainerRef}
        onClick={!isMapInteractive ? activateMap : undefined}
        className={`absolute top-0 left-0 w-full h-full z-0 ${
          !isMapInteractive ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'
        }`}
        role={!isMapInteractive ? "button" : undefined}
        aria-label={!isMapInteractive ? "Click to explore map" : undefined}
        tabIndex={!isMapInteractive ? 0 : -1}
        onKeyDown={!isMapInteractive ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activateMap();
          }
        } : undefined}
      />

      {/* Map Interaction Hint - Only show when not interactive */}
      {!isMapInteractive && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-black/70 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm shadow-lg">
            Click map to explore
          </div>
        </div>
      )}

      {/* Back to Story Button - Only show when map is interactive */}
      {isMapInteractive && (
        <button
          onClick={exitMapMode}
          className="absolute top-20 sm:top-24 right-4 sm:right-6 z-30 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-800 font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-xl flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mexRed focus:ring-offset-2 hover:shadow-2xl"
          aria-label="Exit map exploration and return to story"
        >
          <XMarkIcon className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline">Back to Story</span>
          <span className="sm:hidden">Back</span>
        </button>
      )}

      {/* Scrollable Story Sections - Hidden when map is interactive */}
      <div 
        className={`absolute top-0 left-0 w-full h-full z-10 overflow-y-auto overflow-x-hidden transition-opacity duration-300 pointer-events-none scroll-smooth ${
          isMapInteractive ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden={isMapInteractive}
      >
        {chapters.map((chapter, index) => (
          <StorySection
            key={chapter.id}
            era={chapter.era}
            title={chapter.title[language]}
            description={chapter.description[language]}
            image={chapter.image}
            images={chapter.images}
            language={language}
            isFirst={index === 0}
            isLast={index === chapters.length - 1}
            isMapInteractive={isMapInteractive}
            onEnterView={() => {
              flyToChapter(chapter);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollytellingMap;
