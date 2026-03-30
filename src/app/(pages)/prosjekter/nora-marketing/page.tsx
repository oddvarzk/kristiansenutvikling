import type { Metadata } from "next";
import NoraMarketingPage from "./NoraMarketingPage";

export const metadata: Metadata = {
  title: "Nora Marketing — Konverteringsfokusert Nettside | Kristiansen Utvikling",
  description:
    "Konverteringsfokusert nettside for Nora Marketing — bygget med Next.js og Tailwind CSS for maksimal synlighet og leadgenerering. Se prosjektet.",
  keywords: [
    "Nora Marketing",
    "markedsføring nettside",
    "konvertering nettside",
    "Next.js marketing",
    "leadgenerering nettside",
    "webutvikling prosjekt Norge",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/nora-marketing",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/prosjekter/nora-marketing",
      "en": "https://kristiansenutvikling.no/en/prosjekter/nora-marketing",
    },
  },
  openGraph: {
    title: "Nora Marketing — Konverteringsfokusert Nettside | Kristiansen Utvikling",
    description:
      "Konverteringsfokusert nettside for Nora Marketing bygget med Next.js og Tailwind CSS for leadgenerering og synlighet.",
    url: "https://kristiansenutvikling.no/prosjekter/nora-marketing",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Nora Marketing nettside",
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
      "@id": "https://kristiansenutvikling.no/prosjekter/nora-marketing#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/nora-marketing",
      name: "Nora Marketing — Konverteringsfokusert Nettside | Kristiansen Utvikling",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
        { "@type": "ListItem", position: 3, name: "Nora Marketing", item: "https://kristiansenutvikling.no/prosjekter/nora-marketing" },
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
      <NoraMarketingPage />
    </>
  );
}
