import type { Metadata } from "next";
import SpeakerSeriesContent from "./SpeakerSeriesContent";

export const metadata: Metadata = {
  title: "Saturday Speaker Series",
  description:
    "Saturday Speaker Series at the Missouri Historical Society — Francisco Perez explores the life of Ricardo Flores Magon, Mexican revolutionary who found refuge in St. Louis.",
  openGraph: {
    title: "Saturday Speaker Series | MexStl",
    description:
      "Francisco Perez explores the life of Ricardo Flores Magon, Mexican revolutionary who found refuge in St. Louis.",
    url: "https://mexstl.org/events/saturday-speaker-series",
  },
  alternates: {
    canonical: "https://mexstl.org/events/saturday-speaker-series",
  },
};

export default function SaturdaySpeakerSeries() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Saturday Speaker Series at MHO",
    startDate: "2026-01-31T09:30:00-06:00",
    location: {
      "@type": "Place",
      name: "Missouri Historical Society",
      address: {
        "@type": "PostalAddress",
        streetAddress: "225 S Skinker Blvd",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        postalCode: "63105",
        addressCountry: "US",
      },
    },
    description:
      "Francisco Perez explores the life and legacy of Ricardo Flores Magon, a Mexican anarchist, journalist, and revolutionary who fled dictatorship and found refuge in the Midwest.",
    organizer: {
      "@type": "Organization",
      name: "MexStl",
      url: "https://mexstl.org",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpeakerSeriesContent />
    </>
  );
}
