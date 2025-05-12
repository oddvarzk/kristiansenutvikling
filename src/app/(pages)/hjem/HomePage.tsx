// src/app/HomePage/HomePage.tsx
"use client";

import HeroSection from "./components/HeroSection";
import WhyChooseMe from "./components/HvorforMeg";
import ServicesSection from "../hjem/components/ServiceSection";
import FeaturedProjectsCarousel from "./components/FeaturedProjectsCarousel";
import CTASection from "./components/CTASection";
import BackToTop from "../../components/BackToTop";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseMe />
      <ServicesSection />
      <FeaturedProjectsCarousel />
      <CTASection />
      <BackToTop />
    </>
  );
}
