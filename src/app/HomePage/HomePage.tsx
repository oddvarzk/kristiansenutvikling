// src/app/HomePage/HomePage.tsx
"use client";

import HeroSection from "./components/HeroSection";
import WhyChooseMe from "../../components/HvorforMeg";
import ServicesSection from "../../components/ServiceSection";
import CTASection from "./components/CTASection";
import BackToTop from "../../components/BackToTop";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseMe />
      <ServicesSection />
      <CTASection />
      <BackToTop />
    </>
  );
}
