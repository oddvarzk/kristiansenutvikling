// components/Navigation.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  // desktop: horizontal & centered; mobile: vertical
  const ulClass = isMobile
    ? "flex flex-col gap-4 p-4"
    : "flex items-center gap-8";

  return (
    <nav>
      <ul className={ulClass}>
        {[
          { href: "/", label: "Hjem" },
          { href: "/tjenester", label: "Tjenester" },
          { href: "/projects", label: "Projekter" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`
                hover:border-b-cyan-400 hover:border-b-2
                ${
                  isActive(href)
                    ? "border-b-2 border-b-cyan-400 text-cyan-400"
                    : ""
                }
              `}
            >
              {label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href="/kontakt"
            className={`
              ${
                isActive("/kontakt")
                  ? "bg-cyan-600 text-white"
                  : "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white"
              }
              px-6 py-3 rounded-md font-medium
              hover:from-cyan-500 hover:to-cyan-400
              transition-all duration-300 shadow-lg shadow-cyan-500/20
              ${isMobile ? "block" : "inline-block"}
            `}
          >
            Ta en prat
          </Link>
        </li>
      </ul>
    </nav>
  );
}
