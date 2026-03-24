/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";

const techs = ["WordPress", "Elementor", "Video Editing", "HTML", "CSS"];

const deliverables = [
  {
    icon: "01",
    title: "Bug Fixes & Functionality",
    titleNo: "Feilretting og funksjonalitet",
    desc: "Diagnosed and resolved a range of accumulated Elementor bugs — broken layouts, non-functional elements and broken mobile behaviour — restoring the site to full working order.",
    descNo: "Diagnostiserte og løste en rekke akkumulerte Elementor-feil — ødelagte layout, ikke-fungerende elementer og ødelagt mobilatferd — og gjenopprettet nettstedet til full funksjonell tilstand.",
  },
  {
    icon: "02",
    title: "Content Hierarchy",
    titleNo: "Innholdshierarki",
    desc: "Reorganised the page structure and visual flow so information lands in the right order — services first, trust signals next, clear path to contact.",
    descNo: "Omstrukturerte sidestrukturen og den visuelle flyten slik at informasjonen lander i riktig rekkefølge — tjenester først, tillitssignaler deretter, klar vei til kontakt.",
  },
  {
    icon: "03",
    title: "Video Editing",
    titleNo: "Videoredigering",
    desc: "Edited and produced video assets for the site — graded for tone, trimmed for pacing and exported at settings optimised for fast web delivery.",
    descNo: "Redigerte og produserte videoinnhold til nettstedet — gradert for tone, trimmet for tempo og eksportert med innstillinger optimalisert for rask nettlevering.",
  },
  {
    icon: "04",
    title: "Image Sorting & Placement",
    titleNo: "Bildesortering og -plassering",
    desc: "Curated and repositioned the image library throughout — right shots in the right context, consistent sizing and purposeful visual rhythm.",
    descNo: "Kurerte og omposisjonerte bildebiblioteket gjennomgående — riktige bilder i riktig kontekst, konsistent størrelse og bevisst visuell rytme.",
  },
  {
    icon: "05",
    title: "Section Additions",
    titleNo: "Seksjonstillegg",
    desc: "Designed and built new page sections that were missing — filling gaps in the customer journey and giving the site a more complete, professional feel.",
    descNo: "Designet og bygget nye sideseksjoner som manglet — fylte hull i kundereisen og ga nettstedet en mer komplett, profesjonell følelse.",
  },
];

// -- Placeholder data — update with actual brand values --
const colors: ColorSwatch[] = [
  { name: "Background", hex: "#141419" },
  { name: "Surface",    hex: "#1e1e26" },
  { name: "Primary",    hex: "#1a3fa8" },
  { name: "Steel",      hex: "#8090b0" },
  { name: "Light",      hex: "#e8eaf2" },
];

const fonts: FontEntry[] = [
  {
    name: "Roboto",
    role: "Heading",
    sample: "Solid construction. Reliable results.",
    cssFamily: "var(--font-inter), sans-serif",
  },
  {
    name: "Roboto",
    role: "Body",
    sample: "Quality craftsmanship since day one.",
    cssFamily: "var(--font-inter), sans-serif",
  },
];

export default function ByggmesterDanielsenPage() {
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
            <span className="section-label">{isEn ? "Construction Company" : "Byggefirma"}</span>
            <span className="section-label">2025</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] mb-8 leading-[0.9]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Byggmester<br />Danielsen
          </h1>
          <p className="text-[#635f5a] text-sm md:text-base max-w-2xl leading-relaxed">
            {isEn
              ? "Brought in to fix what wasn't working. The existing Elementor build had accumulated bugs, broken sections and structural problems that needed a steady hand. Fixed core functionality, reorganised the content hierarchy, handled video editing, cleaned up image placement throughout, and added missing sections that filled the gaps in the customer journey."
              : "Hentet inn for å fikse det som ikke fungerte. Den eksisterende Elementor-bygg hadde akkumulert feil, ødelagte seksjoner og strukturproblemer som trengte en stødig hånd. Fikset kjernefunksjonalitet, omorganiserte innholdshierarkiet, håndterte videoredigering, ryddet opp i bildeplasskering gjennom hele siden og la til manglende seksjoner som fylte hullene i kundereisen."}
          </p>
        </div>

        {/* No gallery yet — placeholder */}
        <div
          className="w-full aspect-[16/7] bg-[#141419] flex items-center justify-center mb-16"
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
