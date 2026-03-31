import type { Metadata } from "next";
import ProsjekterClient from "./ProsjekterClient";

export const metadata: Metadata = {
  title: "Prosjekter — Nettside Utvikling Norge | Kristiansen Utvikling",
  description:
    "Se utvalgte webutviklingsprosjekter — nettsider, bookingplattformer og markedsføringssider bygget med Next.js og React. Kvalitet levert til norske bedrifter.",
  keywords: [
    "nettside prosjekter norge",
    "webutvikling referanser",
    "Next.js prosjekter",
    "nettside eksempler",
    "webutvikler portefølje",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter",
    languages: {
      "x-default": "https://kristiansenutvikling.no/prosjekter",
      "nb-NO": "https://kristiansenutvikling.no/prosjekter",
      "en": "https://kristiansenutvikling.no/en/prosjekter",
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no/prosjekter",
    siteName: "Kristiansen Utvikling",
    title: "Prosjekter & Referanser | Kristiansen Utvikling",
    description:
      "Utvalgte nettside- og appprosjekter bygget med Next.js og React for norske bedrifter.",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Prosjekter",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/prosjekter#webpage",
      url: "https://kristiansenutvikling.no/prosjekter",
      name: "Prosjekter & Referanser — Nettside Utvikling Norge | Kristiansen Utvikling",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
      ],
    },
  ],
};

export default function ProsjekterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProsjekterClient />
    </>
  );
}
