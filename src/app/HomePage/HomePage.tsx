"use client";

import Link from "next/link";
import Image from "next/image";
import point from "../../../public/images/point.svg";

import AnimatedKeyword from "../styles/AnimtertText";
import ServicesSection from "../../components/ServiceSection";
import WhyChooseMe from "../../components/HvorforMeg";
import BackToTop from "../../components/BackToTop";
import { useEffect, useState, ReactNode } from "react";

// Animated bullet point list item
interface AnimatedListItemProps {
  children: ReactNode;
  delay?: number;
}
function AnimatedListItem({ children, delay = 0 }: AnimatedListItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section
        className="relative text-white min-h-[80vh] items-center flex"
        id="top"
      >
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{ backgroundColor: "#000" }}
        />
        <div className="container mx-auto px-3 z-10 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-gray-400">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                <AnimatedKeyword delay={200} highlightColor="text-white">
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
                <AnimatedKeyword delay={1000} highlightColor="text-white">
                  sterk kompetanse
                </AnimatedKeyword>{" "}
                med alt relatert til
                <AnimatedKeyword delay={1200} highlightColor="text-white">
                  {" "}
                  nettsider
                </AnimatedKeyword>
                ,
                <AnimatedKeyword delay={1400} highlightColor="text-white">
                  {" "}
                  applikasjoner
                </AnimatedKeyword>
                ,
                <AnimatedKeyword delay={1600} highlightColor="text-white">
                  {" "}
                  SEO
                </AnimatedKeyword>{" "}
                så kan du trygt stole på at jeg leverer hva du trenger.
              </AnimatedListItem>

              <AnimatedListItem delay={1200}>
                Fra idé og konseptutvikling, design, programmering og lansering—
                smidig prosess hele veien.
              </AnimatedListItem>

              <div className="flex justify-center mt-10 gap-10 md:gap-16 opacity-0 animate-[fadeUp_0.8s_ease-out_2.5s_forwards]">
                <Link href="/tjenester" className="w-full md:w-auto">
                  <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg w-full md:w-auto">
                    Hva kan jeg tilby?
                  </button>
                </Link>
                <Link href="/projects" className="w-full md:w-auto">
                  <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg w-full md:w-auto">
                    Mine prosjekter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <WhyChooseMe />

      {/* Services Section */}
      <ServicesSection />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Klar til å starte ditt neste{" "}
            <AnimatedKeyword delay={500} highlightColor="text-cyan-400">
              prosjekt
            </AnimatedKeyword>
            ?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            La oss sammen skape en digital løsning som gir resultater for din
            virksomhet.
          </p>
          <Link href="/kontakt">
            <button className="mt-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 shadow-lg">
              Ta kontakt i dag
            </button>
          </Link>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
