import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kristiansenutvikling.no"), // Replace with your actual domain
  title: {
    default: "Kristiansen Utvikling - Skreddersydde Webløsninger",
    template: "%s | Kristiansen Utvikling",
  },
  description:
    "Profesjonell webutvikling og digitale løsninger som hjelper bedrifter å lykkes online. Skreddersydde nettsider, responsivt design og moderne teknologi.",
  keywords: [
    "webutvikling",
    "nettside design",
    "responsiv nettside",
    "digital løsning",
    "nettsider Norge",
    "web design",
    "nettside optimalisering",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no",
    siteName: "Kristiansen Utvikling",
    title: "Kristiansen Utvikling - Skreddersydde Webløsninger",
    description:
      "Profesjonell webutvikling og digitale løsninger som hjelper bedrifter å lykkes online.",
    images: [
      {
        url: "/og-image.png", // Create an Open Graph image
        width: 1200,
        height: 630,
        alt: "Kristiansen Utvikling - Webløsninger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristiansen Utvikling - Skreddersydde Webløsninger",
    description:
      "Profesjonell webutvikling og digitale løsninger som hjelper bedrifter å lykkes online.",
    images: ["/twitter-image.png"], // Create a Twitter-specific image
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
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", // Optional
    // Add other verification codes if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${merriweather.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <CookieBanner />

        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
