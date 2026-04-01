"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";


const techStack = [
  // Languages
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PHP",
  "SQL",
  // Frameworks & libraries
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "GSAP",
  // CMS & builders
  "WordPress",
  "Elementor",
  "Wix",
  // Databases
  "PostgreSQL",
  "MySQL",
  // APIs & tools
  "REST APIs",
  "Git",
  "GitHub",
  "Figma",
  "Vercel",
  "SEO",
];

export default function OmMegPage() {
  const { t, currentLanguage } = useTranslations();
  const om = t.omMeg;

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance (no ScrollTrigger — plays on load)
      if (heroRef.current) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-label", { y: 14, opacity: 0, duration: 0.6 })
          .from(".hero-title .line-inner", { y: "110%", duration: 0.85, stagger: 0.12 }, "-=0.25")
          .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.65 }, "-=0.4")
          .from(".hero-line", { scaleX: 0, duration: 0.8, ease: "power4.inOut" }, "-=0.5")
          .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.2");
      }

      // No scroll-trigger heading animations — headings are plain text, no clip wrappers
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div ref={heroRef} className="min-h-screen flex flex-col justify-end pt-28 pb-16 md:pb-24 px-6 md:px-10 bg-[#0b0b0b]">

        <div className="container mx-auto max-w-7xl relative">

          {/* Top row */}
          <div className="flex items-start justify-between mb-10 md:mb-16">
            <span className="hero-label section-label">{om.label}</span>
            <p
              className="hero-tagline hidden md:block text-right text-sm text-[#857f7a] leading-relaxed max-w-[260px]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {om.tagline}
            </p>
          </div>

          {/* Large editorial headline */}
          <div className="hero-title">
            <h1
              className="text-[16vw] md:text-[11vw] font-black tracking-tight leading-[0.88] text-[#ede9e2]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              <span className="block line-wrap">
                <span className="line-inner">{om.title1}</span>
              </span>
              {om.title2 && (
                <span className="block line-wrap">
                  <span className="line-inner text-[#c5f135]">{om.title2}</span>
                </span>
              )}
            </h1>
          </div>

          {/* Mobile tagline */}
          <p
            className="hero-tagline md:hidden mt-6 text-sm text-[#857f7a] leading-relaxed max-w-xs"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {om.tagline}
          </p>

          {/* Divider */}
          <div className="hero-line mt-10 md:mt-14 w-full h-px bg-[#ede9e2]/12" style={{ transformOrigin: "left" }} />

          {/* Scroll hint */}
          <div className="hero-scroll flex items-center gap-3 mt-6">
            <span className="section-label">Scroll</span>
            <div className="w-8 h-px bg-[#857f7a]" />
            <span className="text-[#857f7a] text-xs">↓</span>
          </div>
        </div>
      </div>

      {/* ── STORY ────────────────────────────────────────────────── */}
      <section
        className="stack-card py-24 md:py-36 px-6 md:px-10 bg-[#0b0b0b]"
      >
        <div className="container mx-auto max-w-7xl">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-24">
            <span className="section-label pt-1 shrink-0">{om.story.label}</span>
            <h2
              className="story-heading text-[8vw] md:text-[5vw] font-black tracking-tight leading-[0.92] text-[#ede9e2]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {om.story.heading1}<br />{om.story.heading2}
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Photo placeholder */}
            <div className="story-photo">
              <div
                className="relative w-full aspect-[4/5] bg-[#131313] border border-[#ede9e2]/8 overflow-hidden"
                style={{ borderRadius: "3px" }}
              >
                {/* Decorative corner marks */}
                <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#c5f135]/40" />
                <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#c5f135]/40" />
                <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#c5f135]/40" />
                <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#c5f135]/40" />

                {/* Initials */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span
                    className="text-7xl md:text-8xl font-black tracking-tighter text-[#ede9e2]/10 select-none"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    OZK
                  </span>
                  <span className="section-label text-[#857f7a]/60">
                    {currentLanguage === "en" ? "Photo coming soon" : "Bilde kommer"}
                  </span>
                </div>

                {/* Subtle accent stripe */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5f135]/30 to-transparent" />
              </div>

              {/* Name badge below photo */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-[#ede9e2] text-sm font-semibold" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Oddvar Zakarias Kristiansen
                  </p>
                  <p className="section-label mt-1">
                    {currentLanguage === "en" ? "Freelance Web Developer · Oslo" : "Frilansutvikler · Oslo"}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#c5f135] shrink-0" title="Available" />
              </div>
            </div>

            {/* Bio text */}
            <div className="story-bio flex flex-col justify-center gap-6 md:pt-4">
              <p className="text-[#ede9e2]/80 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {om.story.bio1}
              </p>
              <p className="text-[#857f7a] text-base leading-relaxed" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {om.story.bio2}
              </p>
              <p className="text-[#857f7a] text-base leading-relaxed" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {om.story.bio3}
              </p>

              {/* Signature-style detail */}
              <div className="mt-4 pt-6 border-t border-[#ede9e2]/8 flex items-center gap-4">
                <div className="w-8 h-px bg-[#c5f135]/50" />
                <span className="section-label">Oslo, Norge — 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES / PHILOSOPHY ──────────────────────────────────── */}
      <section
        className="stack-card py-24 md:py-36 px-6 md:px-10 bg-[#0f0f0d]"
      >
        <div className="container mx-auto max-w-7xl">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-24">
            <span className="section-label pt-1 shrink-0">{om.values.label}</span>
            <h2
              className="values-heading text-[8vw] md:text-[5vw] font-black tracking-tight leading-[0.92] text-[#ede9e2]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {om.values.heading1}<br />{om.values.heading2}
            </h2>
          </div>

          {/* Values list */}
          <div className="values-list">
            {om.values.items.map((item, idx) => (
              <div
                key={idx}
                className="value-row group flex flex-col md:flex-row gap-6 md:gap-16 py-9 md:py-11 border-t border-[#ede9e2]/6 last:border-b last:border-[#ede9e2]/6"
              >
                <span className="shrink-0 text-[#857f7a] text-xs font-medium tracking-[0.15em] group-hover:text-[#c5f135] transition-colors duration-300 mt-0.5 md:w-10">
                  {item.number}
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold tracking-tight text-[#ede9e2] leading-tight md:flex-1"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#857f7a] text-sm leading-relaxed md:max-w-[360px] md:text-right" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <section
        className="stack-card py-24 md:py-36 px-6 md:px-10 bg-[#0b0b0b]"
      >
        <div className="container mx-auto max-w-7xl">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-24">
            <span className="section-label pt-1 shrink-0">{om.stack.label}</span>
            <h2
              className="stack-heading text-[8vw] md:text-[5vw] font-black tracking-tight leading-[0.92] text-[#ede9e2]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {om.stack.heading1}<br />{om.stack.heading2}
            </h2>
          </div>

          {/* Tag grid */}
          <div className="stack-grid flex flex-wrap gap-3 md:gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="stack-tag group inline-flex items-center gap-2 px-4 py-2.5 border border-[#ede9e2]/10 hover:border-[#c5f135]/40 hover:bg-[#c5f135]/5 transition-all duration-300 text-[#ede9e2]/70 hover:text-[#ede9e2] text-sm font-medium"
                style={{ borderRadius: "2px", fontFamily: "Satoshi, sans-serif" }}
              >
                <span className="w-1 h-1 rounded-full bg-[#857f7a] group-hover:bg-[#c5f135] transition-colors duration-300 shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="stack-card py-28 md:py-40 px-6 md:px-10 bg-[#0b0b0b] border-t border-[#ede9e2]/8"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2
              className="cta-heading text-[11vw] md:text-[7vw] font-black tracking-tight leading-[0.9] text-[#ede9e2] mb-8 md:mb-10"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {om.cta.heading1}<br /><span className="text-[#c5f135]">{om.cta.heading2}</span>
            </h2>

            <p className="cta-sub text-[#857f7a] text-base md:text-lg leading-relaxed mb-10" style={{ fontFamily: "Satoshi, sans-serif" }}>
              {om.cta.sub}
            </p>

            <Link
              href={getLocalizedPath("/kontakt", currentLanguage) as any}
              className="cta-btn inline-flex items-center gap-3 px-7 py-4 bg-[#c5f135] text-[#0b0b0b] text-sm font-bold tracking-wide hover:bg-[#d4ff40] transition-colors duration-200"
              style={{ borderRadius: "2px", fontFamily: "Satoshi, sans-serif" }}
            >
              {om.cta.button}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
