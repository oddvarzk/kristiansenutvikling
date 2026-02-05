# Kristiansen Utvikling – Portfolio & Business Website

Offisiell nettside for **Kristiansen Utvikling** – brukt som kundeplattform (tjenester + kontakt) og som teknisk portefølje.

- **Live:** https://kristiansenutvikling.no/
- **Repo:** https://github.com/oddvarzk/kristiansenutvikling

---

## Teknologi

- **Next.js (App Router)** – kildekode under `src/app`
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- UI/anim: **styled-components**, **Framer Motion**, **lucide-react**, **react-icons**
- Deploy: **Vercel**
  - Redirects i `vercel.json` (www → non-www, `.com` → `.no`, fjerner `/index.html|php`)

---

## Funksjonalitet

- Sider for: hjem, tjenester, prosjekter, kontakt, artikler/blog, personvern
- **Språk (NO/EN)** via intern oversettelsesløsning:
  - `src/app/translations/*`
  - `src/app/hooks/useTranslations.ts`
  - `src/app/components/LanguageSwitcher.tsx`
- Kontakt-skjema med server-side håndtering (API route)
- SEO:
  - global metadata: `src/app/metadata.ts`
  - side-spesifikke metadata:
    - `src/app/(pages)/tjenester/metadata.ts`
    - `src/app/(pages)/artikler/metadata.ts`
  - `src/app/sitemap.ts`
  - `src/app/robots.txt/route.ts`

---

## Struktur (kort)

- `src/app` – routes, layouts, metadata og API-routes (App Router)
- `src/app/components` – gjenbrukbare UI-komponenter + layout (Header/Footer/Nav, cookie banner, språk-switch, osv.)
- `src/app/(pages)` – sider og side-spesifikke komponenter
- `src/app/api/contact/route.ts` – kontakt-endpoint (server) for e-postsending
- `public/` – statiske assets

---

## Kontakt / e-post (server-side)

Kontaktskjemaet sender data til en Next.js API route som sender e-post via SMTP (Nodemailer).

- API route: `src/app/api/contact/route.ts`
- SMTP credentials ligger i miljøvariabler og committes ikke.

---

## Lokalt oppsett

**Forutsetninger**
- Node.js

**Installer**
~~~bash
npm install
~~~

**Kjør lokalt**
~~~bash
npm run dev
~~~

**Build / prod**
~~~bash
npm run build
npm run start
~~~

**Lint**
~~~bash
npm run lint
~~~

---

## Miljøvariabler

Opprett `.env.local` lokalt (ikke commit). Bruk `.env.example` som mal.

---

## Status

Nettsiden itereres fortløpende. Design kan oppdateres gjennom Figma → implementasjon, men repoet reflekterer alltid produksjonsversjonen.
