// src/components/layout/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
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
          <Link href="/projekter" className="hover:text-blue-600">
            Projekter
          </Link>
        </li>
        <li>
          <Link href="/kontakt" className="hover:text-blue-600">
            Ta en prat
          </Link>
        </li>
      </ul>
    </nav>
  );
}
t;
