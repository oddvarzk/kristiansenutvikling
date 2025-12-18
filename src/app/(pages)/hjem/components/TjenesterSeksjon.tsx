/* eslint-disable @typescript-eslint/no-explicit-any */
// Reason: Next.js 15 typedRoutes requires dynamic hrefs to be cast as any for i18n/dynamic routes.
// src/components/ServicesSection.tsx
"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { FaWordpress } from "react-icons/fa";
import { FiMonitor, FiTrendingUp, FiTool } from "react-icons/fi";
import { SiWix } from "react-icons/si";

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
  icon: ReactNode; // Added icon property
}
const ExpandableServiceItem = ({
  service,
  isOpen,
  toggleOpen,
}: {
  service: ServiceItem;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const { currentLanguage } = useTranslations();
  return (
    <div className="mb-8">
      <div
        onClick={toggleOpen}
        className={`cursor-pointer rounded-xl transition-all duration-500 overflow-hidden backdrop-blur-sm ${
          isOpen
            ? "bg-gradient-to-r from-zinc-900/95 to-black/95 border-l-4 border-cyan-500 shadow-2xl transform scale-[1.02]"
            : "bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 hover:bg-gradient-to-r hover:from-zinc-800/90 hover:to-zinc-900/90 hover:border-l-4 hover:border-cyan-500/50 hover:transform hover:scale-[1.01]"
        }`}
      >
        {/* Header */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-zinc-700/50 text-gray-400"
                }`}
              >
                {service.icon}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl text-cyan-400 font-bold mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {!isOpen && (
                <span className="text-sm text-gray-400 hidden md:inline">
                  {currentLanguage === "no" ? "Vis detaljer" : "Show details"}
                </span>
              )}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "bg-cyan-500/20" : "bg-zinc-700/50"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
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
        </div>
        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 pt-0">
            <div className="border-t border-zinc-700/50 pt-6 mb-6" />
            <p className="text-gray-200 mb-8 leading-relaxed text-lg">
              {service.expandedContent.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 p-6 rounded-xl border border-zinc-700/30">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  {/* Pricing icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  {currentLanguage === "no" ? "Prising:" : "Pricing:"}
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  {service.expandedContent.pricing}
                </p>
              </div>
              <div className="bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 p-6 rounded-xl border border-zinc-700/30">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  {/* Features icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {currentLanguage === "no"
                    ? "Dette inkluderer:"
                    : "This includes:"}
                </h4>
                <ul className="space-y-3">
                  {service.expandedContent.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
          icon: <FiMonitor className="w-6 h-6" />,
        },
        {
          id: "wix",
          title: "Wix Website",
          shortDescription:
            "Quick setup and customization with Wix drag-and-drop.",
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
          icon: <SiWix className="w-6 h-6" />,
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
          icon: <FaWordpress className="w-6 h-6" />,
        },
        {
          id: "seo",
          title: "SEO Optimization",
          shortDescription:
            "Increase visibility and organic traffic on Google.",
          expandedContent: {
            description:
              "Long-term SEO for Norwegian search patterns with technical review and content optimization.",
            pricing:
              "From 11,000-15,000 NOK/month (excl. VAT), depending on scope.",
            features: [
              "Keyword analysis",
              "Technical SEO review",
              "Local SEO + Google My Business",
              "Monthly reports",
            ],
          },
          icon: <FiTrendingUp className="w-6 h-6" />,
        },
        {
          id: "maintenance",
          title: "Maintenance and Support",
          shortDescription:
            "Updates, security and technical support for your solutions.",
          expandedContent: {
            description:
              "Ongoing maintenance for secure, fast and stable operation of your solutions.",
            pricing:
              "From 1,000-3,000 NOK/month (excl. VAT), depending on level.",
            features: [
              "Security updates",
              "Quick technical support",
              "Performance monitoring",
              "Monthly backup",
            ],
          },
          icon: <FiTool className="w-6 h-6" />,
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
        icon: <FiMonitor className="w-6 h-6" />,
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
        icon: <SiWix className="w-6 h-6" />,
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
        icon: <FaWordpress className="w-6 h-6" />,
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
        icon: <FiTrendingUp className="w-6 h-6" />,
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
        icon: <FiTool className="w-6 h-6" />,
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
          {currentLanguage === "no"
            ? "Tjenester jeg tilbyr"
            : "Services I offer"}
        </h2>

        <AnimatedSection delay={300} className="max-w-3xl mx-auto">
          {services.map((svc) => (
            <ExpandableServiceItem
              key={svc.id}
              service={svc}
              isOpen={openServiceId === svc.id}
              toggleOpen={() => toggleService(svc.id)}
            />
          ))}
          <div className="flex justify-center">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link href={getLocalizedPath("/tjenester") as any}>
              <button className="cursor-pointer mt-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-md font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:from-cyan-500 hover:to-cyan-400">
                {currentLanguage === "no"
                  ? "Se flere tjenester"
                  : "See more services"}
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
