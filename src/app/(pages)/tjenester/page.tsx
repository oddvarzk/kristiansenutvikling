/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Script from "next/script";
import Link from "next/link";
import TjenesterServicesSection from "./components/TjenesterServicesSection";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

export default function TjenesterPage() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  const graph = [
    { "@type": "WebPage", "@id": "https://kristiansenutvikling.no/tjenester#webpage", url: "https://kristiansenutvikling.no/tjenester", name: "Tjenester | Kristiansen Utvikling", description: "Oppdag mine webutviklingstjenester." },
    { "@type": "BreadcrumbList", "@id": "https://kristiansenutvikling.no/tjenester#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" }, { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://kristiansenutvikling.no/tjenester" }] },
  ];

  const processSteps = isEn
    ? [
        { num: "01", title: "Consultation", desc: "We discuss your needs and goals for the project" },
        { num: "02", title: "Design & Planning", desc: "Sketches and wireframes to visualise the solution" },
        { num: "03", title: "Development", desc: "Coding and implementation of functionality" },
        { num: "04", title: "Testing & Launch", desc: "Quality assurance and live deployment" },
      ]
    : [
        { num: "01", title: "Konsultasjon", desc: "Vi diskuterer dine behov og mål for prosjektet" },
        { num: "02", title: "Design & Planlegging", desc: "Skisser og wireframes for å visualisere løsningen" },
        { num: "03", title: "Utvikling", desc: "Koding og implementering av funksjonalitet" },
        { num: "04", title: "Testing & Lansering", desc: "Kvalitetssikring og live-oppsett" },
      ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </Script>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#d4ff3e]" />
            <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">
              {isEn ? "Services" : "Tjenester"}
            </p>
          </div>
          <h1
            className="text-[12vw] md:text-[6vw] font-black tracking-tight text-[#f0ede7] leading-[0.92] mb-8"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.services.title}
          </h1>
          <p className="text-[#6e6b66] text-base md:text-lg max-w-xl leading-relaxed">
            {t.services.intro}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-[#1a1a1a] bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "50+", l: isEn ? "Projects" : "Prosjekter" },
              { n: "3+", l: isEn ? "Years experience" : "År erfaring" },
              { n: "100%", l: isEn ? "Client satisfaction" : "Kundetilfredshet" },
              { n: "24/7", l: "Support" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#f0ede7] mb-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  {s.n}
                </div>
                <div className="text-xs text-[#6e6b66] tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[#d4ff3e]" />
            <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">
              {isEn ? "How I work" : "Min arbeidsprosess"}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="border-t border-[#1a1a1a] pt-6">
                <span className="block text-[#d4ff3e] text-xs font-mono mb-4">{step.num}</span>
                <h3 className="text-lg font-bold text-[#f0ede7] mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[#6e6b66] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services accordion */}
      <TjenesterServicesSection />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-[#d4ff3e]" />
            <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">FAQ</p>
          </div>
          <div className="max-w-3xl divide-y divide-[#1a1a1a] border-t border-[#1a1a1a]">
            {[t.services.faq.q1, t.services.faq.q2, t.services.faq.q3, t.services.faq.q4, t.services.faq.q5, t.services.faq.q6].map((q, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-[#f0ede7] list-none">
                  <span>{q.question}</span>
                  <svg className="w-4 h-4 text-[#6e6b66] group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-[#6e6b66] leading-relaxed">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[10vw] md:text-[5vw] font-black tracking-tight text-[#f0ede7] leading-[0.95] mb-6" style={{ fontFamily: "Satoshi, sans-serif" }}>
            {isEn ? "Ready to start?" : "Klar til å starte?"}
          </h2>
          <p className="text-[#6e6b66] text-base mb-8 max-w-md mx-auto">
            {isEn ? "Let's discuss how I can help you reach your digital goals." : "La oss diskutere hvordan jeg kan hjelpe deg med å nå dine digitale mål."}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href={getLocalizedPath("/kontakt", currentLanguage) as any} className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300">
              {isEn ? "Contact me" : "Kontakt meg"}
            </Link>
            <Link href={getLocalizedPath("/prosjekter", currentLanguage) as any} className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-[#f0ede7]/20 text-[#f0ede7] hover:border-[#f0ede7]/50 transition-colors duration-300">
              {isEn ? "View projects" : "Se prosjekter"}
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
