"use client";

import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";

const samplePosts = [
  {
    slug: "velkommen-til-artikler",
    title_no: "Velkommen til artikler",
    title_en: "Welcome to the Articles",
    excerpt_no: "Her deler jeg tips, nyheter og innsikt om webutvikling, design og teknologi.",
    excerpt_en: "Here I share tips, news, and insights about web development, design, and technology.",
    date: "2024-06-01",
  },
  {
    slug: "seo-grunnleggende",
    title_no: "SEO: Grunnleggende for din nettside",
    title_en: "SEO: Basics for Your Website",
    excerpt_no: "Lær hvorfor søkemotoroptimalisering er viktig og hvordan du kommer i gang.",
    excerpt_en: "Learn why SEO matters and how to get started.",
    date: "2024-06-02",
  },
];

export default function BlogPage() {
  const { currentLanguage } = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 min-h-[80vh] text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {currentLanguage === "no" ? "Artikler" : "Articles"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === "no"
              ? "Inspirasjon, tips og nyheter om webutvikling, design og teknologi."
              : "Inspiration, tips, and news about web development, design, and technology."}
          </p>
        </div>
        <div className="space-y-8">
          {samplePosts.map((post) => (
            <div key={post.slug} className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 p-6 rounded-xl border border-zinc-700/50 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Link href={"/blog/" + post.slug as any} className="hover:text-cyan-400 transition-colors">
                  {currentLanguage === "no" ? post.title_no : post.title_en}
                </Link>
              </h2>
              <p className="text-gray-300 mb-2">
                {currentLanguage === "no" ? post.excerpt_no : post.excerpt_en}
              </p>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            {currentLanguage === "no"
              ? "Flere artikler kommer snart!"
              : "More articles coming soon!"}
          </p>
        </div>
      </div>
    </section>
  );
} 