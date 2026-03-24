/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

const galleryImages = [
  { src: "/images/projects/kragero-naturstein1.png", alt: "Kragero Naturstein skjermbilde 1" },
  { src: "/images/projects/kragero-naturstein2.png", alt: "Kragero Naturstein skjermbilde 2" },
  { src: "/images/projects/kragero-naturstein3.png", alt: "Kragero Naturstein skjermbilde 3" },
];

const techs = ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"];

export default function KrageroNatursteinPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-40 pb-20">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">

        <Link
          href={getLocalizedPath("/prosjekter", currentLanguage) as any}
          className="editorial-link inline-flex items-center gap-1.5 text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors mb-14"
        >
          ← {isEn ? "Back to projects" : "Tilbake til prosjekter"}
        </Link>

        <h1
          className="text-5xl md:text-7xl font-black tracking-tight text-[#ede9e2] mb-4 leading-[0.9]"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Kragero<br />Naturstein
        </h1>
        <p className="section-label mb-8">
          {isEn ? "Natural Stone Supplier" : "Natursteinssleverandør"}
        </p>
        <p className="text-[#635f5a] text-sm md:text-base max-w-xl leading-relaxed mb-14">
          {isEn
            ? "A professional website built for Kragero Naturstein, a Norwegian natural stone supplier. Clean, modern design suited to their brand."
            : "En profesjonell nettside bygget for Kragero Naturstein, en norsk leverandør av naturstein. Rent og moderne design tilpasset merkevaren."}
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setModalIndex(idx)}
              className="group overflow-hidden bg-[#131313] aspect-[4/3] relative" style={{ borderRadius: "2px" }}
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
        <div className="border-t border-[#ede9e2]/6 pt-8">
          <span className="section-label block mb-5">
            {isEn ? "Built with" : "Bygget med"}
          </span>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 border border-[#ede9e2]/8 text-[#635f5a]" style={{ borderRadius: "2px" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-[#0b0b0b]/97 flex items-center justify-center z-50 p-4"
          onClick={() => setModalIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#ede9e2]/50 hover:text-[#ede9e2] text-sm tracking-widest"
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
