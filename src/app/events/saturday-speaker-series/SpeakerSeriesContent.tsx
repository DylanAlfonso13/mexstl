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

        <div className="max-w-4xl w-full my-8 text-center">
          <p className="text-base sm:text-lg md:text-xl mb-4">
            {language === "en" ? (
              <>
                On January 31, 2026, we held were invited to{" "}
                <em>Saturday Speaker Series</em> at the Missouri Historical
                Society (225 S Skinker Blvd). Washington University
                student and MexStl researcher{" "}
                <strong>Francisco Pérez</strong> delivered a captivating
                presentation on the life and legacy of{" "}
                <strong>Ricardo Flores Magón</strong>, a Mexican anarchist,
                journalist, and revolutionary who fled dictatorship and found
                refuge in the Midwest. Attendees explored primary-source
                archives and engaged in a lively discussion about Mag&oacute;n&apos;s
                enduring impact on Mexican and Mexican-American activism.
              </>
            ) : (
              <>
                El 31 de enero de 2026, fuimos invitados a la{" "}
                <em>Serie de Oradores del Sábado</em> en la Sociedad
                Histórica de Missouri (225 S Skinker Blvd). El estudiante de
                Washington University e investigador de MexStl,{" "}
                <strong>Francisco Pérez</strong>, ofreció una presentación
                cautivadora sobre la vida y el legado de{" "}
                <strong>Ricardo Flores Magón</strong>, un anarquista,
                periodista y revolucionario mexicano que huyó de la
                dictadura y encontró refugio en el Medio Oeste. Los
                asistentes exploraron archivos de fuentes primarias y
                participaron en una animada discusión sobre el impacto
                duradero de Magón en el activismo mexicano y
                mexicoamericano.
              </>
            )}
          </p>
        </div>

        {/* Event Images Grid */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Image
              src="/saturday-speaker-series/main_presentation.jpg"
              alt="Francisco Pérez presenting on Ricardo Flores Magón"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/saturday-speaker-series/archives.jpg"
              alt="Primary-source archives explored during the event"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/saturday-speaker-series/angled-behind-presentation.jpg"
              alt="Audience view of the Saturday Speaker Series presentation"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/saturday-speaker-series/side-presentation.jpg"
              alt="Side view of the speaker series presentation"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/saturday-speaker-series/group-photo.jpg"
              alt="Group photo of Saturday Speaker Series attendees"
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
