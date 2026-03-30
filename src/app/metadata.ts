import type { Metadata } from "next";

const googleVerif = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
const base = "https://kristiansenutvikling.no";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(base),

  title: {
    template: "%s | Kristiansen Utvikling",
    default: "Webutvikler Norge | Nettsider & SEO | Kristiansen Utvikling",
  },

  description:
    "Freelance webutvikler i Norge — skreddersydde nettsider og apper med Next.js og React. Transparent prising, levering til avtalt tid. Gratis tilbud.",

  keywords: [
    "webutvikler norge",
    "nettside utvikling",
    "webutvikling",
    "freelance webutvikler",
    "nettside bedrift",
    "Next.js utvikler",
    "React utvikler",
    "SEO optimalisering",
    "nettbutikk utvikling",
    "redesign nettside",
    "Kristiansen Utvikling",
  ],

  authors: [{ name: "Kristiansen Utvikling", url: base }],
  creator: "Kristiansen Utvikling",
  publisher: "Kristiansen Utvikling",

  alternates: {
    canonical: base,
    languages: {
      "x-default": base,
      "nb-NO": base,
      "en": `${base}/en`,
    },
  },

  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: "en_US",
    url: base,
    siteName: "Kristiansen Utvikling",
    title: "Webutvikler Norge | Nettsider & SEO | Kristiansen Utvikling",
    description:
      "Freelance webutvikler i Norge — skreddersydde nettsider, nettbutikker og apper med Next.js. Gratis tilbud, transparent prising.",
    images: [
      {
        url: `${base}/images/openGraph.png`,
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling — Webutvikler Norge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Webutvikler Norge | Kristiansen Utvikling",
    description:
      "Freelance webutvikler i Norge — raske, skreddersydde nettsider og apper med Next.js. Ta kontakt for gratis tilbud.",
    images: [`${base}/images/openGraph.png`],
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

  ...(googleVerif ? { verification: { google: googleVerif } } : {}),
};
