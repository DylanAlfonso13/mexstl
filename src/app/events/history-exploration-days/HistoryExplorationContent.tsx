"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function HistoryExplorationContent() {
  const { language } = useLanguage();

  return (
    <main>
      <Nav />
      <article className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText
          text={
            language === "en"
              ? "History Exploration Days: Celebrating Hispanic Heritage Month"
              : "History Exploration Days: Celebrando el Mes de la Herencia Hispana"
          }
        />

        <div className="max-w-4xl w-full my-8 text-center">
          <p className="text-lg sm:text-xl font-semibold mb-1">
            {language === "en"
              ? "Friday, October 9, 2026 from 10:00 AM - 1:00 PM"
              : "Viernes, 9 de octubre de 2026 de 10:00 AM a 1:00 PM"}
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Missouri History Museum
            <br />
            5700 Lindell Blvd, St. Louis, MO 63112
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            {language === "en" ? (
              <>
                This Hispanic Heritage Month program at the Missouri History
                Museum explored the histories and cultural contributions of
                Hispanic and Latino communities in St. Louis and beyond through
                stories of immigration, identity, and community. Visitors
                explored how culture and community are expressed through games,
                food, music, art and language, discovered connections between
                St. Louis and Latin America through trade, immigration, and
                baseball, used artifacts and other historical sources, and
                created art inspired by Spanish and Latin American artists.
              </>
            ) : (
              <>
                Este programa del Mes de la Herencia Hispana en el Missouri
                History Museum exploró las historias y contribuciones
                culturales de las comunidades hispanas y latinas en St. Louis y
                más allá a través de historias de inmigración, identidad y
                comunidad. Los visitantes exploraron cómo se expresan la
                cultura y la comunidad a través de juegos, comida, música, arte
                e idioma, descubrieron las conexiones entre St. Louis y América
                Latina a través del comercio, la inmigración y el béisbol,
                usaron artefactos y otras fuentes históricas, y crearon arte
                inspirado en artistas españoles y latinoamericanos.
              </>
            )}
          </p>
          <a
            href="https://mohistory.org/events/heritage-month"
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
