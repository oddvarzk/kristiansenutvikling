import type { Metadata } from "next";
import DroomvillaSpanjePage from "./DroomvillaSpanjePage";

export const metadata: Metadata = {
  title: "Droomvilla Spanje — Wix & Velo Utvikling | Kristiansen Utvikling",
  description:
    "Tilpasset to-CMS vurderingssystem, SEO-fikser, skjemaer og e-postpipeline for Droomvilla Spanje — bygget med Wix Velo (TypeScript).",
  keywords: [
    "Droomvilla Spanje",
    "Wix Velo TypeScript",
    "CMS integrasjon",
    "vurderingssystem nettside",
    "SEO Wix",
    "webutvikling prosjekt",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/droomvilla-spanje",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/prosjekter/droomvilla-spanje",
      "en": "https://kristiansenutvikling.no/en/prosjekter/droomvilla-spanje",
    },
  },
  openGraph: {
    title: "Droomvilla Spanje — Wix & Velo Utvikling | Kristiansen Utvikling",
    description:
      "Tilpasset to-CMS vurderingssystem og e-postpipeline for en feriehus-utleieside, bygget med Wix Velo.",
    url: "https://kristiansenutvikling.no/prosjekter/droomvilla-spanje",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Droomvilla Spanje nettside",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/prosjekter/droomvilla-spanje#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/droomvilla-spanje",
      name: "Droomvilla Spanje — Wix & Velo Utvikling | Kristiansen Utvikling",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
        { "@type": "ListItem", position: 3, name: "Droomvilla Spanje", item: "https://kristiansenutvikling.no/prosjekter/droomvilla-spanje" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DroomvillaSpanjePage />
    </>
  );
}
