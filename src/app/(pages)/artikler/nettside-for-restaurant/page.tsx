import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";
import ArticleCta from "../ArticleCta";

export const metadata: Metadata = {
  title: "Nettside for restaurant: slik får du flere bookinger (2026) | Kristiansen Utvikling",
  description:
    "De fleste restaurantnettsider er unødvendig dårlige. Her er hva din restaurant faktisk trenger på nett — og de konkrete grepene som gir deg flere bordbestillinger.",
  keywords: [
    "nettside restaurant",
    "restaurant nettside Norge",
    "flere bookinger restaurant",
    "restaurant SEO",
    "online booking restaurant",
    "restaurant nettside Oslo",
  ],
  alternates: {
    canonical: "https://kristiansenutvikling.no/artikler/nettside-for-restaurant",
  },
  openGraph: {
    title: "Nettside for restaurant: slik får du flere bookinger",
    description:
      "De fleste restaurantnettsider er unødvendig dårlige. Her er hva din restaurant faktisk trenger på nett.",
    url: "https://kristiansenutvikling.no/artikler/nettside-for-restaurant",
    siteName: "Kristiansen Utvikling",
    images: [{ url: "https://kristiansenutvikling.no/images/openGraph.png", width: 1200, height: 630 }],
    locale: "nb_NO",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Restaurantbransjen"
      date="20. feb 2026"
      readTime="6 min"
      title="Nettside for restaurant: slik får du flere bookinger"
    >
      <p>
        Restaurantnettsider er i en særegen kategori av «vi har gjort alt feil, men vi vet ikke
        hvorfor det ikke fungerer». Menyen er en PDF fra 2019. Bilder fra da iPhone 6 var ny.
        Og telefonnummeret — som er det eneste man egentlig vil ha — gjemmer seg tre klikk inne
        på en kontaktside.
      </p>
      <p>
        Du trenger ikke en fancy nettside. Du trenger en som faktisk gjør jobben den er der for å
        gjøre: å omdanne nysgjerrige besøkende til bookede bord.
      </p>

      <h2>Hva gjestene dine googler</h2>
      <p>
        Søkemønsteret er ganske forutsigbart. Noen googler:
      </p>
      <ul>
        <li>«restaurant [bydel] Oslo» — de vil spise ute og vet ikke hvem de velger ennå</li>
        <li>«beste italienske restaurant Oslo» — de har bestemt seg for type, leter etter sted</li>
        <li>restaurantens navn direkte — de har hørt om deg og vil vite mer</li>
      </ul>
      <p>
        Nettsidens jobb er å ta imot alle tre, gi dem det de trenger på 10 sekunder, og gjøre det
        lett å booke. Ikke å imponere dem med animasjoner. Ikke å fortelle dem hele historien om
        grunnleggeren. Gi dem meny, bilder og en knapp.
      </p>

      <h2>De 5 tingene enhver restaurantnettside må ha</h2>

      <h3>1. Online booking — ikke bare et telefonnummer</h3>
      <p>
        Å ringe for å booke bord er 2009. Mange — spesielt de under 40 — vil ikke ringe. De vil
        booke online, nå, uten å snakke med noen. Integrasjoner som Bokun, EasyTable eller
        Tablein tar noen timer å sette opp og gir deg bookinger 24/7 — også når kjøkkenet er stengt.
      </p>
      <p>
        Bonuseffekt: du frigjør ansatte fra å svare på telefonen, og du får automatiske
        påminnelser som reduserer no-shows.
      </p>

      <h3>2. Meny som faktisk er lesbar (ikke en PDF)</h3>
      <p>
        PDF-meny er den verste opplevelsen du kan gi en mobilbruker. Den er ulesbar, den scaler
        ikke, og den er null verdt for SEO. Skriv menyen som vanlig tekst på siden. Google
        indekserer den, og kundene kan lese den på mobil uten å knipe øynene.
      </p>
      <p>
        «Men vi oppdaterer menyen hele tiden...» — et enkelt CMS lar deg endre tekst på sekunder.
        Det er ikke et argument for PDF lenger.
      </p>

      <h3>3. Bilder — ordentlige</h3>
      <p>
        Dårlige matbilder er verre enn ingen bilder. Grynete, dårlig belyst, tatt med telefonen
        under strip-belysning på kjøkkenet — det selger ikke mat. Det gjør faktisk det motsatte.
      </p>
      <p>
        Invester i én time med en matfotograf. Det koster 2 000–5 000 kr og er sannsynligvis
        den beste markedsføringsinvesteringen du gjør i år. Én god bildeserie bruker du overalt:
        nettsiden, Instagram, Google Business.
      </p>

      <h3>4. Åpningstider og adresse — synlig uten å lete</h3>
      <p>
        Dette høres banalt ut. Men gå inn på fem tilfeldige restaurantnettsider og tell
        hvor mange klikk det tar å finne telefonnummeret. Åpningstider og adresse skal stå
        på forsiden, i footeren, og på kontaktsiden. Alle tre steder. Alltid oppdatert.
      </p>

      <h3>5. Google-anmeldelser vist på siden</h3>
      <p>
        Et utvalg av gode Google-anmeldelser på nettsiden — med navn og dato — bygger tillit
        umiddelbart. Folk stoler på andres meninger mer enn din egen markedsføring. Det er surt,
        men det er sant. Vis dem frem.
      </p>

      <ArticleCta />

      <h2>Google Business for restauranter: bruk det skikkelig</h2>
      <p>
        Google Business er spesielt kraftig for restauranter. Her er hva du bør gjøre:
      </p>
      <ul>
        <li><strong>Last opp menyen direkte</strong> — Google viser den i søkeresultatet</li>
        <li><strong>Last opp bilder jevnlig</strong> — innlegg med bilder rangerer bedre</li>
        <li><strong>Svar på alle anmeldelser</strong> — også de dårlige, og spesielt de dårlige</li>
        <li><strong>Aktiver «Reserver bord»-knappen</strong> hvis booking-systemet ditt støtter det</li>
        <li><strong>Oppdater åpningstider før høytider</strong> — feil åpningstider julaften er ikke morsomt</li>
      </ul>

      <h2>Hva du bør rangere for på Google</h2>
      <p>
        Lokal SEO for restauranter handler om tre ting: bransje, type mat og geografi. Kombiner
        disse i innholdet ditt:
      </p>
      <ul>
        <li>«[Type mat]-restaurant i [bydel]» — f.eks. «asiatisk restaurant på Grünerløkka»</li>
        <li>«[Type middag] Oslo» — f.eks. «romantisk middag Oslo», «familiemiddag Majorstuen»</li>
        <li>«takeaway [bydel]» hvis du tilbyr det</li>
      </ul>
      <p>
        Du trenger ikke stuffe disse frasene overalt. Skriv naturlig, inkluder geografien, og la
        Google gjøre resten.
      </p>

      <h2>Oppsummert: hva gjør du i dag?</h2>
      <p>
        Hvis du ikke har gjort det: sett opp Google Business Profile og legg inn en skikkelig
        oppdatert meny, bilder og riktige åpningstider. Det tar en ettermiddag og koster ingenting.
      </p>
      <p>
        Neste steg: bestill en time med en matfotograf og integrer et online booking-system.
        Disse to grepene alene kan gi merkbart flere reservasjoner innen de første ukene.
      </p>
      <p>
        Trenger du hjelp til å sette opp en nettside som faktisk konverterer? Da vet du
        hvor du finner meg.
      </p>
    </ArticleLayout>
  );
}
