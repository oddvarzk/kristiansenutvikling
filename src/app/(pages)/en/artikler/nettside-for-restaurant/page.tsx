import type { Metadata } from "next";
import NoPg from "../../../artikler/nettside-for-restaurant/page";

export const metadata: Metadata = {
  title: "Restaurant website: how to get more bookings | Kristiansen Utvikling",
  description:
    "Most restaurant websites are needlessly bad. Here's exactly what your restaurant needs online — and the concrete steps that get you more reservations.",
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/artikler/nettside-for-restaurant",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/artikler/nettside-for-restaurant",
      en: "https://kristiansenutvikling.no/en/artikler/nettside-for-restaurant",
    },
  },
  openGraph: {
    title: "Restaurant website: how to get more bookings",
    description: "Most restaurant websites are needlessly bad. Here's what actually works.",
    url: "https://kristiansenutvikling.no/en/artikler/nettside-for-restaurant",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "article",
  },
};

export default NoPg;
