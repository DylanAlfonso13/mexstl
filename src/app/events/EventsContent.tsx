"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import PastEvent from "@/components/PastEvent";
import UpcomingEvent from "@/components/UpcomingEvent";
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

        {/* Nuestra Comunidad, Nuestras Historias - Upcoming Event */}
        <UpcomingEvent
          language={language}
          titleEn="Thursday Nights at the Museum: Nuestra Comunidad, Nuestras Historias (Our Community, Our Stories)"
          titleEs="Thursday Nights at the Museum: Nuestra Comunidad, Nuestras Historias"
          dateEn="Thursday, October 8, 2026 from 5:00 PM - 8:30 PM"
          dateEs="Jueves, 8 de octubre de 2026 de 5:00 a 8:30 PM"
          locationEn={
            <>
              Missouri History Museum
              <br />
              5700 Lindell Blvd, St. Louis, MO 63112
            </>
          }
          locationEs={
            <>
              Missouri History Museum
              <br />
              5700 Lindell Blvd, St. Louis, MO 63112
            </>
          }
          descriptionEn={
            <>
              Step into the heart of Hispanic Heritage Month with an evening of
              powerful storytelling that honors the experience, traditions, and
              voices that continue to shape St. Louis. Hosted by storytelling
              facilitator Adam Flores, local St. Louisans Eric Acevedo,
              Catherine Baez, Stephanie Calero, and Luis Torres will share their
              personal stories in a way that promises to stir emotions, spark
              laughter, and invite moments of reflection and connection.
              Discover how the Missouri Historical Society’s Migration and
              Memory Initiative is working to preserve the stories of people who
              have come from around the globe and made St. Louis their home,
              ensuring these lived experiences become part of our region’s
              history. Before and after the storytelling program, explore
              cultural resource tables, enjoy performances by Folkloric Group
              Colombia and Alma de Mexico, and purchase food and drinks from
              Hispanic vendors.
            </>
          }
          descriptionEs={
            <>
              Adéntrese en el corazón del Mes de la Herencia Hispana con una
              noche de poderosas historias que honran las experiencias,
              tradiciones y voces que siguen dando forma a St. Louis. Con la
              facilitación de Adam Flores, los residentes de St. Louis Eric
              Acevedo, Catherine Baez, Stephanie Calero y Luis Torres
              compartirán sus historias personales de una manera que promete
              conmover, provocar risas e invitar a momentos de reflexión y
              conexión. Descubra cómo la Iniciativa de Migración y Memoria del
              Missouri Historical Society trabaja para preservar las historias
              de personas que han llegado de todo el mundo y han hecho de St.
              Louis su hogar, asegurando que estas experiencias vividas formen
              parte de la historia de nuestra región. Antes y después del
              programa, explore mesas de recursos culturales, disfrute de
              presentaciones de Folkloric Group Colombia y Alma de Mexico, y
              compre comida y bebidas de vendedores hispanos.
            </>
          }
          registerUrl="https://mohistory.org/events/hispanic-heritage-month"
          registerTextEn="Learn More"
          registerTextEs="Más Información"
        />

        {/* Celebrating Hispanic Heritage Month - Upcoming Event */}
        <UpcomingEvent
          language={language}
          titleEn="History Exploration Days: Celebrating Hispanic Heritage Month"
          titleEs="History Exploration Days: Celebrando el Mes de la Herencia Hispana"
          dateEn="Friday, October 9, 2026 from 10:00 AM - 1:00 PM"
          dateEs="Viernes, 9 de octubre de 2026 de 10:00 AM a 1:00 PM"
          locationEn={
            <>
              Missouri History Museum
              <br />
              5700 Lindell Blvd, St. Louis, MO 63112
            </>
          }
          locationEs={
            <>
              Missouri History Museum
              <br />
              5700 Lindell Blvd, St. Louis, MO 63112
            </>
          }
          descriptionEn={
            <>
              Explore the histories and cultural contributions of Hispanic and
              Latino communities in St. Louis and beyond as you learn stories of
              immigration, identity, and community. Explore how culture and
              community are expressed through games, food, music, art and
              language. Discover connections between St. Louis and Latin America
              through trade, immigration, and baseball. Use artifacts and other
              historical sources to explore the stories of Hispanic and Latino
              communities. Create and engage with art inspired by Spanish and
              Latin American artists.
            </>
          }
          descriptionEs={
            <>
              Explore las historias y contribuciones culturales de las
              comunidades hispanas y latinas en St. Louis y más allá mientras
              aprende historias de inmigración, identidad y comunidad. Explore
              cómo la cultura y la comunidad se expresan a través de juegos,
              comida, música, arte e idioma. Descubra las conexiones entre St.
              Louis y América Latina a través del comercio, la inmigración y el
              béisbol. Use artefactos y otras fuentes históricas para explorar
              las historias de las comunidades hispanas y latinas. Cree y
              disfrute de arte inspirado en artistas españoles y
              latinoamericanos.
            </>
          }
          registerUrl="https://mohistory.org/events/heritage-month"
          registerTextEn="Learn More"
          registerTextEs="Más Información"
        />

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
            { src: "/saturday-speaker-series.png", alt: "Flyer for Saturday Speaker Series" },
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
            { src: "/stp_flyer.png", alt: "Saboreando el Pasado event poster and flyer" },
            { src: "/stp_3.jpg", alt: "Guests gathered at Saboreando el Pasado community dinner", coverFit: true },
            { src: "/stp_1.jpg", alt: "Saboreando el Pasado community event at Lewis Collaborative Center", coverFit: true },
            { src: "/stp_4.jpg", alt: "Food preparation at Saboreando el Pasado", coverFit: true },
            { src: "/stp_5.jpg", alt: "Group discussion at Saboreando el Pasado", coverFit: true },
            { src: "/stp_2.jpg", alt: "Table decorations at Saboreando el Pasado event", coverFit: true },
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
