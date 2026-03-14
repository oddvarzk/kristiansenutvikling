/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

export default function Footer() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  const resetCookieConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie_consent");
      window.location.reload();
    }
  };

  const navLinks = [
    { href: "/", label: t.navigation.home },
    { href: "/tjenester", label: t.navigation.services },
    { href: "/prosjekter", label: t.navigation.projects },
    { href: "/kontakt", label: t.navigation.contact },
    { href: "/personvern", label: isEn ? "Privacy" : "Personvern" },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      {/* Top section */}
      <div className="container mx-auto px-6 md:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href={getLocalizedPath("/", currentLanguage) as any}>
              <Image
                src="/images/logo.svg"
                alt="Kristiansen Utvikling"
                width={110}
                height={44}
                className="h-8 w-auto mb-5"
              />
            </Link>
            <p className="text-[#6e6b66] text-sm leading-relaxed max-w-xs">
              {isEn
                ? "I build websites for people who want something that actually works."
                : "Jeg bygger nettsider for folk som vil ha noe som faktisk fungerer."}
            </p>
            <div className="mt-6 space-y-1">
              <a
                href="mailto:hei@kristiansenutvikling.no"
                className="block text-sm text-[#f0ede7]/60 hover:text-[#d4ff3e] transition-colors duration-200"
              >
                hei@kristiansenutvikling.no
              </a>
              <a
                href="tel:+4747207143"
                className="block text-sm text-[#f0ede7]/60 hover:text-[#d4ff3e] transition-colors duration-200"
              >
                +47 472 07 143
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6e6b66] mb-5 font-medium">
              {isEn ? "Navigation" : "Navigasjon"}
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={getLocalizedPath(href, currentLanguage) as any}
                    className="text-sm text-[#f0ede7]/60 hover:text-[#f0ede7] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6e6b66] mb-5 font-medium">
              {isEn ? "Start a project" : "Start et prosjekt"}
            </p>
            <p
              className="text-2xl md:text-3xl font-black tracking-tight text-[#f0ede7] leading-tight mb-6"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {isEn ? "Have an idea?\nLet's build it." : "Har du en idé?\nLa oss bygge den."}
            </p>
            <Link
              href={getLocalizedPath("/kontakt", currentLanguage) as any}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300"
            >
              {isEn ? "Get in touch" : "Ta kontakt"}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6e6b66]">
            {t.footer.copyright}
          </p>
          <button
            onClick={resetCookieConsent}
            className="text-xs text-[#6e6b66] hover:text-[#f0ede7] transition-colors duration-200"
          >
            {isEn ? "Cookie settings" : "Cookie-innstillinger"}
          </button>
        </div>
      </div>
    </footer>
  );
}
