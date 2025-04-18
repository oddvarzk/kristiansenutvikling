import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Hjemmeside | Kristiansen Utvikling | Skreddersydde Webløsninger",
  description:
    "Profesjonell webutviklingsbyrå som leverer skreddersydde digitale løsninger. Spesialisert i nettsider, applikasjoner og SEO, med fokus på å møte dine unike forretningsbehov.",
  keywords: [
    "webutvikling",
    "nettside design",
    "responsiv nettside",
    "digital løsning",
    "nettsider Norge",
    "web design",
    "nettside optimalisering",
    "applikasjonsutvikling",
    "SEO optimalisering",
    "digital transformasjon",
    "nettside utvikling",
    "webdesign tjenester",
    "digital forretningsløsning",
  ],
  openGraph: {
    title: "Hjemmeside | Kristiansen Utvikling | Skreddersydde Webløsninger",
    description:
      "Profesjonell webutviklingsbyrå som leverer skreddersydde digitale løsninger for din virksomhet. Spesialisert i nettsider, applikasjoner og SEO.",
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling - Profesjonell Webutvikling og Digitale Løsninger",
      },
    ],
  },
  alternates: {
    canonical: "https://kristiansenutvikling.no",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Kristiansen Utvikling - Hjemmeside",
      url: "https://kristiansenutvikling.no",
      description:
        "Profesjonell webutviklingsbyrå som leverer skreddersydde digitale løsninger",
      mainEntity: {
        "@type": "WebSite",
        name: "Kristiansen Utvikling",
        description: "Profesjonell webutvikling og digitale løsninger",
        serviceType: [
          "Webutvikling",
          "Nettside Design",
          "Applikasjonsutvikling",
          "SEO Optimalisering",
        ],
      },
      about: {
        "@type": "Organization",
        name: "Kristiansen Utvikling",
        url: "https://kristiansenutvikling.no",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+47 472 07 143",
          email: "hei@kristiansenutvikling.com",
          contactType: "Kundeservice",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "NO",
          addressLocality: "Norge",
        },
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kristiansenutvikling.no/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
};

export default HomePage;
