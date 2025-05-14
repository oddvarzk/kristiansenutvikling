// src/app/(pages)/hjem/head.tsx
export default function Head() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://kristiansenutvikling.no/",
          name: "Kristiansen Utvikling",
          description:
            "Kristiansen Utvikling leverer skreddersydde nettsider, nettbutikker og webapplikasjoner som løfter din virksomhet.",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://kristiansenutvikling.no/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          provider: {
            "@type": "Organization",
            name: "Kristiansen Utvikling",
            url: "https://kristiansenutvikling.no",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+47 472 07 143",
              email: "hei@kristiansenutvikling.no",
              contactType: "Customer Service",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "NO",
            },
          },
        }),
      }}
    />
  );
}
