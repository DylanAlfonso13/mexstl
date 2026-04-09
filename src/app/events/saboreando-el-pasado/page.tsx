import type { Metadata } from "next";
import SaboreandoContent from "./SaboreandoContent";

export const metadata: Metadata = {
  title: "Saboreando el Pasado",
  description:
    "Saboreando el Pasado (Savoring the Past) — A MexStl community event exploring the connection between food, memory, and Mexican-American cultural identity in St. Louis.",
  openGraph: {
    title: "Saboreando el Pasado | MexStl",
    description:
      "A community event exploring the connection between food, memory, and Mexican-American cultural identity in St. Louis.",
    url: "https://mexstl.org/events/saboreando-el-pasado",
  },
  alternates: {
    canonical: "https://mexstl.org/events/saboreando-el-pasado",
  },
};

export default function SaboreandoElPasado() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Saboreando el Pasado - Savoring the Past",
    startDate: "2023-04-13",
    location: {
      "@type": "Place",
      name: "Lewis Collaborative Center",
    },
    description:
      "A vibrant community event exploring the rich connections between food and memory in the Mexican-American community of St. Louis.",
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
      <SaboreandoContent />
    </>
  );
}
