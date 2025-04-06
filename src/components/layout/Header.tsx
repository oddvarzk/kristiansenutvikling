// src/components/layout/Header.tsx
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl">
          Your Company
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
