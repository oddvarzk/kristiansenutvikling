/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSeksjon() {
  const { currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(line1Ref.current, { y: "110%", duration: 1.1 }, 0.2)
        .from(line2Ref.current, { y: "110%", duration: 1.1 }, 0.55)
        .from(line3Ref.current, { y: "110%", duration: 1.1 }, 0.75)
        .from(metaRef.current, { y: 16, opacity: 0, duration: 0.6 }, 1.0)
        .from(subRef.current, { y: 16, opacity: 0, duration: 0.6 }, 1.1)
        .from(ctaRef.current, { y: 16, opacity: 0, duration: 0.6 }, 1.2);

      // Parallax as next section scrolls over
      gsap.to(headlineRef.current, {
        y: "-8%",
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden bg-[#0b0b0b]"
      style={{ zIndex: 1 }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.028,
        }}
      />

      {/* Top meta row */}
      <div ref={metaRef} className="relative z-10 container mx-auto px-6 md:px-10 pt-28 md:pt-32">
        <div className="flex items-center justify-between">
          <span className="section-label">
            {isEn ? "Web studio — Norway" : "Web studio — Norge"}
          </span>
          <span className="section-label">
            {isEn ? "Est. 2023" : "Est. 2023"}
          </span>
        </div>
      </div>

      {/* Giant headline */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex-1 flex items-center">
        <h1
          ref={headlineRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="w-full"
        >
          <span className="line-wrap">
            <span
              ref={line1Ref}
              className="line-inner block text-[14.5vw] md:text-[10vw] leading-[0.88] font-black tracking-[-0.04em] text-[#ede9e2] pb-[0.15em]"
            >
              {isEn ? "I build" : "Jeg bygger"}
            </span>
          </span>
          <span className="line-wrap">
            <span
              ref={line2Ref}
              className="line-inner block text-[14.5vw] md:text-[10vw] leading-[0.88] font-black tracking-[-0.04em] text-[#ede9e2] pb-[0.15em]"
            >
              {isEn ? "digital" : "digitale"}
            </span>
          </span>
          <span className="line-wrap">
            <span
              ref={line3Ref}
              className="line-inner block text-[14.5vw] md:text-[10vw] leading-[0.88] font-black tracking-[-0.04em] text-[#c5f135] pb-[0.15em]"
              style={{ fontFamily: "Aktura, Satoshi, sans-serif" }}
            >
              {isEn ? "experiences." : "opplevelser."}
            </span>
          </span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 pb-10 md:pb-14">
        <div className="border-t border-[#ede9e2]/8 pt-7 flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Subtitle */}
          <div ref={subRef} className="max-w-xs">
            <p className="text-[#ede9e2]/50 text-sm leading-relaxed">
              {isEn
                ? "I help small businesses and founders build digital products that actually work."
                : "Jeg hjelper småbedrifter og gründere med å bygge digitale produkter som faktisk fungerer."}
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex items-center gap-6 flex-wrap">
            <Link
              href={getLocalizedPath("/tjenester", currentLanguage) as any}
              className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 bg-[#ede9e2] text-[#0b0b0b] hover:bg-white transition-colors duration-200"
              style={{ borderRadius: "3px" }}
            >
              {isEn ? "Services" : "Tjenester"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={getLocalizedPath("/prosjekter", currentLanguage) as any}
              className="editorial-link text-sm text-[#ede9e2]/50 hover:text-[#ede9e2] transition-colors duration-200"
            >
              {isEn ? "View work" : "Se arbeid"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
