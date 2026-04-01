"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

interface Article {
  slug: string;
  number: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    slug: "hva-koster-en-nettside",
    number: "01",
    category: "Pris & budsjett",
    categoryEn: "Pricing",
    title: "Hva koster en nettside i Norge? (2026)",
    titleEn: "How much does a website cost in Norway? (2026)",
    excerpt:
      "Den ærlige prisguiden ingen andre gir deg. Fra enkel landingsside til nettbutikk — med faktiske tall, ikke «ta kontakt for pris».",
    excerptEn:
      "The honest pricing guide nobody else gives you. From a simple landing page to a full e-commerce store — with real numbers, not 'contact us for pricing'.",
    date: "14. jan 2026",
    readTime: "6 min",
  },
  {
    slug: "nettside-bedrift-oslo",
    number: "02",
    category: "Lokal SEO",
    categoryEn: "Local SEO",
    title: "Nettside for bedrift i Oslo – hva bør du velge?",
    titleEn: "Website for a business in Oslo – what should you choose?",
    excerpt:
      "Oslo-markedet er tøft. Her er hva lokale bedrifter faktisk trenger på nett for å bli funnet — og valgt — fremfor konkurrenten.",
    excerptEn:
      "The Oslo market is competitive. Here's what local businesses actually need online to get found — and chosen — over the competition.",
    date: "3. feb 2026",
    readTime: "7 min",
  },
  {
    slug: "nettside-for-restaurant",
    number: "03",
    category: "Restaurantbransjen",
    categoryEn: "Restaurant industry",
    title: "Nettside for restaurant: slik får du flere bookinger",
    titleEn: "Restaurant website: how to get more bookings",
    excerpt:
      "De fleste restaurantnettssider er like nyttige som en meny uten priser. Slik lager du en som faktisk gjør at folk bestiller bord.",
    excerptEn:
      "Most restaurant websites are about as useful as a menu without prices. Here's how to build one that actually gets bookings.",
    date: "20. feb 2026",
    readTime: "6 min",
  },
  {
    slug: "hvorfor-nettsiden-ingen-kunder",
    number: "04",
    category: "Konvertering",
    categoryEn: "Conversion",
    title: "Hvorfor får nettsiden din ingen kunder?",
    titleEn: "Why is your website not getting you any customers?",
    excerpt:
      "Du har en nettside. Telefonen ringer ikke. Her er de 5 vanligste grunnene — og hva du kan gjøre med dem i dag.",
    excerptEn:
      "You have a website. The phone isn't ringing. Here are the 5 most common reasons — and what you can do about them today.",
    date: "10. mar 2026",
    readTime: "7 min",
  },
];

