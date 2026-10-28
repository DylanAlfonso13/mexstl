import type { Metadata } from "next";
import ThursdayNightsContent from "./ThursdayNightsContent";

export const metadata: Metadata = {
  title: "Thursday Nights at the Museum: Nuestra Comunidad, Nuestras Historias",
  description:
    "Hispanic Heritage Month storytelling evening at the Missouri History Museum, hosted by Adam Flores, with local St. Louisans sharing their stories and the Migration and Memory Initiative.",
  openGraph: {
    title: "Thursday Nights at the Museum | MexStl",
    description:
      "Hispanic Heritage Month storytelling evening at the Missouri History Museum with local St. Louisans sharing their stories.",
    url: "https://mexstl.org/events/thursday-nights-at-the-museum",
  },
  alternates: {
    canonical: "https://mexstl.org/events/thursday-nights-at-the-museum",
  },
};

export default function ThursdayNightsAtTheMuseum() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Thursday Nights at the Museum: Nuestra Comunidad, Nuestras Historias",
    startDate: "2026-10-08T17:00:00-05:00",
    endDate: "2026-10-08T20:30:00-05:00",
    location: {
      "@type": "Place",
      name: "Missouri History Museum",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5700 Lindell Blvd",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        postalCode: "63112",
        addressCountry: "US",
      },
    },
    description:
      "An evening of storytelling during Hispanic Heritage Month, hosted by Adam Flores, featuring local St. Louisans Eric Acevedo, Catherine Baez, Stephanie Calero, and Luis Torres.",
    organizer: {
      "@type": "Organization",
      name: "Missouri Historical Society",
      url: "https://mohistory.org",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThursdayNightsContent />
    </>
  );
}
