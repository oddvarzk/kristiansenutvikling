// src/app/prosjekter/droomvillaspanje/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import DroomvillaspanjePage from "./DroomvillaPage";

export const metadata: Metadata = {
  title: "DroomVillaSpanje | Kristiansen Utvikling",
  description:
    "DroomVillaSpanje - Unik Wix-nettside for ferieboligutleie i Spania med SEO-optimalisering.",
  keywords: [
    "DroomVillaSpanje",
    "feriebolig Spania",
    "Wix",
    "SEO",
    "responsive design",
    "Kristiansen Utvikling",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/droomvillaspanje",
  },
  openGraph: {
    title: "DroomVillaSpanje | Kristiansen Utvikling",
    description:
      "Utforsk DroomVillaSpanje: en moderne Wix-løsning for ferieboligutleie i Spania, optimalisert for SEO og rask lastetid.",
    url: "https://kristiansenutvikling.no/prosjekter/droomvillaspanje",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/projects/droomvillaHome.png",
        width: 1200,
        height: 630,
        alt: "DroomVillaSpanje forsidebilde",
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
      "@id":
        "https://kristiansenutvikling.no/prosjekter/droomvillaspanje#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/droomvillaspanje",
      name: "DroomVillaSpanje | Kristiansen Utvikling",
      description:
        "DroomVillaSpanje - Unik Wix-nettside for ferieboligutleie i Spania med SEO-optimalisering.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://kristiansenutvikling.no/prosjekter/droomvillaspanje#breadcrumb",
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
          name: "DroomVillaSpanje",
          item: "https://kristiansenutvikling.no/prosjekter/droomvillaspanje",
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

      <DroomvillaspanjePage />
    </>
  );
}
