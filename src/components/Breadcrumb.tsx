import React from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

// Map your slugs to human-readable labels
const slugToLabel: Record<string, string> = {
  tjenester: "Tjenester",
  projects: "Prosjekter",
  kontakt: "Kontakt",
  // Note: individual project pages will be grouped under "Prosjekter"
};

export default function Breadcrumb() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  // Only show Home and the first segment (if it exists)
  const crumbs = [
    { name: "Hjem", href: "/" },
    ...(segments.length > 0
      ? [
          {
            name:
              slugToLabel[segments[0]] ||
              segments[0].charAt(0).toUpperCase() + segments[0].slice(1),
            href: `/${segments[0]}`,
          },
        ]
      : []),
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
      {/* UI Breadcrumbs */}
      <nav aria-label="breadcrumb" className="text-sm text-gray-400 mb-6">
        {crumbs.map((c, i) => (
          <span key={c.href}>
            <Link href={c.href} className="hover:underline text-gray-200">
              {c.name}
            </Link>
            {i < crumbs.length - 1 && <span className="px-2">/</span>}
          </span>
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
