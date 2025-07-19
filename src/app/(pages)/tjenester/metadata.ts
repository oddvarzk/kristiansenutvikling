import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester | Kristiansen Utvikling",
  description:
    "Se mitt brede spekter av web- og app-tjenester: design, utvikling, SEO og support for å løfte din digitale tilstedeværelse.",
  alternates: { canonical: "https://kristiansenutvikling.no/tjenester" },
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
    url: "https://kristiansenutvikling.no/tjenester",
    siteName: "Kristiansen Utvikling",
    title: "Tjenester | Kristiansen Utvikling",
    description:
      "Se mitt brede spekter av web- og app-tjenester: design, utvikling, SEO og support for å løfte din digitale tilstedeværelse.",
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