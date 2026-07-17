"use client";

import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";

export default function HomeContent() {
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
