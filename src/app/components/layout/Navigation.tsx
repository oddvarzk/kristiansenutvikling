"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  const isActive = (p: string) => pathname === p;

  const ulClass = isMobile
    ? "flex flex-col gap-6 px-6"
    : "flex items-center gap-14";

  return (
    <nav>
      <ul className={ulClass}>
        {[
          { href: "/", label: "Hjem" },
          { href: "/tjenester", label: "Tjenester" },
          { href: "/prosjekter", label: "Prosjekter" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={() => onClose?.()}
              className={`
                block text-lg py-2 transition-colors duration-200
                ${
                  isActive(href)
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-white hover:text-cyan-300"
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
            onClick={() => onClose?.()}
            className={`
              inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium
              bg-gradient-to-r from-cyan-500 to-cyan-600 text-white
              hover:from-cyan-600 hover:to-cyan-700 transition
            `}
          >
            Ta kontakt <ArrowRight size={16} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
