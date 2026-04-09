import type { Metadata } from "next";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Community events celebrating Mexican and Mexican-American history in St. Louis. Speaker series, exhibits, and cultural gatherings by MexStl.",
  openGraph: {
    title: "Events | MexStl",
    description:
      "Community events celebrating Mexican and Mexican-American history in St. Louis.",
    url: "https://mexstl.org/events",
  },
  alternates: {
    canonical: "https://mexstl.org/events",
  },
};

export default function Events() {
  return <EventsContent />;
}
