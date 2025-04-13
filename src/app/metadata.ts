import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | Kristiansen Utvikling",
    default: "Kristiansen Utvikling | Web Utvikling Bedrift",
  },
  description: "Web utvikling bedrift.",
  openGraph: {
    type: "website",
    locale: "no_NOR",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "../../public/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling Logo",
      },
    ],
  },
};
