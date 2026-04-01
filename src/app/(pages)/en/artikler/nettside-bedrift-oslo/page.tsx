import type { Metadata } from "next";
import NoPg from "../../../artikler/nettside-bedrift-oslo/page";

export const metadata: Metadata = {
  title: "Website for a business in Oslo – what should you choose? | Kristiansen Utvikling",
  description:
    "What does a local Oslo business actually need online? Local SEO, platform choices and practical tips to get found — and chosen — over the competition.",
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/artikler/nettside-bedrift-oslo",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/artikler/nettside-bedrift-oslo",
      en: "https://kristiansenutvikling.no/en/artikler/nettside-bedrift-oslo",
    },
  },
  openGraph: {
    title: "Website for a business in Oslo – what should you choose?",
    description: "Local SEO, platform choices and tips to get found over the competition.",
    url: "https://kristiansenutvikling.no/en/artikler/nettside-bedrift-oslo",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "article",
  },
};

export default NoPg;
