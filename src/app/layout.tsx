// src/app/layout.tsx — server component, true root layout
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import ClientLayout from "./ClientLayout";
import { defaultMetadata } from "./metadata";
import "./globals.css";
import Breadcrumb from "@/app/components/Breadcrumb";
import AnalyticsConsentLoader from "./components/AnalyticsConsentLoader";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://kristiansenutvikling.no/#organization",
      name: "Kristiansen Utvikling",
      url: "https://kristiansenutvikling.no",
      logo: {
        "@type": "ImageObject",
        url: "https://kristiansenutvikling.no/images/logo.svg",
      },
      description:
        "Freelance webutvikler i Norge — skreddersydde nettsider, nettbutikker og apper med Next.js og React.",
      telephone: "+4747207143",
      email: "hei@kristiansenutvikling.no",
      areaServed: "NO",
      priceRange: "kr kr",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NO",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+47-472-07-143",
        email: "hei@kristiansenutvikling.no",
        contactType: "Customer Service",
        availableLanguage: ["nb", "en"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://kristiansenutvikling.no/#website",
      url: "https://kristiansenutvikling.no",
      name: "Kristiansen Utvikling",
      publisher: { "@id": "https://kristiansenutvikling.no/#organization" },
      inLanguage: ["nb-NO", "en"],
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const aktura = localFont({
  src: "../../public/fonts/Aktura-Regular.woff2",
  variable: "--font-aktura",
  display: "swap",
  weight: "400",
});

export const metadata = defaultMetadata;

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${inter.variable} ${satoshi.variable} ${aktura.variable}`} data-scroll-behavior="smooth">
      <head />
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ClientLayout>
          <Breadcrumb />
          <AnalyticsConsentLoader />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
