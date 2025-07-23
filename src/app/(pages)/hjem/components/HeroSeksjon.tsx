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
  const { t, currentLanguage } = useTranslations();

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
      <div className="absolute inset-0 bg-black/80" />
      <div className="container mx-auto sm:px-6 lg:px-8 relative z-10">
        <div className="px-10 flex flex-col items-center md:items-start justify-center text-neutral-400">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center md:text-left leading-tight break-words max-w-sm md:max-w-2xl mx-auto md:mx-0 text-white">
            {t.hero.title}
          </h1>
          <div className="flex flex-col items-center md:items-start w-full">
            <AnimatedListItem delay={300}>
              {currentLanguage === "no" ? (
                <>
                  Med{" "}
                  <AnimatedKeyword delay={350} highlightColor="text-white">
                    sterk kompetanse
                  </AnimatedKeyword>{" "}
                  med alt relatert til{" "}
                  <AnimatedKeyword delay={400} highlightColor="text-white">
                    nettsider
                  </AnimatedKeyword>
                  ,{" "}
                  <AnimatedKeyword delay={450} highlightColor="text-white">
                    applikasjoner
                  </AnimatedKeyword>
                  ,{" "}
                  <AnimatedKeyword delay={500} highlightColor="text-white">
                    SEO
                  </AnimatedKeyword>{" "}
                  så kan du trygt stole på at jeg leverer hva du trenger.
                </>
              ) : (
                <>
                  With{" "}
                  <AnimatedKeyword delay={350} highlightColor="text-white">
                    strong expertise
                  </AnimatedKeyword>{" "}
                  in everything related to{" "}
                  <AnimatedKeyword delay={400} highlightColor="text-white">
                    websites
                  </AnimatedKeyword>
                  ,{" "}
                  <AnimatedKeyword delay={450} highlightColor="text-white">
                    applications
                  </AnimatedKeyword>
                  ,{" "}
                  <AnimatedKeyword delay={500} highlightColor="text-white">
                    SEO
                  </AnimatedKeyword>{" "}
                  you can safely trust that I deliver what you need.
                </>
              )}
            </AnimatedListItem>
            <AnimatedListItem delay={550}>
              {currentLanguage === "no" ? (
                <>
                  Fra{" "}
                  <AnimatedKeyword delay={600} highlightColor="text-white">
                    idé
                  </AnimatedKeyword>{" "}
                  og{" "}
                  <AnimatedKeyword delay={650} highlightColor="text-white">
                    konseptutvikling
                  </AnimatedKeyword>
                  , til{" "}
                  <AnimatedKeyword delay={700} highlightColor="text-white">
                    design
                  </AnimatedKeyword>
                  ,{" "}
                  <AnimatedKeyword delay={750} highlightColor="text-white">
                    programmering
                  </AnimatedKeyword>{" "}
                  og{" "}
                  <AnimatedKeyword delay={800} highlightColor="text-white">
                    lansering
                  </AnimatedKeyword>
                  . Enten du trenger en enkel{" "}
                  <AnimatedKeyword delay={850} highlightColor="text-white">
                    nettside{" "}
                  </AnimatedKeyword>{" "}
                  eller et{" "}
                  <AnimatedKeyword delay={900} highlightColor="text-white">
                    avansert system{" "}
                  </AnimatedKeyword>{" "}
                  er jeg her for å gjøre prosessen smidig.
                </>
              ) : (
                <>
                  From{" "}
                  <AnimatedKeyword delay={600} highlightColor="text-white">
                    idea
                  </AnimatedKeyword>{" "}
                  and{" "}
                  <AnimatedKeyword delay={650} highlightColor="text-white">
                    concept development
                  </AnimatedKeyword>
                  , to{" "}
                  <AnimatedKeyword delay={700} highlightColor="text-white">
                    design
                  </AnimatedKeyword>
                  ,{" "}
                  <AnimatedKeyword delay={750} highlightColor="text-white">
                    programming
                  </AnimatedKeyword>{" "}
                  and{" "}
                  <AnimatedKeyword delay={800} highlightColor="text-white">
                    launch
                  </AnimatedKeyword>
                  . Whether you need a simple{" "}
                  <AnimatedKeyword delay={850} highlightColor="text-white">
                    website{" "}
                  </AnimatedKeyword>{" "}
                  or an{" "}
                  <AnimatedKeyword delay={900} highlightColor="text-white">
                    advanced system{" "}
                  </AnimatedKeyword>{" "}
                  I&apos;m here to make the process smooth.
                </>
              )}
            </AnimatedListItem>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6 mt-8 w-full max-w-xl mx-auto md:mx-0">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/tjenester") as any} className="w-full md:w-auto">
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-4 h-14 rounded-4xl font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto min-w-[140px] cursor-pointer">
                  {currentLanguage === "no" ? "Hva kan jeg tilby?" : "What can I offer?"}
                </button>
              </Link>

              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/prosjekter") as any} className="w-full md:w-auto">
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-4 h-14 rounded-4xl font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto min-w-[140px] cursor-pointer">
                  {currentLanguage === "no" ? "Mine prosjekter" : "My projects"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
      `}</style>
    </section>
  );
}
