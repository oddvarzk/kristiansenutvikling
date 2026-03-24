import type { Metadata } from "next";
import TjenesterPageClient from "./TjenesterPageClient";

export const metadata: Metadata = {
  title: "Webutvikling & Nettside Tjenester Norge | Kristiansen Utvikling",
  description:
    "Nettside utvikling, SEO-optimalisering, redesign, WordPress, app utvikling og vedlikehold — skreddersydde digitale løsninger med transparent prising. Se alle tjenester og priser.",
  keywords: [
    "webutvikling norge",
    "nettside utvikling",
    "SEO optimalisering norge",
    "redesign nettside",
    "wordpress utvikling",
    "app utvikling",
    "nettbutikk utvikling",
    "nettside vedlikehold",
    "nettside pris",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/tjenester",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/tjenester",
      "en": "https://kristiansenutvikling.no/en/tjenester",
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no/tjenester",
    siteName: "Kristiansen Utvikling",
    title: "Webutvikling & Nettside Tjenester Norge | Kristiansen Utvikling",
    description:
      "Skreddersydde nettsider, SEO, redesign og apper — alle tjenester med transparent prising. Ta kontakt for gratis tilbud.",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Webutvikling Tjenester Norge",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/tjenester#webpage",
      url: "https://kristiansenutvikling.no/tjenester",
      name: "Webutvikling & Nettside Tjenester Norge | Kristiansen Utvikling",
      description: "Skreddersydde nettsider, SEO, redesign og apper med transparent prising.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://kristiansenutvikling.no/tjenester" },
      ],
    },
  ],
};

export default function TjenesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TjenesterPageClient />
    </>
  );
}
