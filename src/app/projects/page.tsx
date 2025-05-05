import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Prosjekter | Kristiansen Utvikling",
  description:
    "Se andre nettsider jeg har utviklet, dette gir deg en smakebit av hva en kunde kan forvente fra dette webutviklingsfirmaet.",
  alternates: { canonical: "https://kristiansenutvikling.no/prosjekter" },
  openGraph: {
    title: "Prosjekter | Kristiansen Utvikling",
    description:
      "Se andre nettsider jeg har utviklet dette gir deg en smakebit av hva en kunde kan forvente fra dette webutviklingsfirmaet.",
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
  robots: {
    index: true,
    follow: true,
  },
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
      "Moderne booking-løsning for ferieboliger med full oversikt og responsivt design.",
    href: "/projects/holidaze",
    image: "/images/projects/holidazeHome.png",
  },
  {
    id: "auction-site",
    title: "Auksjon Nettside",
    description:
      "Sanntids auksjonsplattform med smidig budgivning og administrasjon.",
    href: "/projects/auction-site",
    image: "/images/projects/auctionHome.png",
  },
  {
    id: "rainydays-site",
    title: "RainyDays E-com",
    description:
      "Elegant nettbutikk med produktgalleri, handlekurv og betalingsløsning.",
    href: "/projects/rainydays-site",
    image: "/images/projects/rainyDaysHome.png",
  },
  {
    id: "museum-site",
    title: "Museum Nettside",
    description: "Samfunnsmuseum med tidløst design og strømlinjeformet UI/UX.",
    href: "/projects/museum",
    image: "/images/projects/museumHome.png",
  },
  {
    id: "droomvillaspanje",
    title: "DroomvillaSpanje Wix Nettside",
    description: "Etterutviklet nettside for utleie av ferieboliger i Spania.",
    href: "/projects/droomvillaspanje",
    image: "/images/projects/droomvillaHome.png",
  },
];

export default function ProjectPage() {
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

      <section className="py-24 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">
            Alle <span className="text-cyan-400">prosjekter</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </>
  );
}
