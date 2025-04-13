"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link
            href="/"
            className={`
              hover:border-b-cyan-400 hover:border-b-2
              ${
                isActive("/")
                  ? "border-b-2 border-b-cyan-400 text-cyan-400"
                  : ""
              }
            `}
          >
            Hjem
          </Link>
        </li>
        <li>
          <Link
            href="/tjenester"
            className={`
              hover:border-b-cyan-400 hover:border-b-2
              ${
                isActive("/tjenester")
                  ? "border-b-2 border-b-cyan-400 text-cyan-400"
                  : ""
              }
            `}
          >
            Tjenester
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`
              hover:border-b-cyan-400 hover:border-b-2
              ${
                isActive("/projects")
                  ? "border-b-2 border-b-cyan-400 text-cyan-400"
                  : ""
              }
            `}
          >
            Projekter
          </Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className={`
              ${
                isActive("/kontakt")
                  ? "bg-cyan-600 text-white"
                  : "bg-gradient-to-r from-cyan-600 to-cyan-500"
              }
              text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto
            `}
          >
            Ta en prat
          </Link>
        </li>
      </ul>
    </nav>
  );
}
