"use client";

import React from "react";
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

  const stats = [
    {
      number: "50+",
      label: currentLanguage === "no" ? "Prosjekter" : "Projects",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "3+",
      label: currentLanguage === "no" ? "År erfaring" : "Years Experience",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "100%",
      label: currentLanguage === "no" ? "Kundetilfredshet" : "Client Satisfaction",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: currentLanguage === "no" ? "Support" : "Support",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: currentLanguage === "no" ? "Konsultasjon" : "Consultation",
      description: currentLanguage === "no" 
        ? "Vi diskuterer dine behov og mål for prosjektet"
        : "We discuss your needs and goals for the project",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: currentLanguage === "no" ? "Design & Planlegging" : "Design & Planning",
      description: currentLanguage === "no"
        ? "Skisser og wireframes for å visualisere løsningen"
        : "Sketches and wireframes to visualize the solution",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: currentLanguage === "no" ? "Utvikling" : "Development",
      description: currentLanguage === "no"
        ? "Koding og implementering av funksjonalitet"
        : "Coding and implementation of functionality",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: "04",
      title: currentLanguage === "no" ? "Testing, Lansering & Publisering" : "Testing & Launch",
      description: currentLanguage === "no"
        ? "Kvalitetssikring og live-oppsett"
        : "Quality assurance and live deployment",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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

      <div className="space-y-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.services.title}
              </h1>
              <div className="mb-8">
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {t.services.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-6 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentLanguage === "no" ? "Min arbeidsprosess" : "My Work Process"}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {currentLanguage === "no" 
                  ? "En strukturert tilnærming som sikrer kvalitet og levering i tide"
                  : "A structured approach that ensures quality and on-time delivery"
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-6 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <TjenesterServicesSection />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {currentLanguage === "no" 
                  ? "Klar til å starte ditt prosjekt?"
                  : "Ready to start your project?"
                }
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {currentLanguage === "no"
                  ? "La oss diskutere hvordan jeg kan hjelpe deg med å realisere dine digitale mål"
                  : "Let's discuss how I can help you realize your digital goals"
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={currentLanguage === "no" ? "/kontakt" : "/en/kontakt"}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {currentLanguage === "no" ? "Kontakt meg" : "Contact me"}
                </a>
                <a
                  href={currentLanguage === "no" ? "/prosjekter" : "/en/prosjekter"}
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {currentLanguage === "no" ? "Se prosjekter" : "View projects"}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">
                {t.services.faq.title}
              </h3>
              <div className="space-y-4">
                <details className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group">
                  <summary className="cursor-pointer font-semibold text-white p-6 hover:bg-zinc-700/30 transition-colors duration-300 flex items-center justify-between">
                    <span>{t.services.faq.q1.question}</span>
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t.services.faq.q1.answer}
                    </p>
                  </div>
                </details>

                <details className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group">
                  <summary className="cursor-pointer font-semibold text-white p-6 hover:bg-zinc-700/30 transition-colors duration-300 flex items-center justify-between">
                    <span>{t.services.faq.q2.question}</span>
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t.services.faq.q2.answer}
                    </p>
                  </div>
                </details>

                <details className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group">
                  <summary className="cursor-pointer font-semibold text-white p-6 hover:bg-zinc-700/30 transition-colors duration-300 flex items-center justify-between">
                    <span>{t.services.faq.q3.question}</span>
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t.services.faq.q3.answer}
                    </p>
                  </div>
                </details>

                <details className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group">
                  <summary className="cursor-pointer font-semibold text-white p-6 hover:bg-zinc-700/30 transition-colors duration-300 flex items-center justify-between">
                    <span>{t.services.faq.q4.question}</span>
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t.services.faq.q4.answer}
                    </p>
                  </div>
                </details>

                <details className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group">
                  <summary className="cursor-pointer font-semibold text-white p-6 hover:bg-zinc-700/30 transition-colors duration-300 flex items-center justify-between">
                    <span>{t.services.faq.q5.question}</span>
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t.services.faq.q5.answer}
                    </p>
                  </div>
                </details>

                <details className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group">
                  <summary className="cursor-pointer font-semibold text-white p-6 hover:bg-zinc-700/30 transition-colors duration-300 flex items-center justify-between">
                    <span>{t.services.faq.q6.question}</span>
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t.services.faq.q6.answer}
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        
        <BackToTop />
      </div>
    </>
  );
}
