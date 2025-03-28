"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Media() {
  const { language } = useLanguage();
  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText text="Media" />
        <div className="mt-10"></div>
        <SpotlightCard
          title={
            language === "en"
              ? "Public Humanities Lab Takes on Reparative Memory"
              : "Laboratorio de Humanidades Públicas se Enfoca en la Memoria Reparativa"
          }
          description={
            language === "en"
              ? "Explore the article and podcast that mentions our work with the memory for the future lab at WashU."
              : "Explora el artículo y el podcast que menciona nuestro trabajo con el laboratorio de memoria para el futuro en WashU."
          }
          imageSrc="/reparative-memory.png" // Change this to a real image URL
          articleUrl="https://www.kbia.org/missouri-news/2023-04-27/public-humanities-lab-takes-on-reparative-memory-to-uncover-the-legacy-of-slavery-in-missouri"
        />
      </div>
    </div>
  );
}
