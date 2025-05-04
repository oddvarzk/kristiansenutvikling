// src/app/kontakt/page.tsx
import ContactForm from "../../components/KontaktForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Kristiansen Utvikling",
  description:
    "Kontakt Kristiansen Utvikling for skreddersydde nettsider, apper og SEO-optimalisering. Få en gratis konsultasjon i dag.",
  keywords: [
    "webutvikling",
    "kontakt",
    "Kristiansen Utvikling",
    "SEO",
    "nettsted",
    "nettside",
    "apputvikling",
  ],
  authors: [
    { name: "Kristiansen Utvikling", url: "https://kristiansenutvikling.no" },
  ],
  openGraph: {
    title: "Kontakt | Kristiansen Utvikling",
    description:
      "Kontakt oss for en uforpliktende prat om ditt neste web- eller app-prosjekt, eller for å styrke din synlighet på nett.",
    url: "https://kristiansenutvikling.no/kontakt",
    siteName: "Kristiansen Utvikling",
    type: "website",
    locale: "nb_NO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Kristiansen Utvikling",
    description:
      "Kontakt oss for webutvikling, app-løsninger og SEO. Rask respons og personlig oppfølging.",
    site: "@kristiansenutv",
  },
  alternates: {
    canonical: "https://kristiansenutvikling.no/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 mb-10">
      {/* Header Intro */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">
          La oss <span className="text-cyan-400">snakke</span>
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxed pb-5">
          Enten du ønsker en ny nettside, en app eller å styrke din synlighet på
          nett, er jeg her for å hjelpe. Fyll ut skjemaet eller bruk alternativ
          kontakt nedenfor, så tar jeg kontakt innen 1–2 virkedager.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Column */}
        <div>
          <ContactForm />
        </div>

        {/* Info Column */}
        <div className="space-y-8">
          {/* Contact Info Card */}
          <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              Kontaktinformasjon
            </h2>
            <ul className="space-y-3">
              <li>
                <strong className="inline-block w-24">E-post:</strong>{" "}
                <a
                  href="mailto:hei@kristiansenutvikling.no"
                  className="underline hover:text-cyan-300"
                >
                  hei@kristiansenutvikling.no
                </a>
              </li>
              <li>
                <strong className="inline-block w-24">Telefon:</strong>{" "}
                <a
                  href="tel:+4747207143"
                  className="underline hover:text-cyan-300"
                >
                  +47 472 07 143
                </a>
              </li>
              <li>
                <strong className="inline-block w-24">Lokasjon:</strong>
                Oslo, Norge
              </li>
            </ul>
          </section>

          {/* Opening Hours Card */}
          <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              Åpningstider
            </h2>
            <p className="text-gray-300">
              Hverdager: 09:00 – 21:00
              <br />
              Helg: 10:00 – 18:00
              <br />
              (Stengt hvert døgn: 21:00 – 09:00)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
