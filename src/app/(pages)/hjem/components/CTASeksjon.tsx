/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function CTASeksjon() {
  const { t, currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".cta-reveal"), {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-40 bg-[#131313] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10">

        {/* Label */}
        <span className="cta-reveal section-label block mb-8">
          {isEn ? "Next step" : "Neste steg"}
        </span>

        {/* Large editorial heading — left-aligned */}
        <h2
          className="cta-reveal text-[11vw] md:text-[6.5vw] font-black tracking-tight text-[#ede9e2] leading-[0.9] mb-12 md:mb-16 max-w-4xl"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          {t.home.cta.title}
        </h2>

        {/* Bottom row — description + CTAs */}
        <div className="cta-reveal border-t border-[#ede9e2]/8 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="text-[#635f5a] text-sm leading-relaxed max-w-xs">
            {t.home.cta.subtitle}
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href={getLocalizedPath("/kontakt", currentLanguage) as any}
              className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 bg-[#ede9e2] text-[#0b0b0b] hover:bg-white transition-colors duration-200"
              style={{ borderRadius: "3px" }}
            >
              {t.home.cta.button}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={getLocalizedPath("/tjenester", currentLanguage) as any}
              className="editorial-link text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
            >
              {isEn ? "View services" : "Se tjenester"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
