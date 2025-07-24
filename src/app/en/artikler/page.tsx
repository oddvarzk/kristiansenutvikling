"use client";

import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useState } from "react";

const categories = [
  {
    id: "webdev",
    name_no: "Webutvikling",
    name_en: "Web Development",
  },
  {
    id: "design",
    name_no: "Design",
    name_en: "Design",
  },
  {
    id: "seo",
    name_no: "SEO",
    name_en: "SEO",
  },
  {
    id: "tips",
    name_no: "Tips",
    name_en: "Tips",
  },
  {
    id: "nyheter",
    name_no: "Nyheter",
    name_en: "News",
  },
];

export default function ArticlesPage() {
  const { currentLanguage } = useTranslations();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 min-h-[80vh] text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {currentLanguage === "no" ? "Artikler" : "Articles"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            {currentLanguage === "no"
              ? "Inspirasjon, tips og nyheter om webutvikling, design og teknologi."
              : "Inspiration, tips, and news about web development, design, and technology."}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full max-w-xs px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder={currentLanguage === "no" ? "Søk etter artikler..." : "Search articles..."}
              aria-label={currentLanguage === "no" ? "Søk etter artikler" : "Search articles"}
            />
            <select
              value={activeCategory || ""}
              onChange={e => setActiveCategory(e.target.value || null)}
              className="w-full max-w-xs px-4 py-3 rounded-lg bg-zinc-800 border border-cyan-700/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
              aria-label={currentLanguage === "no" ? "Velg kategori" : "Select category"}
            >
              <option value="">
                {currentLanguage === "no" ? "Alle kategorier" : "All categories"}
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {currentLanguage === "no" ? cat.name_no : cat.name_en}
                </option>
              ))}
            </select>
          </div>
          {/* Show selected category name if any */}
          {activeCategory && (
            <div className="text-center text-cyan-400 font-medium mb-6">
              {currentLanguage === "no"
                ? `Valgt kategori: ${categories.find(c => c.id === activeCategory)?.name_no}`
                : `Selected category: ${categories.find(c => c.id === activeCategory)?.name_en}`}
            </div>
          )}
        </div>
        {/* Placeholder for articles */}
        <div className="space-y-8 text-center">
          <div className="text-gray-400 text-lg py-16">
            {currentLanguage === "no"
              ? "Ingen artikler publisert ennå. Søk, bla gjennom kategorier, eller kom tilbake senere!"
              : "No articles published yet. Search, browse categories, or check back soon!"}
          </div>
        </div>
        {/* UI ideas for future features */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          {currentLanguage === "no"
            ? "Kommende funksjoner: Kategorier, tagger, populære artikler, anbefalte artikler, og mer."
            : "Coming soon: Categories, tags, popular articles, featured articles, and more."}
        </div>
      </div>
    </section>
  );
} 