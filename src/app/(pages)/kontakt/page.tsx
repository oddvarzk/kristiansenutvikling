import type { Metadata } from "next";
import KontaktPage from "./KontaktPage";

export const metadata: Metadata = {
  title: "Kontakt Webutvikler | Gratis Tilbud | Kristiansen Utvikling",
  description:
    "Ta kontakt for en uforpliktende prat om din nettside, nettbutikk eller app. Jeg svarer innen én arbeidsdag — hei@kristiansenutvikling.no eller +47 472 07 143.",
  keywords: [
    "kontakt webutvikler norge",
    "gratis tilbud nettside",
    "bestill nettside",
    "freelance webutvikler kontakt",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/kontakt",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/kontakt",
      "en": "https://kristiansenutvikling.no/en/kontakt",
    },
  },
  openGraph: {
    title: "Kontakt Webutvikler | Gratis Tilbud | Kristiansen Utvikling",
    description:
      "Ta kontakt for et uforpliktende tilbud på nettsider, apper eller SEO-optimalisering. Gratis tilbud — ingen binding.",
    url: "https://kristiansenutvikling.no/kontakt",
    siteName: "Kristiansen Utvikling",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Kontakt oss",
      },
    ],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://kristiansenutvikling.no/kontakt",
  name: "Kontakt Kristiansen Utvikling",
  description:
    "Ta kontakt for en uforpliktende prat om nettside, app eller SEO-prosjektet ditt.",
  mainEntity: {
    "@type": "Organization",
    name: "Kristiansen Utvikling",
    url: "https://kristiansenutvikling.no",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+47-472-07-143",
      email: "hei@kristiansenutvikling.no",
      contactType: "Customer Service",
      areaServed: "NO",
      availableLanguage: ["nb", "en"],
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <KontaktPage />
    </>
  );
}
