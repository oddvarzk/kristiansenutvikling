"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
  isEn?: boolean;
  placeholderBg?: string;
}

export default function ProjectGallerySlider({ images, isEn = false, placeholderBg = "#131313" }: Props) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  if (images.length === 0) {
    return (
      <div
        className="w-full aspect-[16/9] flex items-center justify-center mb-16"
        style={{ backgroundColor: placeholderBg, borderRadius: "2px" }}
      >
        <span className="font-mono text-[10px] text-[#ede9e2]/10 tracking-widest uppercase">
          {isEn ? "Screenshots coming soon" : "Skjermbilder kommer snart"}
        </span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <>
      <div className="mb-16">
        {/* Main image */}
        <div
          className="relative w-full overflow-hidden mb-3 cursor-zoom-in"
          style={{ aspectRatio: "16 / 9", borderRadius: "2px" }}
          onClick={() => setModalOpen(true)}
        >
          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={i === 0}
              style={{ opacity: i === current ? 1 : 0, transition: "none" }}
            />
          ))}

          {/* Prev / Next — only show when more than one image */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#0b0b0b]/60 hover:bg-[#0b0b0b]/90 text-[#ede9e2]/70 hover:text-[#ede9e2] transition-all duration-200"
                style={{ borderRadius: "2px" }}
                aria-label={isEn ? "Previous" : "Forrige"}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#0b0b0b]/60 hover:bg-[#0b0b0b]/90 text-[#ede9e2]/70 hover:text-[#ede9e2] transition-all duration-200"
                style={{ borderRadius: "2px" }}
                aria-label={isEn ? "Next" : "Neste"}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <span
              className="absolute bottom-3 right-3 font-mono text-[9px] tracking-widest text-[#ede9e2]/50 bg-[#0b0b0b]/60 px-2 py-1"
              style={{ borderRadius: "2px" }}
            >
              {current + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-200"
                style={{
                  width: i === current ? "16px" : "4px",
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: i === current ? "#ede9e2" : "#857f7a",
                  opacity: i === current ? 1 : 0.4,
                }}
                aria-label={`${isEn ? "Go to image" : "Gå til bilde"} ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-[#0b0b0b]/97 flex items-center justify-center z-50 p-4"
          onClick={() => setModalOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}
            className="absolute top-6 right-6 text-[#ede9e2]/50 hover:text-[#ede9e2] text-sm tracking-widest transition-colors"
            aria-label={isEn ? "Close" : "Lukk"}
          >
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#ede9e2]/50 hover:text-[#ede9e2] transition-colors"
                aria-label={isEn ? "Previous" : "Forrige"}
              >
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#ede9e2]/50 hover:text-[#ede9e2] transition-colors"
                aria-label={isEn ? "Next" : "Neste"}
              >
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
          <div
            className="relative max-w-5xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-contain"
                style={{ opacity: i === current ? 1 : 0, transition: "none" }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
