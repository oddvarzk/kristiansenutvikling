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
        { title: "Consultation",      desc: "We talk through your needs, goals and timeline." },
        { title: "Design & Planning", desc: "Sketches and structure before a line of code is written." },
        { title: "Development",       desc: "Built properly — clean, fast and accessible." },
        { title: "Launch",            desc: "Tested, deployed and handed over with full documentation." },
      ]
    : [
        { title: "Konsultasjon",        desc: "Vi snakker gjennom behov, mål og tidslinje." },
        { title: "Design & Planlegging",desc: "Skisser og struktur før en linje kode er skrevet." },
        { title: "Utvikling",           desc: "Bygget ordentlig — rent, raskt og tilgjengelig." },
        { title: "Lansering",           desc: "Testet, deployet og levert med full dokumentasjon." },
      ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </Script>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
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

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 md:px-10">
          <h2
            className="text-sm font-semibold text-[#f0ede7] mb-10"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {isEn ? "How it works" : "Slik jobber jeg"}
          </h2>
          <div className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]">
            {processSteps.map((step, i) => (
              <div key={i} className="py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
                <h3
                  className="text-base font-bold text-[#f0ede7] mb-2"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
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
      <section className="py-20 md:py-28 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 md:px-10">
          <h2
            className="text-sm font-semibold text-[#f0ede7] mb-10"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {isEn ? "Common questions" : "Vanlige spørsmål"}
          </h2>
          <div className="max-w-3xl divide-y divide-[#1a1a1a]">
            {[t.services.faq.q1, t.services.faq.q2, t.services.faq.q3, t.services.faq.q4, t.services.faq.q5, t.services.faq.q6].map((q, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-[#f0ede7] list-none">
                  <span>{q.question}</span>
                  <svg className="w-4 h-4 text-[#6e6b66] group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6b66] leading-relaxed">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
            <h2
              className="text-[8vw] md:text-[4vw] font-black tracking-tight text-[#f0ede7] leading-[0.95]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {isEn ? "Ready to start?" : "Klar til å starte?"}
            </h2>
            <div className="flex gap-3 flex-wrap shrink-0">
              <Link
                href={getLocalizedPath("/kontakt", currentLanguage) as any}
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300"
              >
                {isEn ? "Contact me" : "Kontakt meg"}
              </Link>
              <Link
                href={getLocalizedPath("/prosjekter", currentLanguage) as any}
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-[#f0ede7]/20 text-[#f0ede7] hover:border-[#f0ede7]/50 transition-colors duration-300"
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
