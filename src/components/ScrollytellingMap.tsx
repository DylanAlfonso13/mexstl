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
  subtitle?: {
    en?: string;
    es?: string;
  };
  description: {
    en: string;
    es: string;
  };
  center?: [number, number];
  zoom?: number;
  pitch?: number;
  bearing?: number;
  image?: string;
  imageCaption?: string;
  imageCaptionHref?: string;
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
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const labelsRef = useRef<Record<string, HTMLElement>>({});
  const activeChapterIdRef = useRef<string>(chapters[0]?.id ?? '');
  const exitMapModeRef = useRef<(() => void) | null>(null);
  const flyToChapterFnRef = useRef<((chapter: Chapter) => void) | null>(null);
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
  
  // Initialize map with interactions disabled
  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: chapters[0].center ?? [-90.1994, 38.6270],
      zoom: chapters[0].zoom ?? 11,
      pitch: chapters[0].pitch || 0,
      bearing: chapters[0].bearing || 0,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      doubleClickZoom: false,
      touchZoomRotate: false
    });

    mapRef.current = map;

    // Add custom markers with labels for each chapter (skip intro)
    map.on('load', () => {
      chapters
        .filter((chapter) => chapter.id !== 'intro' && chapter.center)
        .forEach((chapter) => {
          // Outer wrapper
          const el = document.createElement('div');
          el.style.cssText = 'display:flex;flex-direction:column;align-items:center;cursor:pointer;';

          // Label pill above the pin
          const label = document.createElement('div');
          label.textContent = chapter.title['en'];
          label.style.cssText = [
            'background:white',
            'color:#1c1917',
            'font-size:11px',
            'font-weight:700',
            'font-family:inherit',
            'letter-spacing:0.02em',
            'padding:3px 8px',
            'border-radius:4px',
            'box-shadow:0 2px 8px rgba(0,0,0,0.28)',
            'margin-bottom:4px',
            'white-space:nowrap',
            'pointer-events:none',
            'user-select:none',
            'border:1px solid rgba(0,0,0,0.08)',
          ].join(';');
          labelsRef.current[chapter.id] = label;

          // Red pin SVG
          const svgNS = 'http://www.w3.org/2000/svg';
          const svg = document.createElementNS(svgNS, 'svg');
          svg.setAttribute('width', '22');
          svg.setAttribute('height', '30');
          svg.setAttribute('viewBox', '0 0 22 30');
          svg.setAttribute('fill', 'none');
          svg.style.cssText = 'pointer-events:none;display:block;';

          const path = document.createElementNS(svgNS, 'path');
          path.setAttribute('d', 'M11 0C5.477 0 1 4.477 1 10c0 7.5 10 20 10 20s10-12.5 10-20C21 4.477 16.523 0 11 0z');
          path.setAttribute('fill', '#C8102E');
          path.setAttribute('stroke', 'white');
          path.setAttribute('stroke-width', '1.5');

          const circle = document.createElementNS(svgNS, 'circle');
          circle.setAttribute('cx', '11');
          circle.setAttribute('cy', '10');
          circle.setAttribute('r', '3.5');
          circle.setAttribute('fill', 'white');

          svg.appendChild(path);
          svg.appendChild(circle);
          el.appendChild(label);
          el.appendChild(svg);

          el.addEventListener('click', (e) => {
            e.stopPropagation();
            exitMapModeRef.current?.();
            flyToChapterFnRef.current?.(chapter);
            document
              .getElementById(`chapter-${chapter.id}`)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat(chapter.center!)
            .addTo(map);
          markersRef.current.push(marker);
        });
    });

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Update marker label text when language changes
  useEffect(() => {
    chapters.forEach((chapter) => {
      const labelEl = labelsRef.current[chapter.id];
      if (labelEl) {
        labelEl.textContent = chapter.title[language];
      }
    });
  }, [language, chapters]);

  // Handle escape key to exit map interaction mode
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMapInteractive) {
        exitMapMode();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMapInteractive]);

  const activateMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollZoom.enable();
      mapRef.current.dragPan.enable();
      mapRef.current.dragRotate.enable();
      mapRef.current.doubleClickZoom.enable();
      mapRef.current.touchZoomRotate.enable();
      mapRef.current.easeTo({ pitch: 0, bearing: 0, duration: 800 });
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
    if (mapRef.current && chapter.center) {
      const SLOW_ID = 'santa-fe-trail';
      const involvesSantaFe = chapter.id === SLOW_ID || activeChapterIdRef.current === SLOW_ID;
      const duration = involvesSantaFe ? 5000 : 2000;
      activeChapterIdRef.current = chapter.id;
      mapRef.current.flyTo({
        center: chapter.center,
        zoom: chapter.zoom ?? 16,
        pitch: chapter.pitch || 0,
        bearing: chapter.bearing || 0,
        duration,
        essential: true
      });
    }
  };

  // Keep refs current so Mapbox event handlers always call the latest versions
  exitMapModeRef.current = exitMapMode;
  flyToChapterFnRef.current = flyToChapter;

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
          <div key={chapter.id} id={`chapter-${chapter.id}`}>
            <StorySection
              era={chapter.era}
              title={chapter.title[language]}
              subtitle={chapter.subtitle?.[language]}
              description={chapter.description[language]}
              image={chapter.image}
              imageCaption={chapter.imageCaption}
              imageCaptionHref={chapter.imageCaptionHref}
              images={chapter.images}
              language={language}
              isFirst={index === 0}
              isLast={index === chapters.length - 1}
              isMapInteractive={isMapInteractive}
              onEnterView={() => {
                if (!isMapInteractive) flyToChapter(chapter);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollytellingMap;
