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
  const tagRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(tagRef.current, { y: 20, opacity: 0, duration: 0.6 }, 0.3)
        .from(line1Ref.current, { y: "110%", duration: 1.1 }, 0.55)
        .from(line2Ref.current, { y: "110%", duration: 1.1 }, 0.7)
        .from(line3Ref.current, { y: "110%", duration: 1.1 }, 0.85)
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.7 }, 1.1)
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7 }, 1.25);

      // Parallax headline as next section scrolls over
      gsap.to(headlineRef.current, {
        y: "-8%",
        opacity: 0.3,
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
      className="sticky top-0 h-screen flex flex-col justify-end pb-12 md:pb-16 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background video */}
      <video
        src="/videos/newBackground.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-[#080808]/30 to-[#080808]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">

        {/* Tag line */}
        <p
          ref={tagRef}
          className="text-xs tracking-[0.25em] uppercase text-[#d4ff3e] mb-6 md:mb-8 font-medium"
        >
          Kristiansen Utvikling — {isEn ? "Web Development" : "Webutvikling"}
        </p>

        {/* Giant headline */}
        <h1
          ref={headlineRef}
          className="mb-10 md:mb-14"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          <span className="line-wrap">
            <span
              ref={line1Ref}
              className="line-inner block text-[15vw] md:text-[10.5vw] leading-[0.9] font-black tracking-[-0.04em] text-[#f0ede7]"
            >
              {isEn ? "We build" : "Vi bygger"}
            </span>
          </span>
          <span className="line-wrap">
            <span
              ref={line2Ref}
              className="line-inner block text-[15vw] md:text-[10.5vw] leading-[0.9] font-black tracking-[-0.04em] text-[#f0ede7]"
            >
              {isEn ? "digital" : "digitale"}
            </span>
          </span>
          <span className="line-wrap">
            <span
              ref={line3Ref}
              className="line-inner block text-[15vw] md:text-[10.5vw] leading-[0.9] font-black tracking-[-0.04em] text-[#d4ff3e]"
            >
              {isEn ? "experiences." : "opplevelser."}
            </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <p
            ref={subRef}
            className="text-[#f0ede7]/55 text-sm md:text-base max-w-xs leading-relaxed"
          >
            {isEn
              ? "From idea to launch — websites and apps delivered with quality and care."
              : "Fra idé til lansering — nettsider og apper levert med kvalitet og omsorg."}
          </p>

          <div ref={ctaRef} className="flex gap-3 flex-wrap">
            <Link
              href={getLocalizedPath("/tjenester", currentLanguage) as any}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300"
            >
              {isEn ? "Our services" : "Tjenester"}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={getLocalizedPath("/prosjekter", currentLanguage) as any}
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-[#f0ede7]/20 text-[#f0ede7] hover:border-[#f0ede7]/50 transition-colors duration-300"
            >
              {isEn ? "View work" : "Se arbeid"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
