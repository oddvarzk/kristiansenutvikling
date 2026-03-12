/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useTranslations } from "@/app/hooks/useTranslations";
import { getLocalizedPath } from "@/app/utils/i18n";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { t, currentLanguage } = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP entrance
  useEffect(() => {
    if (!headerRef.current || !logoRef.current || !navRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(logoRef.current, { y: -20, opacity: 0, duration: 0.7 })
        .from(
          navRef.current!.querySelectorAll("li"),
          { y: -12, opacity: 0, duration: 0.5, stagger: 0.07 },
          "-=0.3"
        );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Mobile menu GSAP animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 0.55,
        ease: "power4.inOut",
      });
      gsap.from(mobileMenuRef.current.querySelectorAll(".mobile-nav-item"), {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: "power3.out",
        delay: 0.25,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 0,
        duration: 0.4,
        ease: "power4.inOut",
      });
    }
  }, [menuOpen]);

  const switchLanguage = (lang: "no" | "en") => {
    if (lang === currentLanguage) return;
    const segs = pathname.split("/");
    if (lang === "no") {
      const p = segs[1] === "en" ? "/" + segs.slice(2).join("/") : pathname;
      router.push((p || "/") as any);
    } else {
      const p = segs[1] === "en" ? pathname : "/en/" + segs.slice(1).join("/");
      router.push((p.replace(/\/$/, "") || "/en") as any);
    }
  };

  const navItems = [
    { href: "/", label: t.navigation.home },
    { href: "/tjenester", label: t.navigation.services },
    { href: "/prosjekter", label: t.navigation.projects },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef}>
            <Link
              href={getLocalizedPath("/", currentLanguage) as any}
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/images/logo.svg"
                alt="Kristiansen Utvikling"
                width={110}
                height={44}
                priority
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <ul ref={navRef} className="hidden md:flex items-center gap-10">
            {navItems.map(({ href, label }) => {
              const localHref = getLocalizedPath(href, currentLanguage);
              const active = pathname === localHref;
              return (
                <li key={href}>
                  <Link
                    href={localHref as any}
                    className={`text-sm tracking-wide transition-colors duration-200 ${
                      active
                        ? "text-[#d4ff3e]"
                        : "text-[#f0ede7]/70 hover:text-[#f0ede7]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Language toggle */}
            <li className="flex items-center gap-1 text-sm">
              <button
                onClick={() => switchLanguage("no")}
                className={`transition-colors duration-200 ${
                  currentLanguage === "no"
                    ? "text-[#f0ede7]"
                    : "text-[#f0ede7]/30 hover:text-[#f0ede7]/70"
                }`}
              >
                NO
              </button>
              <span className="text-[#f0ede7]/20">/</span>
              <button
                onClick={() => switchLanguage("en")}
                className={`transition-colors duration-200 ${
                  currentLanguage === "en"
                    ? "text-[#f0ede7]"
                    : "text-[#f0ede7]/30 hover:text-[#f0ede7]/70"
                }`}
              >
                EN
              </button>
            </li>

            {/* CTA */}
            <li>
              <Link
                href={getLocalizedPath("/kontakt", currentLanguage) as any}
                className="text-sm font-medium px-5 py-2.5 rounded-full border border-[#f0ede7]/20 text-[#f0ede7] hover:bg-[#f0ede7] hover:text-[#080808] transition-all duration-300"
              >
                {t.navigation.contact}
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 relative z-[60]"
            aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          >
            <span
              className={`block h-px bg-[#f0ede7] transition-all duration-300 origin-center ${
                menuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-[#f0ede7] transition-all duration-300 ${
                menuOpen ? "opacity-0 w-4" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-[#f0ede7] transition-all duration-300 origin-center ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center px-8 pt-20"
        style={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
      >
        <nav>
          <ul className="space-y-6">
            {navItems.map(({ href, label }) => {
              const localHref = getLocalizedPath(href, currentLanguage);
              return (
                <li key={href} className="mobile-nav-item line-wrap">
                  <Link
                    href={localHref as any}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[13vw] leading-none font-black tracking-tight text-[#f0ede7] hover:text-[#d4ff3e] transition-colors duration-200"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mobile-nav-item line-wrap">
              <Link
                href={getLocalizedPath("/kontakt", currentLanguage) as any}
                onClick={() => setMenuOpen(false)}
                className="block text-[13vw] leading-none font-black tracking-tight text-[#d4ff3e]"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {t.navigation.contact}
              </Link>
            </li>
          </ul>

          {/* Language toggle mobile */}
          <div className="mobile-nav-item mt-16 flex gap-5 text-sm text-[#6e6b66]">
            <button
              onClick={() => { switchLanguage("no"); setMenuOpen(false); }}
              className={currentLanguage === "no" ? "text-[#f0ede7]" : "hover:text-[#f0ede7]"}
            >
              Norsk
            </button>
            <span>·</span>
            <button
              onClick={() => { switchLanguage("en"); setMenuOpen(false); }}
              className={currentLanguage === "en" ? "text-[#f0ede7]" : "hover:text-[#f0ede7]"}
            >
              English
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
