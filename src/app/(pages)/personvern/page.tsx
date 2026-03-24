import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Personvernerklæring | Kristiansen Utvikling",
  description:
    "Les hvordan Kristiansen Utvikling behandler dine personopplysninger, bruker informasjonskapsler og håndterer Google Analytics-data i henhold til GDPR.",
  keywords: [
    "personvernerklæring",
    "personopplysninger",
    "informasjonskapsler",
    "GDPR",
    "Kristiansen Utvikling",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/personvern",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/personvern",
      "en": "https://kristiansenutvikling.no/en/personvern",
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no/personvern",
    siteName: "Kristiansen Utvikling",
    title: "Personvernerklæring | Kristiansen Utvikling",
    description:
      "Les hvordan Kristiansen Utvikling behandler dine personopplysninger og bruker informasjonskapsler i henhold til GDPR.",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Personvernerklæring",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kristiansenutvikling.no/personvern#webpage",
  url: "https://kristiansenutvikling.no/personvern",
  name: "Personvernerklæring | Kristiansen Utvikling",
  description:
    "Personvernerklæring for Kristiansen Utvikling — behandling av personopplysninger og bruk av informasjonskapsler.",
  inLanguage: "nb-NO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
      { "@type": "ListItem", position: 2, name: "Personvern", item: "https://kristiansenutvikling.no/personvern" },
    ],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PrivacyPolicyClient />
    </>
  );
}
