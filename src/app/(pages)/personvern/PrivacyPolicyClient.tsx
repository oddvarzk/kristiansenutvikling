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

      <div className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">

          <h1
            className="text-4xl md:text-5xl font-black tracking-tight text-[#ede9e2] mb-14"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.privacy.title}
          </h1>

          <div className="space-y-10">
            {[
              t.privacy.cookies,
              t.privacy.rights,
              t.privacy.legal,
              t.privacy.retention,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ].map((section: any, i: number) => (
              <div key={i} className="border-t border-[#1a1a1a] pt-8">
                <h2 className="text-base font-bold text-[#ede9e2] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  {section.title}
                </h2>
                <p className="text-sm text-[#7a7570] leading-relaxed mb-4">{section.description}</p>
                {section.items && (
                  <ul className="space-y-1.5 mb-4">
                    {section.items.map((item: string, j: number) => (
                      <li key={j} className="text-sm text-[#7a7570] pl-4 relative before:absolute before:left-0 before:content-['·'] before:text-[#c5f135]/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && <p className="text-sm text-[#7a7570]">{section.footer}</p>}
              </div>
            ))}

            <div className="border-t border-[#1a1a1a] pt-8">
              <h2 className="text-base font-bold text-[#ede9e2] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                {t.privacy.contact.title}
              </h2>
              <p className="text-sm text-[#7a7570] mb-3">{t.privacy.contact.description}</p>
              <a href="mailto:hei@kristiansenutvikling.no" className="text-sm text-[#c5f135]/80 hover:text-[#c5f135] transition-colors block mb-1">
                hei@kristiansenutvikling.no
              </a>
              <p className="text-xs text-[#7a7570]/50 mt-3">{t.privacy.contact.updated}: {updatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
