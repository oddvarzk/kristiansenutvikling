"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

// Accent shapes — each card gets a different geometric mark
const accents = [
  // Thin lime circle
  <svg key="a" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#d4ff3e" strokeWidth="1.5" />
  </svg>,
  // Lime rotated square
  <svg key="b" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="4" width="14" height="14" stroke="#d4ff3e" strokeWidth="1.5" transform="rotate(45 11 11)" />
  </svg>,
  // Lime arrow-right
  <svg key="c" width="28" height="16" viewBox="0 0 28 16" fill="none">
    <path d="M0 8h24M18 2l6 6-6 6" stroke="#d4ff3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function WhyChooseMe() {
  const { t } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Heading slides in
      gsap.from(".why-heading", {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      // Cards stagger in from below with slight rotation
      gsap.from(".why-card", {
        y: 60, opacity: 0, rotation: 1.5,
        duration: 0.9, stagger: 0.18, ease: "power3.out",
        scrollTrigger: { trigger: ".why-cards-grid", start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = t.whyChooseMe.cards;

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-10">

        {/* Heading — typographic, no label tag */}
        <h2
          className="why-heading text-3xl md:text-5xl font-black tracking-tight text-[#f0ede7] leading-tight mb-16 md:mb-20 max-w-xl"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          {t.whyChooseMe.heading}
        </h2>

        {/* Cards — alternating layout, no grid gap lines */}
        <div className="why-cards-grid space-y-0">
          {cards.map((card: { title: string; description: string }, idx: number) => (
            <div
              key={idx}
              className={`why-card group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-t border-[#1a1a1a] gap-6 ${
                idx === cards.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Left: accent + title */}
              <div className="flex items-start gap-5 md:gap-8 flex-1">
                <div className="shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {accents[idx]}
                </div>
                <h3
                  className="text-xl md:text-3xl font-black tracking-tight text-[#f0ede7] group-hover:text-[#d4ff3e] transition-colors duration-300 leading-tight"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {card.title}
                </h3>
              </div>
              {/* Right: description */}
              <p className="text-[#6e6b66] text-sm leading-relaxed md:max-w-xs md:text-right">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
