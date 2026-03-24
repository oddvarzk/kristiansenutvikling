import type { Metadata } from "next";
import ByggmesterDanielsenPage from "./ByggmesterDanielsenPage";

export const metadata: Metadata = {
  title: "Byggmester Danielsen — WordPress Utvikling & Fixes | Kristiansen Utvikling",
  description:
    "Feilretting, innholdshierarki, videoredigering og seksjonstillegg for Byggmester Danielsen — en komplett oppgradering av en eksisterende Elementor-nettside.",
  keywords: [
    "Byggmester Danielsen",
    "WordPress Elementor",
    "nettside feilretting",
    "videoredigering nettside",
    "webutvikling prosjekt Norge",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen",
      "en": "https://kristiansenutvikling.no/en/prosjekter/bygg-mester-danielsen",
    },
  },
  openGraph: {
    title: "Byggmester Danielsen — WordPress Utvikling & Fixes | Kristiansen Utvikling",
    description:
      "Feilretting, innholdshierarki, videoredigering og seksjonstillegg for en lokal norsk byggeside på Elementor.",
    url: "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Byggmester Danielsen nettside",
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
      "@id": "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen",
      name: "Byggmester Danielsen — WordPress Utvikling & Fixes | Kristiansen Utvikling",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
        { "@type": "ListItem", position: 3, name: "Byggmester Danielsen", item: "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen" },
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
      <ByggmesterDanielsenPage />
    </>
  );
}
