// src/app/HomePage/HomePage.tsx
"use client";

import HeroSeksjon from "./components/HeroSeksjon";
import LogoBanner from "./components/LogoBanner";
import WhyChooseMe from "./components/HvorforMeg";
import TjenesterSeksjon from "./components/TjenesterSeksjon";
import HjemProsjekter from "./components/HjemProsjekter";
import CTASeksjon from "./components/CTASeksjon";
import BackToTop from "../../components/BackToTop";

export default function HomePage() {
  return (
    <>
      {/* Hero is sticky (z-index: 1) — next sections scroll over it */}
      <HeroSeksjon />

      {/* .stack-card slides over the pinned hero */}
      <div className="stack-card">
        {/* Client/tech marquee — first thing visible after hero */}
        <LogoBanner />
        <WhyChooseMe />
        <TjenesterSeksjon />
        <HjemProsjekter />
        <CTASeksjon />
        <BackToTop />
      </div>
    </>
  );
}
