"use client";

import Script from "next/script";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function PrivacyPolicyClient() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";
  const updatedDate = new Date().toLocaleDateString(isEn ? "en-US" : "nb-NO");

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://kristiansenutvikling.no/personvern",
    name: isEn ? "Privacy Policy | Kristiansen Utvikling" : "Personvernerklæring | Kristiansen Utvikling",
    description: isEn ? "Our privacy policy explains how we process your personal data and use cookies." : "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler.",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEn ? "Home" : "Hjem", item: "https://kristiansenutvikling.no" },
      { "@type": "ListItem", position: 2, name: isEn ? "Privacy Policy" : "Personvernerklæring", item: "https://kristiansenutvikling.no/personvern" },
    ],
  };

  return (
    <>
      <Script id="ld-json-page" type="application/ld+json">{JSON.stringify(pageJsonLd)}</Script>
      <Script id="ld-json-breadcrumb" type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</Script>

      <div className="min-h-screen bg-[#080808] pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#d4ff3e]" />
            <p className="text-xs tracking-[0.25em] uppercase text-[#6e6b66] font-medium">
              {isEn ? "Legal" : "Juridisk"}
            </p>
          </div>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight text-[#f0ede7] mb-12"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.privacy.title}
          </h1>

          <div className="space-y-10">
            {/* Cookies */}
            <div className="border-t border-[#1a1a1a] pt-8">
              <h2 className="text-lg font-bold text-[#f0ede7] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {t.privacy.cookies.title}
              </h2>
              <p className="text-sm text-[#6e6b66] leading-relaxed mb-4">{t.privacy.cookies.description}</p>
              <ul className="space-y-2">
                {t.privacy.cookies.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6e6b66]">
                    <span className="text-[#d4ff3e] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#6e6b66] mt-4">{t.privacy.cookies.footer}</p>
            </div>

            {/* Rights */}
            <div className="border-t border-[#1a1a1a] pt-8">
              <h2 className="text-lg font-bold text-[#f0ede7] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {t.privacy.rights.title}
              </h2>
              <p className="text-sm text-[#6e6b66] leading-relaxed mb-4">{t.privacy.rights.description}</p>
              <ul className="space-y-2">
                {t.privacy.rights.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6e6b66]">
                    <span className="text-[#d4ff3e] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal basis */}
            <div className="border-t border-[#1a1a1a] pt-8">
              <h2 className="text-lg font-bold text-[#f0ede7] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {t.privacy.legal.title}
              </h2>
              <p className="text-sm text-[#6e6b66] leading-relaxed mb-4">{t.privacy.legal.description}</p>
              <ul className="space-y-2">
                {t.privacy.legal.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6e6b66]">
                    <span className="text-[#d4ff3e] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Retention */}
            <div className="border-t border-[#1a1a1a] pt-8">
              <h2 className="text-lg font-bold text-[#f0ede7] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {t.privacy.retention.title}
              </h2>
              <p className="text-sm text-[#6e6b66] leading-relaxed mb-4">{t.privacy.retention.description}</p>
              <ul className="space-y-2">
                {t.privacy.retention.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6e6b66]">
                    <span className="text-[#d4ff3e] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="border-t border-[#1a1a1a] pt-8">
              <h2 className="text-lg font-bold text-[#f0ede7] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {t.privacy.contact.title}
              </h2>
              <p className="text-sm text-[#6e6b66] mb-2">{t.privacy.contact.description}</p>
              <p className="text-sm text-[#6e6b66]">
                {t.privacy.contact.email}:{" "}
                <a href="mailto:hei@kristiansenutvikling.no" className="text-[#d4ff3e]/80 hover:text-[#d4ff3e] transition-colors">
                  hei@kristiansenutvikling.no
                </a>
              </p>
              <p className="text-sm text-[#6e6b66] mt-1">{t.privacy.contact.updated}: {updatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
