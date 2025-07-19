// src/app/components/Header.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Hamburger from "../Hamburger";
import { useTranslations } from "@/app/hooks/useTranslations";

// Dynamically load the desktop nav only on the client,
// so its images/links don't slow down the initial render.
const Navigation = dynamic(() => import("./Navigation"), {
  ssr: false,
  loading: () => null,
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useTranslations();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  const getHomePath = () => {
    return currentLanguage === "en" ? "/en" : "/";
  };

  return (
    <div ref={containerRef} className="relative z-50">
      <header className="w-full p-5 bg-zinc-950">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href={getHomePath()} className="font-bold text-xl">
            <Image
              src="/images/logo.svg"
              alt="Kristiansen Utvikling logo"
              width={120}
              height={76}
              priority // keep your critical logo eager
            />
          </Link>

          {/* Desktop nav: lazy-loaded via dynamic import */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Hamburger on mobile */}
          <div className="md:hidden">
            <Hamburger isOpen={isOpen} toggle={() => setIsOpen((o) => !o)} />
          </div>
        </div>
      </header>

      {/* Mobile slide-down nav */}
      <div
        className={`
          absolute top-full inset-x-0 bg-zinc-950 transition-all duration-300
          ${isOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"}
        `}
      >
        <Navigation isMobile onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
