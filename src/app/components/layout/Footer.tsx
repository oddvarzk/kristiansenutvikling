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
    <footer className="bg-[#0b0b0b] border-t border-[#ede9e2]/6">

      {/* Main footer body */}
      <div className="container mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">

          {/* Brand col */}
          <div className="md:col-span-5">
            <Link href={getLocalizedPath("/", currentLanguage) as any} className="inline-block mb-7">
              <Image
                src="/images/logo.svg"
                alt="Kristiansen Utvikling"
                width={110}
                height={44}
                className="h-7 w-auto opacity-80"
              />
            </Link>
            <p className="text-[#635f5a] text-sm leading-relaxed max-w-[240px] mb-8">
              {isEn
                ? "I build websites for people who want something that actually works."
                : "Jeg bygger nettsider for folk som vil ha noe som faktisk fungerer."}
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hei@kristiansenutvikling.no"
                className="editorial-link block text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                hei@kristiansenutvikling.no
              </a>
              <a
                href="tel:+4747207143"
                className="editorial-link block text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                +47 472 07 143
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3">
            <span className="section-label block mb-6">
              {isEn ? "Navigation" : "Navigasjon"}
            </span>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={getLocalizedPath(href, currentLanguage) as any}
                    className="text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA col */}
          <div className="md:col-span-4">
            <span className="section-label block mb-6">
              {isEn ? "Start a project" : "Start et prosjekt"}
            </span>
            <p
              className="text-2xl md:text-[1.75rem] font-black tracking-tight text-[#ede9e2] leading-[1.05] mb-7"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {isEn ? "Have an idea?\nLet's build it." : "Har du en idé?\nLa oss bygge den."}
            </p>
            <Link
              href={getLocalizedPath("/kontakt", currentLanguage) as any}
              className="inline-flex items-center gap-2.5 text-sm font-semibold px-5 py-2.5 bg-[#ede9e2] text-[#0b0b0b] hover:bg-white transition-colors duration-200"
              style={{ borderRadius: "3px" }}
            >
              {isEn ? "Get in touch" : "Ta kontakt"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#ede9e2]/5">
        <div className="container mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] tracking-wide text-[#635f5a]/60 uppercase">
            {t.footer.copyright}
          </p>
          <button
            onClick={resetCookieConsent}
            className="text-[10px] tracking-wide text-[#635f5a]/60 hover:text-[#635f5a] transition-colors duration-200 uppercase"
          >
            {isEn ? "Cookie settings" : "Cookie-innstillinger"}
          </button>
        </div>
      </div>
    </footer>
  );
}
