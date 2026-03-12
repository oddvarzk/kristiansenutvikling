"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<"no" | "en">("no");

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const detectedLanguage: "no" | "en" = pathSegments[1] === "en" ? "en" : "no";
    setCurrentLang(detectedLanguage);
    localStorage.setItem("preferred-language", detectedLanguage);
  }, [pathname]);

  const switchLanguage = (langCode: string) => {
    if (langCode === currentLang) return;

    const pathSegments = pathname.split("/");

    if (langCode === "no") {
      const newPath = pathSegments[1] === "en"
        ? "/" + pathSegments.slice(2).join("/")
        : pathname;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.push((newPath || "/") as any);
    } else {
      const newPath = pathSegments[1] === "en"
        ? pathname
        : "/en/" + pathSegments.slice(1).join("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.push((newPath.replace(/\/$/, "") || "/en") as any);
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