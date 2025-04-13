// src/components/layout/Header.tsx
import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";

export default function Header() {
  return (
    <header className="w-full p-5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl">
          <Image
            src={Logo}
            alt="Logo of Kristiansen Utvikling"
            width={120}
            height={76}
            priority
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
