// src/app/HomePage/page.tsx
import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Hjemmeside | Kristiansen Utvikling",
  description:
    "Kristiansen Utvikling leverer skreddersydde nettsider, nettbutikker og webapplikasjoner som løfter din virksomhet.",
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
      "Kristiansen Utvikling leverer skreddersydde nettsider, nettbutikker og webapplikasjoner som løfter din virksomhet.",
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
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: "https://kristiansenutvikling.no/",
      name: "Kristiansen Utvikling",
      description:
        "Kristiansen Utvikling leverer skreddersydde nettsider, nettbutikker og webapplikasjoner som løfter din virksomhet.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kristiansenutvikling.no/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      provider: {
        "@type": "Organization",
        name: "Kristiansen Utvikling",
        url: "https://kristiansenutvikling.no",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+47 472 07 143",
          email: "hei@kristiansenutvikling.com",
          contactType: "Customer Service",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "NO",
        },
      },
    }),
  },
};

export default function Page() {
  return <HomePage />;
}
