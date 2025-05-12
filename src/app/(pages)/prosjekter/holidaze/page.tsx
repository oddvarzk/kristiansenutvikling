import type { Metadata } from "next";
import HolidazePage from "./HolidazePage";

export const metadata: Metadata = {
  title: "Holidaze (Ferie Booking) | Kristiansen Utvikling",
  description:
    "Holidaze – en skreddersydd bookingløsning for ferieboliger med interaktivt kart og kalender.",
  keywords: [
    "Holidaze",
    "feriebolig booking",
    "Next.js",
    "React",
    "Mapbox",
    "FullCalendar",
    "Tailwind CSS",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/projects/holidaze",
  },
  openGraph: {
    title: "Holidaze (Ferie Booking) | Kristiansen Utvikling",
    description:
      "Opplev Holidaze: en moderne bookingplattform for ferieboliger, bygget med Next.js, Mapbox og FullCalendar.",
    url: "https://kristiansenutvikling.no/projects/holidaze",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/images/projects/holidazeHome.png",
        width: 1200,
        height: 630,
        alt: "Holidaze bookingløsning skjermbilde",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holidaze (Ferie Booking) | Kristiansen Utvikling",
    description:
      "Skreddersydd bookingplattform for ferieboliger med Next.js, kart og kalender.",
    site: "@kristiansenutv",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <HolidazePage />;
}
