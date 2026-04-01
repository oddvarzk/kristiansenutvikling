import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";
import ArticleCta from "../ArticleCta";

export const metadata: Metadata = {
  title: "Hva koster en nettside i Norge? Priser og prisliste (2026) | Kristiansen Utvikling",
  description:
    "Ærlig og konkret prisoversikt for nettsider i Norge 2026. Hva koster en landingsside, bedriftsnettside, nettbutikk og webapp? Finn ut hva du bør betale — og hva som er for dyrt.",
  keywords: [
    "hva koster en nettside",
    "nettside pris Norge",
    "nettside pris 2026",
    "priser webutvikling",
    "nettside kostnad oslo",
    "nettside lage pris",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/artikler/hva-koster-en-nettside",
  },
  openGraph: {
    title: "Hva koster en nettside i Norge? Priser og prisliste (2026)",
    description:
      "Ærlig og konkret prisoversikt for nettsider i Norge 2026. Med faktiske tall — ikke «ta kontakt for pris».",
    url: "https://kristiansenutvikling.no/artikler/hva-koster-en-nettside",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "nb_NO",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Pris & budsjett"
      date="14. jan 2026"
      readTime="6 min"
      title="Hva koster en nettside i Norge? (2026)"
    >
      <p>
        «Det kommer an på.» Det er svaret du får fra 90 % av webbyrå når du spør om pris. Og teknisk
        sett er det sant — men det er også en fin måte å unngå å si noe som helst på.
      </p>
      <p>
        Denne artikkelen gir deg faktiske tall. Ikke garantier, ikke bindende tilbud — men et
        realistisk bilde av hva en nettside koster i Norge i 2026, slik at du vet hva du går inn i.
      </p>

      <h2>De tre spørsmålene som avgjør prisen</h2>
      <p>Før vi ser på tall: prisen på en nettside avhenger alltid av tre ting.</p>
      <ul>
        <li><strong>Hva trenger du?</strong> En enkel landingsside er noe helt annet enn en nettbutikk med 500 produkter.</li>
        <li><strong>Hvem lager den?</strong> Frilanser, lite byrå eller stort byrå gir svært ulike priser — og svært ulik oppfølging.</li>
        <li><strong>Hva er plattformen?</strong> WordPress, custom-kode, Wix eller Shopify koster forskjellig i tid og penger.</li>
      </ul>
      <p>
        Med det som bakteppe, her er hva du realistisk sett bør forvente å betale.
      </p>

      <h2>Prisnivåer i Norge 2026</h2>

      <h3>Enkel landingsside / én-sider: 15 000 – 30 000 kr</h3>
      <p>
        En landingsside er én side med klart formål — typisk for å fange leads, promotere et produkt
        eller presentere deg selv. Den er rask å lage og enkel å vedlikeholde. Passer for nye
        bedrifter, kampanjer og håndverkere som bare trenger å vises på Google.
      </p>
      <p>
        Under 15 000 kr bør du stille spørsmål. Over 30 000 kr for en enkel én-sider bør du også
        stille spørsmål.
      </p>

      <h3>Standard bedriftsnettside (3–6 sider): 40 000 – 100 000 kr</h3>
      <p>
        Dette er den mest vanlige kategorien. Forside, om oss, tjenester, kontakt — kanskje en
        referanseside. Inkluderer gjerne CMS så du kan oppdatere innhold selv, mobiloptimalisering
        og grunnleggende SEO-oppsett.
      </p>
      <p>
        Variasjonen er stor her fordi «3 sider» kan bety radikalt forskjellige ting. En enkel
        WordPress-side med en mal koster 40 000 kr. En skreddersydd løsning med animasjoner,
        integrasjoner og redaksjonelt design koster 80–100 000 kr. Begge er «3 sider».
      </p>

      <h3>Nettbutikk (e-handel): 80 000 – 200 000 kr+</h3>
      <p>
        E-handel er komplekst. Du trenger produktkatalog, handlekurv, betalingsintegrasjon
        (Vipps, Klarna, kort), lagerstyring, frakt og mva-håndtering. Det er mange bevegelige
        deler, og det tar tid å sette opp riktig.
      </p>
      <p>
        Shopify-løsninger kan komme billigere ut, men da betaler du månedlige lisenser og
        transaksjonsgebyr. WooCommerce på WordPress gir mer kontroll, men krever mer vedlikehold.
        En skreddersydd løsning er dyrere, men skalerer bedre.
      </p>

      <h3>Skreddersydd webapplikasjon: 150 000 kr+</h3>
      <p>
        Booking-system, kundeportal, intern administrasjonsplattform — dette er
        applikasjoner med egendefinert logikk, brukerpålogging og databaseintegrasjoner.
        Her er prisene helt avhengige av scope, og «150 000 kr» er bare startstreken.
      </p>

      <ArticleCta />

      <h2>Billig nettside kan koste deg mer</h2>
      <p>
        La oss snakke om elefanten i rommet: du kan få laget en nettside for 5 000 kr — eller
        til og med gratis med en DIY-løsning. Og for noen er det akkurat riktig. Men her er
        hva det ofte betyr i praksis:
      </p>
      <ul>
        <li>Siden laster tregt — og treg = dårlig Google-rangering og frustrerte brukere</li>
        <li>Siden ser generisk ut — lik hundre andre nettsider, ingenting som skiller deg ut</li>
        <li>Du betaler utvikleren i timesprisen for feil de gjør — noe de aldri forteller deg</li>
        <li>SEO er ikke satt opp riktig fra starten, og det koster dobbelt å fikse etterpå</li>
        <li>Siden fungerer ikke på mobil slik den bør — og 70 % av norske brukere bruker mobil</li>
      </ul>
      <p>
        En nettside er ikke en kostnad. Den er en investering. En god nettside jobber for deg
        døgnet rundt. En dårlig nettside sender kundene dine videre til konkurrenten.
      </p>

      <h2>Hva inngår (og hva inngår ikke)</h2>
      <p>
        Vær alltid klar over hva som er inkludert i tilbudet. Spørsmål du bør stille:
      </p>
      <ul>
        <li>Er domene og hosting inkludert — og hva koster det etter første år?</li>
        <li>Er CMS (innholdssystem) inkludert så du kan oppdatere selv?</li>
        <li>Er SEO-oppsett (metadata, sitemap, Google Search Console) inkludert?</li>
        <li>Er SSL-sertifikat (HTTPS) inkludert?</li>
        <li>Hva koster endringer etter lansering?</li>
      </ul>
      <p>
        Mange tilbud ser billige ut, men er uten hosting, uten vedlikehold og uten support
        etter overlevering. Da er totalprisen en helt annen.
      </p>

      <h2>Vedlikehold og drift</h2>
      <p>
        En nettside er ikke «ferdig» etter at den er lansert. For WordPress-sider bør du
        regne med månedlige oppdateringer, sikkerhetsoppfølging og backup. En vedlikeholdsavtale
        koster typisk 1 000–3 000 kr/mnd og er verdt det for de fleste bedrifter.
      </p>
      <p>
        Alternativet er å ikke vedlikeholde — og risikere at siden hackes, krasjer eller
        rangerer dårligere fordi den kjører utdatert kode. Det har jeg sett skje alt for ofte.
      </p>

      <h2>Hva bør du gjøre nå?</h2>
      <p>
        Sett deg ned med et klart bilde av hva du trenger, hvem målgruppen din er og hva du
        vil at nettsiden skal oppnå. Jo tydeligere du er på det — jo bedre tilbud vil du få,
        og jo lettere er det å sammenligne epler med epler.
      </p>
      <p>
        Og hvis du vil ha et ærlig og konkret tilbud på din nettside, uten omveier — ta
        gjerne kontakt. Jeg svarer innen én arbeidsdag.
      </p>
    </ArticleLayout>
  );
}
