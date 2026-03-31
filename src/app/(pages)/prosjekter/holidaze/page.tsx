import type { Metadata } from "next";
import HolidazePage from "./HolidazePage";

export const metadata: Metadata = {
  title: "Holidaze — Bookingplattform for Ferieboliger | Kristiansen Utvikling",
  description:
    "Holidaze er en moderne bookingplattform for ferieboliger med interaktivt kart og kalender — bygget med Next.js, Mapbox og FullCalendar. Se prosjektet.",
  keywords: [
    "Holidaze",
    "feriebolig booking",
    "bookingplattform Next.js",
    "interaktivt kart Mapbox",
    "FullCalendar React",
    "webutvikling prosjekt",
    "nettside utvikling Norge",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/holidaze",
    languages: {
      "x-default": "https://kristiansenutvikling.no/prosjekter/holidaze",
      "nb-NO": "https://kristiansenutvikling.no/prosjekter/holidaze",
      "en": "https://kristiansenutvikling.no/en/prosjekter/holidaze",
    },
  },
  openGraph: {
    title: "Holidaze — Bookingplattform for Ferieboliger | Kristiansen Utvikling",
    description:
      "Moderne bookingplattform for ferieboliger med interaktivt kart og kalender, bygget med Next.js, Mapbox og FullCalendar.",
    url: "https://kristiansenutvikling.no/prosjekter/holidaze",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/projects/holidaze-1.jpg",
        width: 1200,
        height: 630,
        alt: "Holidaze bookingplattform skjermbilde",
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
      "@id": "https://kristiansenutvikling.no/prosjekter/holidaze#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/holidaze",
      name: "Holidaze — Bookingplattform for Ferieboliger | Kristiansen Utvikling",
      description:
        "Moderne bookingplattform for ferieboliger med interaktivt kart og kalender, bygget med Next.js, Mapbox og FullCalendar.",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/prosjekter/holidaze#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
        { "@type": "ListItem", position: 3, name: "Holidaze", item: "https://kristiansenutvikling.no/prosjekter/holidaze" },
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
      <HolidazePage />
    </>
  );
}
