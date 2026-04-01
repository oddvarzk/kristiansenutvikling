/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";
import ProjectGallerySlider from "@/app/components/ProjectGallerySlider";

const techs = ["Wix", "Wix Velo", "TypeScript", "SEO", "CMS Integration"];

const deliverables = [
  {
    icon: "01",
    title: "Dual-CMS Rating System",
    titleNo: "Dual-CMS vurderingssystem",
    desc: "Built a custom review and rating engine in Wix Velo (TypeScript) that connects two separate CMS platforms, runs the data through an aggregation layer and outputs live composite scores across all listings. No plugin on the market does this — it had to be built from scratch. For a villa rental business, a visible and trustworthy rating system isn't decoration. Guests default to whoever looks most credible, and that trust converts directly into reservations.",
    descNo: "Bygget en tilpasset anmeldelses- og vurderingsmotor i Wix Velo (TypeScript) som kobler to separate CMS-plattformer, kjører dataen gjennom et aggregeringslag og leverer live sammensatte poengsummer på tvers av alle utleier. Ingen plugin på markedet gjør dette — det måtte bygges fra bunnen av. For en villa-utleiebedrift er et synlig og troverdig vurderingssystem ikke dekorasjon. Gjester velger den som ser mest pålitelig ut, og den tilliten konverterer direkte til reservasjoner.",
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
              <span className="section-label">{isEn ? "Holiday Villa Rental" : "Feriehus Utleie"}</span>
              <span className="section-label">2025</span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] leading-[0.9]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Droomvilla<br />Spanje
            </h1>
            <p className="text-sm font-medium text-[#857f7a]/70 mt-4 tracking-wide">
              {isEn ? "Rating & Review System" : "Vurderings- og anmeldelsessystem"}
            </p>
          </div>
          <div className="lg:pt-16 flex flex-col justify-end">
            <p className="text-[#857f7a] text-sm md:text-base leading-relaxed">
              {isEn
                ? "Droomvilla Spanje had a site they were happy with — they weren't looking for a rebuild. What they needed was something that simply didn't exist yet: a way to pull reviews and ratings from two separate CMS platforms, run them through a custom aggregation layer, and surface a live composite score across their listings. There's no plugin for that. So I built one, entirely in Wix Velo (TypeScript). For a holiday villa rental business, trust is everything — a guest choosing between listings is going with whoever looks most credible. Getting that rating system right isn't a nice-to-have, it directly impacts bookings. Also handled SEO fixes, bug fixes, forms and a full mail pipeline while I was at it."
                : "Droomvilla Spanje hadde en nettside de var fornøyde med — de lette ikke etter en komplett ombygging. Det de trengte var noe som rett og slett ikke fantes ennå: en måte å hente anmeldelser og vurderinger fra to separate CMS-plattformer, kjøre dem gjennom et tilpasset aggregeringslag og vise en live sammensatt poengsum på tvers av utleiene deres. Det finnes ingen plugin for det. Så jeg bygget en, helt i Wix Velo (TypeScript). For en feriehus-utleiebedrift er tillit alt — en gjest som velger mellom utleier, går med den som ser mest troverdig ut. Å få det vurderingssystemet riktig er ikke bare en bonus, det påvirker direkte bestillinger. Håndterte også SEO-fikser, feilretting, skjemaer og en fullstendig e-postpipeline mens jeg var inne i det."}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <ProjectGallerySlider
          images={[
            { src: "/images/projects/droomvilla-1.jpg", alt: "Droomvilla Spanje skjermbilde 1" },
            { src: "/images/projects/droomvilla-2.jpg", alt: "Droomvilla Spanje skjermbilde 2" },
            { src: "/images/projects/droomvilla-3.jpg", alt: "Droomvilla Spanje skjermbilde 3" },
            { src: "/images/projects/droomvilla-4.jpg", alt: "Droomvilla Spanje skjermbilde 4" },
          ]}
          isEn={isEn}
          placeholderBg="#151a15"
        />

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
