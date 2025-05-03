// src/app/personvern/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring | Kristiansen Utvikling",
  description:
    "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler, inkludert Google Analytics.",
};

export default function PrivacyPolicy() {
  const updatedDate = new Date().toLocaleDateString("nb-NO");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-cyan-700">Personvernerklæring</h1>

      {/* Cookies & Analytics (Light) */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Informasjonskapsler (Cookies) & Analyseverktøy
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
          banneret nederst på siden. Les mer om våre praksiser i{" "}
          <a href="/personvern" className="underline text-cyan-600">
            personvernerklæringen
          </a>
          .
        </p>
      </section>

      {/* Data Subject Rights (Dark) */}
      <section className="bg-gray-900 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Dine rettigheter</h2>
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

      {/* Legal Basis (Light) */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Behandlingsgrunnlag
        </h2>
        <p className="text-gray-700 mb-4">
          Vi behandler dine opplysninger basert på:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Uttrykkelig samtykke (for informasjonskapsler & nyhetsbrev)</li>
          <li>Berettiget interesse i å forbedre vår nettside og tjenester</li>
          <li>Oppfyllelse av kontrakt eller rettslig forpliktelse</li>
        </ul>
      </section>

      {/* Data Retention (Dark) */}
      <section className="bg-gray-900 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Datalagring</h2>
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

      {/* Contact (Light) */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kontakt</h2>
        <p className="text-gray-700 mb-2">
          Har du spørsmål om vår personvernerklæring eller ønsker å utøve
          rettighetene dine, ta kontakt på:
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
  );
}
