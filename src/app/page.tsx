"use client";

import point from "../../public/images/point.svg";
import Image from "next/image";
import AnimatedKeyword from "../components/AnimtertText";
import ServicesSection from "../components/ServiceSection";
import { useEffect, useState, useRef, ReactNode } from "react";

// Define interface for AnimatedListItem props
interface AnimatedListItemProps {
  children: ReactNode;
  delay?: number;
}

// Animated bullet point list item
function AnimatedListItem({ children, delay = 0 }: AnimatedListItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className={`flex transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Image
        alt="bullet point"
        src={point}
        className={`w-4 h-4 pt-1.5 transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      />
      <div className="text-l mb-4 max-w-2xl ml-3">{children}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white min-h-[80vh] items-center flex">
        {/* Simple video approach that works */}
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Minimal darkening overlay with only opacity applied */}
        <div
          className="absolute inset-0 opacity-80"
          style={{ backgroundColor: "#000" }}
        ></div>

        {/* Content (positioned above the video) */}
        <div className="container mx-auto px-3 z-10 relative">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                <AnimatedKeyword delay={200} highlightColor="text-cyan-500">
                  Webutviklings
                </AnimatedKeyword>
                -byrå med fokus på kundens{" "}
                <AnimatedKeyword delay={600} highlightColor="text-cyan-500">
                  behov
                </AnimatedKeyword>
                .
              </h1>

              <AnimatedListItem delay={800}>
                Med{" "}
                <AnimatedKeyword delay={1000} highlightColor="text-cyan-400">
                  sterk kompetanse
                </AnimatedKeyword>{" "}
                med alt relatert til
                <AnimatedKeyword delay={1200} highlightColor="text-cyan-400">
                  {" "}
                  nettsider
                </AnimatedKeyword>
                ,
                <AnimatedKeyword delay={1400} highlightColor="text-cyan-400">
                  {" "}
                  applikasjoner
                </AnimatedKeyword>
                ,
                <AnimatedKeyword delay={1600} highlightColor="text-cyan-400">
                  {" "}
                  SEO
                </AnimatedKeyword>{" "}
                så kan du trygt stole på at jeg leverer hva du trenger.
              </AnimatedListItem>

              <AnimatedListItem delay={1200}>
                Fra{" "}
                <AnimatedKeyword delay={1400} highlightColor="text-cyan-400">
                  idé
                </AnimatedKeyword>{" "}
                og
                <AnimatedKeyword delay={1600} highlightColor="text-cyan-400">
                  {" "}
                  konseptutvikling
                </AnimatedKeyword>
                , til
                <AnimatedKeyword delay={1800} highlightColor="text-cyan-400">
                  {" "}
                  design
                </AnimatedKeyword>
                ,
                <AnimatedKeyword delay={2000} highlightColor="text-cyan-400">
                  {" "}
                  programmering
                </AnimatedKeyword>{" "}
                og
                <AnimatedKeyword delay={2200} highlightColor="text-cyan-400">
                  {" "}
                  lansering
                </AnimatedKeyword>
                . Enten du trenger en enkel nettside eller et avansert system,
                er jeg her for å gjøre prosessen smidig.
              </AnimatedListItem>

              <div className="flex justify-center mt-10 gap-10 md:gap-16 opacity-0 animate-[fadeUp_0.8s_ease-out_2.5s_forwards]">
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto">
                  Hva kan jeg tilby?
                </button>
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto">
                  Mine projekter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Klar til å starte ditt neste{" "}
            <AnimatedKeyword delay={500} highlightColor="text-cyan-400">
              prosjekt
            </AnimatedKeyword>
            ?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            La oss sammen skape en{" "}
            <AnimatedKeyword delay={800} highlightColor="text-cyan-400">
              digital løsning
            </AnimatedKeyword>{" "}
            som gir resultater for din virksomhet.
          </p>
          <button className="mt-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 opacity-0 animate-[fadeUp_0.8s_ease-out_1s_forwards]">
            Ta kontakt i dag
          </button>
        </div>
      </section>
    </>
  );
}
