import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";
import ArticleCta from "../ArticleCta";

export const metadata: Metadata = {
  title: "Hvorfor får nettsiden din ingen kunder? 5 vanlige årsaker | Kristiansen Utvikling",
  description:
    "Du har en nettside, men telefonen ringer ikke. Her er de 5 vanligste grunnene til at nettsider ikke konverterer — og hva du konkret kan gjøre med det i dag.",
  keywords: [
    "nettside ingen kunder",
    "nettside konverterer ikke",
    "nettside fungerer ikke",
    "hvorfor rangerer ikke nettsiden",
    "nettside tips Norge",
    "øke konvertering nettside",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/artikler/hvorfor-nettsiden-ingen-kunder",
  },
  openGraph: {
    title: "Hvorfor får nettsiden din ingen kunder? 5 vanlige årsaker",
    description:
      "Du har en nettside, men telefonen ringer ikke. Her er de 5 vanligste grunnene — og hva du kan gjøre med dem.",
    url: "https://kristiansenutvikling.no/artikler/hvorfor-nettsiden-ingen-kunder",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "nb_NO",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Konvertering"
      date="10. mar 2026"
      readTime="7 min"
      title="Hvorfor får nettsiden din ingen kunder?"
    >
      <p>
        Du har en nettside. Du betalte for den. Den er der ute på internett. Og så... ingenting.
        Ingen henvendelser, ingen nye kunder, telefonen ringer like stille som alltid.
      </p>
      <p>
        Du er ikke alene. Jeg ser det hele tiden: bedrifter som har investert penger i en
        nettside, men får ingenting ut av den. Ikke fordi de er uheldige — men fordi de fleste
        nettsider bryter en eller flere av de fem grunnleggende reglene under. La oss gå gjennom dem.
      </p>

      <h2>Årsak 1: Du er ikke synlig på Google</h2>
      <p>
        Den vanligste årsaken til at en nettside ikke gir kunder er den mest åpenbare: ingen
        finner den. Ikke fordi siden ikke eksisterer — men fordi den ikke dukker opp når folk
        søker etter det du tilbyr.
      </p>
      <p>
        SEO (søkemotoroptimalisering) er ikke svartmagi. Det handler i stor grad om tre ting:
      </p>
      <ul>
        <li><strong>Innhold</strong> — har du tekst på siden som faktisk svarer på spørsmålene kundene dine stiller?</li>
        <li><strong>Teknisk oppsett</strong> — er siden bygget slik at Google kan lese og forstå den?</li>
        <li><strong>Autoritet</strong> — linker andre nettsider til deg? (Google ser på det som en stemme av tillit)</li>
      </ul>
      <p>
        Sjekk i dag: gå inn på Google Search Console (gratis verktøy fra Google) og se hvilke
        søkeord siden din faktisk rangerer for. Er det søkeordene kundene dine bruker — eller
        er det bare ditt bedriftsnavn?
      </p>

      <h2>Årsak 2: Siden er for treg</h2>
      <p>
        Google har et navn på det de kaller «Core Web Vitals» — mål for brukeropplevelse som
        direkte påvirker søkerangeringen din. Et av de viktigste er hastighet.
      </p>
      <p>
        Forskning viser at <strong>53 % av mobilbrukere forlater en side som tar mer enn 3
        sekunder å laste</strong>. Og for hvert sekund ekstra forsinkelse faller konverteringsraten
        med rundt 7 %. Det er ikke marginalt — det er et hull i budsjettet.
      </p>
      <p>
        Test siden din nå: gå til <strong>PageSpeed Insights</strong> (pagespeed.web.dev),
        skriv inn URL-en din og se scoren. Under 70 på mobil er et problem. Under 50 er et
        alvorlig problem.
      </p>
      <p>
        Vanlige syndebukker er ukomprimerte bilder, for mye JavaScript og en treg webhost.
        Alle lar seg fikse.
      </p>

      <h2>Årsak 3: Det er uklart hva du vil at folk skal gjøre</h2>
      <p>
        Gå inn på forsiden din akkurat nå og still deg selv dette spørsmålet: hva er
        det <em>ene</em> du vil at en ny besøkende skal gjøre?
      </p>
      <p>
        Ringe deg? Fylle ut et skjema? Booke et møte? Bestille?
      </p>
      <p>
        Hvis svaret er «ehm, egentlig litt av alt», er det et problem. En nettside med for
        mange call-to-actions (CTA) er som en butikk der alle ansatte roper på deg samtidig.
        Folk blir forvirret — og de gjør ingenting.
      </p>
      <blockquote>
        En forside med én tydelig CTA konverterer nesten alltid bedre enn en forside med fem.
      </blockquote>
      <p>
        Velg én primærhandling. Gjør den synlig, gjør den enkel, og gjenta den — ikke bare
        øverst, men også midtveis og nederst på siden.
      </p>

      <ArticleCta />

      <h2>Årsak 4: Siden ser utdatert ut</h2>
      <p>
        Det er surt å si det, men utseende betyr noe. En besøkende bestemmer på under 5 sekunder
        om de stoler nok på nettsiden til å bli. Ser siden ut som den ble laget i 2014, signaliserer
        den ett av to: bedriften er ute av drift, eller bedriften bryr seg ikke nok om inntrykkene
        de gir.
      </p>
      <p>
        Du trenger ikke en prisbelønnet designside. Du trenger en side som ser <em>profesjonell</em>
        ut og signaliserer at du er en seriøs aktør. Det betyr:
      </p>
      <ul>
        <li>Konsistent fargebruk og typografi</li>
        <li>Bilder av faktisk kvalitet — ikke stockfoto med mannen i dress som håndtrykker</li>
        <li>Nok luft mellom elementene — ikke alt presset inn på én side</li>
        <li>Siden fungerer like bra på mobil som på desktop</li>
      </ul>
      <p>
        <strong>Mobiloptimalisering er ikke valgfritt.</strong> Over 70 % av norske nettsidebrukere
        surfer på mobil. Hvis siden din krever zooming og sideways-scrolling, mister du dem.
      </p>

      <h2>Årsak 5: Folk stoler ikke på deg</h2>
      <p>
        Dette er den mest undervurderte årsaken. Folk kjøper ikke fra noen de ikke stoler på.
        Og tillit bygges ikke av seg selv — du må aktivt vise at du er til å stole på.
      </p>
      <p>
        Hva bygger tillit på en nettside?
      </p>
      <ul>
        <li><strong>Kundehistorier og anmeldelser</strong> — selv 2–3 konkrete sitater fra fornøyde kunder gjør en stor forskjell</li>
        <li><strong>Bilder av deg eller teamet ditt</strong> — ansikter bygger tillit, ikoner og vektorgrafikk gjør det ikke</li>
        <li><strong>Eksempler på tidligere arbeid</strong> — vis hva du har levert, ikke bare hva du lover</li>
        <li><strong>Orgnummer og fysisk adresse</strong> — signaliserer at du er en reell, registrert bedrift</li>
        <li><strong>SSL-sertifikat (HTTPS)</strong> — siden din skal ha hengelås i nettleseren. Uten det flagger mange nettlesere siden som «ikke sikker»</li>
      </ul>
      <p>
        Du trenger ikke alle disse. Men jo flere du har på plass, jo lettere blir beslutningen for
        den som vurderer å ta kontakt.
      </p>

      <h2>Hva gjør du nå?</h2>
      <p>
        Start med en ærlig gjennomgang av din egen nettside. Vis den til noen som ikke kjenner
        bedriften din fra før og still dem disse spørsmålene: Hva gjør denne bedriften? Hvem er
        den for? Hva skal du gjøre nå? Hvis de svarer raskt og riktig — bra. Hvis de nøler —
        der har du svaret.
      </p>
      <p>
        Vil du heller at jeg ser på det for deg? Jeg gjør en gratis gjennomgang og forteller
        deg konkret hva som bremser nettsiden din. Ta kontakt.
      </p>
    </ArticleLayout>
  );
}
