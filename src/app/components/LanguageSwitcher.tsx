"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<"no" | "en">("no");

  useEffect(() => {
    const getCurrentLanguage = () => {
      // Check if the current path starts with a language code
      const pathSegments = pathname.split("/");
      const firstSegment = pathSegments[1];
      
      if (firstSegment === "en") {
        return "en";
      }
      return "no"; // Default to Norwegian
    };

    const detectedLanguage = getCurrentLanguage();
    setCurrentLang(detectedLanguage);
    
    // Store the language preference in localStorage
    localStorage.setItem("preferred-language", detectedLanguage);
  }, [pathname]);

  // Initialize language from localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferred-language") as "no" | "en";
    if (storedLanguage && (storedLanguage === "no" || storedLanguage === "en")) {
      setCurrentLang(storedLanguage);
    }
  }, []);

  const switchLanguage = (langCode: string) => {
    // Don't do anything if clicking the current language
    if (langCode === currentLang) {
      return;
    }

    const pathSegments = pathname.split("/");
    
    if (langCode === "no") {
      // Switch to Norwegian (remove /en prefix)
      if (pathSegments[1] === "en") {
        // Remove the /en prefix and keep the rest of the path
        const newPath = pathSegments.slice(2).join("/");
        window.location.href = `/${newPath}`;
      } else {
        // Already on Norwegian, just refresh
        window.location.href = pathname;
      }
    } else {
      // Switch to English (add /en prefix)
      if (pathSegments[1] === "en") {
        // Already on English, just refresh
        window.location.href = pathname;
      } else {
        // Add /en prefix to the current path
        const newPath = pathSegments.slice(1).join("/");
        window.location.href = `/en/${newPath}`;
      }
    }
  };

  return (
    <div className="bg-zinc-900 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-end space-x-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`
                px-3 py-1 text-sm rounded-md transition-colors duration-200
                ${currentLang === lang.code
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }
              `}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 