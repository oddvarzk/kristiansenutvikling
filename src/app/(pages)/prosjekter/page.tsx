/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  href: string | null;
  image: string | null;
  placeholder: string | null;
  tag: string;
  year: string;
  rotation: number;
}

export default function Projekter() {
  const { t, currentLanguage } = useTranslations();
  const pageRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isEn = currentLanguage === "en";

  const projects: Project[] = isEn
    ? [
        { id: "holidaze",              title: "Holidaze",              description: "Modern booking platform for holiday homes.",              href: "/en/prosjekter/holidaze",          image: "/images/projects/holidazeHome.png", placeholder: null,      tag: "Next.js / React",     year: "2024", rotation: -1.2 },
        { id: "kragero-naturstein",    title: "Kragerø Naturstein",    description: "Website for a Norwegian natural stone supplier.",         href: "/en/prosjekter/kragero-naturstein", image: null,                               placeholder: "#181815", tag: "Next.js / SEO",       year: "2025", rotation:  0.8 },
        { id: "nora-marketing",        title: "Nora Marketing",        description: "Marketing agency site focused on conversions.",           href: "/en/prosjekter/nora-marketing",     image: null,                               placeholder: "#16141b", tag: "Next.js / Marketing", year: "2025", rotation: -0.6 },
        { id: "droomvilla-spanje",     title: "Droomvilla Spanje",     description: "Holiday villa rental site for the Spanish market.",       href: null,                               image: null,                               placeholder: "#151a15", tag: "Web / Travel",        year: "2025", rotation:  1.0 },
        { id: "bygg-mester-danielsen", title: "Bygg Mester Danielsen", description: "Website for a local Norwegian construction company.",     href: null,                               image: null,                               placeholder: "#141419", tag: "Web / Construction",  year: "2025", rotation: -0.5 },
      ]
    : [
        { id: "holidaze",              title: "Holidaze",              description: "Moderne bookingplattform for ferieboliger.",              href: "/prosjekter/holidaze",              image: "/images/projects/holidazeHome.png", placeholder: null,      tag: "Next.js / React",     year: "2024", rotation: -1.2 },
        { id: "kragero-naturstein",    title: "Kragerø Naturstein",    description: "Nettside for en norsk natursteinleverandør.",             href: "/prosjekter/kragero-naturstein",    image: null,                               placeholder: "#181815", tag: "Next.js / SEO",       year: "2025", rotation:  0.8 },
        { id: "nora-marketing",        title: "Nora Marketing",        description: "Markedsføringsbyrå-nettside med fokus på konverteringer.", href: "/prosjekter/nora-marketing",        image: null,                               placeholder: "#16141b", tag: "Next.js / Marketing", year: "2025", rotation: -0.6 },
        { id: "droomvilla-spanje",     title: "Droomvilla Spanje",     description: "Feriehus-utleieside for det spanske markedet.",           href: null,                               image: null,                               placeholder: "#151a15", tag: "Web / Reiseliv",      year: "2025", rotation:  1.0 },
        { id: "bygg-mester-danielsen", title: "Bygg Mester Danielsen", description: "Nettside for et lokalt norsk byggefirma.",                href: null,                               image: null,                               placeholder: "#141419", tag: "Web / Bygg",          year: "2025", rotation: -0.5 },
      ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 35, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.15,
        });
      }

      if (!stageRef.current) return;
      const cards = stageRef.current.querySelectorAll<HTMLElement>(".float-card");

      gsap.from(cards, {
        y: 80, opacity: 0, duration: 1.0, stagger: 0.14, ease: "power4.out",
        scrollTrigger: { trigger: stageRef.current, start: "top 80%" },
      });

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 0 },
          {
            y:        -9,
            duration: 2.5 + i * 0.35,
            ease:     "sine.inOut",
            yoyo:     true,
            repeat:   -1,
            delay:    i * 0.65,
          }
        );
      });
    });

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {/* Full page — warm off-white */}
      <div ref={pageRef} style={{ backgroundColor: "#f2efe9", minHeight: "100vh" }}>

        {/* Aktura watermark */}
        <div
          className="fixed top-0 left-0 right-0 h-screen flex items-end justify-center pb-[18vh] pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily:    "Aktura, serif",
              fontSize:      "clamp(60px, 14vw, 200px)",
              letterSpacing: "-0.02em",
              color:         "#c4bdb2",
              lineHeight:    1,
              fontWeight:    400,
            }}
          >
            REINT
          </span>
        </div>

        {/* Page heading */}
        <div className="relative z-10 container mx-auto px-6 md:px-10 pt-36 md:pt-48 pb-14">
          <span
            className="section-label block mb-6"
            style={{ color: "#a09890" }}
          >
            {isEn ? "Selected work" : "Utvalgte prosjekter"}
          </span>
          <h1
            ref={headingRef}
            className="text-[10vw] md:text-[5vw] font-black tracking-tight text-[#1a1a1a] leading-[0.92]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.projects.title}
          </h1>
          <p className="text-[#8a8278] text-sm max-w-xs leading-relaxed mt-4">
            {isEn
              ? "Built with care. Shipped with quality."
              : "Bygget med omhu. Levert med kvalitet."}
          </p>
        </div>

        {/* Floating cards */}
        <div
          ref={stageRef}
          className="relative z-10 container mx-auto px-6 md:px-10 pb-24 md:pb-36"
        >
          <div className="grid gap-7 md:gap-9" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {projects.map((project, i) => (
              <div key={project.id} className="float-card">
                {project.href ? (
                  <Link href={project.href as any} className="group block">
                    <div
                      className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
                      style={{
                        backgroundColor: project.image ? "white" : (project.placeholder ?? "#1b1b1b"),
                        transform: `rotate(${project.rotation}deg)`,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                        transition: "box-shadow 0.4s ease, transform 0.4s ease",
                        borderRadius: "2px",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.boxShadow = "0 18px 52px rgba(0,0,0,0.15), 0 5px 16px rgba(0,0,0,0.08)";
                        el.style.transform = `rotate(${project.rotation * 0.3}deg)`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)";
                        el.style.transform = `rotate(${project.rotation}deg)`;
                      }}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 90vw, 30vw"
                          priority={i === 0}
                        />
                      ) : (
                        <span className="text-[10px] text-black/15 font-mono tracking-widest uppercase">
                          {isEn ? "coming soon" : "kommer snart"}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 px-0.5 flex items-start justify-between gap-2">
                      <div>
                        <h2
                          className="text-sm font-bold tracking-tight text-[#1a1a1a] group-hover:text-[#0b0b0b] transition-colors duration-200"
                          style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                          {project.title}
                        </h2>
                        <p className="text-xs text-[#8a8278] mt-0.5 leading-relaxed">{project.description}</p>
                      </div>
                      <div className="shrink-0 text-right mt-0.5">
                        <span className="block text-[10px] font-mono text-[#a09890]">{project.year}</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="group block">
                    <div
                      className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
                      style={{
                        backgroundColor: project.placeholder ?? "#1b1b1b",
                        transform: `rotate(${project.rotation}deg)`,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                        borderRadius: "2px",
                      }}
                    >
                      <span className="text-[10px] text-black/15 font-mono tracking-widest uppercase">
                        {isEn ? "coming soon" : "kommer snart"}
                      </span>
                    </div>
                    <div className="mt-3 px-0.5 flex items-start justify-between gap-2">
                      <div>
                        <h2
                          className="text-sm font-bold tracking-tight text-[#1a1a1a]"
                          style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                          {project.title}
                        </h2>
                        <p className="text-xs text-[#8a8278] mt-0.5 leading-relaxed">{project.description}</p>
                      </div>
                      <div className="shrink-0 text-right mt-0.5">
                        <span className="block text-[10px] font-mono text-[#a09890]">{project.year}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA — full VH, content at bottom */}
        <div
          className="relative z-10 flex flex-col justify-end"
          style={{ minHeight: "100vh" }}
        >
          <div style={{ borderTop: "1px solid #d8d2c8" }}>
            <div className="container mx-auto px-6 md:px-10 py-16 md:py-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 max-w-4xl">
                <div>
                  <span
                    className="section-label block mb-5"
                    style={{ color: "#a09890" }}
                  >
                    {isEn ? "Next steps" : "Neste steg"}
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-[0.92]"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {isEn ? "Let's make\nsomething\ngreat." : "La oss lage\nnoe\nflott."}
                  </h2>
                </div>

                <div className="flex flex-col gap-4 md:items-end shrink-0">
                  <p className="text-sm text-[#8a8278] max-w-xs md:text-right leading-relaxed">
                    {isEn
                      ? "Got an idea or a site that needs new life? I'd love to hear about it."
                      : "Har du en idé, eller en side som trenger nytt liv? Jeg hører gjerne om det."}
                  </p>
                  <Link
                    href={getLocalizedPath("/kontakt", currentLanguage) as any}
                    className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 bg-[#1a1a1a] text-[#f2efe9] hover:bg-[#0b0b0b] transition-colors duration-200 self-start md:self-auto"
                    style={{ borderRadius: "2px" }}
                  >
                    {isEn ? "Get in touch" : "Ta kontakt"}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <BackToTop />
    </>
  );
}
