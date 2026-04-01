import type { Metadata } from "next";
import ArtiklerPage from "./ArtiklerPage";

export const metadata: Metadata = {
  title: "Artikler — Webutvikling, SEO og design | Kristiansen Utvikling",
  description:
    "Praktiske artikler om webutvikling, SEO og digital strategi for norske bedrifter. Skrevet av Oddvar Zakarias Kristiansen, frilansutvikler i Oslo.",
  keywords: [
    "webutvikling artikler",
    "SEO tips norsk",
    "Next.js blogg",
    "web developer Oslo",
    "Kristiansen Utvikling",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/artikler",
    languages: {
      "x-default": "https://kristiansenutvikling.no/artikler",
      "nb-NO": "https://kristiansenutvikling.no/artikler",
      en: "https://kristiansenutvikling.no/en/artikler",
    },
  },
  openGraph: {
    title: "Artikler — Webutvikling, SEO og design | Kristiansen Utvikling",
    description:
      "Praktiske artikler om webutvikling, SEO og digital strategi for norske bedrifter.",
    url: "https://kristiansenutvikling.no/artikler",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Artikler",
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
      "@type": "Blog",
      "@id": "https://kristiansenutvikling.no/artikler#blog",
      url: "https://kristiansenutvikling.no/artikler",
      name: "Artikler — Kristiansen Utvikling",
      description: "Praktiske artikler om webutvikling, SEO og digital strategi.",
      inLanguage: "nb-NO",
      author: {
        "@type": "Person",
        "@id": "https://kristiansenutvikling.no/#person",
        name: "Oddvar Zakarias Kristiansen",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/artikler#webpage",
      url: "https://kristiansenutvikling.no/artikler",
      name: "Artikler — Webutvikling, SEO og design | Kristiansen Utvikling",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Artikler", item: "https://kristiansenutvikling.no/artikler" },
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
      <ArtiklerPage />
    </>
  );
}
