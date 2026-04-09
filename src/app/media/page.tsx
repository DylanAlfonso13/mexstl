import type { Metadata } from "next";
import MediaContent from "./MediaContent";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Media coverage and features about MexStl and Mexican history in St. Louis. NPR interviews, podcasts, and articles about Latino heritage in the Midwest.",
  openGraph: {
    title: "Media | MexStl",
    description:
      "Media coverage about MexStl and Mexican history in St. Louis.",
    url: "https://mexstl.org/media",
  },
  alternates: {
    canonical: "https://mexstl.org/media",
  },
};

export default function Media() {
  return <MediaContent />;
}
