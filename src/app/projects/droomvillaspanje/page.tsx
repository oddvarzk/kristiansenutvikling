import type { Metadata } from "next";
import DroomvillaspanjePage from "./DroomvillaPage";

export const metadata: Metadata = {
  title: "DroomVillaSpanje | Kristiansen Utvikling",
  description:
    "DroomVillaSpanje – skreddersydd Wix-nettside for ferieboligutleie i Spania med SEO-optimalisering.",
  keywords: [
    "DroomVillaSpanje",
    "feriebolig Spania",
    "Wix",
    "SEO",
    "responsive design",
    "Kristiansen Utvikling",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/projects/droomvillaspanje",
  },
  openGraph: {
    title: "DroomVillaSpanje | Kristiansen Utvikling",
    description:
      "Utforsk DroomVillaSpanje: en moderne Wix-løsning for ferieboligutleie i Spania, optimalisert for SEO og rask lastetid.",
    url: "https://kristiansenutvikling.no/projects/droomvillaspanje",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/projects/droomvillaHome.png",
        width: 1200,
        height: 630,
        alt: "DroomVillaSpanje forsidebilde",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DroomVillaSpanje | Kristiansen Utvikling",
    description:
      "DroomVillaSpanje – ferieboligutleie på Wix med fokus på SEO og responsivitet.",
    site: "@kristiansenutv",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <DroomvillaspanjePage />;
}
