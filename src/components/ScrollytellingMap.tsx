"use client";

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
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

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
  
  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: chapters[0].center,
      zoom: chapters[0].zoom,
      pitch: chapters[0].pitch || 0,
      bearing: chapters[0].bearing || 0
    });

    mapRef.current = map;

    return () => {
      map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Map Background */}
      <div 
        ref={mapContainerRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Scrollable Story Sections - Absolute Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-y-auto overflow-x-hidden">
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
