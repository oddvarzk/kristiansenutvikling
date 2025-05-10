// src/components/TjenesterServicesSection.tsx
"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

// Animated reveal wrapper
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting && setTimeout(() => setVisible(true), delay),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

// Service data
interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  details: {
    description: string;
    pricing: string;
    timeline: string;
    deliverables: string[];
    features: string[];
  };
}

// Expandable card
const ExpandableServiceItem = ({
  service,
  isOpen,
  onToggle,
  delay,
}: {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) => (
  <AnimatedSection delay={delay}>
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 bg-gray-800 border-gray-700 ${
        isOpen ? "border-cyan-500 shadow-lg" : "hover:border-cyan-400"
      }`}
    >
      <div className="p-6 flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="px-6 pb-6">
        <p className="text-gray-300 mb-4">{service.summary}</p>
        {isOpen && (
          <div className="space-y-6">
            <p className="text-gray-200 leading-relaxed">
              {service.details.description}
            </p>

            <div>
              <h4 className="text-cyan-400 font-medium mb-2">Prising</h4>
              <p className="text-gray-200">{service.details.pricing}</p>
            </div>

            <div>
              <h4 className="text-cyan-400 font-medium mb-2">Tidslinje</h4>
              <p className="text-gray-200">{service.details.timeline}</p>
            </div>

            <div>
              <h4 className="text-cyan-400 font-medium mb-2">Leveranser</h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {service.details.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 font-medium mb-2">
                Hovedfunksjoner
              </h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {service.details.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  </AnimatedSection>
);

// Main services section
export default function TjenesterServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const services: ServiceItem[] = [
    {
      id: "website",
      title: "Nettsideutvikling",
      summary: "Skreddersydde, responsive nettsider optimalisert for SEO.",
      details: {
        description:
          "Fra enkel landingsside til omfattende bedriftsportal – jeg leverer Next.js-baserte sider med fokus på hastighet, tilgjengelighet og søkemotoroptimalisering.",
        pricing:
          "Fra 20 000–30 000 kr (eks. mva) for en enkel side, 40 000–100 000 kr for 3–6 sider.",
        timeline: "2–4 uker",
        deliverables: [
          "UX/UI-design og skisser",
          "Fullt responsivt grensesnitt",
          "CMS-integrasjon (WordPress, Sanity, etc.)",
          "Domene- og e-postoppsett",
          "6 måneders gratis support",
        ],
        features: [
          "SEO-vennlig koding",
          "Ytelses- og tilgjengelighetsoptimalisering",
          "Sikkerhets- og oppdateringssikring",
        ],
      },
    },
    {
      id: "wix",
      title: "Wix-nettside",
      summary: "Rask oppsett og tilpasning med Wix’ dra-og-slipp.",
      details: {
        description:
          "Jeg setter opp profesjonelle Wix-nettsider med skreddersydd design, responsiv layout og grunnleggende SEO-optimalisering. Prisen kan variere basert på tilpasset kode og funksjonsutvidelser. Kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        pricing:
          "Fra 10 000–20 000 kr (eks. mva), avhengig av omfang – kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        timeline: "2–4 uker",
        deliverables: [
          "Tilpasset Wix-template",
          "SEO-grunnpakke",
          "Live chat-integrasjon",
          "Opplæring i Wix-editor",
        ],
        features: [
          "Dra-og-slipp redigering",
          "Domenekonfigurasjon",
          "Basis sikkerhetsinnstillinger",
        ],
      },
    },
    {
      id: "wordpress",
      title: "WordPress-nettside",
      summary: "Fleksible WP-løsninger for innholdsrike sider.",
      details: {
        description:
          "Jeg leverer skreddersydde WordPress-nettsider med tilpassede temaer, plugin-installasjoner og sikkerhets-optimalisering. Prisen kan variere basert på spesialutviklet funksjonalitet og avanserte integrasjoner. Kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        pricing:
          "Fra 15 000–30 000 kr (eks. mva), avhengig av kompleksitet og tilpasninger – kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        timeline: "2–4 uker",
        deliverables: [
          "Custom WP-tema",
          "Plugin-oppsett og konfigurasjon",
          "Admin-opplæring og dokumentasjon",
        ],
        features: [
          "Brukervennlig CMS",
          "Sikkerhets- og ytelsesoptimalisering",
          "Support- og vedlikeholdsavtale",
        ],
      },
    },
    {
      id: "app",
      title: "Applikasjonsutvikling",
      summary: "Web- og mobilapper med moderne tech og brukervennlig design.",
      details: {
        description:
          "Fra prototyping til release – React, Next.js og React Native kombinert med Node.js backend gir en sømløs opplevelse på tvers av enheter.",
        pricing: "Fra 30 000–70 000 kr (eks. mva), avhengig av funksjonalitet.",
        timeline: "4–8 uker",
        deliverables: [
          "Arkitektur- og designplan",
          "Frontend- og backend-integrasjon",
          "API-utvikling",
          "App Store/Google Play-publisering",
        ],
        features: [
          "Autentisering og sikkerhet",
          "Push-varsler og offlinestøtte",
          "CI/CD-oppsett for rask utrulling",
        ],
      },
    },
    {
      id: "ecommerce",
      title: "E‑handelsløsninger",
      summary: "Fullskala nettbutikk med betaling, frakt og lagerstyring.",
      details: {
        description:
          "Implementasjon av robuste e‑handelsplattformer med WooCommerce, Shopify eller custom Next.js-løsninger.",
        pricing: "Fra 40 000–80 000 kr (eks. mva).",
        timeline: "4–6 uker",
        deliverables: [
          "Produktoppsett og import",
          "Betalingsgateway- og fraktintegrasjon",
          "Sikkerhetssertifikat (SSL)",
        ],
        features: [
          "Admin panel for produktstyring",
          "Analytics- og rapportering",
          "Skalerbar arkitektur",
        ],
      },
    },
    {
      id: "seo",
      title: "SEO‑optimalisering",
      summary: "Målrettet SEO for økt synlighet og organisk trafikk.",
      details: {
        description:
          "Teknisk og innholdsbasert SEO: nøkkelordanalyse, on-page forbedringer, link-building og løpende rapportering.",
        pricing: "Fra 11 000–15 000 kr/mnd (eks. mva).",
        timeline: "1–3 måneder initiell fase, deretter løpende",
        deliverables: [
          "Nøkkelordanalyse og strategi",
          "Teknisk SEO-rapport",
          "Innholdsoptimalisering",
          "Månedlige ytelsesrapporter",
        ],
        features: ["Konkurrentanalyse", "Lokal SEO og Google My Business"],
      },
    },
    {
      id: "maintenance",
      title: "Vedlikehold & Support",
      summary: "Løpende oppdateringer, backup og prioritetssupport.",
      details: {
        description:
          "Månedlige vedlikeholdsavtaler med sikkerhetsoppdateringer, overvåkning og backup for trygg og stabil drift.",
        pricing: "Fra 1 000–3 000 kr/mnd (eks. mva).",
        timeline: "Pågående",
        deliverables: [
          "Sikkerhets- og plugin-oppdateringer",
          "Månedlig backup",
          "Oppetidsovervåkning",
        ],
        features: ["Rask responstid innen 24 timer", "Ytelsesovervåkning"],
      },
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6 max-w-screen-xl space-y-12">
        <h2 className="text-3xl font-bold text-white text-center">
          Mine <span className="text-cyan-400">tjenester</span> i detalj
        </h2>
        <div className="space-y-8">
          {services.map((svc, idx) => (
            <ExpandableServiceItem
              key={svc.id}
              service={svc}
              isOpen={openId === svc.id}
              onToggle={() => toggle(svc.id)}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