export default function ArtiklerPage() {
  const { t, currentLanguage } = useTranslations();
  const art = t.artikler;
  const isEn = currentLanguage === "en";

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-label", { y: 14, opacity: 0, duration: 0.6 })
          .from(".hero-title .line-inner", { y: "110%", duration: 0.85, stagger: 0.12 }, "-=0.25")
          .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.65 }, "-=0.4")
          .from(".hero-line", { scaleX: 0, duration: 0.8, ease: "power4.inOut" }, "-=0.5")
          .from(".hero-count", { opacity: 0, y: 10, duration: 0.5 }, "-=0.3")
          .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.2");
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="min-h-[100dvh] flex flex-col justify-end pt-28 pb-16 md:pb-24 px-6 md:px-10 bg-[#0b0b0b]"
      >
        <div className="container mx-auto max-w-7xl relative">

          {/* Top row */}
          <div className="flex items-start justify-between mb-10 md:mb-16">
            <span className="hero-label section-label">{art.label}</span>
            <p
              className="hero-tagline hidden md:block text-right text-sm text-[#857f7a] leading-relaxed max-w-[260px]"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {art.tagline}
            </p>
          </div>

          {/* Large editorial headline */}
          <div className="hero-title">
            <h1
              className="text-[15vw] md:text-[11vw] font-black tracking-tight leading-[0.88] text-[#ede9e2]"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              <span className="block line-wrap">
                <span className="line-inner">{art.title1}</span>
              </span>
              <span className="block line-wrap">
                <span className="line-inner text-[#c5f135]">{art.title2}</span>
              </span>
            </h1>
          </div>

          {/* Mobile tagline */}
          <p
            className="hero-tagline md:hidden mt-6 text-sm text-[#857f7a] leading-relaxed max-w-xs"
            style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
          >
            {art.tagline}
          </p>

          {/* Divider + article count */}
          <div className="mt-10 md:mt-14 flex items-center gap-6">
            <div
              className="hero-line flex-1 h-px bg-[#ede9e2]/12"
              style={{ transformOrigin: "left" }}
            />
            <span className="hero-count section-label shrink-0">
              {articles.length} {isEn ? "articles" : "artikler"}
            </span>
          </div>

          {/* Scroll hint */}
          <div className="hero-scroll flex items-center gap-3 mt-6">
            <span className="section-label">Scroll</span>
            <div className="w-8 h-px bg-[#857f7a]" />
            <span className="text-[#857f7a] text-xs">↓</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLES LIST ─────────────────────────────────────────── */}
      <section className="stack-card py-24 md:py-36 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="container mx-auto max-w-7xl">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-24">
            <span className="section-label pt-1 shrink-0">{art.list.label}</span>
            <h2
              className="text-[8vw] md:text-[5vw] font-black tracking-tight leading-[0.92] text-[#ede9e2]"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {art.list.heading1}<br />{art.list.heading2}
            </h2>
          </div>

          {/* Articles */}
          <div>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={getLocalizedPath(`/artikler/${article.slug}`, currentLanguage) as any}
                className="group block py-9 md:py-11 border-t border-[#ede9e2]/6 last:border-b last:border-[#ede9e2]/6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-10">

                  {/* Number + category */}
                  <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-2 shrink-0 md:w-40">
                    <span className="text-xs font-medium tracking-[0.15em] text-[#857f7a] group-hover:text-[#c5f135] transition-colors duration-300 shrink-0">
                      {article.number}
                    </span>
                    <span className="section-label whitespace-nowrap">
                      {isEn ? article.categoryEn : article.category}
                    </span>
                  </div>

                  {/* Title + excerpt */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl md:text-2xl font-bold tracking-tight text-[#ede9e2]/80 group-hover:text-[#ede9e2] leading-tight transition-colors duration-300 mb-3"
                      style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
                    >
                      {isEn ? article.titleEn : article.title}
                    </h3>
                    <p
                      className="text-sm text-[#857f7a] leading-relaxed max-w-xl"
                      style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
                    >
                      {isEn ? article.excerptEn : article.excerpt}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0 md:text-right">
                    <span className="section-label">{article.date}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-px h-3 bg-[#857f7a]/40 md:hidden" />
                      <span className="section-label">{article.readTime}</span>
                    </div>
                    <span
                      className="section-label text-[#c5f135]/0 group-hover:text-[#c5f135]/80 transition-colors duration-300 hidden md:block"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="stack-card py-28 md:py-40 px-6 md:px-10 bg-[#0b0b0b] border-t border-[#ede9e2]/8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2
              className="text-[11vw] md:text-[7vw] font-black tracking-tight leading-[0.9] text-[#ede9e2] mb-8 md:mb-10"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {art.cta.heading1}<br />
              <span className="text-[#c5f135]">{art.cta.heading2}</span>
            </h2>
            <p
              className="text-[#857f7a] text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {art.cta.sub}
            </p>
            <Link
              href={getLocalizedPath("/kontakt", currentLanguage) as any}
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#c5f135] text-[#0b0b0b] text-sm font-bold tracking-wide hover:bg-[#d4ff40] transition-colors duration-200"
              style={{ borderRadius: "2px", fontFamily: "var(--font-satoshi), sans-serif" }}
            >
              {art.cta.button}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
