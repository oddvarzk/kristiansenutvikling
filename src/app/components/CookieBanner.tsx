"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = "cookie_consent";

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
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-gray-100 p-4 md:p-6 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          Vi bruker informasjonskapsler (cookies) for å gi deg best mulig opplevelse og for å samle anonymisert statistikk. Google Analytics og Vercel Analytics lastes kun hvis du samtykker. Se vår{' '}
          <Link href={"/personvern" as any} className="underline text-cyan-400">
            personvernerklæring
          </Link>
          .
        </p>
        <div className="flex gap-2 md:gap-4">
          <button
            onClick={declineConsent}
            className="px-3 py-2 cursor-pointer bg-gray-700 hover:bg-gray-600 rounded-md text-sm md:text-base transition"
          >
            Avvis
          </button>
          <button
            onClick={giveConsent}
            className="px-3 py-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 rounded-md text-sm md:text-base font-medium transition"
          >
            Aksepter
          </button>
        </div>
      </div>
    </div>
  );
}
