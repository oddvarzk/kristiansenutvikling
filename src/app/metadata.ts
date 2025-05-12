import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://kristiansenutvikling.no"),
  title: {
    template: "%s | Kristiansen Utvikling",
    default: "Kristiansen Utvikling | Web Utvikling",
  },
  description:
    "Profesjonell webutvikling som leverer skreddersydde digitale løsninger. Vi hjelper bedrifter med å skape sterke online tilstedeværelser gjennom innovative nettsider og webløsninger.",
  keywords: [
    "webutvikling",
    "nettside design",
    "responsiv nettside",
    "digital løsning",
    "nettsider Norge",
    "web design",
    "nettside optimalisering",
    "profesjonell webløsning",
    "digital transformasjon",
    "webdesign tjenester",
    "applikasjonsutvikling",
    "SEO optimalisering",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    title: "Kristiansen Utvikling | Web Utvikling Bedrift",
    description:
      "Profesjonell webutvikling som leverer skreddersydde digitale løsninger for din bedrift.",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: 'YOUR_VERIFICATION_CODE',
  },
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kristiansen Utvikling",
      url: "https://kristiansenutvikling.no",
      description:
        "Profesjonell webutvikling som leverer skreddersydde digitale løsninger",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kristiansenutvikling.no/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
};
