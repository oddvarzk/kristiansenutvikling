// src/app/tjenester/page.tsx
import React from "react";
import { Metadata } from "next";
import TjenesterServicesSection from "./components/TjenesterServicesSection";
import BackToTop from "../../components/BackToTop";

export const metadata: Metadata = {
  title: "Tjenester | Kristiansen Utvikling",
  description:
    "Oppdag mine webutviklingstjenester: fra responsive nettsider og e-handelsløsninger til SEO-optimalisering og vedlikehold.",
  keywords: [
    "webutvikling",
    "nettside",
    "apputvikling",
    "SEO",
    "support",
    "Kristiansen Utvikling",
    "Wix",
    "WordPress",
  ],
  alternates: { canonical: "https://kristiansenutvikling.no/tjenester" },
  openGraph: {
    title: "Tjenester | Kristiansen Utvikling",
    description:
      "Se mitt brede spekter av web- og app-tjenester: design, utvikling, SEO og support for å løfte din digitale tilstedeværelse.",
    url: "https://kristiansenutvikling.no/tjenester",
    siteName: "Kristiansen Utvikling",
    locale: "nb_NO",
    type: "website",
  },
};

export default function TjenesterPage() {
  return (
    <div className="space-y-12">
      {/* Intro Section */}
      <section className="py-16 px-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            Mine <span className="text-cyan-400">tjenester</span>
          </h1>
          <p className="text-gray-300 lg:w-3/4 md:w-full p-4">
            Jeg tilbyr et komplett spekter av digitale tjenester for bedrifter
            som ønsker å vokse online. Fra skreddersydde responsive nettsider og
            moderne e-handelsløsninger, til kraftfulle applikasjoner,
            SEO-optimalisering og vedlikeholdspakker - jeg har løsningen som
            passer dine behov.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <TjenesterServicesSection />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 pb-10 text-white">
            Ofte stilte spørsmål
          </h2>
          <div className="space-y-6">
            <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-white">
                Hva koster en standard nettside?
              </summary>
              <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                En enkel én-sides landingsside ligger typisk på{" "}
                <strong>20 000-30 000kr</strong> (eks. mva). For en vanlig
                bedriftsnettside med 3-6 undersider ser man ofte priser rundt{" "}
                <strong>40 000-100 000 kr</strong> (eks. mva).
              </p>
            </details>

            <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-white">
                Hvor lang tid tar utvikling av en e-handelsløsning?
              </summary>
              <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                En komplett e-handelsløsning tar som regel{" "}
                <strong>4-6 uker</strong>, avhengig av produktmengde og
                tilpasninger. Priser starter typisk på{" "}
                <strong>40 000-80 000 kr</strong> (eks. mva).
              </p>
            </details>

            <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-white">
                Tilbyr du support og vedlikeholdsavtale?
              </summary>
              <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                Ja, jeg tilbyr fleksible vedlikeholdsavtaler fra{" "}
                <strong>1 000-3 000 kr/mnd</strong> (eks. mva). Avtalen
                inkluderer sikkerhetsoppdateringer, månedlige backuper og
                prioritert teknisk support.
              </p>
            </details>

            <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-white">
                Kan jeg selv administrere innholdet på siden?
              </summary>
              <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                Absolutt. Jeg leverer alltid et brukervennlig CMS (WordPress,
                Wix eller eget admin-panel) slik at du enkelt kan redigere
                tekst, bilder eller produkter uten teknisk kunnskap.
              </p>
            </details>

            <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-white">
                Hvilke teknologier bruker du?
              </summary>
              <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                Jeg jobber primært med Next.js, React, Tailwind CSS, WordPress,
                Wix og moderne API-er. Dette sikrer raske, trygge og skalerbare
                løsninger.
              </p>
            </details>

            <details className="bg-zinc-800/80 border border-gray-800 hover:border-gray-400 cursor-pointer transition rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-white">
                Hvordan foregår prosessen fra idé til lansering?
              </summary>
              <p className="mt-3 p-5 text-gray-300 leading-relaxed">
                Prosessen starter med behovsanalyse og planlegging, etterfulgt
                av designskisser, utvikling, testing og lansering. Jeg
                involverer deg gjennom hele forløpet for å sikre at resultatet
                møter dine forventninger.
              </p>
            </details>
          </div>
        </div>
      </section>
      <BackToTop />
    </div>
  );
}
