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
        className="rounded-2xl p-5 border"
        style={{
          backgroundColor: "#111111",
          borderColor: "rgba(240,237,231,0.08)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          fontFamily: "Satoshi, sans-serif",
        }}
      >
        <p className="text-xs font-semibold text-[#f0ede7] mb-1">
          {isEn ? "Cookies" : "Informasjonskapsler"}
        </p>
        <p className="text-xs text-[#6e6b66] leading-relaxed mb-4">
          {isEn
            ? "I use cookies for anonymous analytics. Nothing invasive — just page views. "
            : "Jeg bruker informasjonskapsler til anonymisert statistikk. Ingenting invasivt — bare sidevisninger. "}
          <Link
            href={isEn ? "/en/personvern" : "/personvern"}
            className="text-[#f0ede7]/50 hover:text-[#f0ede7] transition-colors duration-200 underline underline-offset-2"
          >
            {isEn ? "Privacy policy" : "Personvern"}
          </Link>
        </p>

        <div className="flex gap-2">
          <button
            onClick={decline}
            className="flex-1 text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 cursor-pointer"
            style={{
              color: "#6e6b66",
              backgroundColor: "transparent",
              border: "1px solid rgba(240,237,231,0.08)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ede7")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6b66")}
          >
            {isEn ? "Decline" : "Avvis"}
          </button>
          <button
            onClick={accept}
            className="flex-1 text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200 cursor-pointer"
            style={{
              backgroundColor: "#d4ff3e",
              color: "#080808",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8ff6a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d4ff3e")}
          >
            {isEn ? "Accept" : "Aksepter"}
          </button>
        </div>
      </div>
    </div>
  );
}
