"use client";

import Script from "next/script";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function PrivacyPolicyClient() {
  const { t, currentLanguage } = useTranslations();
  const updatedDate = new Date().toLocaleDateString(currentLanguage === "en" ? "en-US" : "nb-NO");

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://kristiansenutvikling.no/personvern",
    name: currentLanguage === "en" ? "Privacy Policy | Kristiansen Utvikling" : "Personvernerklæring | Kristiansen Utvikling",
    description: currentLanguage === "en" 
      ? "Our privacy policy explains how we process your personal data and use cookies, including Google Analytics."
      : "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: currentLanguage === "en" ? "Home" : "Hjem",
        item: "https://kristiansenutvikling.no",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLanguage === "en" ? "Privacy Policy" : "Personvernerklæring",
        item: "https://kristiansenutvikling.no/personvern",
      },
    ],
  };

  return (
    <>
      <Script id="ld-json-page" type="application/ld+json">
        {JSON.stringify(pageJsonLd)}
      </Script>
      <Script id="ld-json-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-cyan-700">
          {t.privacy.title}
        </h1>

        {/* Cookies & Analytics */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t.privacy.cookies.title}
          </h2>
          <p className="mb-4 text-gray-700">
            {t.privacy.cookies.description}
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
            {t.privacy.cookies.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700">
            {t.privacy.cookies.footer}
          </p>
        </section>

        {/* Data Subject Rights */}
        <section className="bg-gray-900 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            {t.privacy.rights.title}
          </h2>
          <p className="mb-4">
            {t.privacy.rights.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {t.privacy.rights.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t.privacy.legal.title}
          </h2>
          <p className="text-gray-700 mb-4">
            {t.privacy.legal.description}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {t.privacy.legal.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Data Retention */}
        <section className="bg-gray-900 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            {t.privacy.retention.title}
          </h2>
          <p className="text-white mb-4">
            {t.privacy.retention.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {t.privacy.retention.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t.privacy.contact.title}
          </h2>
          <p className="text-gray-700 mb-2">
            {t.privacy.contact.description}
          </p>
          <p className="text-gray-700">
            {t.privacy.contact.email}:{" "}
            <a
              href="mailto:hei@kristiansenutvikling.com"
              className="text-cyan-600 hover:underline"
            >
              hei@kristiansenutvikling.com
            </a>
          </p>
          <p className="text-gray-700">{t.privacy.contact.updated}: {updatedDate}</p>
        </section>
      </div>
    </>
  );
} 