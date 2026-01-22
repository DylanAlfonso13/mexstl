"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useInView } from 'react-intersection-observer';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Chapter {
  id: string;
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
}

interface ScrollytellingMapProps {
  chapters: Chapter[];
  language: 'en' | 'es';
}

const ScrollytellingMap: React.FC<ScrollytellingMapProps> = ({ chapters, language }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
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
    <div className="relative w-full h-screen">
      {/* Fixed Map */}
      <div 
        ref={mapContainerRef}
        className="fixed top-0 left-0 w-full h-screen z-0"
      />

      {/* Scrollable Story Panels */}
      <div className="relative pointer-events-none z-10">
        <div className="w-full md:w-1/2 lg:w-2/5 pointer-events-auto">
          {chapters.map((chapter, index) => (
            <ChapterPanel
              key={chapter.id}
              chapter={chapter}
              language={language}
              isFirst={index === 0}
              isLast={index === chapters.length - 1}
              onEnterView={() => {
                setActiveChapterIndex(index);
                flyToChapter(chapter);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ChapterPanelProps {
  chapter: Chapter;
  language: 'en' | 'es';
  isFirst: boolean;
  isLast: boolean;
  onEnterView: () => void;
}

const ChapterPanel: React.FC<ChapterPanelProps> = ({
  chapter,
  language,
  isFirst,
  isLast,
  onEnterView
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the panel is visible
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onEnterView();
    }
  }, [inView, onEnterView]);

  return (
    <div
      ref={ref}
      className={`
        min-h-screen flex items-center
        ${isFirst ? 'pt-20' : ''}
        ${isLast ? 'pb-20' : ''}
      `}
    >
      <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 m-6 rounded-lg shadow-2xl max-w-lg transition-all duration-500">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          {chapter.title[language]}
        </h2>
        
        {chapter.image && (
          <div className="mb-6">
            <img 
              src={chapter.image} 
              alt={chapter.title[language]}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        
        <p className="text-lg text-gray-700 leading-relaxed">
          {chapter.description[language]}
        </p>
      </div>
    </div>
  );
};

export default ScrollytellingMap;
