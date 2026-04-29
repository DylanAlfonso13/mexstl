"use client";
import TitleText from "./TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  return (
    <section className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
      <TitleText
        text={
          language === "en"
            ? `Mexican History in St. Louis`
            : `Historia Mexicana en St. Louis`
        }
      />
      <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-4xl text-center py-6">
        {language === "en"
          ? `MexStl is a grassroots project that engages with collective memory in
        St. Louis. In a city with a prominent Mexican American community, we
        invite the public to explore this rich history that dates back to the
        early 1800s. Through an interactive map, we strive to recognize the
        deep-rooted Mexican presence in St. Louis and acknowledge the city’s
        role in a larger historical narrative of mexicanos in the United States.`
          : `MexStl es un proyecto comunitario que atrae la memoria colectiva en St. Louis. 
        St. Louis es el hogar de una comunidad prominente de mexicanos americanos. Por eso, invitamos al público
        a explorar esta historia rica que se remonta al principio del siglo diecinueve. A través de un mapa interactivo, 
        nos esforzamos en reconocer la arraigada presencia mexicana en St. Louis y también notar el papel de la ciudad 
        en la narrativa histórica de mexicanos en los Estados Unidos.`}
      </p>
    </section>
  );
}
