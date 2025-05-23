// src/app/layout.tsx
"use client";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CookieBanner from "@/app/components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

interface FontVariable {
  variable: string;
}

interface Fonts {
  geistSans: FontVariable;
  geistMono: FontVariable;
  montserrat: FontVariable;
  merriweather: FontVariable;
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  fonts: Fonts;
}>;

export default function RootLayout({ children, fonts }: RootLayoutProps) {
  return (
    <html lang="no">
      <head>
        {/* Explicit canonical URL for all pages */}
        <link rel="canonical" href="https://kristiansenutvikling.no/" />
      </head>
      <body
        className={`
          ${fonts.geistSans.variable}
          ${fonts.geistMono.variable}
          ${fonts.montserrat.variable}
          ${fonts.merriweather.variable}
          antialiased flex flex-col min-h-screen
        `}
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
