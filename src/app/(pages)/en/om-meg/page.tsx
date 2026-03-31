import type { Metadata } from "next";
import OmMegPage from "../../om-meg/OmMegPage";

export const metadata: Metadata = {
  title: "About — Web Developer in Oslo | Kristiansen Utvikling",
  description:
    "I'm Oddvar Zakarias Kristiansen — a freelance web developer from Oslo specialising in modern websites and applications for Norwegian businesses.",
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/om-meg",
    languages: {
      "x-default": "https://kristiansenutvikling.no/om-meg",
      "nb-NO": "https://kristiansenutvikling.no/om-meg",
      en: "https://kristiansenutvikling.no/en/om-meg",
    },
  },
  openGraph: {
    title: "About — Web Developer in Oslo | Kristiansen Utvikling",
    description:
      "Freelance web developer from Oslo specialising in modern websites and applications for Norwegian businesses.",
    url: "https://kristiansenutvikling.no/en/om-meg",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — About",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <OmMegPage />;
}
