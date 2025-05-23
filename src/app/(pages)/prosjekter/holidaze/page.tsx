// src/app/prosjekter/holidaze/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HolidazePage from "./HolidazePage";

export const metadata: Metadata = {
  title: "Holidaze | Kristiansen Utvikling",
  description:
    "Holidaze – en bookingplattform for ferieboliger med interaktivt kart og kalender.",
  keywords: [
    "Holidaze",
    "feriebolig booking",
    "Next.js",
    "React",
    "Mapbox",
    "FullCalendar",
    "Tailwind CSS",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/holidaze",
  },
  openGraph: {
    title: "Holidaze (Ferie Booking) | Kristiansen Utvikling",
    description:
      "Opplev Holidaze: en moderne bookingplattform for ferieboliger, bygget med Next.js, Mapbox og FullCalendar.",
    url: "https://kristiansenutvikling.no/prosjekter/holidaze",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/projects/holidazeHome.png",
        width: 1200,
        height: 630,
        alt: "Holidaze bookingløsning skjermbilde",
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
      "@id": "https://kristiansenutvikling.no/prosjekter/holidaze#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/holidaze",
      name: "Holidaze | Kristiansen Utvikling",
      description:
        "Holidaze - en skreddersydd bookingløsning for ferieboliger med interaktivt kart og kalender.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/prosjekter/holidaze#breadcrumb",
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
          name: "Holidaze",
          item: "https://kristiansenutvikling.no/prosjekter/holidaze",
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

      <HolidazePage />
    </>
  );
}
