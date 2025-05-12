"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// Bilder for galleriet
const galleryImages = [
  { src: "/images/projects/holidaze1.png", alt: "Holidaze skjermbilde 1" },
  { src: "/images/projects/holidaze2.png", alt: "Holidaze skjermbilde 2" },
  { src: "/images/projects/holidaze3.png", alt: "Holidaze skjermbilde 3" },
];

export default function HolidazePage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  return (
    <>
      {/* Structured data for SEO */}
      <Script type="application/ld+json" id="holidaze-json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Holidaze | Kristiansen Utvikling",
          description:
            "Detaljer om Holidaze-prosjektet: bookingløsning for ferieboliger med kart og kalender.",
          url: "https://kristiansenutvikling.no/prosjekter/holidaze",
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
          <h1 className="text-4xl font-bold mb-4">Holidaze (Ferie Booking)</h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Holidaze er en moderne bookingplattform for ferieboliger. Brukere
            kan søke, filtrere og booke overnattinger via et interaktivt kart og
            kalender.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Teknologier brukt</h2>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li>Next.js & React</li>
            <li>Tailwind CSS for styling</li>
            <li>Mapbox GL JS for kart</li>
            <li>FullCalendar for dato- og tidsvalg</li>
            <li>Sanity CMS for innhold</li>
          </ul>

          {/* Modal */}
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
