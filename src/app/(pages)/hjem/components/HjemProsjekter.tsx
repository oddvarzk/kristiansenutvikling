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
  image: string | null;
  video: string | null;
  placeholder: string;
  tag: string;
  year: string;
}

export default function FeaturedProjects() {
  const { t, currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const isEn = currentLanguage === "en";

  const projects: Project[] = isEn
    ? [
        { id: "holidaze",           title: "Holidaze",           description: "Modern booking platform for holiday homes with interactive maps.", href: "/en/prosjekter/holidaze",          image: "/images/projects/holidaze-1.jpg", video: null,                                  placeholder: "#131313",  tag: "React / TypeScript",     year: "2025" },
        { id: "kragero-naturstein", title: "Kragerø Naturstein", description: "Professional website for a Norwegian natural stone supplier.",    href: "/en/prosjekter/kragero-naturstein", image: null,                               video: "/videos/projects/krageroVid-web.mp4", placeholder: "#161613",  tag: "WordPress / SEO",       year: "2026" },
        { id: "nora-marketing",     title: "Nora Marketing",     description: "Marketing agency website focused on conversions.",               href: "/en/prosjekter/nora-marketing",     image: null,                               video: "/videos/projects/noraVid-web.mp4", placeholder: "#141318",  tag: "React / Headless CMS", year: "2026" },
      ]
    : [
        { id: "holidaze",           title: "Holidaze",           description: "Moderne bookingplattform for ferieboliger med interaktive kart.", href: "/prosjekter/holidaze",              image: "/images/projects/holidaze-1.jpg", video: null,                                  placeholder: "#131313",  tag: "React / TypeScript",     year: "2025" },
        { id: "kragero-naturstein", title: "Kragerø Naturstein", description: "Profesjonell nettside for en norsk natursteinleverandør.",        href: "/prosjekter/kragero-naturstein",    image: null,                               video: "/videos/projects/krageroVid-web.mp4", placeholder: "#161613",  tag: "WordPress / SEO",       year: "2026" },
        { id: "nora-marketing",     title: "Nora Marketing",     description: "Markedsføringsbyrå-nettside med fokus på konverteringer.",        href: "/prosjekter/nora-marketing",        image: null,                               video: "/videos/projects/noraVid-web.mp4", placeholder: "#141318",  tag: "React / Headless CMS", year: "2026" },
      ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".project-item"), {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-[#0b0b0b]">
      <div className="container mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 md:mb-18">
          <div>
            <span className="section-label block mb-4">
              {isEn ? "Selected work" : "Utvalgte prosjekter"}
            </span>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-[#ede9e2] leading-tight"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {t.home.featuredProjects.title}
            </h2>
          </div>
          <Link
            href={getLocalizedPath("/prosjekter", currentLanguage) as any}
            className="editorial-link hidden md:inline-flex text-sm text-[#857f7a] hover:text-[#ede9e2] transition-colors duration-200"
          >
            {t.home.featuredProjects.viewAll}
            <span>→</span>
          </Link>
        </div>

        {/* Asymmetric editorial layout — large first + two stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {/* Large first project */}
          <Link
            href={projects[0].href as any}
            className="project-item group md:col-span-7 block"
          >
            <div
              className="overflow-hidden mb-4 relative"
              style={{
                aspectRatio: "16 / 9",
                backgroundColor: projects[0].placeholder,
                borderRadius: "2px",
              }}
            >
              {projects[0].video ? (
                <video
                  src={projects[0].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : projects[0].image ? (
                <>
                  <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#0b0b0b]/15 group-hover:bg-[#0b0b0b]/5 transition-colors duration-300" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-[#ede9e2]/15 font-mono tracking-widest uppercase">
                    {isEn ? "coming soon" : "kommer snart"}
                  </span>
                </div>
              )}
            </div>
            <ProjectMeta project={projects[0]} isEn={isEn} large />
          </Link>

          {/* Two smaller projects stacked */}
          <div className="project-item md:col-span-5 flex flex-col gap-4 md:gap-5">
            {projects.slice(1).map((project) => (
              <Link
                key={project.id}
                href={project.href as any}
                className="group block flex-1"
              >
                <div
                  className="overflow-hidden mb-3 relative"
                  style={{
                    aspectRatio: "16 / 9",
                    backgroundColor: project.placeholder,
                    borderRadius: "2px",
                  }}
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[#0b0b0b]/15 group-hover:bg-[#0b0b0b]/5 transition-colors duration-300" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-[#ede9e2]/15 font-mono tracking-widest uppercase">
                        {isEn ? "coming soon" : "kommer snart"}
                      </span>
                    </div>
                  )}
                </div>
                <ProjectMeta project={project} isEn={isEn} large={false} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile — view all */}
        <div className="mt-10 md:hidden">
          <Link
            href={getLocalizedPath("/prosjekter", currentLanguage) as any}
            className="editorial-link text-sm text-[#857f7a] hover:text-[#ede9e2] transition-colors duration-200"
          >
            {t.home.featuredProjects.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectMeta({
  project,
  isEn,
  large,
}: {
  project: Project;
  isEn: boolean;
  large: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <h3
            className={`${large ? "text-base" : "text-sm"} font-bold text-[#ede9e2]/80 group-hover:text-[#ede9e2] transition-colors duration-200`}
            style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
          >
            {project.title}
          </h3>
        </div>
        <p className="text-xs text-[#857f7a] leading-relaxed max-w-[260px]">{project.description}</p>
      </div>
      <div className="shrink-0 text-right mt-0.5">
        <span className="block text-[10px] font-mono text-[#857f7a]/50">{project.year}</span>
        <span className="block text-[10px] font-mono text-[#857f7a]/40 mt-0.5">{project.tag}</span>
      </div>
    </div>
  );
}
