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

  const isLightPage =
    pathname === "/prosjekter" || pathname === "/en/prosjekter";

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
      tl.from(logoRef.current, { y: -16, opacity: 0, duration: 0.65 })
        .from(
          navRef.current!.querySelectorAll("li"),
          { y: -10, opacity: 0, duration: 0.45, stagger: 0.06 },
          "-=0.3"
        );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Mobile menu GSAP
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)", opacity: 1,
        duration: 0.5, ease: "power4.inOut",
      });
      gsap.from(mobileMenuRef.current.querySelectorAll(".mobile-nav-item"), {
        y: 40, opacity: 0, duration: 0.55, stagger: 0.08,
        ease: "power3.out", delay: 0.2,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)", opacity: 0,
        duration: 0.38, ease: "power4.inOut",
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
    { href: "/om-meg", label: t.navigation.about },
    { href: "/artikler", label: t.navigation.articles },
  ];

  // ─── Colour tokens based on page type ───────────────────────────
  const ink       = isLightPage ? "#1a1a1a" : "#ede9e2";
  const inkMuted  = isLightPage ? "rgba(26,26,26,0.45)"  : "rgba(237,233,226,0.42)";
  const inkFaded  = isLightPage ? "rgba(26,26,26,0.2)" : "rgba(237,233,226,0.22)";
  const divider   = isLightPage ? "rgba(26,26,26,0.15)" : "rgba(237,233,226,0.18)";
  const activeInk = isLightPage ? "#1a1a1a" : "#ede9e2";

  // ─── Header background ─────────────────────────────────────────
  const headerBgClass = isLightPage
    ? scrolled
      ? "-translate-y-full opacity-0 pointer-events-none"
      : "bg-transparent"
    : scrolled || menuOpen
      ? "bg-[#0b0b0b]/96 backdrop-blur-md border-b border-[#ede9e2]/5"
      : "bg-transparent";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBgClass}`}
      >
        <div className="container mx-auto px-6 md:px-10 h-16 md:h-[4.5rem] flex items-center justify-between">

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
                className="h-7 w-auto"
                style={{ filter: isLightPage ? "invert(1)" : "none" }}
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <ul ref={navRef} className="hidden md:flex items-center gap-8">
            {navItems.map(({ href, label }) => {
              const localHref = getLocalizedPath(href, currentLanguage);
              const active = pathname === localHref;
              return (
                <li key={href}>
                  <Link
                    href={localHref as any}
                    className="text-sm transition-colors duration-200"
                    style={{ color: active ? activeInk : inkMuted }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = ink; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = active ? activeInk : inkMuted; }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Language toggle */}
            <li className="flex items-center gap-1 text-xs font-medium">
              <button
                onClick={() => switchLanguage("no")}
                className="transition-colors duration-200 tracking-wide"
                style={{ color: currentLanguage === "no" ? ink : inkFaded }}
              >
                NO
              </button>
              <span style={{ color: divider }}>/</span>
              <button
                onClick={() => switchLanguage("en")}
                className="transition-colors duration-200 tracking-wide"
                style={{ color: currentLanguage === "en" ? ink : inkFaded }}
              >
                EN
              </button>
            </li>

            {/* Contact CTA */}
            <li>
              <Link
                href={getLocalizedPath("/kontakt", currentLanguage) as any}
                className="text-sm font-medium px-5 py-2.5 transition-all duration-250 border"
                style={{
                  borderColor: isLightPage ? "rgba(26,26,26,0.18)" : "rgba(237,233,226,0.16)",
                  color: inkMuted,
                  borderRadius: "3px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = isLightPage ? "rgba(26,26,26,0.5)" : "rgba(237,233,226,0.45)";
                  el.style.color = ink;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = isLightPage ? "rgba(26,26,26,0.18)" : "rgba(237,233,226,0.16)";
                  el.style.color = inkMuted;
                }}
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
              className="block h-px transition-all duration-300 origin-center"
              style={{ backgroundColor: ink, width: "22px", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{ backgroundColor: ink, width: "14px", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px transition-all duration-300 origin-center"
              style={{ backgroundColor: ink, width: "22px", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#0b0b0b] flex flex-col justify-center px-8 pt-20"
        style={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
      >
        <nav>
          <ul className="space-y-5">
            {navItems.map(({ href, label }) => {
              const localHref = getLocalizedPath(href, currentLanguage);
              return (
                <li key={href} className="mobile-nav-item line-wrap">
                  <Link
                    href={localHref as any}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[12vw] leading-none font-black tracking-tight text-[#ede9e2]/70 hover:text-[#ede9e2] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
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
                className="block text-[12vw] leading-none font-black tracking-tight text-[#c5f135]"
                style={{ fontFamily: "var(--font-satoshi), sans-serif" }}
              >
                {t.navigation.contact}
              </Link>
            </li>
          </ul>
          <div className="mobile-nav-item mt-14 flex gap-5 text-sm text-[#857f7a]">
            <button
              onClick={() => { switchLanguage("no"); setMenuOpen(false); }}
              className={currentLanguage === "no" ? "text-[#ede9e2]" : "hover:text-[#ede9e2] transition-colors"}
            >
              Norsk
            </button>
            <span>·</span>
            <button
              onClick={() => { switchLanguage("en"); setMenuOpen(false); }}
              className={currentLanguage === "en" ? "text-[#ede9e2]" : "hover:text-[#ede9e2] transition-colors"}
            >
              English
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
