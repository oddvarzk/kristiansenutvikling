"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import AnimatedKeyword from "../app/styles/AnimtertText";

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
        className={`w-full cursor-pointer rounded-lg transition-all duration-300 overflow-hidden backdrop-blur-sm ${
          isOpen
            ? "bg-gradient-to-r from-zinc-900/90 to-black/95 border-l-2 border-cyan-500 shadow-lg"
            : "bg-zinc-900/80 hover:bg-zinc-900/90 hover:border-l hover:border-cyan-500/30"
        }`}
      >
        {/* Header section */}
        <div onClick={toggleOpen} className="p-5 flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">
              <AnimatedKeyword delay={delay} highlightColor="text-cyan-400">
                {service.title}
              </AnimatedKeyword>
            </h3>
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
                  className={`w-4 h-4 ${
                    isOpen ? "text-cyan-400" : "text-gray-400"
                  } transition-transform duration-300 ${
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
          </div>
          <p className="text-gray-300 mt-2">{service.shortDescription}</p>
        </div>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 pt-0">
            <div className="border-t border-gray-800 pt-5 mb-5"></div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {service.expandedContent.description}
            </p>

            <div className="bg-gradient-to-r from-zinc-800/70 to-zinc-900/70 p-5 rounded-lg mb-6 border border-zinc-700/30">
              <h4 className="text-cyan-400 font-medium mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Prising:
              </h4>
              <p className="text-gray-200">{service.expandedContent.pricing}</p>
            </div>

            <div>
              <h4 className="text-cyan-400 font-medium mb-3 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
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
                Dette inkluderer:
              </h4>
              <ul className="space-y-3 ml-6">
                {service.expandedContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
};

export default function ServicesSection() {
  // State to track which service is expanded
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  // Toggle function
  const toggleService = (serviceId: string) => {
    setOpenServiceId(openServiceId === serviceId ? null : serviceId);
  };

  // Service data with updated Norwegian pricing
  const services: ServiceItem[] = [
    {
      id: "website",
      title: "Nettside Utvikling",
      shortDescription:
        "Skreddersydde, responsive nettsider for din virksomhet.",
      expandedContent: {
        description:
          "Jeg utvikler profesjonelle nettsider som representerer din merkevare på best mulig måte. Alle nettsidene er responsive for mobil og tablet, og er optimalisert for hastighet og søkemotorer.",
        pricing:
          "Fra 20.000 kr for enkle nettsider. 40.000-90.000 kr for større prosjekter med tilpasset funksjonalitet.",
        features: [
          "Responsivt design som fungerer på alle enheter",
          "SEO-optimalisert struktur og innhold",
          "Brukervennlig administrasjonspanel",
          "Tilkobling til ditt domene og e-postoppsett",
          "Gratis teknisk support i 6 måneder",
          "Grundig opplæring i innholdshåndtering",
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
          "Jeg bygger skreddersydde nettbutikker som konverterer besøkende til kunder. Med intuitiv navigasjon, sikker betaling og effektiv lagerstyring får du alt du trenger for å selge dine produkter online.",
        pricing:
          "Fra 60.000 kr for standard nettbutikker. 90.000-150.000 kr for avanserte løsninger med spesialtilpassede integrasjoner.",
        features: [
          "Integrerte betalingsløsninger (Vipps, Nets, Stripe, PayPal)",
          "Fullstendig produktadministrasjon",
          "Automatisert lagerbehandling og ordrestyring",
          "Kunde- og medlemssystem",
          "Rapportering og salgsanalyse",
          "Fraktkalkulasjon og rabattmodul",
        ],
      },
    },
    {
      id: "seo",
      title: "SEO Optimalisering",
      shortDescription:
        "Øk synligheten på søkemotorer og få mer organisk trafikk.",
      expandedContent: {
        description:
          "Jeg hjelper din bedrift med å klatre i søkeresultatene og bli mer synlig for potensielle kunder. Min tilnærming til SEO er basert på beste praksis og langsiktige resultater som passer det norske markedet.",
        pricing:
          "Fra 12.000 kr for grunnleggende SEO-pakke. 6.000-15.000 kr/mnd for kontinuerlig optimalisering og vedlikehold.",
        features: [
          "Omfattende nøkkelordanalyse tilpasset norske søkemønstre",
          "Teknisk SEO-gjennomgang og feilretting",
          "Lokal SEO for bedrifter med fysisk tilstedeværelse",
          "Optimalisering for Google My Business",
          "Månedlige rapporter med nøkkeltall og anbefalinger",
          "Innholdsoptimalisering og rådgivning",
        ],
      },
    },
    {
      id: "maintenance",
      title: "Vedlikehold og Support",
      shortDescription:
        "Pålitelig drift, oppdateringer og teknisk støtte for dine digitale løsninger.",
      expandedContent: {
        description:
          "Jeg tilbyr løpende vedlikehold og support for å sikre at dine digitale løsninger alltid er oppdatert, sikre og fungerer optimalt for dine brukere.",
        pricing:
          "Fra 2.500 kr/mnd for grunnleggende vedlikehold. Tilpassede pakker basert på dine behov.",
        features: [
          "Regelmessige sikkerhetsoppdateringer",
          "Dedikert teknisk support med rask responstid",
          "Proaktiv overvåking av ytelse og sikkerhet",
          "Månedlig sikkerhetskopiering og systemgjennomgang",
          "Innholdsoppdateringer og mindre designjusteringer",
          "Prioritert responstid ved kritiske problemer",
        ],
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tjenester jeg{" "}
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
