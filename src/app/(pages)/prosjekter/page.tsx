/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  badges: string[];
  year: string;
}

export default function Projekter() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  const getFeaturedProjects = (): Project[] => {
    if (isEn) {
      return [
        { id: "holidaze", title: "Holidaze", description: "A modern, user-focused booking solution for holiday homes with interactive maps and calendar.", href: "/en/prosjekter/holidaze", image: "/images/projects/holidazeHome.png", badges: ["Next.js", "React", "Booking"], year: "2024" },
        { id: "kragero-naturstein", title: "Kragero Naturstein", description: "Professional website for a Norwegian natural stone supplier, showcasing products and services.", href: "/en/prosjekter/kragero-naturstein", image: "/images/projects/kragero-naturstein-home.png", badges: ["Next.js", "Tailwind CSS", "SEO"], year: "2025" },
        { id: "nora-marketing", title: "Nora Marketing", description: "Modern marketing agency website focused on conversions and brand credibility.", href: "/en/prosjekter/nora-marketing", image: "/images/projects/nora-marketing-home.png", badges: ["Next.js", "Tailwind CSS", "Marketing"], year: "2025" },
      ];
    }
    return [
      { id: "holidaze", title: "Holidaze", description: "En moderne, brukerfokusert bookingløsning for ferieboliger med interaktive kart og kalender.", href: "/prosjekter/holidaze", image: "/images/projects/holidazeHome.png", badges: ["Next.js", "React", "Booking"], year: "2024" },
      { id: "kragero-naturstein", title: "Kragero Naturstein", description: "Profesjonell nettside for en norsk natursteinleverandør med produktpresentasjon og tjenester.", href: "/prosjekter/kragero-naturstein", image: "/images/projects/kragero-naturstein-home.png", badges: ["Next.js", "Tailwind CSS", "SEO"], year: "2025" },
      { id: "nora-marketing", title: "Nora Marketing", description: "Moderne markedsføringsbyrå-nettside med fokus på konverteringer og merkevarebygging.", href: "/prosjekter/nora-marketing", image: "/images/projects/nora-marketing-home.png", badges: ["Next.js", "Tailwind CSS", "Markedsføring"], year: "2025" },
    ];
  };

  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebPage", "@id": "https://kristiansenutvikling.no/prosjekter#webpage", url: "https://kristiansenutvikling.no/prosjekter", name: "Prosjekter | Kristiansen Utvikling" },
            { "@type": "BreadcrumbList", "@id": "https://kristiansenutvikling.no/prosjekter#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" }, { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" }] },
          ],
        })}
      </Script>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#d4ff3e]" />
            <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">
              {isEn ? "Selected work" : "Utvalgte prosjekter"}
            </p>
          </div>
          <h1 className="text-[12vw] md:text-[6vw] font-black tracking-tight text-[#f0ede7] leading-[0.92] mb-8" style={{ fontFamily: "Satoshi, sans-serif" }}>
            {t.projects.title}
          </h1>
          <p className="text-[#6e6b66] text-base md:text-lg max-w-xl leading-relaxed">
            {isEn ? "A selection of my best projects in web development and design." : "Et utvalg av mine beste prosjekter innen webutvikling og design."}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 pb-32 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          {/* Featured — large first card */}
          <Link href={featuredProjects[0].href as any} className="group block mb-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#111111] aspect-[16/7]">
              <Image src={featuredProjects[0].image} alt={featuredProjects[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-103" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#f0ede7] tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    {featuredProjects[0].title}
                  </h2>
                  <p className="text-sm text-[#f0ede7]/60 mt-1 max-w-sm">{featuredProjects[0].description}</p>
                </div>
                <span className="text-xs text-[#6e6b66] font-mono">{featuredProjects[0].year}</span>
              </div>
            </div>
          </Link>

          {/* Remaining two — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.slice(1).map((project) => (
              <Link key={project.id} href={project.href as any} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-[#111111] aspect-[4/3]">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-[#f0ede7] tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        {project.title}
                      </h2>
                      <p className="text-xs text-[#f0ede7]/50 mt-1">{project.description}</p>
                    </div>
                    <span className="text-xs text-[#6e6b66] font-mono shrink-0 ml-3">{project.year}</span>
                  </div>
                </div>
                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.badges.map((b) => (
                    <span key={b} className="text-xs font-mono text-[#6e6b66]">{b}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[10vw] md:text-[5vw] font-black tracking-tight text-[#f0ede7] leading-[0.95] mb-6" style={{ fontFamily: "Satoshi, sans-serif" }}>
            {isEn ? "Want to start your own?" : "Vil du starte ditt eget?"}
          </h2>
          <p className="text-[#6e6b66] text-base mb-8 max-w-sm mx-auto">
            {isEn ? "Contact me for a no-obligation chat." : "Ta kontakt for en uforpliktende prat."}
          </p>
          <Link href={getLocalizedPath("/kontakt", currentLanguage) as any} className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300">
            {isEn ? "Get in touch" : "Ta kontakt"}
          </Link>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
