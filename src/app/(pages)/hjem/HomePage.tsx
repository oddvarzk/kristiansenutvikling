// src/app/HomePage/HomePage.tsx
"use client";

import HeroSeksjon from "./components/HeroSeksjon";
import WhyChooseMe from "./components/HvorforMeg";
import TjenesterSeksjon from "./components/TjenesterSeksjon";
import HjemProsjekter from "./components/HjemProsjekter";
import CTASeksjon from "./components/CTASeksjon";
import BackToTop from "../../components/BackToTop";

export default function HomePage() {
  return (
    <>
      <HeroSeksjon />
      <WhyChooseMe />
      <TjenesterSeksjon />
      <HjemProsjekter />
      <CTASeksjon />
      <BackToTop />
    </>
  );
}
