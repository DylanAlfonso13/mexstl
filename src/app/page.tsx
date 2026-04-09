import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "MexStl — Mexican History & Culture in St. Louis",
  description:
    "Explore Mexican and Mexican-American history in St. Louis through interactive maps, community events, and research. Discover the deep-rooted Latino heritage of the Midwest.",
  openGraph: {
    title: "MexStl — Mexican History & Culture in St. Louis",
    description:
      "Explore Mexican and Mexican-American history in St. Louis through interactive maps, community events, and research.",
    url: "https://mexstl.org",
  },
  alternates: {
    canonical: "https://mexstl.org",
  },
};

export default function Home() {
  return <HomeContent />;
}
