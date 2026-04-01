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
  { src: "/images/projects/kragero-1.jpg", alt: "Kragerø Naturstein skjermbilde 1" },
  { src: "/images/projects/kragero-2.jpg", alt: "Kragerø Naturstein skjermbilde 2" },
  { src: "/images/projects/kragero-3.jpg", alt: "Kragerø Naturstein skjermbilde 3" },
  { src: "/images/projects/kragero-4.jpg", alt: "Kragerø Naturstein skjermbilde 4" },
  { src: "/images/projects/kragero-5.jpg", alt: "Kragerø Naturstein skjermbilde 5" },
  { src: "/images/projects/kragero-6.jpg", alt: "Kragerø Naturstein skjermbilde 6" },
  { src: "/images/projects/kragero-7.jpg", alt: "Kragerø Naturstein skjermbilde 7" },
];

const techs = ["WordPress", "Kadence", "HTML", "CSS", "Video Editing", "SEO"];

const deliverables = [
  {
    icon: "01",
    title: "Complete Rebuild",
    titleNo: "Komplett ombygging",
    desc: "Moved from a fragmented old setup to a clean, fast Kadence-powered WordPress site — structured for growth and easy client management.",
    descNo: "Flyttet fra et fragmentert gammelt oppsett til en ren, rask Kadence-drevet WordPress-side — strukturert for vekst og enkel klienthåndtering.",
  },
  {
    icon: "02",
    title: "Redesign",
    titleNo: "Redesign",
    desc: "A visual overhaul that lets the material speak for itself. Stone textures, earthy tones and deliberate whitespace — the design reflects the craft.",
    descNo: "En visuell gjennomgang som lar materialet tale for seg selv. Steinstrukturer, jordfarger og bevisst luft — designet gjenspeiler håndverket.",
  },
  {
    icon: "03",
    title: "Video Production",
    titleNo: "Videoproduksjon",
    desc: "Full video editing and production for site integration — colour grading, pacing and export optimised for web performance.",
    descNo: "Fullstendig videoredigering og produksjon for nettstedsintegrasjon — fargegradering, tempo og eksport optimalisert for nettytelse.",
  },
  {
    icon: "04",
    title: "Custom HTML / CSS",
    titleNo: "Tilpasset HTML / CSS",
    desc: "Where Kadence blocks couldn't reach, custom HTML and CSS filled the gap — pixel-precise details and refined micro-interactions.",
    descNo: "Der Kadence-blokker ikke strakk til, fylte tilpasset HTML og CSS gapet — piksel-presise detaljer og raffinerte mikro-interaksjoner.",
  },
];

const colors: ColorSwatch[] = [
  { name: "Background", hex: "#111110" },
  { name: "Surface",    hex: "#1c1c1a" },
  { name: "Green",      hex: "#4a7c48" },
  { name: "Stone",      hex: "#8a8278" },
  { name: "Light",      hex: "#f4f0ea" },
];

const fonts: FontEntry[] = [
  {
    name: "Playfair Display",
    role: "Heading",
    sample: "Naturstein av høyeste kvalitet.",
    cssFamily: "Georgia, 'Times New Roman', serif",
  },
  {
    name: "Inter",
    role: "Body",
    sample: "Solid. Timeless. Built to last.",
    cssFamily: "var(--font-inter), sans-serif",
  },
];

export default function KrageroNatursteinPage() {
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-40 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Back */}
        <Link
          href={getLocalizedPath("/prosjekter", currentLanguage) as any}
          className="editorial-link inline-flex items-center gap-1.5 text-sm text-[#857f7a] hover:text-[#ede9e2] transition-colors mb-16"
        >
          ← {isEn ? "Back to projects" : "Tilbake til prosjekter"}
        </Link>

        {/* Header — two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="section-label">{isEn ? "Natural Stone Supplier" : "Natursteinleverandør"}</span>
              <span className="section-label">2026</span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] leading-[0.9]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Kragerø<br />Naturstein
            </h1>
          </div>
          <div className="lg:pt-16 flex flex-col justify-end">
            <p className="text-[#857f7a] text-sm md:text-base leading-relaxed">
              {isEn
                ? "A complete rebuild from the ground up. Moved from a fragmented old setup to a clean, fast Kadence-powered WordPress site — with custom HTML and CSS for the finer details, full video production, and a redesigned content hierarchy that lets the stone speak for itself."
                : "En komplett ombygging fra bunnen av. Gikk fra et fragmentert gammelt oppsett til en ren, rask Kadence-drevet WordPress-nettside — med tilpasset HTML og CSS for de finere detaljene, fullstendig videoproduksjon og en redesignet innholdshierarki som lar steinen tale for seg selv."}
            </p>
          </div>
        </div>

        {/* Before / After */}
        <div className="mb-20">
          <span className="section-label block mb-6">
            {isEn ? "Before & after" : "Før & etter"}
          </span>
          <BeforeAfterSlider
            before={{ src: "/images/projects/kragero-naturstein-before.jpg", alt: "Kragerø Naturstein — gammel nettside" }}
            after={{  src: "/images/projects/kragero-naturstein-after.jpg",  alt: "Kragerø Naturstein — ny nettside" }}
            isEn={isEn}
          />
        </div>

        {/* Gallery */}
        <ProjectGallerySlider images={galleryImages} isEn={isEn} placeholderBg="#181815" />

        {/* Deliverables */}
        <div className="border-t border-[#ede9e2]/6 pt-16 mb-0">
          <span className="section-label block mb-10">
            {isEn ? "What was delivered" : "Hva ble levert"}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((d) => (
              <div key={d.icon} className="flex gap-6">
                <span className="font-mono text-[10px] text-[#857f7a]/40 tracking-widest pt-0.5 shrink-0">{d.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#ede9e2] mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    {isEn ? d.title : d.titleNo}
                  </h3>
                  <p className="text-xs text-[#857f7a] leading-relaxed">
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
                className="text-xs font-mono px-3 py-1.5 border border-[#ede9e2]/8 text-[#857f7a]"
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
