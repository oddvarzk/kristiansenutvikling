import type { Metadata } from "next";
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
    canonical: "https://kristiansenutvikling.no/projects/auksjon",
  },
  openGraph: {
    title: "Auksjon Nettside | Kristiansen Utvikling",
    description:
      "Opplev vår sanntids auksjonsplattform budgivning, live oppdateringer og administrasjonsgrensesnitt i ett.",
    url: "https://kristiansenutvikling.no/prosjekter/auksjon",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/projects/auctionHome.png",
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
  return <AuctionPage />;
}
