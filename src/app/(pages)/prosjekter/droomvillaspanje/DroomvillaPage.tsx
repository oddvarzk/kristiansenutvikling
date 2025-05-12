"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// Bilder for galleriet
const galleryImages = [
  { src: "/images/projects/droomvilla1.png", alt: "DroomVillaSpanje forside" },
  {
    src: "/images/projects/droomvilla2.png",
    alt: "DroomVillaSpanje eiendomsliste",
  },
  {
    src: "/images/projects/droomvilla3.png",
    alt: "DroomVillaSpanje mobilvisning",
  },
];

export default function DroomvillaspanjePage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  return (
    <>
      {/* Structured Data for SEO */}
      <Script type="application/ld+json" id="droomvilla-json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "DroomVillaSpanje | Kristiansen Utvikling",
          description:
            "DroomVillaSpanje - Wix Custom Velo Ratings system + SEO forbedringer.",
          url: "https://kristiansenutvikling.no/projects/droomvillaspanje",
        })}
      </Script>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          {/* Bildegalleri først */}
          <h2 className="text-2xl font-semibold mb-4">Bildegalleri</h2>
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

          {/* Prosjektoversikt */}
          <h1 className="text-4xl font-bold mb-4">
            DroomVillaSpanje (Wix Nettside)
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            DroomVillaSpanje er en skreddersydd Wix-nettside for
            ferieboligutleie i Spania, med fokus på SEO, responssiv design og
            enkel booking.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Teknologier brukt</h2>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li>Wix Editor & Corvid for tilpasset funksjonalitet</li>
            <li>SEO-optimalisering med meta-tags og strukturerte data</li>
            <li>Mobil- og desktopresponsivitet</li>
            <li>Nettsideoptimalisering for rask lastetid</li>
          </ul>

          {/* Modal for galleri */}
          {modalIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <button
                onClick={() => setModalIndex(null)}
                className="absolute top-4 right-4 text-white text-3xl"
                aria-label="Lukk galleri"
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

          <div className="mt-12">
            <Link href="/projects" className="text-cyan-400 hover:underline">
              &larr; Tilbake til prosjekter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
