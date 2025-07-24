"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCookieBite } from "react-icons/fa";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = "cookie_consent";
  const { currentLanguage } = useTranslations();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setIsVisible(true);
    }
  }, []);

  const giveConsent = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    // initialize analytics here, e.g. window.analytics?.enable();
    setIsVisible(false);
  };

  const declineConsent = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    // disable analytics here, e.g. window.analytics?.disable();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-xl w-[95vw] bg-gray-900/95 text-gray-100 p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn flex flex-col md:flex-row items-center gap-4 border border-cyan-700">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <FaCookieBite className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true" />
        <div className="flex-1">
          <span className="block text-base font-medium mb-1">
            {currentLanguage === "no" ? "Vi bruker cookies" : "We use cookies"}
          </span>
          <span className="text-sm text-gray-300">
            {currentLanguage === "no"
              ? "Vi bruker informasjonskapsler for å forbedre din opplevelse og til anonymisert statistikk (Google Analytics, Vercel Analytics). Lastes kun med ditt samtykke. "
              : "We use cookies to improve your experience and for analytics (Google Analytics, Vercel Analytics). Only loaded with your consent. "}
            <Link href="/personvern" className="underline text-cyan-400">
              {currentLanguage === "no" ? "Les mer" : "Learn more"}
            </Link>.
          </span>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 w-full md:w-auto justify-end">
        <button
          onClick={declineConsent}
          className="px-4 py-2 cursor-pointer bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {currentLanguage === "no" ? "Avvis" : "Decline"}
        </button>
        <button
          onClick={giveConsent}
          className="px-4 py-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {currentLanguage === "no" ? "Aksepter" : "Accept"}
        </button>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
}
