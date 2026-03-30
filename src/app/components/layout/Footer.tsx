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
            <div className="space-y-2 mb-7">
              <a
                href="tel:+4747207143"
                className="editorial-link block text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                +47 472 07 143
              </a>
              <a
                href="mailto:hei@kristiansenutvikling.no"
                className="editorial-link block text-sm text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                hei@kristiansenutvikling.no
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kristiansenutvikling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/kristiansenutvikling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kristiansenutvikling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#635f5a] hover:text-[#ede9e2] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
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
