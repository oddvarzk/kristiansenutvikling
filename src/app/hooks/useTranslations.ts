"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { translations, Language } from "../translations";

export function useTranslations() {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("no");

  useEffect(() => {
    const getCurrentLanguage = (): Language => {
      const pathSegments = pathname.split("/");
      const firstSegment = pathSegments[1];
      
      if (firstSegment === "en") {
        return "en";
      }
      return "no";
    };

    const detectedLanguage = getCurrentLanguage();
    setCurrentLanguage(detectedLanguage);
    
    // Store the language preference in localStorage
    localStorage.setItem("preferred-language", detectedLanguage);
  }, [pathname]);

  // Initialize language from localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferred-language") as Language;
    if (storedLanguage && (storedLanguage === "no" || storedLanguage === "en")) {
      setCurrentLanguage(storedLanguage);
    }
  }, []);

  const t = translations[currentLanguage];

  return {
    t,
    currentLanguage,
    isEnglish: currentLanguage === "en",
    isNorwegian: currentLanguage === "no",
  };
} 