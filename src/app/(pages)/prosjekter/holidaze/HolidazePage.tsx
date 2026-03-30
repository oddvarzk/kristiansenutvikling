/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import ProjectDesignShowcase, { ColorSwatch, FontEntry } from "@/app/components/ProjectDesignShowcase";

const galleryImages = [
  { src: "/images/projects/holidazeHome.png", alt: "Holidaze forsiden" },
  { src: "/images/projects/holidaze1.png",    alt: "Holidaze skjermbilde 1" },
  { src: "/images/projects/holidaze2.png",    alt: "Holidaze skjermbilde 2" },
];

const techs = ["TypeScript", "React", "Tailwind CSS", "Mapbox GL JS", "FullCalendar", "Figma"];

const deliverables = [
  {
    icon: "01",
    title: "Figma Prototype",
    titleNo: "Figma-prototype",
    desc: "Full end-to-end design in Figma before a single line of code — wireframes, component library and interactive prototype.",
    descNo: "Fullstendig design i Figma fra start til slutt — wireframes, komponentbibliotek og interaktiv prototype.",
  },
  {
    icon: "02",
    title: "Interactive Map",
    titleNo: "Interaktivt kart",
    desc: "Mapbox GL JS integration with live property pins, clustering and viewport-aware search filtering.",
    descNo: "Mapbox GL JS-integrasjon med levende eiendommspins, clustering og kartbasert søkefiltrering.",
  },
  {
    icon: "03",
    title: "Booking Calendar",
    titleNo: "Bookingkalender",
    desc: "FullCalendar-powered availability and reservation system with real-time conflict prevention.",
    descNo: "FullCalendar-drevet tilgjengelighets- og reservasjonssystem med sanntids konfliktforebygging.",
  },
  {
    icon: "04",
    title: "Type-safe Architecture",
    titleNo: "Typesikker arkitektur",
    desc: "Fully written in TypeScript — strict types across every component, hook and API boundary.",
    descNo: "Fullstendig skrevet i TypeScript — strenge typer gjennom alle komponenter, hooks og API-grenser.",
  },
];

// -- Placeholder data — update with actual brand values --
const colors: ColorSwatch[] = [
  { name: "Background",  hex: "#0f1117" },
  { name: "Surface",     hex: "#1a2236" },
  { name: "Primary",     hex: "#3b6ef8" },
  { name: "Accent",      hex: "#60d4a0" },
  { name: "Foreground",  hex: "#f0f4ff" },
];

const fonts: FontEntry[] = [
  {
    name: "Inter",
    role: "Heading",
    sample: "Find your perfect stay.",
    cssFamily: "var(--font-inter), sans-serif",
  },
  {
    name: "Inter",
    role: "Body",
    sample: "Book holiday homes with ease.",
    cssFamily: "var(--font-inter), sans-serif",
  },
];

export default function HolidazePage() {
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
            <span className="section-label">{isEn ? "Holiday Booking Platform" : "Ferie Bookingplattform"}</span>
            <span className="section-label" style={{ color: "#c5f135" }}>2025 — Eksamensprosjekt / A</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] mb-8 leading-[0.9]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Holidaze
          </h1>
          <p className="text-[#635f5a] text-sm md:text-base max-w-2xl leading-relaxed mb-6">
            {isEn
              ? "A fully type-safe booking platform built as my final academic exam — awarded top marks. The entire product was designed from scratch in Figma, then brought to life in TypeScript, React and Tailwind CSS. Users can search, filter and book holiday homes through an interactive Mapbox map and a live availability calendar."
              : "En fullstendig typesikker bookingplattform bygget som mitt avsluttende eksamensprosjekt — og belønnet med toppkarakter. Hele produktet ble designet fra bunnen av i Figma, deretter realisert i TypeScript, React og Tailwind CSS. Brukere kan søke, filtrere og booke ferieboliger gjennom et interaktivt Mapbox-kart og en live tilgjengelighetskalender."}
          </p>

          {/* Figma link placeholder */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#635f5a] border border-[#ede9e2]/8 px-4 py-2 hover:text-[#ede9e2] hover:border-[#ede9e2]/20 transition-colors duration-200"
            style={{ borderRadius: "2px" }}
            aria-label="Figma prototype (link to be added)"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0acf83"/>
              <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#a259ff"/>
              <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#f24e1e"/>
              <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#ff7262"/>
              <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1abcfe"/>
            </svg>
            {isEn ? "View Figma prototype" : "Se Figma-prototype"}
          </a>
        </div>

        {/* Gallery */}
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
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </button>
          ))}
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
