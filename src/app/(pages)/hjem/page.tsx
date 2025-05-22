// src/app/(pages)/hjem/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Hjemmeside | Kristiansen Utvikling",
  description:
    "Profesjonell webutviklingsbedrift som utvikler moderne nettsider og applikasjoner med fokus på brukervennlighet, ytelse og responsivt design. Vi tilbyr grundig SEO-optimalisering, sikker hosting og vedlikehold. Fra konsept til lansering sørger vi for skalerbare, sikre og søkemotorvennlige løsninger som hjelper din bedrift å vokse på nett.",
  alternates: { canonical: "https://kristiansenutvikling.no/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Hjemmeside | Kristiansen Utvikling",
    description:
      "Profesjonell webutviklingsbedrift som utvikler moderne nettsider og applikasjoner med fokus på brukervennlighet, ytelse og responsivt design. Vi tilbyr grundig SEO-optimalisering, sikker hosting og vedlikehold. Fra konsept til lansering sørger vi for skalerbare, sikre og søkemotorvennlige løsninger som hjelper din bedrift å vokse på nett.",
    url: "https://kristiansenutvikling.no/",
    siteName: "Kristiansen Utvikling",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/images/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling - Profesjonell webutvikling og digitale løsninger",
      },
    ],
  },
};

export default function Page() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://kristiansenutvikling.no/",
    name: "Kristiansen Utvikling",
    description:
      "Profesjonell webutviklingsbedrift som utvikler moderne nettsider og applikasjoner med fokus på brukervennlighet, ytelse og responsivt design. Vi tilbyr grundig SEO-optimalisering, sikker hosting og vedlikehold. Fra konsept til lansering sørger vi for skalerbare, sikre og søkemotorvennlige løsninger som hjelper din bedrift å vokse på nett.",
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
      {/* inject WebPage JSON-LD into the <head> on SSR */}
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(pageJsonLd)}
      </Script>

      <HomePage />
    </>
  );
}
