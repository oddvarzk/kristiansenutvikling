// src/components/layout/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
