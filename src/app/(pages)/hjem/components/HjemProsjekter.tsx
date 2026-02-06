"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/app/hooks/useTranslations";

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function FeaturedProjects() {
  const { t, currentLanguage } = useTranslations();

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  const getFeaturedProjects = (): Project[] => {
    if (currentLanguage === "en") {
      return [
        {
          id: "holidaze",
          title: "Holidaze (Holiday Booking)",
          description:
            "Modern booking solution for holiday homes with full overview and responsive design.",
          href: "/en/prosjekter/holidaze",
          image: "/images/projects/holidazeHome.png",
        },
        {
          id: "auksjon",
          title: "Auction Website",
          description:
            "Real-time auction platform with smooth bidding and administration.",
          href: "/en/prosjekter/auksjon",
          image: "/images/projects/auctionHome.png",
        },
        {
          id: "rainydays",
          title: "RainyDays E-commerce",
          description:
            "Elegant online store with product gallery, shopping cart and payment solution.",
          href: "/en/prosjekter/rainydays",
          image: "/images/projects/rainyDaysHome.png",
        },
      ];
    }

    // Norwegian projects (default)
    return [
      {
        id: "holidaze",
        title: "Holidaze (Ferie Booking)",
        description:
          "Moderne booking-løsning for ferieboliger med full oversikt og responsivt design.",
        href: "/prosjekter/holidaze",
        image: "/images/projects/holidazeHome.png",
      },
      {
        id: "auksjon",
        title: "Auksjon Nettside",
        description:
          "Sanntids auksjonsplattform med smidig budgivning og administrasjon.",
        href: "/prosjekter/auksjon",
        image: "/images/projects/auctionHome.png",
      },
      {
        id: "rainydays",
        title: "RainyDays E-com",
        description:
          "Elegant nettbutikk med produktgalleri, handlekurv og betalingsløsning.",
        href: "/prosjekter/rainydays",
        image: "/images/projects/rainyDaysHome.png",
      },
    ];
  };

  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.home.featuredProjects.title}
        </h2>

        {/* Grid of featured project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl mx-auto mt-12">
          {featuredProjects.map((project) => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* "Se alle prosjekter" button */}
        <div className="mt-8 text-center">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Link
            href={getLocalizedPath("/prosjekter") as any}
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-500 transition"
          >
            {t.home.featuredProjects.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
