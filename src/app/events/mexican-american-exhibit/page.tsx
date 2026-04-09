import type { Metadata } from "next";
import ExhibitContent from "./ExhibitContent";

export const metadata: Metadata = {
  title: "Mexican American Pop-Up Exhibit",
  description:
    "Bilingual pop-up exhibit at the Missouri Historical Society recognizing the deep-rooted Mexican presence in St. Louis, dating back to the early 1800s.",
  openGraph: {
    title: "Mexican American Pop-Up Exhibit | MexStl",
    description:
      "Bilingual exhibit recognizing the deep-rooted Mexican presence in St. Louis at the Missouri Historical Society.",
    url: "https://mexstl.org/events/mexican-american-exhibit",
  },
  alternates: {
    canonical: "https://mexstl.org/events/mexican-american-exhibit",
  },
};

export default function MexicanAmericanExhibit() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Mexican American Pop-Up Exhibit",
    startDate: "2026-01-30",
    endDate: "2026-02-28",
    location: {
      "@type": "Place",
      name: "Missouri Historical Society Library and Research Center",
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
      "Bilingual pop-up exhibit recognizing the deep-rooted Mexican presence in St. Louis and the city's role in a larger historical narrative of mexicanos in the United States.",
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
      <ExhibitContent />
    </>
  );
}
