"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

const numbers = ["01", "02", "03"];

export default function WhyChooseMe() {
  const { t, currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".why-heading", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".why-card", {
        y: 50, opacity: 0,
        duration: 0.85, stagger: 0.16, ease: "power3.out",
        scrollTrigger: { trigger: ".why-cards-grid", start: "top 76%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = t.whyChooseMe.cards;

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-[#0b0b0b]">
      <div className="container mx-auto px-6 md:px-10">

        {/* Top — label + large heading side by side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-20 md:mb-28">
          <span className="section-label pt-1 shrink-0">
            {isEn ? "Why work with me" : "Hvorfor velge meg"}
          </span>
          <h2
            className="why-heading text-[9vw] md:text-[5vw] font-black tracking-tight text-[#ede9e2] leading-[0.92] md:max-w-2xl"
            style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
          >
            {t.whyChooseMe.heading}
          </h2>
        </div>

        {/* Cards — editorial row layout */}
        <div className="why-cards-grid">
          {cards.map((card: { title: string; description: string }, idx: number) => (
            <div
              key={idx}
              className={`why-card group flex flex-col md:flex-row gap-6 md:gap-16 py-9 md:py-11 border-t border-[#ede9e2]/6 ${
                idx === cards.length - 1 ? "border-b border-[#ede9e2]/6" : ""
              }`}
            >
              {/* Number */}
              <span className="shrink-0 text-[#857f7a] text-xs font-medium tracking-[0.15em] group-hover:text-[#c5f135] transition-colors duration-400 mt-0.5 md:w-10">
                {numbers[idx]}
              </span>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold tracking-tight text-[#ede9e2] leading-tight md:flex-1"
                style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#857f7a] text-sm leading-relaxed md:max-w-[340px] md:text-right">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
