import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";
import BackToTop from "../../components/BackToTop";

export const metadata: Metadata = {
  title: "Prosjekter | Kristiansen Utvikling",
  description:
    "Utforsk våre webutviklingsprosjekter: responsive nettsider, e-handelsløsninger og skreddersydde applikasjoner bygget med React, Next.js og moderne teknologi.",
  keywords: [
    "webutvikling",
    "prosjekter",
    "React",
    "Next.js",
    "e-handel",
    "responsive design",
    "Kristiansen Utvikling",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  alternates: { canonical: "https://kristiansenutvikling.no/prosjekter" },
  openGraph: {
    title: "Prosjekter | Kristiansen Utvikling",
    description:
      "Utforsk våre webutviklingsprosjekter: responsive nettsider, e-handelsløsninger og skreddersydde applikasjoner.",
    url: "https://kristiansenutvikling.no/prosjekter",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Prosjekter hos Kristiansen Utvikling",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const featuredProjects: Project[] = [
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

export default function Projekter() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script type="application/ld+json" id="ld-json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Prosjekter | Kristiansen Utvikling",
          url: "https://kristiansenutvikling.no/prosjekter",
          itemListElement: featuredProjects.map((proj, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://kristiansenutvikling.no${proj.href}`,
            name: proj.title,
          })),
        })}
      </Script>

      {/* Intro Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Utforsk mine <span className="text-cyan-400">prosjekter</span>
          </h1>
          <p className="text-gray-300">
            Her finner du et utvalg av nettsider, e-handelsløsninger og
            applikasjoner jeg har utviklet for fornøyde kunder. Prosjektene er
            bygget med moderne rammeverk som React, Next.js og Tailwind, og
            viser bredden i vår kompetanse: fra responsive designs og
            SEO-optimalisering til komplekse funksjonaliteter.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 mb-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit mx-auto">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
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
