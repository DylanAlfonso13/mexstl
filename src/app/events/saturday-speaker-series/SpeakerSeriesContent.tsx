"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function SpeakerSeriesContent() {
  const { language } = useLanguage();

  return (
    <main>
      <Nav />
      <article className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText
          text={
            language === "en"
              ? "Saturday Speaker Series"
              : "Serie de Oradores del Sábado"
          }
        />

        <div className="max-w-4xl w-full my-8">
          <div className="text-lg sm:text-xl mb-4">
            <p className="font-semibold">
              {language === "en"
                ? "Saturday, January 31, 2026 at 9:30 AM"
                : "Sábado, 31 de enero de 2026 a las 9:30 AM"}
            </p>
            <p className="text-gray-700">
              225 S Skinker Blvd, St. Louis, MO 63105
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            {language === "en" ? (
              <>
                Join Washington University history student and MexStl.org
                researcher <strong>Francisco Pérez</strong> as he explores
                the life and legacy of{" "}
                <strong>Ricardo Flores Magón</strong>, a Mexican anarchist,
                journalist, and revolutionary who fled dictatorship and found
                refuge in the Midwest.
              </>
            ) : (
              <>
                Únase al estudiante de historia de Washington University e
                investigador de MexStl.org{" "}
                <strong>Francisco Pérez</strong> mientras explora la vida y
                el legado de <strong>Ricardo Flores Magón</strong>, un
                anarquista, periodista y revolucionario mexicano que huía de
                la dictadura y encontró refugio en el Medio Oeste.
              </>
            )}
          </p>
          <div className="mt-6">
            <Image
              src="/saturday-speaker-series.png"
              alt="Saturday Speaker Series Flyer — Ricardo Flores Magón talk at Missouri Historical Society"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
