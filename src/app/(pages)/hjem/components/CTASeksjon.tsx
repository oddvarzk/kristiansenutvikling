"use client";

import Link from "next/link";

export default function CTASeksjon() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Klar til å starte ditt neste prosjekt ?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          La oss sammen skape en digital løsning som gir resultater for din
          virksomhet.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/kontakt"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-500 transition"
          >
            Ta en prat
          </Link>
        </div>
      </div>
    </section>
  );
}
