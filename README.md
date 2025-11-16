# Andrić Law – Next.js website

Potpuna implementacija modernog, SEO optimizovanog sajta za advokatsku kancelariju Andrić Law. Projekat koristi Next.js 14 (App Router) sa Tailwind CSS-om, višestrukim jezicima, LawViewer modulom i blog sekcijom.

## Ključne funkcionalnosti

- **SSR/SSG**: sve stranice se statički renderuju ili oslanjaju na ISR radi optimalnog performansa.
- **Višejezična navigacija**: ugrađen `bs` i `en` lokal uz jednostavan preklop jezika.
- **LawViewer**: pretraga propisa i detaljne stranice sa generisanjem PDF dokumenata putem API rute `/api/generate-pdf`.
- **Blog/News**: članci pisani u Markdown fajlovima (`content/posts`) sa automatskom listom i pojedinačnim stranicama.
- **Kontakt centar**: forma koja koristi API rutu `/api/contact` (Nodemailer) + Google mapa i CTA elementi.
- **SEO**: strukturirani podaci (JSON-LD), custom sitemap i robots, meta tagovi i optimizovane rute.

## Pokretanje projekta

```bash
npm install
npm run dev
```

Posjetite `http://localhost:3000` – middleware automatski preusmjerava na podrazumijevani lokal (`/bs`).

Za produkciju:

```bash
npm run build
npm start
```

## Okruženje

Za slanje emailova dodajte sljedeće varijable (npr. u `.env.local` ili Vercel dashboardu):

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=korisnik
SMTP_PASS=lozinka
CONTACT_TO=info@andriclaw.com
```

Bez ovih vrijednosti, API će samo logovati zahtjeve (korisno za razvoj).

## Struktura sadržaja

- `content/posts` – Markdown članci sa frontmatter metapodacima.
- `lib/laws.ts` – primjer propisa koji se prikazuju u LawViewer-u.
- `components/` – UI blokovi: navigacija, hero, LawViewer pretraga, CTA, kontakt forma itd.

## Deploy na Vercel

Repozitorij je spreman za direktan deploy na Vercel. Nema specifičnih serverskih zavisnosti, a PDF generacija se izvršava u serverless okruženju (PDFKit). Pobrinite se da podesite `NEXT_PUBLIC_SITE_URL` (ako je potrebno) i SMTP varijable u Vercel konfiguraciji.
