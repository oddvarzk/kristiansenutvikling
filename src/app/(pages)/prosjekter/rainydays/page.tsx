// src/app/prosjekter/rainydays/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import RainydaysPage from "./RainydaysPage";

export const metadata: Metadata = {
  title: "RainyDays | Kristiansen Utvikling",
  description:
    "RainyDays – en netthandelsplattform for gjenbruk av klær med handlekurv og betalingsintegrasjon.",
  keywords: [
    "RainyDays",
    "netthandel",
    "gjenbruk",
    "klær",
    "Next.js",
    "React",
    "Stripe",
    "Tailwind CSS",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/rainydays",
  },
  openGraph: {
    title: "RainyDays | Kristiansen Utvikling",
    description:
      "Opplev RainyDays: en responsiv netthandelsplattform for gjenbruk av klær, bygget med Next.js og Stripe.",
    url: "https://kristiansenutvikling.no/prosjekter/rainydays",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/projects/rainyDaysHome.png",
        width: 1200,
        height: 630,
        alt: "RainyDays nettbutikk skjermbilde",
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
      "@id": "https://kristiansenutvikling.no/prosjekter/rainydays#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/rainydays",
      name: "RainyDays | Kristiansen Utvikling",
      description:
        "RainyDays - en fullverdig netthandelsplattform for gjenbruk av klær med handlekurv og betalingsintegrasjon.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/prosjekter/rainydays#breadcrumb",
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
          name: "RainyDays",
          item: "https://kristiansenutvikling.no/prosjekter/rainydays",
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

      <RainydaysPage />
    </>
  );
}
