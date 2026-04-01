/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import TjenesterServicesSection from "./components/TjenesterServicesSection";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

export default function TjenesterPage() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  const processSteps = isEn
    ? [
        { num: "01", title: "Consultation",      desc: "We talk through your needs, goals and timeline." },
        { num: "02", title: "Design & Planning", desc: "Sketches and structure before a line of code is written." },
        { num: "03", title: "Development",       desc: "Built properly — clean, fast and accessible." },
        { num: "04", title: "Launch",            desc: "Tested, deployed and handed over with full documentation." },
      ]
    : [
        { num: "01", title: "Konsultasjon",        desc: "Vi snakker gjennom behov, mål og tidslinje." },
        { num: "02", title: "Design & Planlegging",desc: "Skisser og struktur før en linje kode er skrevet." },
        { num: "03", title: "Utvikling",           desc: "Bygget ordentlig — rent, raskt og tilgjengelig." },
        { num: "04", title: "Lansering",           desc: "Testet, deployet og levert med full dokumentasjon." },
      ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-[#0b0b0b]">
        <div className="container mx-auto px-6 md:px-10">
          <span className="section-label block mb-8">
            {isEn ? "What I offer" : "Hva jeg tilbyr"}
          </span>
          <h1
            className="text-[11vw] md:text-[5.5vw] font-black tracking-tight text-[#ede9e2] leading-[0.9] mb-10"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.services.title}
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#ede9e2]/6 pt-8">
            <p className="text-[#7a7570] text-sm leading-relaxed max-w-md">
              {t.services.intro}
            </p>
            <Link
              href={getLocalizedPath("/kontakt", currentLanguage) as any}
              className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 bg-[#ede9e2] text-[#0b0b0b] hover:bg-white transition-colors duration-200 shrink-0"
              style={{ borderRadius: "3px" }}
            >
              {isEn ? "Start a project" : "Start et prosjekt"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-[#0b0b0b] border-t border-[#ede9e2]/6">
        <div className="container mx-auto px-6 md:px-10">
          <span className="section-label block mb-10">
            {isEn ? "How it works" : "Slik jobber jeg"}
          </span>
          <div className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#ede9e2]/6">
            {processSteps.map((step) => (
              <div key={step.num} className="py-7 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
                <span className="text-xs font-mono text-[#7a7570]/50 tracking-widest block mb-3">
                  {step.num}
                </span>
                <h3
                  className="text-base font-bold text-[#ede9e2] mb-2.5 leading-snug"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-[#7a7570] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services accordion */}
      <TjenesterServicesSection />

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-[#0b0b0b] border-t border-[#ede9e2]/6">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <span className="section-label block mb-4">FAQ</span>
              <h2
                className="text-2xl md:text-3xl font-black tracking-tight text-[#ede9e2] leading-tight"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {isEn ? "Common questions" : "Vanlige spørsmål"}
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="divide-y divide-[#ede9e2]/6">
                {[t.services.faq.q1, t.services.faq.q2, t.services.faq.q3, t.services.faq.q4, t.services.faq.q5, t.services.faq.q6].map((q, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-[#ede9e2]/80 hover:text-[#ede9e2] list-none transition-colors duration-200">
                      <span>{q.question}</span>
                      <svg className="w-3.5 h-3.5 text-[#7a7570] group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-sm text-[#7a7570] leading-relaxed">{q.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#131313]">
        <div className="container mx-auto px-6 md:px-10">
          <span className="section-label block mb-8">
            {isEn ? "Next step" : "Neste steg"}
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 max-w-5xl">
            <h2
              className="text-[9vw] md:text-[4.5vw] font-black tracking-tight text-[#ede9e2] leading-[0.92]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {isEn ? "Ready to start?" : "Klar til å starte?"}
            </h2>
            <div className="flex items-center gap-5 flex-wrap shrink-0">
              <Link
                href={getLocalizedPath("/kontakt", currentLanguage) as any}
                className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 bg-[#ede9e2] text-[#0b0b0b] hover:bg-white transition-colors duration-200"
                style={{ borderRadius: "3px" }}
              >
                {isEn ? "Contact me" : "Kontakt meg"}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href={getLocalizedPath("/prosjekter", currentLanguage) as any}
                className="editorial-link text-sm text-[#7a7570] hover:text-[#ede9e2] transition-colors duration-200"
              >
                {isEn ? "View projects" : "Se prosjekter"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
