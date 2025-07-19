import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Personvernerklæring | Kristiansen Utvikling",
  description:
    "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
  alternates: { canonical: "https://kristiansenutvikling.no/personvern" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no/personvern",
    siteName: "Kristiansen Utvikling",
    title: "Personvernerklæring | Kristiansen Utvikling",
    description:
      "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Illustrasjon som viser Kristiansen Utvikling",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
