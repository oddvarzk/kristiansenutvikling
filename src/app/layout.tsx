// src/app/layout.tsx — server component, true root layout
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import { defaultMetadata } from "./metadata";
import "./globals.css";
import Breadcrumb from "@/app/components/Breadcrumb";
import AnalyticsConsentLoader from "./components/AnalyticsConsentLoader";

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
    <html lang="no" className={inter.variable}>
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
        <ClientLayout>
          <Breadcrumb />
          <AnalyticsConsentLoader />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
