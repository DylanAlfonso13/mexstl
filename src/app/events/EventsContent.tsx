"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import PastEvent from "@/components/PastEvent";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsContent() {
  const { language } = useLanguage();
  return (
    <main>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText
          text={
            language === "en"
              ? "Upcoming Events"
              : "Próximos Eventos"
          }
        />

        {/* Empty State for Upcoming Events */}
        <div className="max-w-4xl w-full my-8 text-center">
          <p className="text-lg sm:text-xl text-gray-600 py-8">
            {language === "en"
              ? "No upcoming events at this time. Check back soon for future events!"
              : "No hay eventos próximos en este momento. ¡Vuelva pronto para eventos futuros!"}
          </p>
        </div>

        <TitleText
          text={
            language === "en"
              ? "Past Community Events & Cultural Reflections"
              : "Eventos Comunitarios y Reflexiones Culturales Pasados"
          }
          as="h2"
        />

        {/* Saturday Speaker Series - Past Event */}
        <PastEvent
          language={language}
          slug="saturday-speaker-series"
          titleEn="Saturday Speaker Series at the MHO"
          titleEs="Serie de Oradores del Sábado en el MHO"
          dateEn="January 31, 2026"
          dateEs="31 de enero de 2026"
          images={[
            { src: "/saturday-speaker-series/main_presentation.jpg", alt: "Francisco Pérez presenting on Ricardo Flores Magón" },
            { src: "/saturday-speaker-series/archives.jpg", alt: "Primary-source archives explored during the event" },
            { src: "/saturday-speaker-series/angled-behind-presentation.jpg", alt: "Audience view of the Saturday Speaker Series presentation" },
            { src: "/saturday-speaker-series/side-presentation.jpg", alt: "Side view of the speaker series presentation" },
            { src: "/saturday-speaker-series/group-photo.jpg", alt: "Group photo of Saturday Speaker Series attendees" },
          ]}
          locationEn={
            <>
              Missouri Historical Society Library and Research Center
              <br />
              225 S Skinker Blvd, St. Louis, MO 63105
            </>
          }
          locationEs={
            <>
              Missouri Historical Society Library and Research Center
              <br />
              225 S Skinker Blvd, St. Louis, MO 63105
            </>
          }
          descriptionEn={
            <>
              Join Washington University history student and
              MexStl.org researcher, <strong>Francisco Pérez</strong>, as he
              explores the life and legacy of <strong>Ricardo Flores Magón</strong>,
              a Mexican anarchist, journalist, and revolutionary who fled
              dictatorship and found refuge in the Midwest.
            </>
          }
          descriptionEs={
            <>
              Únase al estudiante de historia de Washington University e
              investigador de MexStl.org, <strong>Francisco Pérez</strong>,
              mientras explora la vida y el legado de{" "}
              <strong>Ricardo Flores Magón</strong>, un anarquista, periodista y
              revolucionario mexicano que huía de la dictadura y encontró
              refugio en el Medio Oeste.
            </>
          }
        />

        {/* Mexican American Exhibit - Past Event */}
        <PastEvent
          language={language}
          slug="mexican-american-exhibit"
          titleEn="Mexican American Pop-Up Exhibit at the MHO"
          titleEs="Exhibición Emergente Mexicoamericana en el MHO"
          dateEn="January 30 - February 28, 2026"
          dateEs="30 de enero al 28 de febrero de 2026"
          images={[
            { src: "/mexican-american-exhibit/pop-up-sign.jpg", alt: "Mexican American Pop-Up Exhibit sign" },
            { src: "/mexican-american-exhibit/person-observing.jpg", alt: "Visitor observing the Mexican American exhibit" },
            { src: "/mexican-american-exhibit/flipping-page.jpg", alt: "Attendee exploring exhibit materials" },
            { src: "/mexican-american-exhibit/regeneracion.jpg", alt: "Regeneración display at the exhibit" },
            { src: "/mexican-american-exhibit/mercantile-exchange.jpg", alt: "Mercantile exchange historical display" },
          ]}
          locationEn={
            <>
              Missouri Historical Society Library and Research Center
              <br />
              225 S Skinker Blvd, St. Louis, MO 63105
            </>
          }
          locationEs={
            <>
              Missouri Historical Society Library and Research Center
              <br />
              225 S Skinker Blvd, St. Louis, MO 63105
            </>
          }
          descriptionEn={
            <>
              St. Louis has a prominent Mexican American community and a rich
              history dating back to the early 1800s. This bilingual exhibit
              recognizes the deep-rooted Mexican presence in St. Louis and
              acknowledges the city&apos;s role in a larger historical narrative
              of mexicanos in the United States.
            </>
          }
          descriptionEs={
            <>
              St. Louis tiene una prominente comunidad mexicoamericana y una
              rica historia que se remonta a principios del siglo XIX. Esta
              exhibición bilingüe reconoce la presencia mexicana profundamente
              arraigada en St. Louis y reconoce el papel de la ciudad en una
              narrativa histórica más amplia de mexicanos en los Estados Unidos.
            </>
          }
        />

        {/* Saboreando el Pasado - Past Event */}
        <PastEvent
          language={language}
          slug="saboreando-el-pasado"
          titleEn="Savoring the Past  |  Saboreando el Pasado"
          titleEs="Saboreando el Pasado  |  Savoring the Past"
          dateEn="April 13, 2023"
          dateEs="13 de abril de 2023"
          images={[
            { src: "/stp_1.png", alt: "Saboreando el Pasado community event at Lewis Collaborative Center" },
            { src: "/stp_2.png", alt: "Table decorations at Saboreando el Pasado event" },
            { src: "/stp_3.png", alt: "Guests gathered at Saboreando el Pasado community dinner" },
            { src: "/stp_flyer.png", alt: "Saboreando el Pasado event poster and flyer" },
            { src: "/stp_4.png", alt: "Food preparation at Saboreando el Pasado" },
            { src: "/stp_5.png", alt: "Group discussion at Saboreando el Pasado" },
          ]}
          locationEn={
            <>
              Lewis Collaborative Center
              <br />
              725 Kingsland Ave, St. Louis, MO 63130
            </>
          }
          locationEs={
            <>
              Lewis Collaborative Center
              <br />
              725 Kingsland Ave, St. Louis, MO 63130
            </>
          }
          descriptionEn={
            <>
              We hosted a vibrant community event, <em>Saboreando el Pasado</em>{" "}
              (Savoring the Past), at the Lewis Collaborative Center that
              explored the rich connections between food and memory. Guests
              enjoyed a delicious catered meal from Mi Ranchito while engaging
              in meaningful conversations about how food shapes our personal and
              cultural identities.
            </>
          }
          descriptionEs={
            <>
              Organizamos un vibrante evento comunitario,{" "}
              <em>Saboreando el Pasado</em>, en el Centro Colaborativo Lewis que
              exploró las ricas conexiones entre la comida y la memoria. Los
              asistentes disfrutaron de una comida deliciosa de Mi Ranchito
              mientras participaban en conversaciones significativas sobre cómo
              la comida moldea nuestras identidades personales y culturales.
            </>
          }
        />
      </div>
    </main>
  );
}
