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
        {/* Label */}
        <div className="cta-reveal flex items-center justify-center gap-3 mb-8">
          <div className="w-6 h-px bg-[#d4ff3e]" />
          <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">
            {isEn ? "Let's work together" : "La oss samarbeide"}
          </p>
          <div className="w-6 h-px bg-[#d4ff3e]" />
        </div>

        {/* Big heading */}
        <h2
          className="cta-reveal text-[10vw] md:text-[6vw] font-black tracking-tight text-[#f0ede7] leading-[0.95] mb-8"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          {t.home.cta.title}
        </h2>

        {/* Subtitle */}
        <p className="cta-reveal text-[#6e6b66] text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          {t.home.cta.subtitle}
        </p>

        {/* CTA button */}
        <div className="cta-reveal">
          <Link
            href={getLocalizedPath("/kontakt", currentLanguage) as any}
            className="inline-flex items-center gap-3 text-base font-semibold px-8 py-4 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300"
          >
            {t.home.cta.button}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </section>
  );
}
