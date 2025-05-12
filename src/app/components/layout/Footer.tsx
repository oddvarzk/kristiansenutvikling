// src/components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../../public/images/logo.svg";

export default function Footer() {
  // Handler to reset cookie consent and show banner again
  const resetCookieConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie_consent");
      window.location.reload();
    }
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
            Skreddersydde web- og app-løsninger med fokus på kvalitet og
            brukeropplevelse.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
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
                Telefon: +47 472 07 143
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Lenker</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Hjem
              </Link>
            </li>
            <li>
              <Link href="/tjenester" className="hover:text-white">
                Tjenester
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Prosjekter
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/personvern" className="hover:text-white">
                Personvern
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Cookie Reset */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Følg meg</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              Facebook
            </a>
          </div>
          <button
            onClick={resetCookieConsent}
            className="text-gray-400 hover:text-white text-sm mb-4"
          >
            Endre cookie-innstillinger
          </button>
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} Kristiansen Utvikling. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
