"use client";

// src/app/prosjekter/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import point from "../../../../public/images/point.svg";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
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
        },
        {
          id: "auction-site",
          title: "Auction Website",
          description:
            "Real-time auction platform with easy bidding and administration interface.",
          href: "/en/prosjekter/auksjon",
          image: "/images/projects/auctionHome.png",
        },
        {
          id: "rainydays-site",
          title: "RainyDays E-commerce",
          description:
            "Full-featured online store with shopping cart, product display and payment integration.",
          href: "/en/prosjekter/rainydays",
          image: "/images/projects/rainyDaysHome.png",
        },
        {
          id: "museum-site",
          title: "Museum Website",
          description:
            "Informative and aesthetic website for the community museum with storytelling.",
          href: "/en/prosjekter/museum",
          image: "/images/projects/museumHome.png",
        },
        {
          id: "droomvillaspanje",
          title: "DroomvillaSpanje Wix Website",
          description:
            "Enhanced Wix solution for holiday home rental with SEO optimization.",
          href: "/en/prosjekter/droomvillaspanje",
          image: "/images/projects/droomvillaHome.png",
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
      },
      {
        id: "auction-site",
        title: "Auksjon Nettside",
        description:
          "Sanntids auksjonsplattform med enkel budgivning og administrasjonsgrensesnitt.",
        href: "/prosjekter/auksjon",
        image: "/images/projects/auctionHome.png",
      },
      {
        id: "rainydays-site",
        title: "RainyDays E-com",
        description:
          "Fullverdig nettbutikk med handlekurv, produktvisning og betalingsintegrasjon.",
        href: "/prosjekter/rainydays",
        image: "/images/projects/rainyDaysHome.png",
      },
      {
        id: "museum-site",
        title: "Museum Nettside",
        description:
          "Informativt og estetisk nettsted for samfunnsmuseet med historiefortelling.",
        href: "/prosjekter/museum",
        image: "/images/projects/museumHome.png",
      },
      {
        id: "droomvillaspanje",
        title: "DroomvillaSpanje Wix Nettside",
        description:
          "Videreutviklet Wix-løsning for ferieboligutleie med SEO-optimalisering.",
        href: "/prosjekter/droomvillaspanje",
        image: "/images/projects/droomvillaHome.png",
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

      {/* Intro Section */}
      <section className="py-16 px-6 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t.projects.title}</h1>

          <div className="mt-4 flex items-start gap-3 lg:w-3/4 md:w-full p-4">
            <Image src={point} alt="Punktikon" className="mt-1.5 w-3 h-3" />
            <p className="text-gray-300 leading-relaxed">
              {t.projects.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 mb-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href as any}
                className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mockup-laptop w-full border-4 border-gray-700 rounded-xl shadow-md mx-auto">
                  <div className="camera" />
                  <div className="display p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="object-contain w-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
