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
        <TitleText
          text={
            language === "en"
              ? "Community Events & Cultural Reflections"
              : "Eventos Comunitarios y Reflexiones Culturales"
          }
        />
        <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-4xl text-center py-6">
          {language === "en" ? (
            <>
              On April 13, 2023, we hosted a vibrant community event,{" "}
              <em>Saboreando el Pasado</em> (Savoring the Past), at the Lewis
              Collaborative Center that explored the rich connections between
              food and memory. Guests enjoyed a delicious catered meal from Mi
              Ranchito while engaging in meaningful conversations about how food
              shapes our personal and cultural identities. The evening offered
              an opportunity to reflect on shared experiences, celebrate local
              flavors, and build community through storytelling.
            </>
          ) : (
            <>
              El 13 de abril del 2023, organizamos un vibrante evento
              comunitario, <em>Saboreando el Pasado</em>, en el Centro
              Colaborativo Lewis que exploró las ricas conexiones entre la
              comida y la memoria. Los asistentes disfrutaron de una comida
              deliciosa de Mi Ranchito mientras participaban en conversaciones
              significativas sobre cómo la comida moldea nuestras identidades
              personales y culturales. La noche ofreció una oportunidad de
              reflexionar sobre experiencias compartidas, celebrar los sabores
              locales, y construir comunidad a través de la narración de
              historias.
            </>
          )}
        </p>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <img
              src="/stp_1.png"
              alt="Event"
              className="w-full h-auto object-cover"
            />
            <img
              src="/stp_2.png"
              alt="Decor"
              className="w-full h-auto object-cover"
            />
            <img
              src="/stp_3.png"
              alt="Guests"
              className="md:col-span-2 w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/stp_flyer.png"
              alt="Saboreando el Pasado Poster"
              className="w-full h-auto object-cover"
            />

            <div>
              <TitleText text="Conversation Questions" />
              <ul className="text-md lg:text-xl xl:text-3xl list-disc list-outside pl-4 space-y-6 text-gray-800 pt-6">
                <li>
                  The act of following recipes can be viewed as an
                  choreographed, embodied practice. Does the preparation of any
                  plate stand out to you as an embodied cultural routine?
                </li>
                <li>
                  Many of us are currently living far from home and family. Have
                  you been able to find a sense of home through food here in St.
                  Louis?
                </li>
                <li>
                  Do you still prepare a dish that you grew up eating that is a
                  reflection of your heritage?
                </li>
                <li>
                  How has the preservation of food traditions impacted the
                  overall preservation of culture in migrant communities?
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <img
              src="/stp_4.png"
              alt="Food Prep"
              className="w-full h-auto object-cover"
            />
            <img
              src="/stp_5.png"
              alt="Group Discussion"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
