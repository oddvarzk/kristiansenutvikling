// src/app/ClientLayout.tsx — client-side shell (header, footer, analytics)
"use client";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CookieBanner from "@/app/components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <CookieBanner />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
