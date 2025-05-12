import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Merriweather } from "next/font/google";
import RootLayout from "./RootLayout";
import { defaultMetadata } from "./metadata";
import Script from "next/script";
import "./globals.css";
import Breadcrumb from "@/app/components/Breadcrumb";

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

export const metadata = defaultMetadata;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {GA_ID && (
        <>
          {/* 1) Load GA library */}
          <Script
            id="gtag-base"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          {/* 2) Initialize & configure */}
          <Script id="gtag-config" strategy="afterInteractive">
            {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_ID}', {
               page_path: window.location.pathname,
             });
           `}
          </Script>
        </>
      )}
      <RootLayout
        fonts={{
          geistSans,
          geistMono,
          montserrat,
          merriweather,
        }}
      >
        <Breadcrumb />
        {children}
      </RootLayout>
    </>
  );
}
