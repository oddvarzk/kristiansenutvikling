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
  href: string;
  image: string;
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
        { id: "holidaze",           title: "Holidaze",           description: "Modern booking platform for holiday homes.",              href: "/en/prosjekter/holidaze",            image: "/images/projects/holidazeHome.png",            tag: "Next.js / React",     year: "2024", rotation: -1.4 },
        { id: "kragero-naturstein", title: "Kragero Naturstein", description: "Website for a Norwegian natural stone supplier.",         href: "/en/prosjekter/kragero-naturstein",   image: "/images/projects/kragero-naturstein-home.png", tag: "Next.js / SEO",       year: "2025", rotation:  0.9 },
        { id: "nora-marketing",     title: "Nora Marketing",     description: "Marketing agency site focused on conversions.",           href: "/en/prosjekter/nora-marketing",       image: "/images/projects/nora-marketing-home.png",    tag: "Next.js / Marketing", year: "2025", rotation: -0.7 },
      ]
    : [
        { id: "holidaze",           title: "Holidaze",           description: "Moderne bookingplattform for ferieboliger.",              href: "/prosjekter/holidaze",               image: "/images/projects/holidazeHome.png",            tag: "Next.js / React",     year: "2024", rotation: -1.4 },
        { id: "kragero-naturstein", title: "Kragero Naturstein", description: "Nettside for en norsk natursteinleverandør.",             href: "/prosjekter/kragero-naturstein",      image: "/images/projects/kragero-naturstein-home.png", tag: "Next.js / SEO",       year: "2025", rotation:  0.9 },
        { id: "nora-marketing",     title: "Nora Marketing",     description: "Markedsføringsbyrå-nettside med fokus på konverteringer.", href: "/prosjekter/nora-marketing",          image: "/images/projects/nora-marketing-home.png",    tag: "Next.js / Marketing", year: "2025", rotation: -0.7 },
      ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.2,
        });
      }

      if (!stageRef.current) return;
      const cards = stageRef.current.querySelectorAll<HTMLElement>(".float-card");

      // Entrance — staggered fly-in from below
      gsap.from(cards, {
        y: 90, opacity: 0, duration: 1.0, stagger: 0.16, ease: "power4.out",
        scrollTrigger: { trigger: stageRef.current, start: "top 78%" },
      });

      // Continuous float — fromTo so ALL cards share y:0 as their baseline.
      // Only the phase (delay) differs; amplitude is identical for every card.
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 0 },
          {
            y:        -10,
            duration: 2.6 + i * 0.4,
            ease:     "sine.inOut",
            yoyo:     true,
            repeat:   -1,
            delay:    i * 0.7,   // phase-offset only — no baseline drift
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

      {/* ── Full page — warm off-white ───────────────────────────── */}
      <div ref={pageRef} style={{ backgroundColor: "#f4f1ec", minHeight: "100vh" }}>

        {/* REINT — fixed behind everything, fills the upper portion */}
        <div
          className="fixed top-0 left-0 right-0 h-screen flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily:    "Aktura, serif",
              fontSize:      "clamp(70px, 15vw, 210px)",
              letterSpacing: "-0.03em",
              color:         "#9e9188",
              lineHeight:    1,
              fontWeight:    400,
            }}
          >
            REINT
          </span>
        </div>

        {/* Page heading — transparent, right over REINT */}
        <div className="relative z-10 container mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-12">
          <h1
            ref={headingRef}
            className="text-[11vw] md:text-[5.5vw] font-black tracking-tight text-[#1a1a1a] leading-[0.92]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.projects.title}
          </h1>
          <p className="text-[#8a8680] text-sm md:text-base max-w-sm leading-relaxed mt-4">
            {isEn
              ? "Built with care. Shipped with quality."
              : "Bygget med omhu. Levert med kvalitet."}
          </p>
        </div>

        {/* ── Floating cards ───────────────────────────────────── */}
        <div
          ref={stageRef}
          className="relative z-10 container mx-auto px-6 md:px-10 pb-24 md:pb-36"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl items-end">
            {projects.map((project, i) => (
              /* Wrapper stays straight — rotation only on the image card */
              <div key={project.id} className="float-card">
                <Link href={project.href as any} className="group block">
                  {/* Card image — rotated here so layout bounding boxes stay identical */}
                  <div
                    className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-white"
                    style={{
                      transform: `rotate(${project.rotation}deg)`,
                      boxShadow: "0 12px 40px rgba(0,0,0,0.13), 0 3px 10px rgba(0,0,0,0.07)",
                      transition: "box-shadow 0.4s ease, transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 22px 60px rgba(0,0,0,0.18), 0 6px 18px rgba(0,0,0,0.10)";
                      el.style.transform = `rotate(${project.rotation * 0.4}deg)`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.13), 0 3px 10px rgba(0,0,0,0.07)";
                      el.style.transform = `rotate(${project.rotation}deg)`;
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 90vw, 30vw"
                      priority={i === 0}
                    />
                  </div>

                  {/* Info below */}
                  <div className="mt-3 px-0.5 flex items-start justify-between gap-2">
                    <div>
                      <h2
                        className="text-sm font-black tracking-tight text-[#1a1a1a] group-hover:text-[#080808] transition-colors duration-200"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        {project.title}
                      </h2>
                      <p className="text-xs text-[#8a8680] mt-0.5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right mt-0.5">
                      <span className="block text-[10px] font-mono text-[#a09a92]">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA — full VH, content pinned to bottom ─────────── */}
        <div
          className="relative z-10 flex flex-col justify-end"
          style={{ minHeight: "100vh" }}
        >
          {/* Thin top rule at the very bottom before content */}
          <div style={{ borderTop: "1px solid #e0dbd3" }}>
          <div className="container mx-auto px-6 md:px-10 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 max-w-4xl">
              {/* Left — heading */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#a09a92] font-medium mb-4">
                  {isEn ? "Next steps" : "Neste steg"}
                </p>
                <h2
                  className="text-4xl md:text-6xl font-black tracking-tight text-[#1a1a1a] leading-[0.92]"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {isEn ? "Let's make\nsomething\ngreat." : "La oss lage\nnoe\nflott."}
                </h2>
              </div>

              {/* Right — action */}
              <div className="flex flex-col gap-4 md:items-end shrink-0">
                <p className="text-sm text-[#8a8680] max-w-xs md:text-right leading-relaxed">
                  {isEn
                    ? "Got an idea or a site that needs new life? I'd love to hear about it."
                    : "Har du en idé, eller en side som trenger nytt liv? Jeg hører gjerne om det."}
                </p>
                <Link
                  href={getLocalizedPath("/kontakt", currentLanguage) as any}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#1a1a1a] text-[#f4f1ec] hover:bg-[#080808] transition-colors duration-300 self-start md:self-auto"
                >
                  {isEn ? "Get in touch" : "Ta kontakt"}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          </div>{/* /border wrapper */}
        </div>{/* /CTA full-VH */}

      </div>

      <BackToTop />
    </>
  );
}
