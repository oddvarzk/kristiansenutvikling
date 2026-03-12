"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  tag: string;
}

export default function FeaturedProjects() {
  const { t, currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const isEn = currentLanguage === "en";

  const projects: Project[] = isEn
    ? [
        { id: "holidaze", title: "Holidaze", description: "Modern booking platform for holiday homes with interactive maps.", href: "/en/prosjekter/holidaze", image: "/images/projects/holidazeHome.png", tag: "Next.js / React" },
        { id: "kragero-naturstein", title: "Kragero Naturstein", description: "Professional website for a Norwegian natural stone supplier.", href: "/en/prosjekter/kragero-naturstein", image: "/images/projects/kragero-naturstein-home.png", tag: "Next.js / SEO" },
        { id: "nora-marketing", title: "Nora Marketing", description: "Marketing agency website focused on conversions.", href: "/en/prosjekter/nora-marketing", image: "/images/projects/nora-marketing-home.png", tag: "Next.js / Marketing" },
      ]
    : [
        { id: "holidaze", title: "Holidaze", description: "Moderne bookingplattform for ferieboliger med interaktive kart.", href: "/prosjekter/holidaze", image: "/images/projects/holidazeHome.png", tag: "Next.js / React" },
        { id: "kragero-naturstein", title: "Kragero Naturstein", description: "Profesjonell nettside for en norsk natursteinleverandør.", href: "/prosjekter/kragero-naturstein", image: "/images/projects/kragero-naturstein-home.png", tag: "Next.js / SEO" },
        { id: "nora-marketing", title: "Nora Marketing", description: "Markedsføringsbyrå-nettside med fokus på konverteringer.", href: "/prosjekter/nora-marketing", image: "/images/projects/nora-marketing-home.png", tag: "Next.js / Marketing" },
      ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".project-card"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#d4ff3e]" />
              <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">
                {isEn ? "Selected work" : "Utvalgte prosjekter"}
              </p>
            </div>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-[#f0ede7]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {t.home.featuredProjects.title}
            </h2>
          </div>
          <Link
            href={getLocalizedPath("/prosjekter", currentLanguage) as any}
            className="hidden md:flex items-center gap-1 text-sm text-[#6e6b66] hover:text-[#d4ff3e] transition-colors duration-200"
          >
            {t.home.featuredProjects.viewAll}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href as any}
              className="project-card group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#111111] aspect-[4/3] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#080808]/20 group-hover:bg-[#080808]/5 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-base font-bold text-[#f0ede7] group-hover:text-[#d4ff3e] transition-colors duration-200 mb-1"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#6e6b66] leading-relaxed">{project.description}</p>
                </div>
                <span className="text-sm text-[#d4ff3e]/50 ml-4 mt-0.5">→</span>
              </div>
              <p className="text-xs text-[#6e6b66]/50 mt-1.5 font-mono">{project.tag}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link
            href={getLocalizedPath("/prosjekter", currentLanguage) as any}
            className="text-sm text-[#6e6b66] hover:text-[#d4ff3e] transition-colors duration-200"
          >
            {t.home.featuredProjects.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}
