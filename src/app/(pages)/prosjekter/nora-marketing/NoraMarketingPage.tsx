/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

const galleryImages = [
  { src: "/images/projects/nora-marketing1.png", alt: "Nora Marketing skjermbilde 1" },
  { src: "/images/projects/nora-marketing2.png", alt: "Nora Marketing skjermbilde 2" },
  { src: "/images/projects/nora-marketing3.png", alt: "Nora Marketing skjermbilde 3" },
];

const techs = ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"];

export default function NoraMarketingPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#080808] pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">

        <Link
          href={getLocalizedPath("/prosjekter", currentLanguage) as any}
          className="inline-block text-sm text-[#6e6b66] hover:text-[#d4ff3e] transition-colors mb-12"
        >
          ← {isEn ? "Back to projects" : "Tilbake til prosjekter"}
        </Link>

        <h1
          className="text-5xl md:text-7xl font-black tracking-tight text-[#f0ede7] mb-4 leading-[0.92]"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Nora<br />Marketing
        </h1>
        <p className="text-[#6e6b66] text-xs font-medium mb-8">
          {isEn ? "Marketing Agency" : "Markedsføringsbyrå"}
        </p>
        <p className="text-[#6e6b66] text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          {isEn
            ? "A modern marketing agency website focused on conversions and brand credibility."
            : "En moderne markedsføringsbyrå-nettside med fokus på konverteringer og merkevarebygging."}
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setModalIndex(idx)}
              className="group overflow-hidden rounded-2xl bg-[#111111] aspect-[4/3] relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </button>
          ))}
        </div>

        {/* Tech */}
        <div className="border-t border-[#1a1a1a] pt-8">
          <p className="text-xs text-[#6e6b66]/50 mb-4">
            {isEn ? "Built with" : "Bygget med"}
          </p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#1a1a1a] text-[#6e6b66]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-[#080808]/95 flex items-center justify-center z-50 p-4"
          onClick={() => setModalIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#f0ede7]/60 hover:text-[#f0ede7] text-xl"
            aria-label={isEn ? "Close" : "Lukk"}
          >
            ✕
          </button>
          <div
            className="relative max-w-5xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[modalIndex].src}
              alt={galleryImages[modalIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
