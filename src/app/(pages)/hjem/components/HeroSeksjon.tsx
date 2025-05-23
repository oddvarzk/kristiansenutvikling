// src/app/components/HeroSeksjon.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import point from "../../../../../public/images/point.svg";
import AnimatedKeyword from "../../../styles/AnimtertText";
import { useEffect, useState, ReactNode } from "react";

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
        <div className="flex px-10 flex-col md:flex-row items-center">
          <div className="text-gray-400">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
              Webutviklingsbyrå med fokus på kundens behov.
            </h1>

            <AnimatedListItem delay={300}>
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
            </AnimatedListItem>

            <AnimatedListItem delay={550}>
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
              . Enten du trenger en enkel nettside eller et avansert system, er
              jeg her for å gjøre prosessen smidig.
            </AnimatedListItem>

            <div className="flex justify-center gap-10 opacity-0 animate-[fadeUp_0.4s_ease-out_1.1s_forwards]">
              <Link href="/tjenester" className="w-full md:w-auto">
                <button className="bg-gradient-to-r from-cyan-600 cursor-pointer to-cyan-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto">
                  Hva kan jeg tilby?
                </button>
              </Link>

              <Link href="/prosjekter" className="w-full md:w-auto">
                <button className="bg-gradient-to-r cursor-pointer from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto">
                  Mine prosjekter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
