"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

interface ArticleLayoutProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  category,
  date,
  readTime,
  title,
  children,
}: ArticleLayoutProps) {
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".art-back", { y: -10, opacity: 0, duration: 0.5 })
        .from(".art-meta", { y: 14, opacity: 0, duration: 0.55 }, "-=0.2")
        .from(".art-title .line-inner", { y: "110%", duration: 0.85, stagger: 0.1 }, "-=0.3")
        .from(".art-line", { scaleX: 0, duration: 0.7, ease: "power4.inOut" }, "-=0.4");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Split title into two lines for clip reveal
  const words = title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const line1 = words.slice(0, midpoint).join(" ");
  const line2 = words.slice(midpoint).join(" ");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="min-h-[55dvh] flex flex-col justify-end pt-28 pb-14 md:pb-20 px-6 md:px-10 bg-[#0b0b0b]"
      >
        <div className="container mx-auto max-w-4xl">

          {/* Back link */}
          <Link
            href={getLocalizedPath("/artikler", currentLanguage) as any}
            className="art-back inline-flex items-center gap-2 section-label hover:text-[#c5f135] transition-colors duration-200 mb-10 md:mb-14"
          >
            <span>←</span>
            <span>{isEn ? "Back to articles" : "Tilbake til artikler"}</span>
          </Link>

          {/* Meta */}
          <div className="art-meta flex items-center gap-4 mb-6 flex-wrap">
            <span
              className="inline-block px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-[#0b0b0b] bg-[#c5f135]"
              style={{ borderRadius: "2px" }}
            >
              {category}
            </span>
            <span className="section-label">{date}</span>
            <div className="w-px h-3 bg-[#857f7a]/40" />
            <span className="section-label">{readTime} {isEn ? "read" : "lesetid"}</span>
          </div>

          {/* Title — clip reveal */}
          <div className="art-title">
            <h1
              className="text-[8.5vw] md:text-[5.5vw] font-black tracking-tight leading-[0.9] text-[#ede9e2]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              <span className="block line-wrap">
                <span className="line-inner">{line1}</span>
              </span>
              {line2 && (
                <span className="block line-wrap">
                  <span className="line-inner">{line2}</span>
                </span>
              )}
            </h1>
          </div>

          {/* Divider */}
          <div
            className="art-line mt-10 md:mt-12 w-full h-px bg-[#ede9e2]/12"
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <section className="stack-card py-16 md:py-24 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl article-body">
            {children}
          </div>

          {/* Author + end CTA */}
          <div className="mt-16 md:mt-24 pt-10 border-t border-[#ede9e2]/8">
            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-10 h-10 bg-[#131313] border border-[#ede9e2]/10 flex items-center justify-center shrink-0"
                style={{ borderRadius: "50%" }}
              >
                <span className="text-xs font-black text-[#ede9e2]/40" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  OZK
                </span>
              </div>
              <div>
                <p className="text-[#ede9e2] text-sm font-semibold" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  Oddvar Zakarias Kristiansen
                </p>
                <p className="section-label mt-0.5">
                  {isEn ? "Freelance Developer · Oslo" : "Frilansutvikler · Oslo"}
                </p>
              </div>
            </div>

            {/* End CTA */}
            <div
              className="px-6 py-7 border border-[#ede9e2]/10 bg-[#131313]"
              style={{ borderRadius: "3px" }}
            >
              <p className="section-label mb-2">
                {isEn ? "Free quote" : "Gratis tilbud"}
              </p>
              <p
                className="text-[#ede9e2] font-bold text-xl leading-snug mb-2"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {isEn
                  ? "Wondering what this costs for your business?"
                  : "Lurer du på hva dette koster for din bedrift?"}
              </p>
              <p
                className="text-[#857f7a] text-sm leading-relaxed mb-6 max-w-md"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {isEn
                  ? "Send me a message describing what you need. I'll get back to you within one business day with an honest assessment — no commitments, no sales pitch."
                  : "Send meg en melding og beskriv hva du trenger. Jeg svarer innen én arbeidsdag med en ærlig vurdering — ingen forpliktelser, ingen salgspitch."}
              </p>
              <Link
                href={getLocalizedPath("/kontakt", currentLanguage) as any}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#c5f135] text-[#0b0b0b] text-sm font-bold tracking-wide hover:bg-[#d4ff40] transition-colors duration-200"
                style={{ borderRadius: "2px", fontFamily: "Satoshi, sans-serif" }}
              >
                {isEn ? "Get a free quote" : "Få uforpliktende pristilbud"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
