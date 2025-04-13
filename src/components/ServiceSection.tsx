"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import AnimatedKeyword from "../components/AnimtertText";

// Type for the AnimatedSection props
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Type for service content
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

// Observer component for scrolling animations
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// Expandable service item component
const ExpandableServiceItem = ({
  service,
  isOpen,
  toggleOpen,
  delay,
}: {
  service: ServiceItem;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}) => {
  return (
    <div className="mb-6">
      <div
        className={`w-full cursor-pointer rounded-lg transition-all duration-300 overflow-hidden ${
          isOpen
            ? "bg-black bg-opacity-70 shadow-lg shadow-cyan-900/20"
            : "bg-black bg-opacity-50 hover:bg-opacity-60"
        }`}
      >
        {/* Header section */}
        <div onClick={toggleOpen} className="p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">
              <AnimatedKeyword delay={delay} highlightColor="text-cyan-400">
                {service.title}
              </AnimatedKeyword>
            </h3>
            <div className="flex items-center">
              {!isOpen && (
                <span className="text-sm text-gray-400 mr-2">Se detaljer</span>
              )}
              <svg
                className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
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
          <p className="text-gray-300 mt-1">{service.shortDescription}</p>
        </div>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 border-t border-gray-800">
            <p className="text-gray-200 mb-4">
              {service.expandedContent.description}
            </p>

            <div className="bg-gradient-to-r from-gray-800/70 to-cyan-900/30 p-4 rounded-lg mb-4">
              <h4 className="text-cyan-400 font-medium mb-2">Prising:</h4>
              <p className="text-gray-200">{service.expandedContent.pricing}</p>
            </div>

            <div>
              <h4 className="text-cyan-400 font-medium mb-2">
                Dette inkluderer:
              </h4>
              <ul className="space-y-2">
                {service.expandedContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">✓</span>
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
};

export default function ServicesSection() {
  // State to track which service is expanded
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  // Toggle function
  const toggleService = (serviceId: string) => {
    setOpenServiceId(openServiceId === serviceId ? null : serviceId);
  };

  // Service data
  const services: ServiceItem[] = [
    {
      id: "website",
      title: "Nettside Utvikling",
      shortDescription:
        "Moderne, responsive nettsider skreddersydd for dine behov.",
      expandedContent: {
        description:
          "Vi utvikler profesjonelle nettsider som representerer din merkevare på best mulig måte. Alle våre nettsider er responsiv for mobil og tablet, og er optimalisert for hastighet og søkemotorer.",
        pricing:
          "Fra 15.000 kr for enkle nettsider, 25.000+ kr for større prosjekter med omfattende funksjonalitet.",
        features: [
          "Responsivt design som fungerer på alle enheter",
          "SEO-optimalisert struktur og innhold",
          "Brukervennlig administrasjonspanel",
          "Tilkobling til ditt domene",
          "Gratis teknisk support i 3 måneder",
          "Grundig opplæring i hvordan du kan oppdatere din nettside",
        ],
      },
    },
    {
      id: "ecommerce",
      title: "Nettbutikk Løsninger",
      shortDescription:
        "Komplette e-handelsløsninger med betalingsintegrering og lagerstyring.",
      expandedContent: {
        description:
          "Vi bygger skreddersydde nettbutikker som konverterer besøkende til kunder. Med intuitiv navigasjon, sikker betaling og effektiv lagerstyring får du alt du trenger for å selge dine produkter online.",
        pricing:
          "Fra 30.000 kr for grunnleggende nettbutikker, 50.000+ kr for avanserte løsninger med integrasjoner.",
        features: [
          "Brukervennlig produktadministrasjon",
          "Integrerte betalingsløsninger (Vipps, kort, faktura)",
          "Automatisert lagerbehandling",
          "Rabatt- og kupongfunksjonalitet",
          "Detaljert salgsstatistikk og rapporter",
          "Mobile betalingsløsninger",
        ],
      },
    },
    {
      id: "seo",
      title: "SEO Optimalisering",
      shortDescription:
        "Forbedre synligheten din på søkemotorer og få mer organisk trafikk.",
      expandedContent: {
        description:
          "Vi hjelper din bedrift med å klatre i søkeresultatene og bli mer synlig for potensielle kunder. Vår tilnærming til SEO er basert på beste praksis og langsiktige resultater.",
        pricing:
          "Fra 7.500 kr for grunnleggende SEO-pakke, 15.000+ kr for omfattende optimalisering og kontinuerlig vedlikehold.",
        features: [
          "Omfattende nøkkelordanalyse",
          "Optimalisering av innhold og struktur",
          "Teknisk SEO og feilretting",
          "Lokal SEO for bedrifter med fysisk tilstedeværelse",
          "Månedlige rapporter med nøkkeltall og framgang",
          "Link building-strategi",
        ],
      },
    },
    {
      id: "app",
      title: "App Utvikling",
      shortDescription:
        "Skreddersydde applikasjoner for iOS og Android med fokus på brukervennlighet.",
      expandedContent: {
        description:
          "Vi utvikler native og hybrid mobilapplikasjoner som gir verdi for dine brukere. Fra idé til lansering i App Store og Google Play, vi tar hånd om hele prosessen.",
        pricing:
          "Fra 100.000 kr for enklere apper, 250.000+ kr for mer komplekse løsninger med backend-integrasjoner.",
        features: [
          "Utvikling for iOS og Android",
          "Brukervennlig og intuitivt grensesnitt",
          "API-integrasjoner mot dine eksisterende systemer",
          "Offline-funksjonalitet ved behov",
          "Automatiserte oppdateringer",
          "Grundig testing på ulike enheter",
        ],
      },
    },
    {
      id: "maintenance",
      title: "Vedlikehold og Support",
      shortDescription:
        "Løpende vedlikehold, oppdateringer og støtte for eksisterende digitale løsninger.",
      expandedContent: {
        description:
          "Vi tilbyr løpende vedlikehold og support for å sikre at dine digitale løsninger alltid er oppdatert, sikre og fungerer optimalt for dine brukere.",
        pricing:
          "Fra 1.500 kr/mnd for grunnleggende vedlikehold, tilpassede pakker basert på dine behov.",
        features: [
          "Regelmessige sikkerhetsoppdateringer",
          "Teknisk support via e-post og telefon",
          "Overvåking av ytelse og oppetid",
          "Månedlig sikkerhetskopiering",
          "Mindre innholdsoppdateringer",
          "Prioritert responstid ved kritiske problemer",
        ],
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-cyan-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <AnimatedKeyword delay={200} highlightColor="text-cyan-400">
            Tjenester
          </AnimatedKeyword>{" "}
          jeg{" "}
          <AnimatedKeyword delay={600} highlightColor="text-cyan-400">
            tilbyr
          </AnimatedKeyword>
        </h2>

        <AnimatedSection delay={300} className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <ExpandableServiceItem
              key={service.id}
              service={service}
              isOpen={openServiceId === service.id}
              toggleOpen={() => toggleService(service.id)}
              delay={400 + index * 200}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
