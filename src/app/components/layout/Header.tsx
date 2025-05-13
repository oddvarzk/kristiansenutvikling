"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/logo.svg";
import Navigation from "./Navigation";
import Hamburger from "../Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside header + dropdown
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((o) => !o);
  };

  return (
    <div ref={containerRef} className="relative z-50">
      <header className="w-full p-5 bg-zinc-950">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="font-bold text-xl">
            <Image
              src={Logo}
              alt="Kristiansen Utvikling logo"
              width={120}
              height={76}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Hamburger on mobile */}
          <div className="md:hidden">
            <Hamburger isOpen={isOpen} toggle={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Mobile slide-down nav */}
      <div
        className={`
          absolute top-full inset-x-0 bg-zinc-950 transition-all duration-300
          ${isOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"}
        `}
      >
        <Navigation isMobile onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
