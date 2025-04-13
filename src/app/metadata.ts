// src/app/metadata.ts
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | Your Company",
    default: "Kristiansen Utvikling | Web Utvikling Bedrift",
  },
  description:
    "Dette selskapet lager nettsider, forbedrer SEO, utvikler applikasjoner samt designer det du trenger.",
  openGraph: {
    type: "website",
    locale: "no_NOR",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Company",
      },
    ],
  },
};
