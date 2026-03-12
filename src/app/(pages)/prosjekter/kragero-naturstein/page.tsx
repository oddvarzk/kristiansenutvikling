import type { Metadata } from "next";
import Script from "next/script";
import KrageroNatursteinPage from "./KrageroNatursteinPage";

export const metadata: Metadata = {
  title: "Kragero Naturstein | Kristiansen Utvikling",
  description:
    "Nettside for Kragero Naturstein – profesjonell presentasjon av natursteinprodukter, tjenester og kontaktinformasjon.",
  keywords: ["Kragero Naturstein", "naturstein", "nettside", "Next.js", "Tailwind CSS"],
  authors: [{ name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" }],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
  },
  openGraph: {
    title: "Kragero Naturstein | Kristiansen Utvikling",
    description:
      "Profesjonell nettside for Kragero Naturstein bygget med Next.js og Tailwind CSS.",
    url: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/projects/kragero-naturstein-home.png",
        width: 1200,
        height: 630,
        alt: "Kragero Naturstein nettside",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const graph = [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/prosjekter/kragero-naturstein#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
      name: "Kragero Naturstein | Kristiansen Utvikling",
      description: "Nettside for Kragero Naturstein, bygget med Next.js og Tailwind CSS.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kristiansenutvikling.no/prosjekter/kragero-naturstein#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
        { "@type": "ListItem", position: 3, name: "Kragero Naturstein", item: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein" },
      ],
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </Script>
      <KrageroNatursteinPage />
    </>
  );
}
