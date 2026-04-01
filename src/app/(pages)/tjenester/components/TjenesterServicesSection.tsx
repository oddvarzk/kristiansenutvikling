// src/app/components/TjenesterServicesSection.tsx
"use client";

import React, { useState } from "react";
import { useTranslations } from "@/app/hooks/useTranslations";
import { FiMonitor, FiTrendingUp, FiTool } from "react-icons/fi";
import { FaWordpress } from "react-icons/fa";
import { SiWix } from "react-icons/si";

interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  expandedContent: { description: string; pricing: string; features: string[] };
  icon: React.ReactNode;
}

function ExpandableServiceItem({ service, isOpen, toggleOpen }: { service: ServiceItem; isOpen: boolean; toggleOpen: () => void }) {
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <div
      id={service.id}
      onClick={toggleOpen}
      className={`cursor-pointer border-b border-[#ede9e2]/6 transition-colors duration-300 ${isOpen ? "bg-[#111111]" : "hover:bg-[#0e0e0e]"}`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between py-6 gap-4">
        <div className="flex items-center gap-5">
          <div className={`p-2.5 transition-colors duration-300 ${isOpen ? "text-[#c5f135]" : "text-[#857f7a]"}`}
            style={{ borderRadius: "2px" }}>
            {service.icon}
          </div>
          <div>
            <h2
              className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-200 ${isOpen ? "text-[#ede9e2]" : "text-[#ede9e2]/70"}`}
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {service.title}
            </h2>
            <p className="text-xs text-[#857f7a] mt-1 leading-relaxed max-w-lg">{service.shortDescription}</p>
          </div>
        </div>
        <div className={`w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-300 border ${isOpen ? "border-[#ede9e2]/20 text-[#ede9e2]" : "border-[#ede9e2]/8 text-[#857f7a]"}`}
          style={{ borderRadius: "2px" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Expanded */}
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[800px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
        <p className="text-[#ede9e2]/60 mb-7 leading-relaxed text-sm">
          {service.expandedContent.description}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-[#ede9e2]/6 p-5" style={{ borderRadius: "2px" }}>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-[#857f7a] mb-3">
              {isEn ? "Pricing" : "Prising"}
            </h4>
            <p className="text-[#ede9e2]/60 text-sm leading-relaxed">{service.expandedContent.pricing}</p>
          </div>
          <div className="border border-[#ede9e2]/6 p-5" style={{ borderRadius: "2px" }}>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-[#857f7a] mb-3">
              {isEn ? "Includes" : "Inkludert"}
            </h4>
            <ul className="space-y-1.5">
              {service.expandedContent.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#ede9e2]/60">
                  <span className="text-[#c5f135]/50 shrink-0 mt-0.5 text-xs">·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TjenesterServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  const getServices = (): ServiceItem[] => {
    if (isEn) {
      return [
        { id: "website", title: "Website Development", shortDescription: "Unique and user-friendly websites — lightning fast, accessible and optimised for search engines.", expandedContent: { description: "Whether you need a simple landing page or a comprehensive business portal, I customise Next.js-based solutions that are lightning fast, accessible to everyone and optimised for search engines.", pricing: "From 20,000–30,000 NOK (excl. VAT) for a simple page. For 3–6 pages: 40,000–100,000 NOK.", features: ["UX/UI design workshop and sketches", "Fully responsive (desktop, tablet, mobile)", "CMS integration (WordPress, Sanity or others)", "Domain and email setup", "6 months free support"] }, icon: <FiMonitor className="w-5 h-5" /> },
        { id: "redesign", title: "Redesign & Modernisation", shortDescription: "Got a dated site that no longer works for you? I redesign, restructure and breathe new life into existing websites.", expandedContent: { description: "Many businesses are stuck with websites built 5–10 years ago that look outdated, load slowly and cost them customers. I audit what you have, strip out what no longer serves you, and rebuild it into something you're proud to share — faster, modern, and conversion-focused.", pricing: "From 15,000–50,000 NOK (excl. VAT), depending on the scope of the existing site and desired outcome.", features: ["Full audit of existing site", "Modern redesign keeping your brand identity", "Performance and SEO improvements", "Structural cleanup and page consolidation", "Mobile-first rebuild"] }, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
        { id: "wix", title: "Wix Website", shortDescription: "Quick start with the Wix platform — perfect for easy editing and rapid deployment.", expandedContent: { description: "Professional Wix themes customised with your message in focus. Responsive design, basic SEO and apps for chat, booking or e-commerce.", pricing: "From 10,000–20,000 NOK (excl. VAT), depending on customisation and extra features.", features: ["Personally customised Wix template", "Basic SEO setup", "Live chat and contact form", "Training in Wix editor"] }, icon: <SiWix className="w-5 h-5" /> },
        { id: "wordpress", title: "WordPress Website", shortDescription: "Flexible and scalable WordPress solutions — ideal for content-rich websites.", expandedContent: { description: "Fully customised WordPress theme with plugin configuration, giving you a user-friendly CMS with high performance and top security.", pricing: "From 15,000–30,000 NOK (excl. VAT), with options for e-commerce integration.", features: ["Custom theme development", "Plugin installation and configuration", "Training and documentation"] }, icon: <FaWordpress className="w-5 h-5" /> },
        { id: "app", title: "Application Development", shortDescription: "Custom web and mobile apps with focus on user experience and scalability.", expandedContent: { description: "From idea to production: frontend in React/Next.js or React Native, backend with Node.js. Secure auth, API integrations and App Store publishing.", pricing: "From 30,000–70,000 NOK (excl. VAT), depending on feature scope and complexity.", features: ["Architecture and design plan", "Fullstack frontend/backend integration", "API development and third-party integrations", "App Store and Google Play publishing"] }, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
        { id: "ecommerce", title: "E-commerce Solutions", shortDescription: "Complete online store with payment, shipping, inventory management and analytics.", expandedContent: { description: "WooCommerce, Shopify or custom Next.js solution — focused on usability, security and easy administration.", pricing: "From 40,000–80,000 NOK (excl. VAT), depending on products, payment solutions and customisations.", features: ["Product setup and bulk import", "Payment gateway and shipping integration", "SSL security and PCI compliance"] }, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
        { id: "seo", title: "SEO Optimisation", shortDescription: "Targeted SEO work to increase organic visibility and traffic.", expandedContent: { description: "Technical SEO, keyword analysis, content recommendations and link building — delivering measurable results over time.", pricing: "Monthly subscription from 11,000–15,000 NOK (excl. VAT), with reporting and follow-up.", features: ["Detailed keyword analysis", "On-page optimisation", "Link-building strategies", "Monthly reports with progress"] }, icon: <FiTrendingUp className="w-5 h-5" /> },
        { id: "maintenance", title: "Maintenance & Support", shortDescription: "Secure and updated websites with priority support.", expandedContent: { description: "Ongoing updates, backups and monitoring. I handle technical operations so you can focus on core business.", pricing: "From 1,000–3,000 NOK/month (excl. VAT), depending on scope and response time.", features: ["Regular security and plugin updates", "Daily or weekly backup solutions", "24/7 monitoring and quick response"] }, icon: <FiTool className="w-5 h-5" /> },
      ];
    }
    return [
      { id: "website", title: "Nettsideutvikling", shortDescription: "Unike og brukervennlige nettsider — lynraske, tilgjengelige og optimalisert for søkemotorer.", expandedContent: { description: "Enten du trenger en enkel landingsside eller en komplett bedriftsportal, skreddersyr jeg Next.js-løsninger som er lynraske, tilgjengelige og optimalisert for søkemotorer.", pricing: "Prosjekter starter på 20 000–30 000 kr (eks. mva) for enkel side. For 3–6 sider: 40 000–100 000 kr.", features: ["Workshop for UX/UI-design og skisser", "Fullt responsivt oppsett", "CMS-integrasjon (WordPress, Sanity e.l.)", "Domene- og e-postoppsett", "6 mnd gratis support"] }, icon: <FiMonitor className="w-5 h-5" /> },
      { id: "redesign", title: "Redesign & Nettsidefornying", shortDescription: "Har du en utdatert side som ikke lenger gjør jobben? Jeg redesigner, restrukturerer og blåser nytt liv i eksisterende nettsider.", expandedContent: { description: "Mange bedrifter sitter med nettsider fra 5–10 år tilbake som ser utdaterte ut, laster tregt og koster dem kunder. Jeg gjennomgår hva du har, fjerner det som ikke lenger tjener deg, og bygger det om til noe du er stolt av å vise frem — raskere, moderne og konverteringsfokusert.", pricing: "Fra 15 000–50 000 kr (eks. mva), avhengig av omfanget av eksisterende side og ønsket resultat.", features: ["Fullstendig gjennomgang av eksisterende side", "Moderne redesign med bevart merkevareidentitet", "Ytelses- og SEO-forbedringer", "Strukturell opprydding og sidekonsolidering", "Mobil-først gjenoppbygging"] }, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
      { id: "wix", title: "Wix-nettside", shortDescription: "Rask oppstart med Wix — perfekt for enkel redigering og rask utrulling.", expandedContent: { description: "Profesjonelle Wix-temaer tilpasset ditt budskap. Responsiv design, grunnleggende SEO og apper for chat, booking eller nettbutikk.", pricing: "Fra 10 000–20 000 kr (eks. mva), avhengig av tilpasning og ekstra funksjoner.", features: ["Personlig tilpasset Wix-template", "Grunnleggende SEO-oppsett", "Live chat og kontaktformular", "Opplæring i Wix-editor"] }, icon: <SiWix className="w-5 h-5" /> },
      { id: "wordpress", title: "WordPress-nettside", shortDescription: "Fleksible og skalerbare WordPress-løsninger — ideelt for innholdsrike nettsteder.", expandedContent: { description: "Fullt tilpasset WordPress-tema med plugin-konfigurasjon. Brukervennlig CMS med høy ytelse og topp sikkerhet.", pricing: "Fra 15 000–30 000 kr (eks. mva), med mulighet for e-handelsintegrasjon.", features: ["Skreddersydd temautvikling", "Plugin-installasjon og konfigurasjon", "Opplæring og dokumentasjon"] }, icon: <FaWordpress className="w-5 h-5" /> },
      { id: "app", title: "Applikasjonsutvikling", shortDescription: "Skreddersydde web- og mobilapper med fokus på brukeropplevelse og skalerbarhet.", expandedContent: { description: "Fra idé til produksjon: frontend i React/Next.js eller React Native, backend med Node.js. Sikker autentisering, API-integrasjoner og publisering i App Store/Play Store.", pricing: "Utviklingskostnad: 30 000–70 000 kr (eks. mva), avhengig av funksjonsomfang.", features: ["Arkitektur- og designplan", "Fullstack-integrasjon frontend/backend", "API-utvikling og tredjepartsintegrasjoner", "Publisering i App Store og Google Play"] }, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
      { id: "ecommerce", title: "E-handelsløsninger", shortDescription: "En komplett nettbutikk med betaling, frakt, lagerstyring og analyse.", expandedContent: { description: "WooCommerce, Shopify eller egen Next.js-løsning — fokus på brukervennlighet, sikkerhet og enkel administrasjon.", pricing: "Fra 40 000–80 000 kr (eks. mva), avhengig av antall produkter og tilpasninger.", features: ["Produktoppsett og bulkimport", "Integrasjon mot betalingsgateway og frakt", "SSL-sikring og PCI-kompatibilitet"] }, icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
      { id: "seo", title: "SEO-optimalisering", shortDescription: "Målrettet SEO-arbeid for å øke organisk synlighet og trafikk.", expandedContent: { description: "Teknisk SEO, nøkkelordanalyse, innholdsanbefalinger og lenkebygging. Konkrete tiltak og rapporter som gir målbare resultater over tid.", pricing: "Månedsabonnement fra 11 000–15 000 kr (eks. mva), med rapportering og oppfølging.", features: ["Detaljert nøkkelordanalyse", "On-page optimalisering", "Link-building strategier", "Månedlige rapporter med fremdrift"] }, icon: <FiTrendingUp className="w-5 h-5" /> },
      { id: "maintenance", title: "Vedlikehold & Support", shortDescription: "Sikre og oppdaterte nettsider med prioritetssupport.", expandedContent: { description: "Løpende oppdateringer, sikkerhetskopier og overvåking. Jeg tar hånd om teknisk drift slik at du kan fokusere på kjernevirksomheten.", pricing: "Fra 1 000–3 000 kr/mnd (eks. mva), avhengig av omfang og responstid.", features: ["Regelmessige sikkerhets- og plugin-oppdateringer", "Daglige eller ukentlige backup-løsninger", "24/7 overvåking og rask respons"] }, icon: <FiTool className="w-5 h-5" /> },
    ];
  };

  const services = getServices();

  return (
    <section className="py-16 md:py-20 bg-[#0b0b0b]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">
            {isEn ? "All services" : "Alle tjenester"}
          </span>
        </div>
        <div className="max-w-4xl border-t border-[#ede9e2]/6">
          {services.map((svc) => (
            <ExpandableServiceItem
              key={svc.id}
              service={svc}
              isOpen={openId === svc.id}
              toggleOpen={() => setOpenId(openId === svc.id ? null : svc.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
