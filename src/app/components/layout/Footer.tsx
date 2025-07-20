/* eslint-disable @typescript-eslint/no-explicit-any */
// Reason: Next.js 15 typedRoutes requires dynamic hrefs to be cast as any for i18n/dynamic routes.
// src/components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../../public/images/logo.svg";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function Footer() {
  const { t, currentLanguage } = useTranslations();

  // Handler to reset cookie consent and show banner again
  const resetCookieConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie_consent");
      window.location.reload();
    }
  };

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div className="flex flex-col items-start">
          <Image
            src={LogoImage}
            alt="Kristiansen Utvikling Logo"
            width={120}
            height={48}
            className="mb-4"
            priority
          />
          <p className="text-gray-400 text-sm">
            {currentLanguage === "no" 
              ? "Web utvikling bedrift med fokus på kundens behov."
              : "Web development company focused on customer needs."
            }
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {currentLanguage === "no" ? "Kontakt" : "Contact"}
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="mailto:hei@kristiansenutvikling.no"
                className="hover:text-white"
              >
                hei@kristiansenutvikling.no
              </a>
            </li>
            <li>
              <a href="tel:+4747207143" className="hover:text-white">
                {currentLanguage === "no" ? "Telefon: " : "Phone: "}+47 472 07 143
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {currentLanguage === "no" ? "Lenker" : "Links"}
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/") as any} className="hover:text-white">
                {t.navigation.home}
              </Link>
            </li>
            <li>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/tjenester") as any} className="hover:text-white">
                {t.navigation.services}
              </Link>
            </li>
            <li>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/prosjekter") as any} className="hover:text-white">
                {t.navigation.projects}
              </Link>
            </li>
            <li>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/kontakt") as any} className="hover:text-white">
                {t.navigation.contact}
              </Link>
            </li>
            <li>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={getLocalizedPath("/personvern") as any} className="hover:text-white">
                {currentLanguage === "no" ? "Personvern" : "Privacy"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Cookie Reset */}
        <div>
          <button
            onClick={resetCookieConsent}
            className="text-gray-400 hover:text-white text-sm mb-4"
          >
            {currentLanguage === "no" 
              ? "Endre cookie-innstillinger" 
              : "Change cookie settings"
            }
          </button>
          <p className="text-gray-500 text-xs mt-4">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
