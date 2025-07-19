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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t.home.cta.title}
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          {t.home.cta.subtitle}
        </p>
        <div className="mt-8 text-center">
          <Link
            href={getLocalizedPath("/kontakt") as any}
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-500 transition"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
