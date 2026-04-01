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
  anchor: string;
  title: string;
  tag: string;
  index: string;
}

export default function TjenesterSeksjon() {
  const { currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const isEn = currentLanguage === "en";

  const services: ServiceRow[] = isEn
    ? [
        { id: "web",      anchor: "website",     index: "01", title: "Website Development",     tag: "Next.js / React" },
        { id: "redesign", anchor: "redesign",    index: "02", title: "Redesign & Modernisation", tag: "Bring sites back to life" },
        { id: "seo",      anchor: "seo",         index: "03", title: "SEO Optimisation",         tag: "Organic Growth" },
        { id: "wp",       anchor: "wordpress",   index: "04", title: "WordPress / Wix",          tag: "CMS Solutions" },
        { id: "maint",    anchor: "maintenance", index: "05", title: "Maintenance & Support",    tag: "Ongoing Care" },
      ]
    : [
        { id: "web",      anchor: "website",     index: "01", title: "Nettside Utvikling",        tag: "Next.js / React" },
        { id: "redesign", anchor: "redesign",    index: "02", title: "Redesign & Modernisering",  tag: "Blås nytt liv i gamle sider" },
        { id: "seo",      anchor: "seo",         index: "03", title: "SEO Optimalisering",        tag: "Organisk vekst" },
        { id: "wp",       anchor: "wordpress",   index: "04", title: "WordPress / Wix",           tag: "CMS-løsninger" },
        { id: "maint",    anchor: "maintenance", index: "05", title: "Vedlikehold & Support",     tag: "Løpende støtte" },
      ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".service-row"), {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-[#0b0b0b]">
      <div className="container mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 md:mb-16">
          <div>
            <span className="section-label block mb-4">
              {isEn ? "What I do" : "Hva jeg gjør"}
            </span>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-[#ede9e2] leading-tight"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {isEn ? "Services" : "Tjenester"}
            </h2>
          </div>
          <Link
            href={getLocalizedPath("/tjenester", currentLanguage) as any}
            className="editorial-link text-sm text-[#857f7a] hover:text-[#ede9e2] transition-colors duration-200"
          >
            {isEn ? "Full overview" : "Full oversikt"}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Rows */}
        <div className="border-t border-[#ede9e2]/6">
          {services.map((svc) => (
            <Link
              key={svc.id}
              href={`${getLocalizedPath("/tjenester", currentLanguage)}#${svc.anchor}` as any}
              className="service-row group flex items-center justify-between py-5 md:py-7 border-b border-[#ede9e2]/6 cursor-pointer"
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center gap-5 md:gap-8">
                {/* Index number */}
                <span className="text-[10px] text-[#857f7a]/50 font-mono tracking-widest w-6 shrink-0 transition-colors duration-300 group-hover:text-[#c5f135]/60">
                  {svc.index}
                </span>
                <h3
                  className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-250 ${
                    hovered === svc.id ? "text-[#ede9e2]" : "text-[#ede9e2]/70"
                  }`}
                  style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
                >
                  {svc.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`hidden md:block text-xs tracking-widest uppercase font-medium transition-colors duration-250 ${
                    hovered === svc.id ? "text-[#857f7a]" : "text-[#857f7a]/40"
                  }`}
                >
                  {svc.tag}
                </span>
                <span
                  className={`text-sm transition-all duration-300 ${
                    hovered === svc.id ? "opacity-100 translate-x-0 text-[#ede9e2]/50" : "opacity-0 -translate-x-2"
                  }`}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
