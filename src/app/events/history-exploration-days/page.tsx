import type { Metadata } from "next";
import HistoryExplorationContent from "./HistoryExplorationContent";

export const metadata: Metadata = {
  title: "History Exploration Days: Celebrating Hispanic Heritage Month",
  description:
    "Hands-on Hispanic Heritage Month program at the Missouri History Museum exploring Hispanic and Latino history in St. Louis through games, food, music, art, and artifacts.",
  openGraph: {
    title: "History Exploration Days | MexStl",
    description:
      "Hands-on Hispanic Heritage Month program at the Missouri History Museum exploring Hispanic and Latino history in St. Louis.",
    url: "https://mexstl.org/events/history-exploration-days",
  },
  alternates: {
    canonical: "https://mexstl.org/events/history-exploration-days",
  },
};

export default function HistoryExplorationDays() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "History Exploration Days: Celebrating Hispanic Heritage Month",
    startDate: "2026-10-09T10:00:00-05:00",
    endDate: "2026-10-09T13:00:00-05:00",
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
      "A hands-on program exploring the histories and cultural contributions of Hispanic and Latino communities in St. Louis and beyond.",
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
      <HistoryExplorationContent />
    </>
  );
}
