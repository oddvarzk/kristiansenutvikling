// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/logo.svg";
import Navigation from "./Navigation";
import Hamburger from "../Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((o) => !o);

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

        {/* Desktop nav */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Hamburger only on mobile */}
        <div className="md:hidden">
          <Hamburger isOpen={isOpen} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile dropdown: pass isMobile */}
      {isOpen && (
        <div className="md:hidden border-t mt-5 text-right border-gray-800">
          <Navigation isMobile />
        </div>
      )}
    </header>
  );
}
