/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";

const techs = ["Wix", "Wix Velo", "TypeScript", "SEO", "CMS Integration"];

const deliverables = [
  {
    icon: "01",
    title: "Dual-CMS Rating System",
    titleNo: "Dual-CMS vurderingssystem",
    desc: "Built a custom rating engine that pulls from two separate CMS systems and feeds an aggregation layer — calculating composite scores in real time. No off-the-shelf plugin could do what was needed, so it was built from scratch with Wix Velo.",
    descNo: "Bygget en tilpasset vurderingsmotor som henter fra to separate CMS-systemer og mater et aggregeringslag — som beregner sammensatte poeng i sanntid. Ingen hyllevare-plugin kunne gjøre det som var nødvendig, så det ble bygget fra bunnen av med Wix Velo.",
  },
  {
    icon: "02",
    title: "Forms & Mail Pipeline",
    titleNo: "Skjemaer og e-postpipeline",
    desc: "Designed and wired up contact and booking forms with a full mail pipeline — routed, formatted and reliable, so no enquiry gets lost.",
    descNo: "Designet og koblet til kontakt- og bookingskjemaer med en fullstendig e-postpipeline — rutet, formatert og pålitelig, slik at ingen henvendelse går tapt.",
  },
  {
    icon: "03",
    title: "SEO Overhaul",
    titleNo: "SEO-gjennomgang",
    desc: "Audited and corrected metadata, heading structure, alt text and page speed issues — giving the site a proper foundation for organic visibility in both Norwegian and Spanish markets.",
    descNo: "Reviderte og korrigerte metadata, overskriftsstruktur, alt-tekst og sidehastighetsproblemer — og ga nettstedet et skikkelig grunnlag for organisk synlighet i både norske og spanske markeder.",
  },
  {
    icon: "04",
    title: "Bug Fixes",
    titleNo: "Feilretting",
    desc: "Traced and resolved a series of Wix platform bugs affecting layout, form behaviour and mobile responsiveness across multiple device types.",
    descNo: "Sporet og løste en rekke Wix-plattformfeil som påvirket layout, skjemaatferd og mobilresponsivitet på tvers av flere enhetstyper.",
  },
];

// -- Placeholder data — update with actual brand values --
const colors: ColorSwatch[] = [
  { name: "Background", hex: "#151a15" },
  { name: "Olive",      hex: "#2d3a22" },
  { name: "Terracotta", hex: "#c26a3e" },
  { name: "Sand",       hex: "#e8d8b0" },
  { name: "Sky",        hex: "#7ab8d4" },
];

const fonts: FontEntry[] = [
  {
    name: "Lato",
    role: "Heading",
    sample: "Jouw droomvilla in Spanje.",
    cssFamily: "var(--font-inter), sans-serif",
  },
  {
    name: "Lato",
    role: "Body",
    sample: "Luxury villas. Unforgettable stays.",
    cssFamily: "var(--font-inter), sans-serif",
  },
];

export default function DroomvillaSpanjePage() {
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
            <span className="section-label">{isEn ? "Holiday Villa Rental" : "Feriehus Utleie"}</span>
            <span className="section-label">2025</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] mb-8 leading-[0.9]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Droomvilla<br />Spanje
          </h1>
          <p className="text-[#635f5a] text-sm md:text-base max-w-2xl leading-relaxed">
            {isEn
              ? "A Wix-based holiday villa rental platform with more complexity under the hood than it looks. The centrepiece is a custom two-CMS rating system with an aggregation layer that calculates and surfaces composite scores in real time — built entirely in Wix Velo (TypeScript) because no existing plugin could do what was needed. Also handled SEO fixes, bug fixes, form additions and a full mail pipeline."
              : "En Wix-basert feriehus-utleieplattform med mer kompleksitet under overflaten enn det ser ut som. Senterstykket er et tilpasset to-CMS vurderingssystem med et aggregeringslag som beregner og presenterer sammensatte poeng i sanntid — bygget helt i Wix Velo (TypeScript) fordi ingen eksisterende plugin kunne gjøre det som var nødvendig. Håndterte også SEO-fikser, feilretting, skjematillegg og en fullstendig e-postpipeline."}
          </p>
        </div>

        {/* No gallery yet — placeholder */}
        <div
          className="w-full aspect-[16/7] bg-[#151a15] flex items-center justify-center mb-16"
          style={{ borderRadius: "2px" }}
        >
          <span className="font-mono text-[10px] text-[#ede9e2]/10 tracking-widest uppercase">
            {isEn ? "Screenshots coming soon" : "Skjermbilder kommer snart"}
          </span>
        </div>

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
    </section>
  );
}
