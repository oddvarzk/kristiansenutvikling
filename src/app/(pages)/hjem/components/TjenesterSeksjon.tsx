"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

gsap.registerPlugin(ScrollTrigger);

interface ServiceRow {
  id: string;
  title: string;
  tag: string;
}

export default function TjenesterSeksjon() {
  const { currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const isEn = currentLanguage === "en";

  const services: ServiceRow[] = isEn
    ? [
        { id: "web",      title: "Website Development",     tag: "Next.js / React" },
        { id: "redesign", title: "Redesign & Modernisation", tag: "Bring sites back to life" },
        { id: "seo",      title: "SEO Optimisation",         tag: "Organic Growth" },
        { id: "wp",       title: "WordPress / Wix",          tag: "CMS Solutions" },
        { id: "maint",    title: "Maintenance & Support",    tag: "Ongoing Care" },
      ]
    : [
        { id: "web",      title: "Nettside Utvikling",        tag: "Next.js / React" },
        { id: "redesign", title: "Redesign & Modernisering",  tag: "Blås nytt liv i gamle sider" },
        { id: "seo",      title: "SEO Optimalisering",        tag: "Organisk vekst" },
        { id: "wp",       title: "WordPress / Wix",           tag: "CMS-løsninger" },
        { id: "maint",    title: "Vedlikehold & Support",     tag: "Løpende støtte" },
      ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".service-row"), {
        y: 24, opacity: 0, duration: 0.65, stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-14">
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-[#f0ede7]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {isEn ? "What I do" : "Hva jeg gjør"}
          </h2>
          <Link
            href={getLocalizedPath("/tjenester", currentLanguage) as any}
            className="text-sm text-[#6e6b66] hover:text-[#d4ff3e] transition-colors duration-200 flex items-center gap-1.5 group"
          >
            {isEn ? "Full overview" : "Full oversikt"}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Rows */}
        <div className="border-t border-[#1a1a1a]">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="service-row group flex items-center justify-between py-5 md:py-6 border-b border-[#1a1a1a] cursor-default overflow-hidden"
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3
                className="text-lg md:text-xl font-bold tracking-tight transition-all duration-300 flex items-center gap-3"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {/* Lime dot that pulses in on hover */}
                <span
                  className={`block w-1.5 h-1.5 rounded-full bg-[#d4ff3e] shrink-0 transition-all duration-300 ${
                    hovered === svc.id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
                <span className={`transition-colors duration-200 ${hovered === svc.id ? "text-[#d4ff3e]" : "text-[#f0ede7]"}`}>
                  {svc.title}
                </span>
              </h3>
              <span
                className={`hidden md:block text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${
                  hovered === svc.id ? "text-[#f0ede7]/60" : "text-[#6e6b66]/50"
                }`}
              >
                {svc.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
