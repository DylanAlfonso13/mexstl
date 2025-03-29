"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function Media() {
  const { language } = useLanguage();
  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText text={language === "en" ? "Coming soon" : "Próximamente"} />
      </div>
    </div>
  );
}
