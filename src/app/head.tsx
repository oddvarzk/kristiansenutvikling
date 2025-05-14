// src/app/head.tsx
export default function Head() {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kristiansen Utvikling",
    url: "https://kristiansenutvikling.no",
    description:
      "Profesjonell webutvikling som leverer skreddersydde digitale løsninger",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kristiansenutvikling.no/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteJsonLd),
      }}
    />
  );
}
