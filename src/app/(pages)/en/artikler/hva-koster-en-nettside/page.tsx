import type { Metadata } from "next";
import NoPg from "../../../artikler/hva-koster-en-nettside/page";

export const metadata: Metadata = {
  title: "How much does a website cost in Norway? (2026) | Kristiansen Utvikling",
  description:
    "Honest and concrete website pricing for Norway 2026. From landing page to e-commerce — real numbers, not 'contact us for pricing'.",
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/artikler/hva-koster-en-nettside",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/artikler/hva-koster-en-nettside",
      en: "https://kristiansenutvikling.no/en/artikler/hva-koster-en-nettside",
    },
  },
  openGraph: {
    title: "How much does a website cost in Norway? (2026)",
    description: "Honest pricing guide with real numbers — not 'contact us for pricing'.",
    url: "https://kristiansenutvikling.no/en/artikler/hva-koster-en-nettside",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "article",
  },
};

export default NoPg;
