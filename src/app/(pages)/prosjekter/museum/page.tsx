// src/app/prosjekter/museum/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Museum from "./MuseumPage";

export const metadata: Metadata = {
  title: "Museum Nettside | Kristiansen Utvikling",
  description:
    "Museum - digital presentasjon av museets samlinger og utstillinger med moderne webteknologi.",
  keywords: [
    "museum",
    "nettside",
    "samlinger",
    "utstillinger",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/museum",
  },
  openGraph: {
    title: "Museum Nettside | Kristiansen Utvikling",
    description:
      "Utforsk vårt digitale museumsnettsted med interaktiv historiefortelling og rik mediavisning.",
    url: "https://kristiansenutvikling.no/prosjekter/museum",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/projects/museumHome.png",
        width: 1200,
        height: 630,
        alt: "Museum Nettside - forsidebilde",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const graph = [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/prosjekter/museum#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/museum",
      name: "Museum Nettside | Kristiansen Utvikling",
      description:
        "Museum - digital presentasjon av museets samlinger og utstillinger med moderne webteknologi.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/prosjekter/museum#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hjem",
          item: "https://kristiansenutvikling.no/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Prosjekter",
          item: "https://kristiansenutvikling.no/prosjekter",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Museum Nettside",
          item: "https://kristiansenutvikling.no/prosjekter/museum",
        },
      ],
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        })}
      </Script>

      <Museum />
    </>
  );
}
