// src/app/layout.tsx — server component, true root layout
import { Inter } from "next/font/google";
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
      sameAs: [
        "https://www.linkedin.com/in/kristiansenutvikling",
        "https://github.com/kristiansenutvikling",
      ],
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

export const metadata = defaultMetadata;

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=aktura@700,400&display=swap"
          rel="stylesheet"
        />
      </head>
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
