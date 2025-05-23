// src/components/ServicesSection.tsx
"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";

// --- AnimatedSection ---
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

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
const ExpandableServiceItem = ({
  service,
  isOpen,
  toggleOpen,
}: {
  service: ServiceItem;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}) => (
  <div className="mb-6">
    <div
      onClick={toggleOpen}
      className={`cursor-pointer rounded-lg transition-all duration-300 overflow-hidden backdrop-blur-sm ${
        isOpen
          ? "bg-gradient-to-r from-zinc-900/90 to-black/95 border-l-2 border-cyan-500 shadow-lg"
          : "bg-zinc-900/80 hover:bg-zinc-900/90 hover:border-l hover:border-cyan-500/30"
      }`}
    >
      {/* Header */}
      <div className="p-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{service.title}</h3>
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

      {/* Expanded */}
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
            <h4 className="text-cyan-400 font-medium mb-2 flex items-center">
              Prising:
            </h4>
            <p className="text-gray-200">{service.expandedContent.pricing}</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-medium mb-3 flex items-center">
              Dette inkluderer:
            </h4>
            <ul className="space-y-3 ml-6">
              {service.expandedContent.features.map((f, i) => (
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
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Tjenester Seksjon ---
export default function TjenesterSeksjon() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const toggleService = (id: string) =>
    setOpenServiceId(openServiceId === id ? null : id);

  const services: ServiceItem[] = [
    {
      id: "website",
      title: "Nettside Utvikling",
      shortDescription:
        "Responsive og attraktive nettsider for din virksomhet.",
      expandedContent: {
        description:
          "Jeg utvikler profesjonelle nettsider som representerer din merkevare på best mulig måte. Optimalisert for hastighet og SEO.",
        pricing:
          "Fra 20 000-30 000 kr (eks. mva) for enkel landingsside, 40 000-100 000 kr for full bedriftsnettside.",
        features: [
          "Responsivt design",
          "SEO-optimalisert struktur",
          "Administrasjonspanel",
          "Domene + e-postoppsett",
          "6 mnd gratis support",
        ],
      },
    },
    {
      id: "wix",
      title: "Wix-nettside",
      shortDescription: "Rask oppsett og tilpasning med Wix' dra-og-slipp.",
      expandedContent: {
        description:
          "Jeg setter opp profesjonelle Wix-nettsider med skreddersydd design, responsiv layout og grunnleggende SEO-optimalisering. Prisen kan variere basert på tilpasset kode og funksjonsutvidelser. Kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        pricing:
          "Fra 10 000-20 000 kr (eks. mva), avhengig av omfang - kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        features: [
          "Tilpasset Wix-template",
          "SEO-grunnpakke",
          "Live chat-integrasjon",
          "Opplæring i Wix-editor",
        ],
      },
    },
    {
      id: "wordpress",
      title: "WordPress-nettside",
      shortDescription: "Fleksible WP-løsninger for innholdsrike sider.",
      expandedContent: {
        description:
          "Jeg leverer skreddersydde WordPress-nettsider med tilpassede temaer, plugin-installasjoner og sikkerhets-optimalisering. Prisen kan variere basert på spesialutviklet funksjonalitet og avanserte integrasjoner. Kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        pricing:
          "Fra 15 000-30 000 kr (eks. mva), avhengig av kompleksitet og tilpasninger - kan bli høyere ved avanserte funksjoner og tilpasset kode.",
        features: [
          "Skreddersydd WP-tema",
          "Plugin-installasjon",
          "Ytelses- & sikkerhetsoptimalisering",
          "Brukeropplæring",
        ],
      },
    },
    {
      id: "seo",
      title: "SEO Optimalisering",
      shortDescription: "Øk synlighet og organisk trafikk på Google.",
      expandedContent: {
        description:
          "Langsiktig SEO for norske søkemønstre med teknisk gjennomgang og innholdsoptimalisering.",
        pricing: "Fra 11 000-15 000 kr/mnd (eks. mva), avhengig av omfang.",
        features: [
          "Nøkkelordanalyse",
          "Teknisk SEO-gjennomgang",
          "Lokal SEO + Google My Business",
          "Månedlige rapporter",
        ],
      },
    },
    {
      id: "maintenance",
      title: "Vedlikehold og Support",
      shortDescription:
        "Oppdateringer, sikkerhet og teknisk støtte for dine løsninger.",
      expandedContent: {
        description:
          "Løpende vedlikehold for sikker, rask og stabil drift av dine løsninger.",
        pricing: "Fra 1 000-3 000 kr/mnd (eks. mva), avhengig av nivå.",
        features: [
          "Sikkerhetsoppdateringer",
          "Rask teknisk support",
          "Overvåking av ytelse",
          "Månedlig backup",
        ],
      },
    },
  ];

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Tjenester jeg tilbyr
        </h2>

        <AnimatedSection delay={300} className="max-w-3xl mx-auto">
          {services.map((svc, idx) => (
            <ExpandableServiceItem
              key={svc.id}
              service={svc}
              isOpen={openServiceId === svc.id}
              toggleOpen={() => toggleService(svc.id)}
              delay={400 + idx * 100}
            />
          ))}
          <div className="flex justify-center">
            <Link href="/tjenester">
              <button className="cursor-pointer mt-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-md font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:from-cyan-500 hover:to-cyan-400">
                Se flere tjenester
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
