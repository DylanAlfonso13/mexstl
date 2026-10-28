"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function ThursdayNightsContent() {
  const { language } = useLanguage();

  return (
    <main>
      <Nav />
      <article className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText
          text={
            language === "en"
              ? "Thursday Nights at the Museum: Nuestra Comunidad, Nuestras Historias"
              : "Thursday Nights at the Museum: Nuestra Comunidad, Nuestras Historias"
          }
        />

        <div className="max-w-4xl w-full my-8 text-center">
          <p className="text-lg sm:text-xl font-semibold mb-1">
            {language === "en"
              ? "Thursday, October 8, 2026 from 5:00 PM - 8:30 PM"
              : "Jueves, 8 de octubre de 2026 de 5:00 a 8:30 PM"}
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Missouri History Museum
            <br />
            5700 Lindell Blvd, St. Louis, MO 63112
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            {language === "en" ? (
              <>
                Hispanic Heritage Month at the Missouri History Museum
                featured an evening of powerful storytelling honoring the
                experiences, traditions, and voices that continue to shape St.
                Louis. Hosted by storytelling facilitator Adam Flores, local
                St. Louisans Eric Acevedo, Catherine Baez, Stephanie Calero,
                and Luis Torres shared their personal stories. The evening
                also highlighted the Missouri Historical Society&apos;s
                Migration and Memory Initiative, which preserves the stories
                of people who have come from around the globe and made St.
                Louis their home, with cultural resource tables, performances
                by Folkloric Group Colombia and Alma de Mexico, and food and
                drinks from Hispanic vendors.
              </>
            ) : (
              <>
                El Mes de la Herencia Hispana en el Missouri History Museum
                presentó una noche de poderosas historias que honran las
                experiencias, tradiciones y voces que siguen dando forma a
                St. Louis. Con la facilitación de Adam Flores, los residentes
                de St. Louis Eric Acevedo, Catherine Baez, Stephanie Calero y
                Luis Torres compartieron sus historias personales. La noche
                también destacó la Iniciativa de Migración y Memoria del
                Missouri Historical Society, que preserva las historias de
                personas que han llegado de todo el mundo y han hecho de St.
                Louis su hogar, con mesas de recursos culturales,
                presentaciones de Folkloric Group Colombia y Alma de Mexico, y
                comida y bebidas de vendedores hispanos.
              </>
            )}
          </p>
          <a
            href="https://mohistory.org/events/hispanic-heritage-month"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#006341] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {language === "en"
              ? "Event page at mohistory.org →"
              : "Página del evento en mohistory.org →"}
          </a>
        </div>
      </article>
    </main>
  );
}
