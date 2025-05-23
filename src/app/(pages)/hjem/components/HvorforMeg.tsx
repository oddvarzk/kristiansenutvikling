"use client";

import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="h-full p-[1px] rounded-4xl border-1 border-cyan-700">
      <div className="h-full rounded-4xl bg-gradient-to-bl from-zinc-900/90 to-black/95 p-8 shadow-lg">
        <div className="text-cyan-400 mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

export default function WhyChooseMe() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
          Hvorfor velge meg som din partner?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch max-w-6xl mx-auto">
          <FeatureCard
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            title="Pålitelig kvalitet"
            description="Dedikert til å levere høykvalitetsløsninger som møter eller overgår dine forventninger, alltid til avtalt tid."
          />

          <FeatureCard
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
            title="Klar kommunikasjon"
            description="Tett dialog gjennom hele prosessen med rask responstid og forståelige forklaringer uten teknisk sjargong."
          />

          <FeatureCard
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            title="Skreddersydde løsninger"
            description="Hvert prosjekt er unikt. Jeg lager tilpassede løsninger basert på dine spesifikke behov og forretningsmål."
          />
        </div>
      </div>
    </section>
  );
}
