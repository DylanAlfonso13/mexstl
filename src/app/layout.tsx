import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Outfit } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "MexStl — Mexican History & Culture in St. Louis",
    template: "%s | MexStl",
  },
  description:
    "Exploring and preserving Mexican and Mexican-American history in St. Louis. Community events, research, and interactive maps documenting Latino heritage in the Midwest.",
  keywords: [
    "MexStl",
    "Mexican history St. Louis",
    "Mexican-American culture",
    "Latino heritage Missouri",
    "Mexican community St. Louis",
    "St. Louis Latino history",
    "mexicanos Midwest",
    "Mexican history Midwest",
  ],
  authors: [{ name: "MexStl" }],
  creator: "MexStl",
  metadataBase: new URL("https://mexstl.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mexstl.org",
    siteName: "MexStl",
    title: "MexStl — Mexican History & Culture in St. Louis",
    description:
      "Exploring and preserving Mexican and Mexican-American history in St. Louis. Community events, research, and interactive maps.",
    images: [
      {
        url: "/MEXSTL_green_image.png",
        width: 1200,
        height: 630,
        alt: "MexStl — Mexican History in St. Louis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MexStl — Mexican History & Culture in St. Louis",
    description:
      "Exploring and preserving Mexican and Mexican-American history in St. Louis.",
    images: ["/MEXSTL_green_image.png"],
  },
  alternates: {
    canonical: "https://mexstl.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MexStl",
    url: "https://mexstl.org",
    description:
      "A grassroots project exploring and preserving Mexican and Mexican-American history in St. Louis.",
    email: "MexStl.org@gmail.com",
    areaServed: {
      "@type": "City",
      name: "St. Louis",
      addressRegion: "MO",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${outfit.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
