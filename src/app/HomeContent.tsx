"use client";

import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeContent() {
  const { language } = useLanguage();
  return (
    <main>
      <div
        className="relative w-full min-h-[120vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MEXSTL_green_image.png')" }}
      >
        <Nav />
        <HeroSection />
      </div>
    </main>
  );
}
