// src/components/layout/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link href="/" className="hover:border-b-cyan-400 hover:border-b-2">
            Hjem
          </Link>
        </li>
        <li>
          <Link
            href="/tjenester"
            className="hover:border-b-cyan-400 hover:border-b-2"
          >
            Tjenester
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="hover:border-b-cyan-400 hover:border-b-2"
          >
            Projekter
          </Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto"
          >
            Ta en prat
          </Link>
        </li>
      </ul>
    </nav>
  );
}
