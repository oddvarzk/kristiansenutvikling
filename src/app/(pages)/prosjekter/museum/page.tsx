import type { Metadata } from "next";
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
  twitter: {
    card: "summary_large_image",
    title: "Museum Nettside | Kristiansen Utvikling",
    description:
      "Digital museumsopplevelse med moderne webdesign - responsive, brukervennlig og visuelt engasjerende.",
    site: "@kristiansenutv",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Museum />;
}
