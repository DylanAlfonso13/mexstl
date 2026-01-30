"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import UpcomingEvent from "@/components/UpcomingEvent";
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
              ? "Upcoming Events"
              : "Próximos Eventos"
          }
        />

        {/* Mexican American Exhibit */}
        <UpcomingEvent
          language={language}
          titleEn="Mexican American Pop-Up Collection"
          titleEs="Colección Emergente Mexicoamericana"
          dateEn="Friday, January 30, 2026 from 12:00 PM - 5:00 PM"
          dateEs="Viernes, 30 de enero de 2026 de 12:00 PM - 5:00 PM"
          locationEn="225 S Skinker Blvd, St. Louis, MO 63105"
          locationEs="225 S Skinker Blvd, St. Louis, MO 63105"
          descriptionEn={
            <>
              St. Louis has a prominent Mexican American community and a rich history dating back to the early 1800s. 
              This exhibit recognizes the deep-rooted Mexican presence in St. Louis and acknowledges the city&apos;s role 
              in a larger historical narrative of mexicanos in the United States.
            </>
          }
          descriptionEs={
            <>
              St. Louis tiene una prominente comunidad mexicoamericana y una rica historia que se remonta a principios 
              del siglo XIX. Esta exhibición reconoce la presencia mexicana profundamente arraigada en St. Louis y 
              reconoce el papel de la ciudad en una narrativa histórica más amplia de mexicanos en los Estados Unidos.
            </>
          }
          registerUrl="https://www.facebook.com/events/1916072968982801/1916072985649466/?ref_source=NEWS_FEED"
        />

        {/* Saturday Speaker Series - Upcoming Event */}
        <UpcomingEvent
          language={language}
          titleEn="Saturday Speaker Series"
          titleEs="Serie de Oradores del Sábado"
          dateEn="Saturday, January 31, 2026 at 9:30 AM"
          dateEs="Sábado, 31 de enero de 2026 a las 9:30 AM"
          locationEn="225 S Skinker Blvd, St. Louis, MO 63105"
          locationEs="225 S Skinker Blvd, St. Louis, MO 63105"
          admissionEn="Free Admission"
          admissionEs="Entrada Gratuita"
          descriptionEn={
            <>
              Join Washington University history student and
              MexStl.org researcher <strong>Francisco Pérez</strong> as he
              explores the life and legacy of <strong>Ricardo Flores Magón</strong>,
              a Mexican anarchist, journalist, and revolutionary who fled
              dictatorship and found refuge in the Midwest.
            </>
          }
          descriptionEs={
            <>
              Únase al estudiante de historia de Washington
              University e investigador de MexStl.org{" "}
              <strong>Francisco Pérez</strong> mientras explora la vida y el
              legado de <strong>Ricardo Flores Magón</strong>, un anarquista,
              periodista y revolucionario mexicano que huía de la dictadura y
              encontró refugio en el Medio Oeste.
            </>
          }
          registerUrl="https://mohistory.org/events/saturday-speaker-01-31-2026"
          imageUrl="/saturday-speaker-series.png"
          imageAlt="Saturday Speaker Series Flyer"
        />

        <TitleText
          text={
            language === "en"
              ? "Past Community Events & Cultural Reflections"
              : "Eventos Comunitarios y Reflexiones Culturales Pasados"
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
            <Image
              src="/stp_1.png"
              alt="Event"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/stp_2.png"
              alt="Decor"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/stp_3.png"
              alt="Guests"
              width={1600}
              height={600}
              className="md:col-span-2 w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/stp_flyer.png"
              alt="Saboreando el Pasado Poster"
              width={800}
              height={1000}
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
            <Image
              src="/stp_4.png"
              alt="Food Prep"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/stp_5.png"
              alt="Group Discussion"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div> 
    </div>
  );
}
