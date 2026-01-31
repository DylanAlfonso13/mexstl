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

        {/* NPR Audio Feature */}
        <SpotlightCard
          title={
            language === "en"
              ? "How a St. Louis-based newspaper helped ignite the spark that led to the Mexican Revolution"
              : "Cómo un periódico con sede en St. Louis ayudó a encender la chispa que llevó a la Revolución Mexicana"
          }
          description={
            language === "en"
              ? "In 1905, Mexican journalist Ricardo Flores Magón escaped the Porfiriato dictatorship and settled in St. Louis, where he launched the newspaper Regeneración. With 20,000 readers throughout Mexico and the U.S., the leftist publication raised awareness of growing wealth inequality, labor exploitation and political corruption in both countries. Historian Francisco Perez shares how Flores Magón connected the struggles of the American working class with that of the Mexican working class, how St. Louis' labor movement shaped Flores Magón's worldview, and why, more than a century later, the activist's politics still resonate."
              : "En 1905, el periodista mexicano Ricardo Flores Magón escapó de la dictadura del Porfiriato y se estableció en St. Louis, donde lanzó el periódico Regeneración. Con 20,000 lectores en México y los EE. UU., la publicación de izquierda creó conciencia sobre la creciente desigualdad de riqueza, la explotación laboral y la corrupción política en ambos países. El historiador Francisco Perez comparte cómo Flores Magón conectó las luchas de la clase trabajadora estadounidense con las de la clase trabajadora mexicana, cómo el movimiento laboral de St. Louis moldeó la cosmovisión de Flores Magón, y por qué, más de un siglo después, la política del activista aún resuena."
          }
          iframeSrc="https://www.npr.org/player/embed/fis-381444658-8414b3d5985635ae4291169f4093181c/fis-381444658-8414b3d5985635ae4291169f4093181c-enclosure-audio"
          iframeTitle="NPR embedded audio player"
          articleUrl="https://www.npr.org/"
        />

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
          imageSrc="/reparative-memory.png"
          articleUrl="https://www.kbia.org/missouri-news/2023-04-27/public-humanities-lab-takes-on-reparative-memory-to-uncover-the-legacy-of-slavery-in-missouri"
        />
      </div>
    </div>
  );
}
