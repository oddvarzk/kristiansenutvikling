"use client";

import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function CTASeksjon() {
  const { t, currentLanguage } = useTranslations();

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Removed animated cyan glow */}
      <div className="container mx-auto px-4 flex justify-center items-center relative z-10">
        <div className="animate-fadeInUp backdrop-blur-md bg-black/60 border border-neutral-800/80 border-t-4 border-t-cyan-500 rounded-3xl shadow-2xl px-8 py-12 md:px-16 md:py-16 flex flex-col items-center max-w-2xl w-full text-neutral-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
            {t.home.cta.title}
          </h2>
          <p className="max-w-2xl mb-8 text-lg md:text-xl text-cyan-200 text-center">
            {t.home.cta.subtitle}
          </p>
          <div className="mt-8 w-full flex justify-center">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link
              href={getLocalizedPath("/kontakt") as any}
              className="w-full md:w-auto"
            >
              <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 h-14 rounded-4xl font-semibold shadow-lg transform transition duration-150 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-auto cursor-pointer">
                {t.home.cta.button}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </section>
  );
}
