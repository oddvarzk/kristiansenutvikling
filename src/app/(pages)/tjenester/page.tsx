"use client";

// src/app/tjenester/page.tsx
import React from "react";
import Image from "next/image";
import point from "../../../../public/images/point.svg";
import Script from "next/script";
import TjenesterServicesSection from "./components/TjenesterServicesSection";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function TjenesterPage() {
  const { t, currentLanguage } = useTranslations();
  
  const graph = [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/tjenester#webpage",
      url: "https://kristiansenutvikling.no/tjenester",
      name: "Tjenester | Kristiansen Utvikling",
      description:
        "Oppdag mine webutviklingstjenester: fra responsive nettsider og e-handelsløsninger til SEO-optimalisering og vedlikehold.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/tjenester#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hjem",
          item: "https://kristiansenutvikling.no/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tjenester",
          item: "https://kristiansenutvikling.no/tjenester",
        },
      ],
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        })}
      </Script>

      <div className="space-y-10">
        {/* Intro Section */}
        <section className="py-14">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t.services.title}
            </h1>

            <div className="mt-4 flex items-start gap-3 lg:w-3/4 md:w-full p-4">
              <Image src={point} alt="Punktikon" className="mt-1.5 w-3 h-3" />
              <p className="text-gray-300 leading-relaxed">
                {t.services.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Services Accordion */}
        <TjenesterServicesSection />

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-6 pb-10 text-white">
              {t.services.faq.title}
            </h3>
            <div className="space-y-6">
              <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-white">
                  {t.services.faq.q1.question}
                </summary>
                <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                  {t.services.faq.q1.answer}
                </p>
              </details>

              <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-white">
                  {t.services.faq.q2.question}
                </summary>
                <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                  {t.services.faq.q2.answer}
                </p>
              </details>

              <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-white">
                  {t.services.faq.q3.question}
                </summary>
                <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                  {t.services.faq.q3.answer}
                </p>
              </details>

              <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-white">
                  {t.services.faq.q4.question}
                </summary>
                <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                  {t.services.faq.q4.answer}
                </p>
              </details>

              <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-white">
                  {t.services.faq.q5.question}
                </summary>
                <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                  {t.services.faq.q5.answer}
                </p>
              </details>

              <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-white">
                  {t.services.faq.q6.question}
                </summary>
                <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                  {t.services.faq.q6.answer}
                </p>
              </details>
            </div>
          </div>
        </section>
        <BackToTop />
      </div>
    </>
  );
}
