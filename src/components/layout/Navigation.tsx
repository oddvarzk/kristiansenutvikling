// src/components/layout/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Hjem
          </Link>
        </li>
        <li>
          <Link href="/tjenester" className="hover:text-blue-600">
            Tjenester
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-600">
            Projekter
          </Link>
        </li>
        <li>
          <Link href="/kontakt" className="bg-amber-600 p-3 text-black">
            Kom i kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
