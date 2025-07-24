import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikler | Kristiansen Utvikling",
  description:
    "Les artikler, tips og nyheter om webutvikling, design, SEO og teknologi fra Kristiansen Utvikling.",
  alternates: { canonical: "https://kristiansenutvikling.no/artikler" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no/artikler",
    siteName: "Kristiansen Utvikling",
    title: "Artikler | Kristiansen Utvikling",
    description:
      "Les artikler, tips og nyheter om webutvikling, design, SEO og teknologi fra Kristiansen Utvikling.",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Illustrasjon som viser Kristiansen Utvikling",
      },
    ],
  },
}; 