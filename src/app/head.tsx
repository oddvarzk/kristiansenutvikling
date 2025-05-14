// src/app/head.tsx
export default function Head() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kristiansen Utvikling",
          url: "https://kristiansenutvikling.no",
          description:
            "Profesjonell webutvikling som leverer skreddersydde digitale løsninger",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://kristiansenutvikling.no/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}
