"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

export default function ArticleCta() {
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <div
      className="my-10 px-6 py-7 border border-[#c5f135]/25 bg-[#c5f135]/5"
      style={{ borderRadius: "3px" }}
    >
      <p
        className="text-[#ede9e2] font-bold text-lg leading-snug mb-1"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        {isEn
          ? "Want to know what's holding your website back?"
          : "Vil du vite hva som holder nettsiden din tilbake?"}
      </p>
      <p
        className="text-[#857f7a] text-sm leading-relaxed mb-5"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        {isEn
          ? "I'll do a free review of your website and tell you concretely what can be improved. No sales pitch — just honest feedback."
          : "Jeg gjør en gratis gjennomgang av nettsiden din og forteller deg konkret hva som kan forbedres. Ingen salgspitch — bare ærlig tilbakemelding."}
      </p>
      <Link
        href={getLocalizedPath("/kontakt", currentLanguage) as any}
        className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#c5f135] text-[#0b0b0b] text-sm font-bold tracking-wide hover:bg-[#d4ff40] transition-colors duration-200"
        style={{ borderRadius: "2px", fontFamily: "Satoshi, sans-serif" }}
      >
        {isEn ? "Get free review" : "Få gratis gjennomgang"}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
