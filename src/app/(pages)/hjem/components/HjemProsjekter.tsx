// src/components/FeaturedProjects.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Utvalgte <span className="text-cyan-400">prosjekter</span>
        </h2>

        {/* Grid of featured project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit mx-auto align-middle mt-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
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
            href="/prosjekter"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-500 transition"
          >
            Se alle prosjekter
          </Link>
        </div>
      </div>
    </section>
  );
}
