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
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(line1Ref.current, { y: "110%", duration: 1.1 }, 0.3)
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
      className="sticky top-0 h-screen flex flex-col justify-center md:justify-end pb-0 md:pb-16 overflow-hidden bg-[#0a0a0a]"
      style={{ zIndex: 1 }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">

        {/* Giant headline */}
        <h1
          ref={headlineRef}
          className="mb-8 md:mb-14"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          <span className="line-wrap">
            <span
              ref={line1Ref}
              className="line-inner block text-[15vw] md:text-[10.5vw] leading-[0.9] font-black tracking-[-0.04em] text-[#f0ede7] pb-[0.18em]"
            >
              {isEn ? "I build" : "Jeg bygger"}
            </span>
          </span>
          <span className="line-wrap">
            <span
              ref={line2Ref}
              className="line-inner block text-[15vw] md:text-[10.5vw] leading-[0.9] font-black tracking-[-0.04em] text-[#f0ede7] pb-[0.18em]"
            >
              {isEn ? "digital" : "digitale"}
            </span>
          </span>
          <span className="line-wrap">
            <span
              ref={line3Ref}
              className="line-inner block text-[15vw] md:text-[10.5vw] leading-[0.9] font-black tracking-[-0.04em] text-[#d4ff3e] pb-[0.18em]"
            >
              {isEn ? "experiences." : "opplevelser."}
            </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-8">
          <div ref={subRef}>
            <p className="text-[#f0ede7]/55 text-sm md:text-base max-w-xs leading-loose md:leading-relaxed">
              {isEn
                ? "I help small businesses and solo founders build digital products that actually work."
                : "Jeg hjelper småbedrifter og gründere med å bygge digitale produkter som faktisk fungerer."}
            </p>
            <p className="text-[#f0ede7]/30 text-xs mt-4 max-w-xs leading-loose md:leading-relaxed italic">
              {isEn
                ? "I started this because I genuinely believe a good website can change the direction of a small business."
                : "Jeg startet dette fordi jeg tror en god nettside faktisk kan snu retningen for en liten bedrift."}
            </p>
          </div>

          <div ref={ctaRef} className="flex gap-3 flex-wrap pb-2 md:pb-0">
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
