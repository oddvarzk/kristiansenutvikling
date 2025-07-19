// src/components/FeaturedProjects.tsx
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
        <div className="flex flex-wrap justify-center gap-20 mt-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href as any}
              className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project image */}
              <div className="mockup-laptop w-full sm:w-full md:w-full lg:w-[100%] border-4 border-gray-700 rounded-xl shadow-md mx-auto">
                <div className="camera" />
                {/* Display container adjusted to image dimensions */}
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
              {/* Project title & description */}
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
