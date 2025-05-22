// src/app/kontakt/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import KontaktPage from "./KontaktPage";

export const metadata: Metadata = {
  title: "Kontakt | Kristiansen Utvikling",
  description:
    "Trenger du en ny nettside, app eller hjelp med SEO? Kontakt Kristiansen Utvikling for en uforpliktende prat og gratis tilbud.",
  alternates: { canonical: "https://kristiansenutvikling.no/kontakt" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  openGraph: {
    title: "Kontakt | Kristiansen Utvikling",
    description:
      "Ta kontakt for et skreddersydd tilbud på nettsider, apper eller SEO-optimalisering - uten binding.",
    url: "https://kristiansenutvikling.no/kontakt",
    siteName: "Kristiansen Utvikling",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "/images/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Kontakt Kristiansen Utvikling for web- og app-prosjekter",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* Inline JSON-LD so it's part of the SSR HTML */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://kristiansenutvikling.no/kontakt",
          name: "Kontakt Kristiansen Utvikling",
          description:
            "Fyll ut skjemaet eller bruk alternativ kontakt for en uforpliktende prat om nettside, app eller SEO-prosjektet ditt.",
          mainEntity: {
            "@type": "Organization",
            name: "Kristiansen Utvikling",
            url: "https://kristiansenutvikling.no",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+47-472-07-143",
              email: "hei@kristiansenutvikling.no",
              contactType: "Customer Service",
              areaServed: "NO",
              availableLanguage: ["nb", "en"],
            },
          },
        })}
      </Script>

      <KontaktPage />
    </>
  );
}
