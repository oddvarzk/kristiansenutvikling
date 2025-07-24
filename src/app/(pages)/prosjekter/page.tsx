/* eslint-disable @typescript-eslint/no-explicit-any */
// Reason: Next.js 15 typedRoutes requires dynamic hrefs to be cast as any for i18n/dynamic routes.
"use client";

// src/app/prosjekter/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  badges: string[];
}

export default function Projekter() {
  const { t, currentLanguage } = useTranslations();

  const getFeaturedProjects = (): Project[] => {
    if (currentLanguage === "en") {
      return [
        {
          id: "holidaze",
          title: "Holidaze (Holiday Booking)",
          description:
            "A modern, user-focused booking solution for holiday homes with interactive maps and calendar.",
          href: "/en/prosjekter/holidaze",
          image: "/images/projects/holidazeHome.png",
          badges: ["Next.js", "React", "Booking"],
        },
        {
          id: "auction-site",
          title: "Auction Website",
          description:
            "Real-time auction platform with easy bidding and administration interface.",
          href: "/en/prosjekter/auksjon",
          image: "/images/projects/auctionHome.png",
          badges: ["Next.js", "Real-time", "Admin"],
        },
        {
          id: "rainydays-site",
          title: "RainyDays E-commerce",
          description:
            "Full-featured online store with shopping cart, product display and payment integration.",
          href: "/en/prosjekter/rainydays",
          image: "/images/projects/rainyDaysHome.png",
          badges: ["React", "E-commerce", "Stripe"],
        },
        {
          id: "museum-site",
          title: "Museum Website",
          description:
            "Informative and aesthetic website for the community museum with storytelling.",
          href: "/en/prosjekter/museum",
          image: "/images/projects/museumHome.png",
          badges: ["React", "Contentful", "Storytelling"],
        },
        {
          id: "droomvillaspanje",
          title: "DroomvillaSpanje Wix Website",
          description:
            "Enhanced Wix solution for holiday home rental with SEO optimization.",
          href: "/en/prosjekter/droomvillaspanje",
          image: "/images/projects/droomvillaHome.png",
          badges: ["Wix", "SEO", "Rental"],
        },
        {
          id: "vevet-coming-soon",
          title: "vevet.no (Coming Soon)",
          description: "A new digital platform for creative collaboration. Launching soon!",
          href: "#",
          image: "/images/projects/comingsoon.webp",
          badges: ["Coming soon"],
        },
        {
          id: "mail-coming-soon",
          title: "mail****.com (Coming Soon)",
          description: "A next-generation email service. Stay tuned!",
          href: "#",
          image: "/images/projects/comingsoon.webp",
          badges: ["Coming soon"],
        },
      ];
    }

    // Norwegian projects (default)
    return [
      {
        id: "holidaze",
        title: "Holidaze (Ferie Booking)",
        description:
          "En moderne, brukerfokusert bookingløsning for ferieboliger med interaktive kart og kalender.",
        href: "/prosjekter/holidaze",
        image: "/images/projects/holidazeHome.png",
        badges: ["Next.js", "React", "Booking"],
      },
      {
        id: "auction-site",
        title: "Auksjon Nettside",
        description:
          "Sanntids auksjonsplattform med enkel budgivning og administrasjonsgrensesnitt.",
        href: "/prosjekter/auksjon",
        image: "/images/projects/auctionHome.png",
        badges: ["Next.js", "Sanntid", "Admin"],
      },
      {
        id: "rainydays-site",
        title: "RainyDays E-com",
        description:
          "Fullverdig nettbutikk med handlekurv, produktvisning og betalingsintegrasjon.",
        href: "/prosjekter/rainydays",
        image: "/images/projects/rainyDaysHome.png",
        badges: ["React", "E-handel", "Stripe"],
      },
      {
        id: "museum-site",
        title: "Museum Nettside",
        description:
          "Informativt og estetisk nettsted for samfunnsmuseet med historiefortelling.",
        href: "/prosjekter/museum",
        image: "/images/projects/museumHome.png",
        badges: ["React", "Contentful", "Historiefortelling"],
      },
      {
        id: "droomvillaspanje",
        title: "DroomvillaSpanje Wix Nettside",
        description:
          "Videreutviklet Wix-løsning for ferieboligutleie med SEO-optimalisering.",
        href: "/prosjekter/droomvillaspanje",
        image: "/images/projects/droomvillaHome.png",
        badges: ["Wix", "SEO", "Utleie"],
      },
      {
        id: "vevet-coming-soon",
        title: "vevet.no (Kommer snart)",
        description: "En ny digital plattform for kreativt samarbeid. Lanseres snart!",
        href: "#",
        image: "/images/projects/comingsoon.webp",
        badges: ["Kommer snart"],
      },
      {
        id: "mail-coming-soon",
        title: "mail****.com (Kommer snart)",
        description: "En neste generasjons e-posttjeneste. Følg med!",
        href: "#",
        image: "/images/projects/comingsoon.webp",
        badges: ["Kommer snart"],
      },
    ];
  };

  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Combined JSON-LD: WebPage, BreadcrumbList, ItemList */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://kristiansenutvikling.no/prosjekter#webpage",
              url: "https://kristiansenutvikling.no/prosjekter",
              name: "Prosjekter | Kristiansen Utvikling",
              description:
                "Utforsk våre webutviklingsprosjekter: responsive nettsider, e-handelsløsninger og skreddersydde applikasjoner bygget med React, Next.js og moderne teknologi.",
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://kristiansenutvikling.no/prosjekter#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Hjem",
                  item: "https://kristiansenutvikling.no/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Prosjekter",
                  item: "https://kristiansenutvikling.no/prosjekter",
                },
              ],
            },
            {
              "@type": "ItemList",
              "@id": "https://kristiansenutvikling.no/prosjekter#projects",
              name: "Prosjekter | Kristiansen Utvikling",
              url: "https://kristiansenutvikling.no/prosjekter",
              itemListElement: featuredProjects.map((proj, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                url: `https://kristiansenutvikling.no${proj.href}`,
                name: proj.title,
              })),
            },
          ],
        })}
      </Script>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.projects.title}
            </h1>
            <div className="mb-8">
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t.projects.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Heading & Stats */}
      <section className="py-10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentLanguage === "no" ? "Utvalgte prosjekter" : "Featured Projects"}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {currentLanguage === "no"
                ? "Et utvalg av mine beste prosjekter innen webutvikling, e-handel og design."
                : "A selection of my best projects in web development, e-commerce, and design."}
            </p>
          </div>
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">{currentLanguage === "no" ? "Prosjekter" : "Projects"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3+</div>
              <div className="text-gray-400 text-sm">{currentLanguage === "no" ? "År erfaring" : "Years Experience"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">{currentLanguage === "no" ? "Kundetilfredshet" : "Client Satisfaction"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 mb-20 text-white bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl mx-auto">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href as any}
                className="group block bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 p-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-zinc-700/50 hover:border-cyan-500/50"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.badges && project.badges.map((badge, i) => (
                      <span key={i} className="bg-cyan-900/60 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {currentLanguage === "no" ? "Se prosjekt" : "View Project"} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {currentLanguage === "no" 
                ? "Vil du vite mer om prosjektene eller starte ditt eget?"
                : "Want to know more about the projects or start your own?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentLanguage === "no"
                ? "Ta kontakt for en uforpliktende prat eller se flere referanser."
                : "Contact me for a chat or see more references."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={currentLanguage === "no" ? "/kontakt" : "/en/kontakt"}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentLanguage === "no" ? "Kontakt meg" : "Contact me"}
              </a>
              <a
                href={currentLanguage === "no" ? "/tjenester" : "/en/tjenester"}
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {currentLanguage === "no" ? "Se tjenester" : "View services"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
