// src/app/personvern/page.tsx
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Personvernerklæring | Kristiansen Utvikling",
  description:
    "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
  alternates: { canonical: "https://kristiansenutvikling.no/personvern" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://kristiansenutvikling.no/personvern",
    siteName: "Kristiansen Utvikling",
    title: "Personvernerklæring | Kristiansen Utvikling",
    description:
      "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
    images: [
      {
        url: "https://kristiansenutvikling.no/images/openGraph.svg",
        width: 1200,
        height: 630,
        alt: "Illustrasjon som viser Kristiansen Utvikling",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const updatedDate = new Date().toLocaleDateString("nb-NO");

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://kristiansenutvikling.no/personvern",
    name: "Personvernerklæring | Kristiansen Utvikling",
    description:
      "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hjem",
        item: "https://kristiansenutvikling.no",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Personvernerklæring",
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
          Personvernerklæring
        </h1>

        {/* Cookies & Analytics */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Personvernerklæring: Cookies & Analyse
          </h2>
          <p className="mb-4 text-gray-700">
            Vi bruker både Vercel Analytics <em>og</em> Google Analytics for å
            samle anonymisert informasjon om besøkende:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
            <li>Antall besøkende og sidevisninger</li>
            <li>Generell geografisk lokasjon</li>
            <li>Enhetstype (mobil, desktop, nettbrett)</li>
            <li>Henvisende kilde og trafikkilder</li>
          </ul>
          <p className="text-gray-700">
            Du kan når som helst godta eller avvise informasjonskapsler via
            banneret nederst på siden.
          </p>
        </section>

        {/* Data Subject Rights */}
        <section className="bg-gray-900 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Personvernerklæring: Dine rettigheter
          </h2>
          <p className="mb-4">
            I henhold til personopplysningsloven og GDPR har du disse
            rettighetene:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Innsyn i hvilke personopplysninger vi har lagret</li>
            <li>Rett til korrigering av unøyaktige data</li>
            <li>Rett til sletting av unødvendige opplysninger</li>
            <li>Rett til begrensning av behandlingen</li>
            <li>Rett til dataportabilitet</li>
            <li>Rett til å trekke tilbake samtykke</li>
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Personvernerklæring: Behandlingsgrunnlag
          </h2>
          <p className="text-gray-700 mb-4">
            Vi behandler dine opplysninger basert på:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uttrykkelig samtykke (informasjonskapsler & nyhetsbrev)</li>
            <li>Berettiget interesse i å forbedre vår nettside og tjenester</li>
            <li>Oppfyllelse av kontrakt eller rettslig forpliktelse</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className="bg-gray-900 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Personvernerklæring: Datalagring
          </h2>
          <p className="text-white mb-4">
            Vi lagrer personopplysninger kun så lenge det er nødvendig for
            formålet:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Analyser via Vercel & Google: opptil 12 måneder</li>
            <li>Kontaktinformasjon (fra skjema): inntil du ber om sletting</li>
            <li>Serverlogger: roteres og slettes månedlig</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Personvernerklæring: Kontaktinformasjon
          </h2>
          <p className="text-gray-700 mb-2">
            Har du spørsmål eller ønsker å utøve dine rettigheter, ta kontakt
            på:
          </p>
          <p className="text-gray-700">
            E-post:{" "}
            <a
              href="mailto:hei@kristiansenutvikling.com"
              className="text-cyan-600 hover:underline"
            >
              hei@kristiansenutvikling.com
            </a>
          </p>
          <p className="text-gray-700">Sist oppdatert: {updatedDate}</p>
        </section>
      </div>
    </>
  );
}
