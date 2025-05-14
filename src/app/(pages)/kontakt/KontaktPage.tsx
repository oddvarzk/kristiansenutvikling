import KontaktForm from "./components/KontaktForm";

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 mb-10">
      {/* Header Intro */}
      <div className="max-w-2xl p-2">
        <h1 className="text-4xl font-bold">
          La oss <span className="text-cyan-400">snakke</span>
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Enten du ønsker en ny nettside, en app eller å styrke din synlighet på
          nett, er jeg her for å hjelpe. Fyll ut skjemaet eller bruk alternativ
          kontakt nedenfor.
        </p>
      </div>

      <div className="grid grid-cols-1 w-full p-5 md:w-full lg:w-fit gap-12">
        {/* Form Column */}
        <div>
          <KontaktForm />
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
                <strong className="inline-block w-24">E-post:</strong>
                <a
                  href="mailto:hei@kristiansenutvikling.no"
                  className="underline hover:text-cyan-300"
                >
                  hei@kristiansenutvikling.no
                </a>
              </li>
              <li>
                <strong className="inline-block w-24">Telefon:</strong>
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
              Hverdager: 09:00 - 21:00
              <br />
              Helg: 10:00 - 18:00
              <br />
              (Stengt hvert døgn: 21:00 - 09:00)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
