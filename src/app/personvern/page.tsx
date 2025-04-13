import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring | Kristiansen Utvikling",
  description:
    "Vår personvernerklæring forklarer hvordan vi behandler dine personopplysninger og bruker informasjonskapsler.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Personvernerklæring
      </h1>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Informasjonskapsler (Cookies)
        </h2>
        <p className="mb-4 text-gray-600">
          Vår nettside bruker Vercel Analytics for å samle grunnleggende
          informasjon om besøkende. Dette hjelper oss med å forbedre
          brukeropplevelsen og forstå hvordan folk bruker nettstedet vårt.
        </p>

        <h3 className="text-xl font-medium mb-3 text-gray-700">
          Hva samler vi inn?
        </h3>
        <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
          <li>Antall besøkende</li>
          <li>Sidevisninger</li>
          <li>Generell geografisk lokasjon</li>
          <li>Enhetstype</li>
        </ul>

        <p className="mb-4 text-gray-600">
          Du kan når som helst velge å akseptere eller avvise
          informasjonskapsler ved å bruke valget nederst på nettsiden.
        </p>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Dine rettigheter
        </h2>
        <p className="mb-4 text-gray-600">
          I henhold til personopplysningsloven og GDPR har du følgende
          rettigheter:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
          <li>Rett til innsyn i hvilke personopplysninger som er registrert</li>
          <li>Rett til å få rettet uriktige opplysninger</li>
          <li>Rett til å slette unødvendige personopplysninger</li>
          <li>Rett til å begrense behandlingen av dine opplysninger</li>
          <li>Rett til dataportabilitet</li>
          <li>Rett til å trekke samtykke tilbake</li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Behandlingsgrunnlag
        </h2>
        <p className="text-gray-600 mb-4">
          Vår behandling av personopplysninger er basert på:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Uttrykkelig samtykke</li>
          <li>Berettiget interesse i å forbedre vår nettside og tjenester</li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Datalagring
        </h2>
        <p className="text-gray-600 mb-4">
          Vi lagrer personopplysninger kun så lenge det er nødvendig for å
          oppfylle formålet med innsamlingen. Analytiske data beholdes i henhold
          til Vercel Analytics' standard lagringsperioder.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Kontakt</h2>
        <p className="text-gray-600">
          Har du spørsmål om vår personvernerklæring eller hvordan vi behandler
          dine personopplysninger, kan du kontakte oss på:
        </p>
        <div className="mt-4 text-gray-700">
          <p>
            E-post:{" "}
            <a
              href="mailto:hei@kristiansenutvikling.com"
              className="text-cyan-600 hover:underline"
            >
              hei@kristiansenutvikling.com
            </a>
          </p>
          <p>Sist oppdatert: {new Date().toLocaleDateString("nb-NO")}</p>
        </div>
      </section>
    </div>
  );
}
