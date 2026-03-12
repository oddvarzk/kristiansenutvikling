/* eslint-disable @typescript-eslint/no-explicit-any */
// Reason: Next.js 15 typedRoutes requires dynamic hrefs to be cast as any for i18n/dynamic routes.
"use client";
import React from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

const slugToLabelNo: Record<string, string> = {
  tjenester: "Tjenester",
  prosjekter: "Prosjekter",
  kontakt: "Kontakt",
  personvern: "Personvern",
  "kragero-naturstein": "Kragero Naturstein",
  "nora-marketing": "Nora Marketing",
  holidaze: "Holidaze",
};

const slugToLabelEn: Record<string, string> = {
  tjenester: "Services",
  prosjekter: "Projects",
  kontakt: "Contact",
  personvern: "Privacy Policy",
  "kragero-naturstein": "Kragero Naturstein",
  "nora-marketing": "Nora Marketing",
  holidaze: "Holidaze",
};

export default function Breadcrumb() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const isEn = segments[0] === "en";
  const langPrefix = isEn ? "/en" : "";
  const labelMap = isEn ? slugToLabelEn : slugToLabelNo;
  const homeLabel = isEn ? "Home" : "Hjem";

  // Skip the "en" segment itself when building crumbs
  const contentSegments = isEn ? segments.slice(1) : segments;

  const crumbs = [
    { name: homeLabel, href: isEn ? "/en" : "/" },
    ...contentSegments.map((seg, i) => ({
      name:
        labelMap[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
      href: `${langPrefix}/${contentSegments.slice(0, i + 1).join("/")}`,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `https://kristiansenutvikling.no${c.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="sr-only">
        {crumbs.map((c, i) => (
          <React.Fragment key={c.href}>
            <Link href={c.href as any}>{c.name}</Link>
            {i < crumbs.length - 1 && " / "}
          </React.Fragment>
        ))}
      </nav>

      <Script
        id="breadcrumb-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
