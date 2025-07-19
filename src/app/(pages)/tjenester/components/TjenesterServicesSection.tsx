// src/app/components/TjenesterServicesSection.tsx
"use client";

import React, { useState } from "react";
import { useTranslations } from "@/app/hooks/useTranslations";

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
  const { currentLanguage } = useTranslations();

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
              {/* Demoted from h3 to h4 */}
              <h4 className="text-cyan-400 font-medium mb-2">
                {currentLanguage === "no" ? "Prising:" : "Pricing:"}
              </h4>
              <p className="text-gray-200">{service.expandedContent.pricing}</p>
            </div>
            <div>
              {/* Demoted from h3 to h4 */}
              <h4 className="text-cyan-400 font-medium mb-3">
                {currentLanguage === "no" ? "Dette inkluderer:" : "This includes:"}
              </h4>
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
  const { currentLanguage } = useTranslations();

  const getServices = (): ServiceItem[] => {
    if (currentLanguage === "en") {
      return [
        {
          id: "website",
          title: "Website Development",
          shortDescription:
            "I build unique and user-friendly websites that both look great and work seamlessly on all devices.",
          expandedContent: {
            description:
              "Whether you need a simple landing page or a comprehensive business portal, I customize Next.js-based solutions that are lightning fast, accessible to everyone and optimized for search engines.",
            pricing:
              "Projects start at 20,000-30,000 NOK (excl. VAT) for a simple page. For 3-6 pages, the price range is 40,000-100,000 NOK, depending on functionality and complexity.",
            features: [
              "UX/UI design workshop and visual sketches",
              "Fully responsive setup for desktop, tablet and mobile",
              "CMS integration (WordPress, Sanity or others as needed)",
              "Domain and email setup so you're live quickly",
              "6 months free support and maintenance",
            ],
          },
        },
        {
          id: "wix",
          title: "Wix Website",
          shortDescription:
            "Quick start with the Wix platform, perfect for those who want easy editing and rapid deployment.",
          expandedContent: {
            description:
              "I customize professional Wix themes with your message in focus. The setup includes responsive design, basic SEO and necessary apps for chat, booking or e-commerce.",
            pricing:
              "Packages from 10,000-20,000 NOK (excl. VAT), depending on customization and extra features such as custom code or e-commerce modules.",
            features: [
              "Personally customized Wix template",
              "Basic SEO setup for better visibility",
              "Live chat and contact form",
              "Training in Wix editor for easy self-editing",
            ],
          },
        },
        {
          id: "wordpress",
          title: "WordPress Website",
          shortDescription:
            "Flexible and scalable WordPress solutions - ideal for content-rich websites.",
          expandedContent: {
            description:
              "Fully customized WordPress theme with plugin configuration, so you get a user-friendly CMS with high performance and top security.",
            pricing:
              "Projects from 15,000-30,000 NOK (excl. VAT), with the possibility of additional services such as e-commerce integration or advanced functionality.",
            features: [
              "Custom theme development",
              "Installation and configuration of necessary plugins",
              "Training and documentation for administration",
            ],
          },
        },
        {
          id: "app",
          title: "Application Development",
          shortDescription:
            "Custom web and mobile apps with focus on user experience and scalability.",
          expandedContent: {
            description:
              "From idea to production: Frontend in React/Next.js or React Native, backend with Node.js. I ensure secure authentication, API integrations and publishing in App Store/Play Store.",
            pricing:
              "Development cost: 30,000-70,000 NOK (excl. VAT), depending on feature scope and complexity.",
            features: [
              "Architecture and design plan",
              "Fullstack frontend/backend integration",
              "API development and third-party integrations",
              "Publishing in App Store and Google Play",
            ],
          },
        },
        {
          id: "ecommerce",
          title: "E-commerce Solutions",
          shortDescription:
            "A complete online store with payment, shipping, inventory management and analytics.",
          expandedContent: {
            description:
              "Implementation of WooCommerce, Shopify or custom Next.js solution - with focus on user-friendliness, security and easy administration.",
            pricing:
              "From 40,000-80,000 NOK (excl. VAT), depending on number of products, payment solutions and customizations.",
            features: [
              "Product setup and bulk import",
              "Integration with payment gateway and shipping",
              "SSL security and PCI compliance",
            ],
          },
        },
        {
          id: "seo",
          title: "SEO Optimization",
          shortDescription:
            "Targeted SEO work to increase organic visibility and traffic.",
          expandedContent: {
            description:
              "Technical SEO, keyword analysis, content recommendations and link building. I deliver concrete measures and reports that give measurable results over time.",
            pricing:
              "Monthly subscription from 11,000-15,000 NOK (excl. VAT), with reporting and follow-up.",
            features: [
              "Detailed keyword analysis",
              "On-page optimization",
              "Link-building strategies",
              "Monthly reports with progress",
            ],
          },
        },
        {
          id: "maintenance",
          title: "Maintenance & Support",
          shortDescription: "Secure and updated websites with priority support.",
          expandedContent: {
            description:
              "Ongoing updates, backups and monitoring. I handle technical operations so you can focus on core business.",
            pricing:
              "From 1,000-3,000 NOK/month (excl. VAT), depending on scope and response time.",
            features: [
              "Regular security and plugin updates",
              "Daily or weekly backup solutions",
              "24/7 monitoring and quick response",
            ],
          },
        },
      ];
    }

    // Norwegian services (default)
    return [
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
  };

  const services = getServices();

  return (
    <section className="py-2">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          {currentLanguage === "no" ? "Alle tilgjengelige tjenester" : "All available services"}
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
