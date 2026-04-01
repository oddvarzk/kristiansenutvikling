"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
      style={{
        animation: "cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="p-5 border"
        style={{
          backgroundColor: "#131313",
          borderColor: "rgba(237,233,226,0.08)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          fontFamily: "var(--font-satoshi), sans-serif",
          borderRadius: "3px",
        }}
      >
        <p className="text-xs font-semibold text-[#ede9e2] mb-1">
          {isEn ? "Cookies" : "Informasjonskapsler"}
        </p>
        <p className="text-xs text-[#857f7a] leading-relaxed mb-4">
          {isEn
            ? "I use cookies for anonymous analytics. Nothing invasive — just page views. "
            : "Jeg bruker informasjonskapsler til anonymisert statistikk. Ingenting invasivt — bare sidevisninger. "}
          <Link
            href={isEn ? "/en/personvern" : "/personvern"}
            className="text-[#857f7a] hover:text-[#ede9e2] transition-colors duration-200 underline underline-offset-2"
          >
            {isEn ? "Privacy policy" : "Personvern"}
          </Link>
        </p>

        <div className="flex gap-2">
          <button
            onClick={decline}
            className="flex-1 text-xs font-medium py-2 px-3 transition-colors duration-200 cursor-pointer"
            style={{
              color: "#857f7a",
              backgroundColor: "transparent",
              border: "1px solid rgba(237,233,226,0.08)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ede9e2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#857f7a")}
          >
            {isEn ? "Decline" : "Avvis"}
          </button>
          <button
            onClick={accept}
            className="flex-1 text-xs font-semibold py-2 px-3 transition-colors duration-200 cursor-pointer"
            style={{
              backgroundColor: "#ede9e2",
              color: "#0b0b0b",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ede9e2")}
          >
            {isEn ? "Accept" : "Aksepter"}
          </button>
        </div>
      </div>
    </div>
  );
}
