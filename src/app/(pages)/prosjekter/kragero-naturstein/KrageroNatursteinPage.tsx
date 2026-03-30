/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";

// Images to be added — populate when ready
const galleryImages: { src: string; alt: string }[] = [];

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

// -- Placeholder data — update with actual brand values --
const colors: ColorSwatch[] = [
  { name: "Background", hex: "#181815" },
  { name: "Stone",      hex: "#2e2c28" },
  { name: "Earth",      hex: "#8a7d6b" },
  { name: "Warm White", hex: "#f4f0ea" },
  { name: "Accent",     hex: "#c4a882" },
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
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">

        {/* Back */}
        <Link
          href={getLocalizedPath("/prosjekter", currentLanguage) as any}
          className="editorial-link inline-flex items-center gap-1.5 text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors mb-14"
        >
          ← {isEn ? "Back to projects" : "Tilbake til prosjekter"}
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="section-label">{isEn ? "Natural Stone Supplier" : "Natursteinleverandør"}</span>
            <span className="section-label">2025</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] mb-8 leading-[0.9]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Kragerø<br />Naturstein
          </h1>
          <p className="text-[#635f5a] text-sm md:text-base max-w-2xl leading-relaxed">
            {isEn
              ? "A complete rebuild from the ground up. Moved from a fragmented old setup to a clean, fast Kadence-powered WordPress site — with custom HTML and CSS for the finer details, full video production, and a redesigned content hierarchy that lets the stone speak for itself."
              : "En komplett ombygging fra bunnen av. Gikk fra et fragmentert gammelt oppsett til en ren, rask Kadence-drevet WordPress-nettside — med tilpasset HTML og CSS for de finere detaljene, fullstendig videoproduksjon og en redesignet innholdshierarki som lar steinen tale for seg selv."}
          </p>
        </div>

        {/* Before / After */}
        <div className="mb-16">
          <span className="section-label block mb-6">
            {isEn ? "Before & after" : "Før & etter"}
          </span>
          <BeforeAfterSlider
            before={{ src: "/images/projects/kragero-naturstein-before.png", alt: "Kragerø Naturstein — gammel nettside" }}
            after={{  src: "/images/projects/kragero-naturstein-after.png",  alt: "Kragerø Naturstein — ny nettside" }}
            isEn={isEn}
          />
        </div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setModalIndex(idx)}
                className="group overflow-hidden bg-[#131313] aspect-[4/3] relative"
                style={{ borderRadius: "2px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </button>
            ))}
          </div>
        )}

        {/* Deliverables */}
        <div className="border-t border-[#ede9e2]/6 pt-12 mb-2">
          <span className="section-label block mb-8">
            {isEn ? "What was delivered" : "Hva ble levert"}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((d) => (
              <div key={d.icon} className="flex gap-5">
                <span className="font-mono text-[10px] text-[#635f5a]/40 tracking-widest pt-0.5 shrink-0">{d.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#ede9e2] mb-1.5" style={{ fontFamily: "Satoshi, sans-serif" }}>
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
        <div className="border-t border-[#ede9e2]/6 pt-10 mt-10">
          <span className="section-label block mb-5">
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

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-[#0b0b0b]/97 flex items-center justify-center z-50 p-4"
          onClick={() => setModalIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#ede9e2]/50 hover:text-[#ede9e2] text-sm tracking-widest"
            aria-label={isEn ? "Close" : "Lukk"}
          >
            ✕
          </button>
          <div
            className="relative max-w-5xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[modalIndex].src}
              alt={galleryImages[modalIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
