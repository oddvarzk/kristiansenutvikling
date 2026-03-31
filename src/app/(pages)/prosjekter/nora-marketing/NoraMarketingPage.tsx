/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";
import ProjectGallerySlider from "@/app/components/ProjectGallerySlider";

const galleryImages: { src: string; alt: string }[] = [
  { src: "/images/projects/nora-1.png", alt: "Nora Marketing skjermbilde 1" },
  { src: "/images/projects/nora-2.png", alt: "Nora Marketing skjermbilde 2" },
  { src: "/images/projects/nora-3.png", alt: "Nora Marketing skjermbilde 3" },
  { src: "/images/projects/nora-4.png", alt: "Nora Marketing skjermbilde 4" },
  { src: "/images/projects/nora-5.png", alt: "Nora Marketing skjermbilde 5" },
];

const techs = ["TypeScript", "React", "Tailwind CSS", "GSAP", "Next.js", "Vercel"];

const deliverables = [
  {
    icon: "01",
    title: "Total Redesign",
    titleNo: "Total redesign",
    desc: "Everything was stripped back and rebuilt from scratch. The old site was holding back a sharp agency — so it got a visual identity that actually matches the quality of their work.",
    descNo: "Alt ble fjernet og bygget opp fra bunnen. Den gamle siden bremset et skarpt byrå — så den fikk en visuell identitet som faktisk samsvarer med kvaliteten på arbeidet deres.",
  },
  {
    icon: "02",
    title: "Conversion-focused Layout",
    titleNo: "Konverteringsfokusert layout",
    desc: "Hierarchy, CTA placement and content flow designed around one goal: turning visitors into leads.",
    descNo: "Hierarki, CTA-plassering og innholdsflyt designet rundt ett mål: å gjøre besøkende til leads.",
  },
  {
    icon: "03",
    title: "GSAP Animations",
    titleNo: "GSAP-animasjoner",
    desc: "Fluid, purposeful motion throughout — scroll-triggered reveals, staggered entrances and smooth transitions that add energy without distraction.",
    descNo: "Flytende, målrettet bevegelse gjennom hele siden — scroll-utløste avslører, staggered inngang og myke overganger som tilfører energi uten distraksjoner.",
  },
  {
    icon: "04",
    title: "Performance & SEO",
    titleNo: "Ytelse og SEO",
    desc: "Built on Next.js with Vercel deployment — fast by default, with structured metadata and semantic markup for search visibility.",
    descNo: "Bygget på Next.js med Vercel-distribusjon — rask som standard, med strukturert metadata og semantisk markup for søkesynlighet.",
  },
];

const colors: ColorSwatch[] = [
  { name: "Background", hex: "#0d0d10" },
  { name: "Surface",    hex: "#18181f" },
  { name: "Primary",    hex: "#e8e0ff" },
  { name: "Accent",     hex: "#7c4dff" },
  { name: "Muted",      hex: "#4a4761" },
];

const fonts: FontEntry[] = [
  {
    name: "Satoshi",
    role: "Heading",
    sample: "Marketing that moves.",
    cssFamily: "Satoshi, sans-serif",
  },
  {
    name: "Satoshi",
    role: "Body",
    sample: "Results-driven strategy for modern brands.",
    cssFamily: "Satoshi, sans-serif",
  },
];

export default function NoraMarketingPage() {
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-40 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Back */}
        <Link
          href={getLocalizedPath("/prosjekter", currentLanguage) as any}
          className="editorial-link inline-flex items-center gap-1.5 text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors mb-16"
        >
          ← {isEn ? "Back to projects" : "Tilbake til prosjekter"}
        </Link>

        {/* Header — two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="section-label">{isEn ? "Marketing Agency" : "Markedsføringsbyrå"}</span>
              <span className="section-label">2026</span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] leading-[0.9]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Nora<br />Marketing
            </h1>
          </div>
          <div className="lg:pt-16 flex flex-col justify-end">
            <p className="text-[#635f5a] text-sm md:text-base leading-relaxed">
              {isEn
                ? "A complete ground-up redesign of Nora Marketing's digital presence. Their old site was holding back a sharp agency — so everything was stripped back and rebuilt with intent: a conversion-focused layout, fluid GSAP-powered animations, and a visual identity that actually reflects the quality of their work."
                : "En fullstendig redesign av Nora Marketings digitale tilstedeværelse fra grunnen av. Den gamle siden bremset et skarpt byrå — så alt ble fjernet og bygget opp med formål: konverteringsfokusert layout, flytende GSAP-drevne animasjoner, og en visuell identitet som faktisk gjenspeiler kvaliteten på arbeidet deres."}
            </p>
          </div>
        </div>

        {/* Before / After */}
        <div className="mb-20">
          <span className="section-label block mb-6">
            {isEn ? "Before & after" : "Før & etter"}
          </span>
          <BeforeAfterSlider
            before={{ src: "/images/projects/nora-marketing-before.png", alt: "Nora Marketing — gammel nettside" }}
            after={{  src: "/images/projects/nora-marketing-after.png",  alt: "Nora Marketing — ny nettside" }}
            isEn={isEn}
          />
        </div>

        {/* Gallery */}
        <ProjectGallerySlider images={galleryImages} isEn={isEn} placeholderBg="#141318" />

        {/* Deliverables */}
        <div className="border-t border-[#ede9e2]/6 pt-16 mb-0">
          <span className="section-label block mb-10">
            {isEn ? "What was delivered" : "Hva ble levert"}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((d) => (
              <div key={d.icon} className="flex gap-6">
                <span className="font-mono text-[10px] text-[#635f5a]/40 tracking-widest pt-0.5 shrink-0">{d.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#ede9e2] mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    {isEn ? d.title : d.titleNo}
                  </h3>
                  <p className="text-xs text-[#635f5a] leading-relaxed">
                    {isEn ? d.desc : d.descNo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech */}
        <div className="border-t border-[#ede9e2]/6 pt-14 mt-14">
          <span className="section-label block mb-6">
            {isEn ? "Built with" : "Bygget med"}
          </span>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 border border-[#ede9e2]/8 text-[#635f5a]"
                style={{ borderRadius: "2px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Design showcase */}
        <ProjectDesignShowcase colors={colors} fonts={fonts} isEn={isEn} />

      </div>
    </section>
  );
}
