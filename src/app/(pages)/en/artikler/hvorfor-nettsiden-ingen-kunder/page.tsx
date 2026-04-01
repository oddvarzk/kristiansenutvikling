import type { Metadata } from "next";
import NoPg from "../../../artikler/hvorfor-nettsiden-ingen-kunder/page";

export const metadata: Metadata = {
  title: "Why is your website not getting you any customers? | Kristiansen Utvikling",
  description:
    "You have a website. The phone isn't ringing. Here are the 5 most common reasons your site isn't converting — and what you can do about them today.",
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/artikler/hvorfor-nettsiden-ingen-kunder",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/artikler/hvorfor-nettsiden-ingen-kunder",
      en: "https://kristiansenutvikling.no/en/artikler/hvorfor-nettsiden-ingen-kunder",
    },
  },
  openGraph: {
    title: "Why is your website not getting you any customers?",
    description: "5 most common reasons your website isn't converting — and fixes for each.",
    url: "https://kristiansenutvikling.no/en/artikler/hvorfor-nettsiden-ingen-kunder",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "article",
  },
};

export default NoPg;
