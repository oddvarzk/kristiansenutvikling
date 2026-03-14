"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

const numbers = ["01", "02", "03"];

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
                <span className="shrink-0 text-[#d4ff3e] text-xs font-black tracking-[0.15em] opacity-50 group-hover:opacity-100 transition-opacity duration-300 mt-1.5">
                  {numbers[idx]}
                </span>
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
