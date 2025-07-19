// src/components/ServicesSection.tsx
"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";

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
}) => {
  const { currentLanguage } = useTranslations();

  return (
    <div className="mb-6">
      <div
        onClick={toggleOpen}
        className={`cursor-pointer border-1 border-cyan-700 rounded-lg transition-all duration-300 overflow-hidden backdrop-blur-sm ${
          isOpen
            ? "bg-gradient-to-r from-zinc-900/90 to-black/95 shadow-lg"
            : "bg-zinc-900/80 hover:bg-zinc-900/90"
        }`}
      >
        {/* Header */}
        <div className="p-5 flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <div className="flex items-center">
              {!isOpen && (
                <span className="text-sm text-gray-400 mr-2 hidden md:inline">
                  {currentLanguage === "no" ? "Vis detaljer" : "Show details"}
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
                {currentLanguage === "no" ? "Prising:" : "Pricing:"}
              </h4>
              <p className="text-gray-200">{service.expandedContent.pricing}</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-medium mb-3 flex items-center">
                {currentLanguage === "no" ? "Dette inkluderer:" : "This includes:"}
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
};

// --- Tjenester Seksjon ---
export default function TjenesterSeksjon() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const toggleService = (id: string) =>
    setOpenServiceId(openServiceId === id ? null : id);
  const { currentLanguage } = useTranslations();

  const getServices = (): ServiceItem[] => {
    if (currentLanguage === "en") {
      return [
        {
          id: "website",
          title: "Website Development",
          shortDescription:
            "Responsive and attractive websites for your business.",
          expandedContent: {
            description:
              "I develop professional websites that represent your brand in the best possible way. Optimized for speed and SEO.",
            pricing:
              "From 20,000-30,000 NOK (excl. VAT) for simple landing page, 40,000-100,000 NOK for full business website.",
            features: [
              "Responsive design",
              "SEO-optimized structure",
              "Admin panel",
              "Domain + email setup",
              "6 months free support",
            ],
          },
        },
        {
          id: "wix",
          title: "Wix Website",
          shortDescription: "Quick setup and customization with Wix drag-and-drop.",
          expandedContent: {
            description:
              "I set up professional Wix websites with custom design, responsive layout and basic SEO optimization. Price may vary based on custom code and feature extensions. Can be higher for advanced features and custom code.",
            pricing:
              "From 10,000-20,000 NOK (excl. VAT), depending on scope - can be higher for advanced features and custom code.",
            features: [
              "Custom Wix template",
              "SEO basic package",
              "Live chat integration",
              "Wix editor training",
            ],
          },
        },
        {
          id: "wordpress",
          title: "WordPress Website",
          shortDescription: "Flexible WP solutions for content-rich pages.",
          expandedContent: {
            description:
              "I deliver custom WordPress websites with custom themes, plugin installations and security optimization. Price may vary based on specially developed functionality and advanced integrations. Can be higher for advanced features and custom code.",
            pricing:
              "From 15,000-30,000 NOK (excl. VAT), depending on complexity and customizations - can be higher for advanced features and custom code.",
            features: [
              "Custom WP theme",
              "Plugin installation",
              "Performance & security optimization",
              "User training",
            ],
          },
        },
        {
          id: "seo",
          title: "SEO Optimization",
          shortDescription: "Increase visibility and organic traffic on Google.",
          expandedContent: {
            description:
              "Long-term SEO for Norwegian search patterns with technical review and content optimization.",
            pricing: "From 11,000-15,000 NOK/month (excl. VAT), depending on scope.",
            features: [
              "Keyword analysis",
              "Technical SEO review",
              "Local SEO + Google My Business",
              "Monthly reports",
            ],
          },
        },
        {
          id: "maintenance",
          title: "Maintenance and Support",
          shortDescription:
            "Updates, security and technical support for your solutions.",
          expandedContent: {
            description:
              "Ongoing maintenance for secure, fast and stable operation of your solutions.",
            pricing: "From 1,000-3,000 NOK/month (excl. VAT), depending on level.",
            features: [
              "Security updates",
              "Quick technical support",
              "Performance monitoring",
              "Monthly backup",
            ],
          },
        },
      ];
    }

    // Norwegian services (default)
    return [
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
  };

  const services = getServices();

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {currentLanguage === "no" ? "Tjenester jeg tilbyr" : "Services I offer"}
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
            <Link href={getLocalizedPath("/tjenester") as any}>
              <button className="cursor-pointer mt-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-md font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:from-cyan-500 hover:to-cyan-400">
                {currentLanguage === "no" ? "Se flere tjenester" : "See more services"}
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
