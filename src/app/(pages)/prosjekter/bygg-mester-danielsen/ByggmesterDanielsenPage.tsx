/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";
import ProjectGallerySlider from "@/app/components/ProjectGallerySlider";

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

const colors: ColorSwatch[] = [
  { name: "Background", hex: "#0f0e0d" },
  { name: "Surface",    hex: "#1a1917" },
  { name: "Primary",    hex: "#e05530" },
  { name: "Warm White", hex: "#f0ece4" },
  { name: "Muted",      hex: "#3a3632" },
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
    <section className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-40 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Back */}
        <Link
          href={getLocalizedPath("/prosjekter", currentLanguage) as any}
          className="editorial-link inline-flex items-center gap-1.5 text-sm text-[#7a7570] hover:text-[#ede9e2] transition-colors mb-16"
        >
          ← {isEn ? "Back to projects" : "Tilbake til prosjekter"}
        </Link>

        {/* Header — two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="section-label">{isEn ? "Construction Company" : "Byggefirma"}</span>
              <span className="section-label">2026</span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] leading-[0.9]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Byggmester<br />Danielsen
            </h1>
          </div>
          <div className="lg:pt-16 flex flex-col justify-end">
            <p className="text-[#7a7570] text-sm md:text-base leading-relaxed">
              {isEn
                ? "Brought in to fix what wasn't working. The existing Elementor build had accumulated bugs, broken sections and structural problems that needed a steady hand. Fixed core functionality, reorganised the content hierarchy, handled video editing, cleaned up image placement throughout, and added missing sections that filled the gaps in the customer journey."
                : "Hentet inn for å fikse det som ikke fungerte. Den eksisterende Elementor-bygg hadde akkumulert feil, ødelagte seksjoner og strukturproblemer som trengte en stødig hånd. Fikset kjernefunksjonalitet, omorganiserte innholdshierarkiet, håndterte videoredigering, ryddet opp i bildeplasskering gjennom hele siden og la til manglende seksjoner som fylte hullene i kundereisen."}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <ProjectGallerySlider
          images={[
            { src: "/images/projects/bygg-1.jpg", alt: "Byggmester Danielsen skjermbilde 1" },
            { src: "/images/projects/bygg-2.jpg", alt: "Byggmester Danielsen skjermbilde 2" },
            { src: "/images/projects/bygg-3.jpg", alt: "Byggmester Danielsen skjermbilde 3" },
            { src: "/images/projects/bygg-4.jpg", alt: "Byggmester Danielsen skjermbilde 4" },
            { src: "/images/projects/bygg-5.jpg", alt: "Byggmester Danielsen skjermbilde 5" },
          ]}
          isEn={isEn}
          placeholderBg="#141419"
        />

        {/* Deliverables */}
        <div className="border-t border-[#ede9e2]/6 pt-16 mb-0">
          <span className="section-label block mb-10">
            {isEn ? "What was delivered" : "Hva ble levert"}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((d) => (
              <div key={d.icon} className="flex gap-6">
                <span className="font-mono text-[10px] text-[#7a7570]/40 tracking-widest pt-0.5 shrink-0">{d.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#ede9e2] mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    {isEn ? d.title : d.titleNo}
                  </h3>
                  <p className="text-xs text-[#7a7570] leading-relaxed">
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
                className="text-xs font-mono px-3 py-1.5 border border-[#ede9e2]/8 text-[#7a7570]"
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
