import type { Metadata } from "next";

const googleVerif = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
if (!googleVerif) {
  throw new Error("Missing NEXT_PUBLIC_GOOGLE_VERIFICATION env var");
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://kristiansenutvikling.no"),
  title: {
    template: "%s | Kristiansen Utvikling",
    default: "Profesjonell web- og apputvikling | Kristiansen Utvikling",
  },
  description:
    "Kristiansen Utvikling tilbyr profesjonell web- og apputvikling med fokus på brukervennlighet, sikkerhet og ytelse. Vi leverer skreddersydde nettsider, PWA, mobile apper, grundig SEO-optimalisering, drift, hosting og løpende support, fra idé til vekst.",

  // keywords removed
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    title: "Kristiansen Utvikling | Web Utvikling Bedrift",
    description:
      "Kristiansen Utvikling tilbyr profesjonell web- og apputvikling med fokus på brukervennlighet, sikkerhet og ytelse. Vi leverer skreddersydde nettsider, PWA, mobile apper, grundig SEO-optimalisering, drift, hosting og løpende support, fra idé til vekst.",
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
    google: googleVerif,
  },
};
