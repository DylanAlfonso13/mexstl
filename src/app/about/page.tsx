import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the MexStl team — researchers, community organizers, and advisors working to preserve and share Mexican and Mexican-American history in St. Louis.",
  openGraph: {
    title: "About Us | MexStl",
    description:
      "Meet the MexStl team — researchers, community organizers, and advisors preserving Mexican history in St. Louis.",
    url: "https://mexstl.org/about",
  },
  alternates: {
    canonical: "https://mexstl.org/about",
  },
};

export default function About() {
  return <AboutContent />;
}
