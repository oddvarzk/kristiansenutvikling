import type { Metadata } from "next";
import RainydaysPage from "./RainydaysPage";

export const metadata: Metadata = {
  title: "RainyDays Nettbutikk | Kristiansen Utvikling",
  description:
    "RainyDays – en fullverdig netthandelsplattform for gjenbruk av klær med handlekurv og betalingsintegrasjon.",
  keywords: [
    "RainyDays",
    "netthandel",
    "gjenbruk",
    "klær",
    "Next.js",
    "React",
    "Stripe",
    "Tailwind CSS",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/projects/rainydays-site",
  },
  openGraph: {
    title: "RainyDays Nettbutikk | Kristiansen Utvikling",
    description:
      "Opplev RainyDays: en responsiv netthandelsplattform for gjenbruk av klær, bygget med Next.js og Stripe.",
    url: "https://kristiansenutvikling.no/projects/rainydays-site",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/projects/rainyDaysHome.png",
        width: 1200,
        height: 630,
        alt: "RainyDays nettbutikk skjermbilde",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RainyDays Nettbutikk | Kristiansen Utvikling",
    description:
      "RainyDays – netthandelsplattform for gjenbruk av klær med Next.js og Stripe-integrasjon.",
    site: "@kristiansenutv",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <RainydaysPage />;
}
