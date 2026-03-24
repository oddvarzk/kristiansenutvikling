import type { Metadata } from "next";
import KrageroNatursteinPage from "./KrageroNatursteinPage";

export const metadata: Metadata = {
  title: "Kragerø Naturstein — Nettside Utvikling | Kristiansen Utvikling",
  description:
    "Profesjonell nettside for Kragerø Naturstein, norsk leverandør av naturstein — bygget med Next.js og SEO-optimalisering for synlighet i Google. Se prosjektet.",
  keywords: [
    "Kragerø Naturstein",
    "naturstein nettside",
    "Next.js SEO",
    "nettside norsk leverandør",
    "webutvikling prosjekt",
    "SEO optimalisering Norge",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
    languages: {
      "nb-NO": "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
      "en": "https://kristiansenutvikling.no/en/prosjekter/kragero-naturstein",
    },
  },
  openGraph: {
    title: "Kragerø Naturstein — Nettside Utvikling | Kristiansen Utvikling",
    description:
      "Profesjonell nettside for Kragerø Naturstein bygget med Next.js og Tailwind CSS, optimalisert for søkemotorer.",
    url: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
    siteName: "Kristiansen Utvikling",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/projects/kragero-naturstein-home.png",
        width: 1200,
        height: 630,
        alt: "Kragerø Naturstein nettside",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kristiansenutvikling.no/prosjekter/kragero-naturstein#webpage",
      url: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein",
      name: "Kragerø Naturstein — Nettside Utvikling | Kristiansen Utvikling",
      inLanguage: "nb-NO",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: "https://kristiansenutvikling.no/" },
        { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://kristiansenutvikling.no/prosjekter" },
        { "@type": "ListItem", position: 3, name: "Kragerø Naturstein", item: "https://kristiansenutvikling.no/prosjekter/kragero-naturstein" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <KrageroNatursteinPage />
    </>
  );
}
