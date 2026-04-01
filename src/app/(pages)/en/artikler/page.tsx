import type { Metadata } from "next";
import ArtiklerPage from "../../artikler/ArtiklerPage";

export const metadata: Metadata = {
  title: "Articles — Web Development, SEO & Design | Kristiansen Utvikling",
  description:
    "Practical articles on web development, SEO and digital strategy for Norwegian businesses. Written by Oddvar Zakarias Kristiansen, freelance developer in Oslo.",
  keywords: [
    "web development articles",
    "SEO tips Norway",
    "Next.js blog",
    "web developer Oslo",
    "Kristiansen Utvikling",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/artikler",
    languages: {
      "x-default": "https://kristiansenutvikling.no/artikler",
      "nb-NO": "https://kristiansenutvikling.no/artikler",
      en: "https://kristiansenutvikling.no/en/artikler",
    },
  },
  openGraph: {
    title: "Articles — Web Development, SEO & Design | Kristiansen Utvikling",
    description:
      "Practical articles on web development, SEO and digital strategy for Norwegian businesses.",
    url: "https://kristiansenutvikling.no/en/artikler",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Articles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ArtiklerPage />;
}
