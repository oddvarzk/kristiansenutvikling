// src/app/prosjekter/museum/MuseumPage.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";

// Bilder for galleriet
const galleryImages = [
  { src: "/images/projects/museum1.png", alt: "Museum Nettside - hjemme" },
  { src: "/images/projects/museum2.png", alt: "Museum Nettside - utstilling" },
  {
    src: "/images/projects/museum3.png",
    alt: "Museum Nettside - Samfunnsmuseum, fra barneaktiviteter til eldre beskrivelser",
  },
];

export default function MuseumPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const { t, currentLanguage } = useTranslations();

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  const getProjectData = () => {
    if (currentLanguage === "en") {
      return {
        title: "Museum Website",
        description: "An informative and visually engaging website for the community museum, with focus on storytelling, dynamic exhibitions and user-friendliness.",
        gallery: "Image Gallery",
        technologies: "Technologies Used",
        backToProjects: "← Back to projects"
      };
    }

    return {
      title: "Museum Nettside",
      description: "En informativ og visuelt engasjerende nettside for samfunnsmuseet, med fokus på historiefortelling, dynamiske utstillinger og brukervennlighet.",
      gallery: "Bildegalleri",
      technologies: "Teknologier brukt",
      backToProjects: "← Tilbake til prosjekter"
    };
  };

  const projectData = getProjectData();

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8">{projectData.title}</h1>
        <p className="text-gray-300 mb-12 leading-relaxed">
          {projectData.description}
        </p>

        {/* Bildegalleri */}
        <h2 className="text-2xl font-semibold mb-4">{projectData.gallery}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setModalIndex(idx)}
              className="overflow-hidden rounded-lg group"
            >
              <div className="relative h-48 w-full group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Teknologier brukt */}
        <h2 className="text-2xl font-semibold mb-4">{projectData.technologies}</h2>
        <ul className="list-disc list-inside text-gray-300 mb-12">
          <li>Next.js & React</li>
          <li>Tailwind CSS for styling</li>
          <li>Framer Motion for animasjoner</li>
          <li>Sanity CMS for innholdsadministrasjon</li>
          <li>MDX for rikt tekst- og bildemateriale</li>
        </ul>

        {/* Modal */}
        {modalIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl"
              aria-label={currentLanguage === "en" ? "Close gallery" : "Lukk galleri"}
            >
              &times;
            </button>
            <div className="relative max-w-4xl w-full h-[80vh]">
              <Image
                src={galleryImages[modalIndex].src}
                alt={galleryImages[modalIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link href={getLocalizedPath("/prosjekter") as any} className="text-cyan-400 hover:underline">
            {projectData.backToProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
