"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface FontEntry {
  name: string;
  role: string;      // e.g. "Heading", "Body"
  sample: string;    // displayed in that font
  cssFamily: string; // e.g. "Satoshi, sans-serif"
}

interface Props {
  colors: ColorSwatch[];
  fonts: FontEntry[];
  isEn?: boolean;
}

export default function ProjectDesignShowcase({ colors, fonts, isEn = false }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Color bars: scale X from 0 → 1 on scroll
      const bars = sectionRef.current?.querySelectorAll<HTMLElement>(".color-bar-fill");
      if (bars && bars.length) {
        gsap.fromTo(
          bars,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
            },
          }
        );
      }

      // Color labels fade in
      const labels = sectionRef.current?.querySelectorAll<HTMLElement>(".color-label");
      if (labels && labels.length) {
        gsap.fromTo(
          labels,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            delay: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
            },
          }
        );
      }

      // Font rows fade up
      const fontRows = sectionRef.current?.querySelectorAll<HTMLElement>(".font-row");
      if (fontRows && fontRows.length) {
        gsap.fromTo(
          fontRows,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="border-t border-[#ede9e2]/6 pt-14 mt-14 space-y-16">

      {/* Color palette */}
      {colors.length > 0 && (
        <div>
          <span className="section-label block mb-8">
            {isEn ? "Colour palette" : "Fargepalett"}
          </span>
          <div className="space-y-4">
            {colors.map((c) => (
              <div key={c.hex} className="flex items-center gap-5">
                {/* Bar */}
                <div
                  className="relative flex-1 h-10 overflow-hidden"
                  style={{ borderRadius: "2px" }}
                >
                  <div
                    className="color-bar-fill absolute inset-0 origin-left"
                    style={{ backgroundColor: c.hex }}
                  />
                </div>
                {/* Label */}
                <div className="color-label shrink-0 flex items-center gap-4 w-44 md:w-56">
                  <span
                    className="font-mono text-[10px] tracking-widest text-[#635f5a] uppercase"
                  >
                    {c.hex}
                  </span>
                  <span className="text-xs text-[#ede9e2]/40">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Typography */}
      {fonts.length > 0 && (
        <div>
          <span className="section-label block mb-8">
            {isEn ? "Typography" : "Typografi"}
          </span>
          <div className="space-y-10">
            {fonts.map((f, i) => (
              <div key={`${f.name}-${i}`} className="font-row border-t border-[#ede9e2]/5 pt-8">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <span className="section-label">{f.role}</span>
                  <span className="font-mono text-[10px] text-[#635f5a]/60 tracking-widest">{f.name}</span>
                </div>
                <p
                  className="text-3xl md:text-5xl text-[#ede9e2] leading-tight"
                  style={{ fontFamily: f.cssFamily, fontWeight: 700 }}
                >
                  {f.sample}
                </p>
                <p
                  className="text-base text-[#635f5a] mt-2 leading-relaxed"
                  style={{ fontFamily: f.cssFamily, fontWeight: 400 }}
                >
                  Aa Bb Cc Dd Ee Ff 0 1 2 3 4 5
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
