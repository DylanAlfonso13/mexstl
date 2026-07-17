"use client";

import Nav from "@/components/Nav";
import ScrollytellingMap from "@/components/ScrollytellingMap";
import { useLanguage } from "@/context/LanguageContext";
import { storyChapters } from "@/data/storyChapters";

export default function StoryMapPage() {
  const { language } = useLanguage();

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm">
        <Nav />
      </div>
      
      <ScrollytellingMap chapters={storyChapters} language={language} />
    </div>
  );
}
