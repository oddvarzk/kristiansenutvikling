"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import Loader from "@/components/Loader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
  fonts,
}: Readonly<{
  children: React.ReactNode;
  fonts: {
    geistSans: any;
    geistMono: any;
    montserrat: any;
    merriweather: any;
  };
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="no">
      <body
        className={`${fonts.geistSans.variable} ${fonts.geistMono.variable} ${fonts.montserrat.variable} ${fonts.merriweather.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{isLoading ? <Loader /> : children}</main>
        <CookieBanner />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
