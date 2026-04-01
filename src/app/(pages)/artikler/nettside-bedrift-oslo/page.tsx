import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";
import ArticleCta from "../ArticleCta";

export const metadata: Metadata = {
  title: "Nettside for bedrift i Oslo – hva bør du velge? | Kristiansen Utvikling",
  description:
    "Hva trenger en Oslo-bedrift egentlig på nett? Lokal SEO, plattformvalg og konkrete tips til å bli funnet — og valgt — fremfor konkurrenten i nærheten.",
  keywords: [
    "nettside bedrift Oslo",
    "webutvikling Oslo",
    "lokal SEO Oslo",
    "nettside liten bedrift",
    "Google synlighet Oslo",
    "frilansutvikler Oslo",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/artikler/nettside-bedrift-oslo",
  },
  openGraph: {
    title: "Nettside for bedrift i Oslo – hva bør du velge?",
    description:
      "Hva trenger en Oslo-bedrift egentlig på nett? Lokal SEO, plattformvalg og tips til å bli funnet fremfor konkurrenten.",
    url: "https://kristiansenutvikling.no/artikler/nettside-bedrift-oslo",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "nb_NO",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Lokal SEO"
      date="3. feb 2026"
      readTime="7 min"
      title="Nettside for bedrift i Oslo – hva bør du velge?"
    >
      <p>
        Oslo er ikke et sted å ha en halvferdig nettside. Konkurransen er hard, kundene er kresne,
        og alternativene er ett Google-søk unna. Men det betyr ikke at du trenger å bruke
        en halv million — det betyr at du trenger å gjøre de riktige tingene.
      </p>
      <p>
        Her er hva som faktisk fungerer for Oslo-bedrifter som vil synes på nett og konvertere
        besøkende til betalende kunder.
      </p>

      <h2>Hva kundene dine faktisk gjør</h2>
      <p>
        La oss starte med virkeligheten. Når noen trenger en rørlegger, frisør, regnskapsfører
        eller interiørdesigner i Oslo, gjør de én ting: de googler det. Ikke «Tor Rørlegger AS» —
        de kjenner ikke til deg ennå. De googler «rørlegger Majorstuen» eller «regnskapsfører Oslo
        sentrum».
      </p>
      <p>
        Det betyr at spørsmålet ikke er «har vi en nettside?» — det er «finner folk oss
        når de leter etter det vi tilbyr?» Det er en viktig forskjell.
      </p>

      <h2>Google Business Profile — gratis og undervurdert</h2>
      <p>
        Før vi engang snakker om nettside: har du satt opp Google Business Profile? Det er
        gratis, tar 20 minutter, og det er det første som dukker opp når noen søker på din
        bransje i ditt område.
      </p>
      <p>
        Med Google Business får du:
      </p>
      <ul>
        <li>Synlighet på Google Maps — essensielt for lokale søk</li>
        <li>Visning av åpningstider, telefonnummer og adresse direkte i søkeresultatet</li>
        <li>Mulighet for kundeanmeldelser (mer om det straks)</li>
        <li>Bilder av bedriften din rett i søket</li>
      </ul>
      <p>
        Hvis du ikke har gjort dette — gjør det i dag, ikke i morgen. Det er den enkeltgrepet
        med best ROI du kan gjøre for lokal synlighet.
      </p>
      <p>
        Og når det er oppe: <strong>jobb aktivt for å få 3–5 anmeldelser</strong> fra fornøyde
        kunder. Be dem direkte — de fleste sier ja når du spør. Anmeldelser trumfer nesten
        alt annet i lokalt søk.
      </p>

      <h2>Hva slags nettside trenger du egentlig?</h2>
      <p>
        For de fleste Oslo-bedrifter er svaret enklere enn de tror. Du trenger ikke
        en spektakulær webapplikasjon. Du trenger en nettside som:
      </p>
      <ul>
        <li>Laster raskt (under 2 sekunder)</li>
        <li>Ser profesjonell ut på mobil</li>
        <li>Forteller tydelig hva du gjør og hvem du gjør det for</li>
        <li>Gjør det enkelt å ta kontakt</li>
        <li>Er optimalisert for de søkene kundene dine faktisk gjør</li>
      </ul>
      <p>
        Det siste punktet er lokal SEO — og det er der mange bedrifter mister potensiell
        omsetning.
      </p>

      <h2>Lokal SEO: de tre viktigste grepene</h2>

      <h3>1. Bruk stedsangivelse i teksten</h3>
      <p>
        Skriv «vi er rørleggere i Frogner og på Majorstuen» — ikke bare «vi er rørleggere».
        Google kobler innholdet ditt til geografien du nevner. Jo mer spesifikt og naturlig
        du skriver om der du opererer, jo bedre er det.
      </p>

      <h3>2. Sørg for konsistens</h3>
      <p>
        Adressen din skal stå likt på nettsiden, Google Business og alle kataloger du er
        oppført i. «Karl Johans gate 12» og «Karl Johans gt. 12» er ikke det samme for Google.
        Dette kalles NAP-konsistens (Name, Address, Phone) — og det påvirker lokale rangeringer mer
        enn de fleste vet.
      </p>

      <h3>3. Innhold om nærmiljøet</h3>
      <p>
        En enkel side med «våre tjenester i Oslo» og omtale av de bydelene du opererer i,
        gir deg ekstra synlighet for lokale søk. Det trenger ikke være mye — 200 ord med
        relevant geografisk innhold gjør en forskjell.
      </p>

      <ArticleCta />

      <h2>Valg av plattform</h2>
      <p>
        Hva bør du bygge nettsiden din på? Her er en ærlig vurdering:
      </p>

      <h3>WordPress — trygt valg for de fleste</h3>
      <p>
        WordPress driver rundt 43 % av internett. Det er et modent, fleksibelt system med
        et stort økosystem av plugins og temaer. Du kan oppdatere innhold selv, det er billig
        å hoste, og det er enkelt å finne noen til å hjelpe deg senere. Ulempen er at det
        krever vedlikehold og kan bli tregt om det ikke er satt opp riktig.
      </p>

      <h3>Next.js / React — for de med ambisjoner</h3>
      <p>
        Skreddersydd utvikling med Next.js gir deg full kontroll, ypperlig ytelse og bedre
        SEO «out of the box». Passer for bedrifter som vil ha noe unikt og som ser på
        nettsiden som en strategisk investering. Krever en utvikler for oppdateringer.
      </p>

      <h3>Wix — for de som vil gjøre det selv</h3>
      <p>
        Wix fungerer fint for veldig enkle sider, og du kan gjøre det meste selv. Men begrensningene
        viser seg raskt hvis du vokser, og SEO-mulighetene er svakere enn de to andre alternativene.
        Kan være riktig for en liten, lokal bedrift med et stramt budsjett og enkle behov.
      </p>

      <h2>Hva gjør konkurrentene dine — og hva gjør de ikke?</h2>
      <p>
        Googl din bransje + «Oslo» akkurat nå. Se på de 5 første resultatene. Sjekk:
      </p>
      <ul>
        <li>Laster siden raskt? (Test med Google PageSpeed Insights)</li>
        <li>Er siden mobilvennlig?</li>
        <li>Er det enkelt å forstå hva de tilbyr og komme i kontakt?</li>
        <li>Har de anmeldelser?</li>
      </ul>
      <p>
        Det du ser er sannsynligvis en blanding av rimelig bra og overraskende dårlig. Det er
        der muligheten din ligger. En nettside som gjør disse tingene riktig, skiller seg ut —
        selv i et konkurransepreget Oslo-marked.
      </p>
    </ArticleLayout>
  );
}
