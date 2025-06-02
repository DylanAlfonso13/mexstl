"use client";

import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";
export default function Home() {
  const { language } = useLanguage();
  return (
    <div>
      <div
        className="relative w-full min-h-[120vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MEXSTL_green_image.png')" }}
      >
        <Nav />
        <HeroSection />
      </div>
      <section id="map">
        <iframe
          width="100%"
          height="1000px"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin"
          src={
            language === "en"
              ? "https://storymaps.arcgis.com/stories/05acb66411224a4d87b8fc1efd584868"
              : "https://storymaps.arcgis.com/stories/0c1f494986ff44caa638a37485d9a84f"
          }
        />
      </section>
    </div>
  );
}
