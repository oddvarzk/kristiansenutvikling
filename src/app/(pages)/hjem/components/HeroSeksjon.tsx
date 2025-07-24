// src/app/components/HeroSeksjon.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import point from "../../../../../public/images/point.svg";
import AnimatedKeyword from "../../../styles/AnimtertText";
import { useEffect, useState, ReactNode } from "react";
import { useTranslations } from "@/app/hooks/useTranslations";

interface AnimatedListItemProps {
  children: ReactNode;
  delay?: number;
}
function AnimatedListItem({ children, delay = 0 }: AnimatedListItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`flex transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Image
        alt="Point that showcases text"
        src={point}
        className={`w-4 h-4 pt-1.5 transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      />
      <div className="text-l mb-4 max-w-2xl ml-3">{children}</div>
    </div>
  );
}

export default function HeroSeksjon() {
  const { currentLanguage } = useTranslations();

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  return (
    <section
      id="top"
      className="relative text-white min-h-[80vh] flex items-center"
    >
      <video
        src="/videos/background.mp4"
        autoPlay
        loop
        preload="auto" // eager load for LCP
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-neutral-900/90 to-cyan-950/80 pointer-events-none" />
      {/* Remove animated glow behind card */}
      {/* Remove glassmorphism card, keep only text */}
      <div className="container mx-auto sm:px-6 lg:px-8 relative z-10 flex justify-center md:justify-start items-center min-h-[80vh]">
        <div className="flex flex-col items-center md:items-start w-full max-w-2xl text-neutral-100 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-left md:text-left text-center leading-tight break-words text-white drop-shadow-lg">
            {currentLanguage === "no"
              ? "Webutviklingsbyrå med fokus på kundens behov."
              : "Web development agency focused on your needs."}
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-8 text-left md:text-left text-center text-cyan-200">
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