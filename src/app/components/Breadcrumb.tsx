/* eslint-disable @typescript-eslint/no-explicit-any */
// Reason: Next.js 15 typedRoutes requires dynamic hrefs to be cast as any for i18n/dynamic routes.
"use client";
import React from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

// Map your slugs to human-readable labels
const slugToLabel: Record<string, string> = {
  tjenester: "Tjenester",
  prosjekter: "Prosjekter",
  kontakt: "Kontakt",
  FAQ: "FAQ",
  about: "about",
  personvern: "personvern",
  // Note: individual project pages will be grouped under "Prosjekter"
};

export default function Breadcrumb() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  // ✋ Don’t show breadcrumbs on the homepage
  if (segments.length === 0) {
    return null;
  }

  // Only show Home and the first segment
  const crumbs = [
    { name: "Hjem", href: "/" },
    {
      name:
        slugToLabel[segments[0]] ||
        segments[0].charAt(0).toUpperCase() + segments[0].slice(1),
      href: `/${segments[0]}`,
    },
  ];

  // JSON-LD for BreadcrumbList
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
      {/* UI Breadcrumbs (hidden visually) */}
      <nav aria-label="breadcrumb" className="sr-only">
        {crumbs.map((c, i) => (
          <React.Fragment key={c.href}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link href={c.href as any}>{c.name}</Link>
            {i < crumbs.length - 1 && " / "}
          </React.Fragment>
        ))}
      </nav>

      {/* JSON-LD Schema */}
      <Script
        id="breadcrumb-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
