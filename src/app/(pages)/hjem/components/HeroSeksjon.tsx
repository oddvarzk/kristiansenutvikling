"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSeksjon() {
  const { currentLanguage } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(tagRef.current, { y: 20, opacity: 0, duration: 0.6 }, 0.3)
        .from(line1Ref.current, { y: "110%", duration: 1.1 }, 0.55)
        .from(line2Ref.current, { y: "110%", duration: 1.1 }, 0.7)
        .from(line3Ref.current, { y: "110%", duration: 1.1 }, 0.85)
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.7 }, 1.1)
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7 }, 1.25);

      // Parallax headline as next section scrolls over
      gsap.to(headlineRef.current, {
        y: "-8%",
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="sticky top-0 h-screen flex flex-col justify-end pb-12 md:pb-16 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background video */}
      <video
        src="/videos/newBackground.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-neutral-900/90 to-cyan-950/80 pointer-events-none" />
      {/* Remove animated glow behind card */}
      {/* Remove glassmorphism card, keep only text */}
      <div className="container mx-auto sm:px-6 lg:px-8 relative z-10 flex justify-center md:justify-start items-center min-h-[80vh]">
        <div className="flex flex-col items-center md:items-start w-full max-w-2xl text-neutral-100 px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight break-words text-white drop-shadow-lg">
            {currentLanguage === "no"
              ? "Webutviklingsbyrå med fokus på kundens behov."
              : "Web development agency focused on your needs."}
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-8 text-cyan-200">
            {currentLanguage === "no"
              ? "Jeg hjelper deg fra idé til lansering – nettsider, apper og mer, levert med kvalitet og trygghet."
              : "I will help you from idea to launch – websites, apps, and more, delivered with quality and reliability."}
          </p>
          <div className="flex flex-col items-center md:items-start w-full">
            <AnimatedListItem delay={300}>
              {currentLanguage === "no" ? (
                <>
                  Med <AnimatedKeyword delay={350} highlightColor="text-cyan-300">sterk kompetanse</AnimatedKeyword> innen <AnimatedKeyword delay={400} highlightColor="text-cyan-300">nettsider</AnimatedKeyword>, <AnimatedKeyword delay={450} highlightColor="text-cyan-300">applikasjoner</AnimatedKeyword> og <AnimatedKeyword delay={500} highlightColor="text-cyan-300">SEO</AnimatedKeyword> får du løsninger som gir resultater.
                </>
              ) : (
                <>
                  With <AnimatedKeyword delay={350} highlightColor="text-cyan-300">strong expertise</AnimatedKeyword> in <AnimatedKeyword delay={400} highlightColor="text-cyan-300">websites</AnimatedKeyword>, <AnimatedKeyword delay={450} highlightColor="text-cyan-300">applications</AnimatedKeyword>, and <AnimatedKeyword delay={500} highlightColor="text-cyan-300">SEO</AnimatedKeyword>, you get solutions that deliver results.
                </>
              )}
            </AnimatedListItem>
            <AnimatedListItem delay={550}>
              {currentLanguage === "no" ? (
                <>
                  Fra <AnimatedKeyword delay={600} highlightColor="text-cyan-300">idé</AnimatedKeyword> og <AnimatedKeyword delay={650} highlightColor="text-cyan-300">konseptutvikling</AnimatedKeyword> til <AnimatedKeyword delay={700} highlightColor="text-cyan-300">design</AnimatedKeyword>, <AnimatedKeyword delay={750} highlightColor="text-cyan-300">programmering</AnimatedKeyword> og <AnimatedKeyword delay={800} highlightColor="text-cyan-300">lansering</AnimatedKeyword> – jeg gjør prosessen smidig.
                </>
              ) : (
                <>
                  From <AnimatedKeyword delay={600} highlightColor="text-cyan-300">idea</AnimatedKeyword> and <AnimatedKeyword delay={650} highlightColor="text-cyan-300">concept development</AnimatedKeyword> to <AnimatedKeyword delay={700} highlightColor="text-cyan-300">design</AnimatedKeyword>, <AnimatedKeyword delay={750} highlightColor="text-cyan-300">programming</AnimatedKeyword>, and <AnimatedKeyword delay={800} highlightColor="text-cyan-300">launch</AnimatedKeyword> – I make the process smooth.
                </>
              )}
            </AnimatedListItem>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 w-full max-w-xl">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/tjenester") as any} className="w-full md:w-auto">
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-4 h-14 rounded-4xl font-semibold shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto cursor-pointer">
                  {currentLanguage === "no" ? "Se tjenester" : "See Services"}
                </button>
              </Link>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/prosjekter") as any} className="w-full md:w-auto">
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-4 h-14 rounded-4xl font-semibold shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto cursor-pointer">
                  {currentLanguage === "no" ? "Se prosjekter" : "See Projects"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="animate-bounce text-cyan-400 text-3xl">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <span className="text-xs text-neutral-400 mt-1">
          {currentLanguage === "no" ? "Scroll ned" : "Scroll down"}
        </span>
      </div>
      <style jsx global>{`
      `}</style>
    </section>
  );
}
