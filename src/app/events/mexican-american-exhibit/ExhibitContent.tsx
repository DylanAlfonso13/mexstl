"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import { useLanguage } from "@/context/LanguageContext";

export default function MexicanAmericanExhibitContent() {
  const { language } = useLanguage();

  return (
    <main>
      <Nav />
      <article className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText
          text={
            language === "en"
              ? "Mexican American Pop-Up Exhibit at the MHO"
              : "Exhibición Emergente Mexicoamericana en el MHO"
          }
        />

        <div className="max-w-4xl w-full my-8 text-center">
          <p className="text-base sm:text-lg md:text-xl mb-4">
            {language === "en" ? (
              <>
                We partnered with the Missouri Historical
                Society to present a bilingual pop-up exhibit celebrating the
                deep-rooted Mexican American presence in St. Louis. Through
                photographs, documents, and community stories, the exhibit
                highlighted a rich history dating back to the early 1800s and
                invited visitors to reflect on the enduring contributions of
                mexicanos to the cultural fabric of the city and the broader
                United States.
              </>
            ) : (
              <>
                Nos asociamos con la Sociedad Histórica
                de Missouri para presentar una exhibición emergente bilingüe
                que celebra la presencia mexicoamericana profundamente
                arraigada en St. Louis. A través de fotografías, documentos e
                historias comunitarias, la exhibición destacó una rica
                historia que se remonta a principios del siglo XIX e invitó a
                los visitantes a reflexionar sobre las contribuciones
                duraderas de los mexicanos al tejido cultural de la ciudad y
                de los Estados Unidos en general.
              </>
            )}
          </p>
          <div className="mt-6">
            <a
              href="https://www.facebook.com/events/1916072968982801/1916072985649466/?ref_source=NEWS_FEED"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006341] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {language === "en" ? "Event Page" : "Página del Evento"}
            </a>
          </div>
        </div>

        {/* Event Images Grid */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image
              src="/mexican-american-exhibit/pop-up-sign.jpg"
              alt="Mexican American Pop-Up Exhibit sign"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/mexican-american-exhibit/person-observing.jpg"
              alt="Visitor observing the Mexican American exhibit"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/mexican-american-exhibit/flipping-page.jpg"
              alt="Attendee exploring exhibit materials"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/mexican-american-exhibit/regeneracion.jpg"
              alt="Regeneración display at the exhibit"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/mexican-american-exhibit/mercantile-exchange.jpg"
              alt="Mercantile exchange historical display"
              width={1600}
              height={600}
              className="md:col-span-2 w-full h-auto object-cover"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
