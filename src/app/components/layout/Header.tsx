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
    // ✅ absolute overlay: header sits on top of hero/background
    <div ref={containerRef} className="absolute inset-x-0 top-8 z-50">
      {/* ✅ center container for the floating “card” */}
      <div className="mx-auto max-w-6xl px-4 pt-4">
        {/* ✅ floating card */}
        <header className="rounded-full p-2 m-2 border border-border/10 bg-header/70 shadow">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href={homeHref} className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Kristiansen Utvikling logo"
                width={120}
                height={76}
                priority
              />
            </Link>

            <div className="hidden md:block">
              <Navigation />
            </div>

            <div className="md:hidden">
              <Hamburger isOpen={isOpen} toggle={() => setIsOpen((o) => !o)} />
            </div>
          </div>

          {/* ✅ mobile dropdown attached to the card */}
          <div
            className={[
              "overflow-hidden border-border/10 transition-[max-height,padding] duration-300 md:hidden",
              isOpen ? "max-h-screen py-6" : "max-h-0 py-0",
            ].join(" ")}
          >
            <Navigation isMobile onClose={() => setIsOpen(false)} />
          </div>
        </header>
      </div>
    </div>
  );
}
