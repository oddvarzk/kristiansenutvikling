import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Webutvikler Norge | Nettsider, SEO & Apper | Kristiansen Utvikling",
  description:
    "Freelance webutvikler i Norge — skreddersydde nettsider, nettbutikker og apper med Next.js og React. Transparent prising, levering til avtalt tid. Gratis tilbud.",
  keywords: [
    "webutvikler norge",
    "freelance webutvikler",
    "nettside utvikling",
    "nettside bedrift",
    "Next.js utvikler norge",
    "webutvikling",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no",
      "en": "https://kristiansenutvikling.no/en",
    },
  },
  openGraph: {
    title: "Webutvikler Norge | Nettsider, SEO & Apper | Kristiansen Utvikling",
    description:
      "Freelance webutvikler i Norge — skreddersydde nettsider og apper med Next.js. Gratis tilbud, transparent prising.",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Webutvikler Norge",
      },
    ],
  },
};

export default function Page() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://kristiansenutvikling.no",
    name: "Kristiansen Utvikling",
    description:
      "Kristiansen Utvikling tilbyr profesjonell web- og apputvikling med fokus på brukervennlighet, sikkerhet og ytelse. Vi leverer skreddersydde nettsider, PWA, mobile apper, grundig SEO-optimalisering, drift, hosting og løpende support, fra idé til vekst.",
    provider: {
      "@type": "Organization",
      name: "Kristiansen Utvikling",
      url: "https://kristiansenutvikling.no",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+47 472 07 143",
        email: "hei@kristiansenutvikling.no",
        contactType: "Customer Service",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NO",
      },
    },
  };

  return (
    <>
      <script
        id="homepage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <HomePage />
    </>
  );
}
