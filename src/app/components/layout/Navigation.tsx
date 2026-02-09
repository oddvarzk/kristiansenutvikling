"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/app/hooks/useTranslations";

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

  const withLangPrefix = (path: string) =>
    currentLanguage === "en" ? `/en${path}` : path;

  const normalize = (p: string) => (p !== "/" ? p.replace(/\/$/, "") : p);

  const isActive = (href: string) => normalize(pathname) === normalize(href);

  // If typedRoutes complains in your project, isolate the cast here (one place)
  const asHref = (href: string) => href as unknown as any;

  const ulClass = isMobile
    ? "flex flex-col gap-6 px-6"
    : "flex items-center gap-10";

  const linkBase = "block text-lg py-2 transition-colors duration-200";
  const linkActive = "text-accent border-b-1 border-accent";
  const linkIdle = "text-foreground/80 hover:text-foreground";

  const navItems = [
    { href: "/", label: t.navigation.home },
    { href: "/tjenester", label: t.navigation.services },
    { href: "/prosjekter", label: t.navigation.projects },
    {
      href: "/artikler",
      label: currentLanguage === "no" ? "Artikler" : "Articles",
    },
  ];

  return (
    <nav>
      <ul className={ulClass}>
        {navItems.map(({ href, label }) => {
          const localizedHref = withLangPrefix(href);
          const active = isActive(localizedHref);

          return (
            <li key={href}>
              <Link
                href={asHref(localizedHref)}
                onClick={() => onClose?.()}
                className={`${linkBase} ${active ? linkActive : linkIdle}`}
              >
                {label}
              </Link>
            </li>
          );
        })}

        <li>
          <Link
            href={asHref(withLangPrefix("/kontakt"))}
            onClick={() => onClose?.()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-accent text-background hover:opacity-90 transition"
          >
            {t.navigation.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
