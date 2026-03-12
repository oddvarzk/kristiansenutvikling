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

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".cta-reveal"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#111111] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2
          className="cta-reveal text-[10vw] md:text-[6vw] font-black tracking-tight text-[#f0ede7] leading-[0.95] mb-6"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          {t.home.cta.title}
        </h2>

        <p className="cta-reveal text-[#6e6b66] text-base md:text-lg max-w-sm mx-auto mb-10 leading-relaxed">
          {t.home.cta.subtitle}
        </p>

        <div className="cta-reveal">
          <Link
            href={getLocalizedPath("/kontakt", currentLanguage) as any}
            className="inline-flex items-center gap-3 text-sm font-semibold px-7 py-3.5 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
