// src/app/prosjekter/auksjon/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import AuctionPage from "./AuctionPage";

export const metadata: Metadata = {
  title: "Auksjon Nettside | Kristiansen Utvikling",
  description:
    "Sanntids auksjonsplattform med enkel budgivning, administrasjonsgrensesnitt og demonstrasjon.",
  keywords: [
    "auksjon",
    "budgivning",
    "sanntid",
    "Next.js",
    "React",
    "Socket.IO",
    "MongoDB",
    "Kristiansen Utvikling",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/auksjon",
  },
  openGraph: {
    title: "Auksjon Nettside | Kristiansen Utvikling",
    description:
      "Opplev vår sanntids auksjonsplattform budgivning, live oppdateringer og administrasjonsgrensesnitt i ett.",
    url: "https://kristiansenutvikling.no/prosjekter/auksjon",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/projects/auctionHome.png",
        width: 1200,
        height: 630,
        alt: "Auksjon Nettside skjermbilde",
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
      "@id": "https://kristiansenutvikling.no/prosjekter/auksjon#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/auksjon",
      name: "Auksjon Nettside | Kristiansen Utvikling",
      description:
        "Sanntids auksjonsplattform med enkel budgivning og administrasjonsgrensesnitt.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/prosjekter/auksjon#breadcrumb",
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
          name: "Auksjon Nettside",
          item: "https://kristiansenutvikling.no/prosjekter/auksjon",
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

      <AuctionPage />
    </>
  );
}
