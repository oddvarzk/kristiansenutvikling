import type { Metadata } from "next";
import OmMegPage from "./OmMegPage";

export const metadata: Metadata = {
  title: "Om meg — Webutvikler i Oslo | Kristiansen Utvikling",
  description:
    "Jeg er Oddvar Zakarias Kristiansen — frilansutvikler fra Oslo med fokus på moderne nettsider og applikasjoner for norske bedrifter. Les mer om meg og min tilnærming.",
  keywords: [
    "om meg",
    "webutvikler Oslo",
    "frilansutvikler Norge",
    "Next.js utvikler",
    "Kristiansen Utvikling",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/om-meg",
    languages: {
      "x-default": "https://kristiansenutvikling.no/om-meg",
      "nb-NO": "https://kristiansenutvikling.no/om-meg",
      en: "https://kristiansenutvikling.no/en/om-meg",
    },
  },
  openGraph: {
    title: "Om meg — Webutvikler i Oslo | Kristiansen Utvikling",
    description:
      "Frilansutvikler fra Oslo med fokus på moderne nettsider og applikasjoner for norske bedrifter.",
    url: "https://kristiansenutvikling.no/om-meg",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Om meg",
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
      "@type": "Person",
      "@id": "https://kristiansenutvikling.no/#person",
      name: "Oddvar Zakarias Kristiansen",
      jobTitle: "Webutvikler",
      url: "https://kristiansenutvikling.no",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressCountry: "NO",
      },
      knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Webutvikling"],
    },
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/om-meg#webpage",
      url: "https://kristiansenutvikling.no/om-meg",
      name: "Om meg — Webutvikler i Oslo | Kristiansen Utvikling",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Om meg", item: "https://kristiansenutvikling.no/om-meg" },
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
      <OmMegPage />
    </>
  );
}
