/* eslint-disable @typescript-eslint/no-explicit-any */
// Reason: Next.js 15 typedRoutes requires dynamic hrefs to be cast as any for i18n/dynamic routes.
"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Navigation({
  isMobile = false,
  onClose,
}: NavigationProps) {
  const pathname = usePathname();
  const { t, currentLanguage } = useTranslations();
  
  const isActive = (p: string) => pathname === p;

  const getLocalizedPath = (path: string) => {
    if (currentLanguage === "en") {
      return `/en${path}`;
    }
    return path;
  };

  const ulClass = isMobile
    ? "flex flex-col gap-6 px-6"
    : "flex items-center gap-14";

  const navItems = [
    { href: "/", label: t.navigation.home },
    { href: "/tjenester", label: t.navigation.services },
    { href: "/prosjekter", label: t.navigation.projects },
  ];

  return (
    <nav>
      <ul className={ulClass}>
        {navItems.map(({ href, label }) => {
          const localizedHref = getLocalizedPath(href);
          return (
            <li key={href}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                href={localizedHref as any}
                onClick={() => onClose?.()}
                className={`
                  block text-lg py-2 transition-colors duration-200
                  ${
                    isActive(localizedHref)
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-white hover:text-cyan-300"
                  }
                `}
              >
                {label}
              </Link>
            </li>
          );
        })}

        <li>
          <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={getLocalizedPath("/kontakt") as any}
            onClick={() => onClose?.()}
            className={`
              inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium
              bg-gradient-to-r from-cyan-500 to-cyan-600 text-white
              hover:from-cyan-600 hover:to-cyan-700 transition
            `}
          >
            {t.navigation.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
