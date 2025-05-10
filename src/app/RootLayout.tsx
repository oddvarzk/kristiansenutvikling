"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
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
