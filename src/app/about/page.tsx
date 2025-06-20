"use client";
import Nav from "@/components/Nav";
import TitleText from "@/components/TitleText";
import AboutCard from "@/components/Card";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <div>
      <Nav />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <TitleText text={language === "en" ? "About us" : "¿Quiénes somos?"} />
        <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-4xl text-center py-6">
          {language === "en"
            ? `We are a collaboration of partners from local universities, research
          institutions, historical societies, and reparative justice initiatives
          - all with the shared goal of reviving Mexican histories in St. Louis.
          We seek to challenge long-standing American traditions that fail to
          study history in its entirety, which too often disenfranchises Latinx
          narratives from classroom discussions.`
            : `Somos una colaboración de socios de universidades locales, institutos 
            de investigación, sociedades históricas, e iniciativas de la justicia reparativa. 
            Compartimos la meta de establecer reconocimiento sobre las historias mexicanas en 
            St. Louis. Desafiamos las tradiciones prolongadas americanas que no estudian la 
            historia en su totalidad, y demasiado frecuentemente descentran los narrativos 
            latinos de los diálogos en el ambiente académico.`}
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-4xl text-center py-6">
          {language === "en"
            ? `We recognize public memory to be a strong social force that can drive
          progressive change in the way America understands its Latinx
          community, shifting the conversation from fronteras to familiarity. We
          will sustain discourse that addresses the strong Mexican foundations,
          both commercially and infrastructurally, that have contributed to the
          success of this city - because Latino history is St. Louis history. We
          are committed to engaging with the Midwest’s Mexican past, and to
          recognizing its lasting legacies. Here, users may familiarize
          themselves with realities long overlooked, building memory for the
          future.`
            : `Reconocemos la memoria pública como una fuerza. Esta fuerza puede iniciar 
          cambios progresivos en la manera en que los Estados Unidos percibe su comunidad 
          latina, cambiando la conversación de fronteras a familiaridad. Sostendremos discursos 
          que abordan las fundaciones mexicanas, tanto comercialmente e infraestructuralmente, 
          que contribuyeron al éxito de St. Louis. Estamos comprometidos a enfocarnos en el pasado 
          mexicano del Medio Oeste y a reconocer sus legados duraderos. En este sitio, los usuarios 
          pueden familiarizarse con realidades pasadas por alto, construyendo memoria para el futuro.`}
        </p>
        <TitleText
          text={language === "en" ? `Meet the Team` : `Conoce al equipo`}
        />
        <div className="flex flex-row min-w-full justify-evenly flex-wrap mb-12">
          <AboutCard
            name="Jade Pita Nuñez del Prado"
            title={language === "en" ? "Director" : "Directora"}
            additionalTitle={
              language === "en"
                ? "BA in Latin American Studies, Washington University in St. Louis"
                : "BA en Estudios Latinoamericanos, Washington University in St. Louis"
            }
            imageURL="/jade_pita_picture.jpg"
          />
          <AboutCard
            name="Dylan Alfonso"
            title={language === "en" ? "Web Developer" : "Desarrollador Web"}
            additionalTitle={
              language === "en"
                ? "BS in Computer Science, Washington University in St. Louis"
                : "BS en Informática, Washington University in St. Louis"
            }
            imageURL="/dylan_alfonso_picture.jpeg"
            linkedinURL="https://www.linkedin.com/in/dylan-alfonso/"
          />
          <AboutCard
            name="Jonah Zacks"
            title={
              language === "en" ? "Community Outreach" : "Alcance Comunitario"
            }
            additionalTitle={
              language === "en"
                ? "BA in Economics, Washington University in St. Louis"
                : "BA en Economía, Washington University in St. Louis"
            }
            imageURL="/jonah_zacks_picture.jpeg"
            linkedinURL="https://www.linkedin.com/in/jonah-zacks-17930019a/"
          />
          <AboutCard
            name="Carlos Arciniega"
            title={
              language === "en"
                ? "Curriculum Developer"
                : "Desarrollador Curricular"
            }
            additionalTitle={
              language === "en"
                ? "Expected BA in Finance, Washington University in St. Louis"
                : "BA en Finanzas, Washington University in St. Louis"
            }
            imageURL="/carlos_arciniega_picture.jpg"
          />
          <AboutCard
            name="Sara Hernández Angulo"
            title={language === "en" ? "Researcher" : "Investigadora"}
            additionalTitle={
              language === "en"
                ? "PhD Candidate in Hispanic Studies, Washington University in St. Louis"
                : "Candidata a PhD en Estudios Hispánicos, Washington University in St. Louis"
            }
            imageURL="/sarah_hernandez_picture.png"
          />
        </div>
        <TitleText
          text={language === "en" ? `Advisors and Supporters` : `Asesores`}
        />
        <div className="flex flex-row min-w-full justify-evenly flex-wrap mb-12">
          {/* <AboutCard
            name="Daniel Gonzales"
            title="Director of Exhibitions Research at Indiana Historical Society"
            imageURL="/daniel_gonzales_picture.png"
          /> */}
          <AboutCard
            name="Gilberto Pinela"
            title={
              language === "en" ? "Community Outreach Advisor" : "Asesor de Alcance Comunitario"}
            additionalTitle={language === "en" 
              ? `Director of the Office of New Americans\nBoard Member of Missouri History Museum Subdistrict`
              : `Director de la Oficina de Nuevos Americanos\nMiembro de la Junta del Subdistrito del Museo de Historia de Missouri`}
            imageURL="/gilberto_pinela_picture.jpeg"
          /> 
          <AboutCard
            name="Jorge Riopedre"
            title={language === "en" ? "Non-Profit Advisor" : "Asesor"}
            additionalTitle={
              language === "en"
                ? `Former Executive Director of Delmar DivINe\nFormer President and CEO of Casa de Salud`
                : "Ex-Director Ejecutivo de Delmar DivINe\nEx-Presidente y CEO de Casa de Salud"
            }
            imageURL="/jorge_riopedre_picture.jpg"
          />
          <AboutCard
            name="Elaine Peña"
            title={language === "en" ? "Academic Advisor" : "Asesora Académica"}
            additionalTitle={
              language === "en"
                ? "Professor of Performing Arts, American Culture Studies, and Anthropology, Washington University in St. Louis"
                : "Profesora de Artes Escénicas, Estudios de Cultura Americana y Antropología, Washington University in St. Louis"
            }
            imageURL="/elaine_pena_picture.jpg"
          />
        </div>
      </div>
    </div>
  );
}
