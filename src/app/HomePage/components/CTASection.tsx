"use client";

import Link from "next/link";
import AnimatedKeyword from "../../styles/AnimtertText";

export default function CTASection() {
  return (
    <section className="py-16 from-gray-900 to-black">
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
          <button className="mt-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg">
            Ta kontakt i dag
          </button>
        </Link>
      </div>
    </section>
  );
}
