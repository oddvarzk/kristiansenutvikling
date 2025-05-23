"use client";

import React, { useState } from "react";

// --- Types & ExpandableServiceItem ---
interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  expandedContent: {
    description: string;
    pricing: string;
    features: string[];
  };
}

function ExpandableServiceItem({
  service,
  isOpen,
  toggleOpen,
}: {
  service: ServiceItem;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <div className="mb-6">
      <div
        onClick={toggleOpen}
        className={`cursor-pointer rounded-lg transition-all duration-300 overflow-hidden backdrop-blur-sm ${
          isOpen
            ? "bg-gradient-to-r from-zinc-900/90 to-black/95 border-l-2 border-cyan-500 shadow-lg"
            : "bg-zinc-800/80 hover:bg-zinc-900/90 hover:border-l hover:border-cyan-500/30"
        }`}
      >
        {/* Header */}
        <div className="p-5 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-cyan-400 font-bold">{service.title}</h2>
            <div className="flex items-center">
              {!isOpen && (
                <span className="text-sm text-gray-400 mr-2 hidden md:inline">
                  Vis detaljer
                </span>
              )}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-cyan-500/20" : "bg-zinc-800"
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "text-cyan-400 rotate-180" : "text-gray-400"
                  }`}
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
          </div>
          <p className="text-gray-300 mt-2">{service.shortDescription}</p>
        </div>

        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 pt-0">
            <div className="border-t border-gray-800 pt-5 mb-5" />
            <p className="text-gray-200 mb-6 leading-relaxed">
              {service.expandedContent.description}
            </p>
            <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-900/70 p-5 rounded-lg mb-6 border border-zinc-700/30">
              <h3 className="text-cyan-400 font-medium mb-2">Prising:</h3>
              <p className="text-gray-200">{service.expandedContent.pricing}</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-medium mb-3">
                Dette inkluderer:
              </h3>
              <ul className="space-y-3 ml-6">
                {service.expandedContent.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Section ---
export default function TjenesterServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggleOpen = (id: string) => setOpenId(openId === id ? null : id);

  const services: ServiceItem[] = [
    {
      id: "website",
      title: "Nettsideutvikling",
      shortDescription:
        "Jeg bygger unike og brukervennlige nettsider som både ser bra ut og fungerer sømløst på alle enheter.",
      expandedContent: {
        description:
          "Enten du trenger en enkel landingsside eller en omfattende bedriftsportal, skreddersyr jeg Next.js-baserte løsninger som er lynraske, tilgjengelige for alle og optimalisert for søkemotorer.",
        pricing:
          "Prosjekter starter på 20 000-30 000 kr (eks. mva) for en enkel side. For 3-6 sider ligger prislappen på 40 000-100 000 kr, avhengig av funksjonalitet og kompleksitet.",
        features: [
          "Workshop for UX/UI-design og visuelle skisser",
          "Fullt responsivt oppsett for desktop, nettbrett og mobil",
          "CMS-integrasjon (WordPress, Sanity eller andre etter behov)",
          "Domene- og e-postoppsett slik at du er live raskt",
          "6 måneder gratis support og vedlikehold",
        ],
      },
    },
    {
      id: "wix",
      title: "Wix-nettside",
      shortDescription:
        "Rask oppstart med Wix-plattformen, perfekt for deg som vil ha enkel redigering og rask utrulling.",
      expandedContent: {
        description:
          "Jeg tilpasser profesjonelle Wix-temaer med ditt budskap i fokus. Oppsettet inkluderer responsiv design, grunnleggende SEO og nødvendige apper for chat, booking eller nettbutikk.",
        pricing:
          "Pakker fra 10 000-20 000 kr (eks. mva), avhengig av tilpasning og ekstra funksjoner som tilpasset kode eller e-handelsmoduler.",
        features: [
          "Personlig tilpasset Wix-template",
          "Grunnleggende SEO-oppsett for bedre synlighet",
          "Live chat og kontaktformular",
          "Opplæring i Wix-editor for enkel egenredigering",
        ],
      },
    },
    {
      id: "wordpress",
      title: "WordPress-nettside",
      shortDescription:
        "Fleksible og skalerbare WordPress-løsninger - ideelt for innholdsrike nettsteder.",
      expandedContent: {
        description:
          "Fullt tilpasset WordPress-tema med plugin-konfigurasjon, slik at du får et brukervennlig CMS med høy ytelse og topp sikkerhet.",
        pricing:
          "Prosjekter fra 15 000-30 000 kr (eks. mva), med mulighet for tilleggstjenester som e-handelsintegrasjon eller avansert funksjonalitet.",
        features: [
          "Skreddersydd temautvikling",
          "Installasjon og konfigurering av nødvendige plugins",
          "Opplæring og dokumentasjon for administrasjon",
        ],
      },
    },
    {
      id: "app",
      title: "Applikasjonsutvikling",
      shortDescription:
        "Skreddersydde web- og mobilapper med fokus på brukeropplevelse og skalerbarhet.",
      expandedContent: {
        description:
          "Fra idé til produksjon: Frontend i React/Next.js eller React Native, backend med Node.js. Jeg sørger for sikker autentisering, API-integrasjoner og publisering i App Store/Play Store.",
        pricing:
          "Utviklingskostnad: 30 000-70 000 kr (eks. mva), avhengig av funksjonsomfang og kompleksitet.",
        features: [
          "Arkitektur- og designplan",
          "Fullstack-integrasjon frontend/backend",
          "API-utvikling og tredjepartsintegrasjoner",
          "Publisering i App Store og Google Play",
        ],
      },
    },
    {
      id: "ecommerce",
      title: "E-handelsløsninger",
      shortDescription:
        "En komplett nettbutikk med betaling, frakt, lagerstyring og analyse.",
      expandedContent: {
        description:
          "Implementasjon av WooCommerce, Shopify eller egen Next.js-løsning - med fokus på brukervennlighet, sikkerhet og enkel administrasjon.",
        pricing:
          "Fra 40 000-80 000 kr (eks. mva), avhengig av antall produkter, betalingsløsninger og tilpasninger.",
        features: [
          "Produktoppsett og bulkimport",
          "Integrasjon mot betalingsgateway og frakt",
          "SSL-sikring og PCI-kompatibilitet",
        ],
      },
    },
    {
      id: "seo",
      title: "SEO-optimalisering",
      shortDescription:
        "Målrettet SEO-arbeid for å øke organisk synlighet og trafikk.",
      expandedContent: {
        description:
          "Teknisk SEO, nøkkelordanalyse, innholdsanbefalinger og lenkebygging. Jeg leverer konkrete tiltak og rapporter som gir målbare resultater over tid.",
        pricing:
          "Månedsabonnement fra 11 000-15 000 kr (eks. mva), med rapportering og oppfølging.",
        features: [
          "Detaljert nøkkelordanalyse",
          "On-page optimalisering",
          "Link-building strategier",
          "Månedlige rapporter med fremdrift",
        ],
      },
    },
    {
      id: "maintenance",
      title: "Vedlikehold & Support",
      shortDescription: "Sikre og oppdaterte nettsider med prioritetssupport.",
      expandedContent: {
        description:
          "Løpende oppdateringer, sikkerhetskopier og overvåking. Jeg tar hånd om teknisk drift slik at du kan fokusere på kjernevirksomheten.",
        pricing:
          "Fra 1 000-3 000 kr/mnd (eks. mva), avhengig av omfang og responstid.",
        features: [
          "Regelmessige sikkerhets- og plugin-oppdateringer",
          "Daglige eller ukentlige backup-løsninger",
          "24/7 overvåking og rask respons",
        ],
      },
    },
  ];

  return (
    <section className="py-2">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Alle tilgjengelige tjenester
        </h1>
        <div className="space-y-12">
          {services.map((svc) => (
            <ExpandableServiceItem
              key={svc.id}
              service={svc}
              isOpen={openId === svc.id}
              toggleOpen={() => toggleOpen(svc.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
