"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "../Hamburger";
import Navigation from "./Navigation";
import { useTranslations } from "@/app/hooks/useTranslations";

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

  const homeHref = currentLanguage === "en" ? "/en" : "/";

  return (
    <div ref={containerRef} className="relative z-50">
      <header className="w-full border-b border-border/10 bg-header/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href={homeHref} className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Kristiansen Utvikling logo"
                width={120}
                height={76}
                priority
              />
            </Link>

            {/* Desktop */}
            <div className="hidden md:block">
              <Navigation />
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <Hamburger isOpen={isOpen} toggle={() => setIsOpen((o) => !o)} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div
        className={[
          "absolute top-full inset-x-0 overflow-hidden border-b border-border/10 bg-header/95 backdrop-blur transition-[max-height,padding] duration-300",
          isOpen ? "max-h-screen py-6" : "max-h-0 py-0",
        ].join(" ")}
      >
        <Navigation isMobile onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
