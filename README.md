# Krema – Artisan Dessert House · Website

Site web complet generat pentru cofetăria artizanală **Krema** din Popești-Leordeni.

---

## Stack tehnic

| Tehnologie | Rol |
|---|---|
| **Next.js 14** (App Router) | Framework principal – SSR, routing, SEO |
| **TypeScript** | Tipizare strictă |
| **Tailwind CSS 3** | Stilizare utility-first cu paletă custom |
| **Framer Motion** | Animații declarative (disponibil în package.json) |
| **Google Fonts** | Playfair Display · Cormorant Garamond · Raleway |

**App Router** – ales pentru Server Components nativ, metadata API per-pagină, layout-uri nested și performanță optimă prin streaming.

---

## Structura proiectului

```
krema-artisan/
├── app/
│   ├── globals.css          # Variabile CSS, animații, clase utilitare
│   ├── layout.tsx           # Root layout + fonturi + metadata globală
│   ├── page.tsx             # / – Pagina principală (Home)
│   ├── despre/
│   │   └── page.tsx         # /despre – Povestea noastră
│   ├── meniu/
│   │   └── page.tsx         # /meniu – Catalog produse cu filtru
│   ├── galerie/
│   │   └── page.tsx         # /galerie – Grid foto asimetric
│   └── contact/
│       └── page.tsx         # /contact – Formular + Google Maps
├── components/
│   ├── Navigation.tsx       # Navigare fixă cu scroll effect + mobile overlay
│   ├── Footer.tsx           # Footer cu coloane de contact + social
│   ├── DrippingDivider.tsx  # SVG divider efect „caramel care picură"
│   ├── ProductCard.tsx      # Card produs cu hover cinematografic
│   ├── TestimonialCard.tsx  # Card recenzie client
│   ├── SectionReveal.tsx    # Wrapper IntersectionObserver scroll reveal
│   ├── MenuFilter.tsx       # Filtru categorii meniu (client component)
│   └── ContactForm.tsx      # Formular de contact controlat (client component)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── .eslintrc.json
```

---

## Paleta de culori

| Variabilă | Hex | Utilizare |
|---|---|---|
| `gold` | `#c58e3f` | Accent primar, borduri, highlight-uri |
| `chocolate` | `#351507` | Fundal secțiuni dark, text pe light |
| `brown` | `#b47c3b` | Elemente secundare |
| `cream` | `#f8dfb2` | Fundal secțiuni light, text pe dark |
| `amber` | `#aa5f0c` | CTA-uri, accente importante |

---

## ▶ COMENZI – COPY-PASTE READY

### 1. Instalare dependențe
```bash
cd krema-artisan
npm install
```

### 2. Pornire server dev (http://localhost:3000)
```bash
npm run dev
```

### 3. Build producție
```bash
npm run build
```

### 4. Pornire server producție (după build)
```bash
npm start
```

### 5. Verificare linting
```bash
npm run lint
```

---

## ✅ TO-DO LIST – Verificare post-generare

### Setup inițial
- [ ] `npm install` rulat cu succes (0 erori critice)
- [ ] `npm run dev` pornit, site accesibil la `http://localhost:3000`
- [ ] Toate cele 5 pagini se încarcă fără erori:
  - [ ] `/` – Home
  - [ ] `/meniu` – Meniu
  - [ ] `/despre` – Despre noi
  - [ ] `/galerie` – Galerie
  - [ ] `/contact` – Contact

### Visual & UX
- [ ] Navigația funcționează corect (fiecare link deschide pagina în același tab)
- [ ] Navigația devine solidă la scroll (efect transparent → opac)
- [ ] Meniu mobil se deschide/închide corect
- [ ] Efectul dripping (caramel SVG) vizibil între secțiuni
- [ ] Animațiile de scroll reveal funcționează (elementele apar la scroll)
- [ ] Filtrul de categorii din pagina `/meniu` funcționează
- [ ] Formularul de contact trimite și afișează mesajul de confirmare

### Imagini
- [ ] Imaginile Unsplash se încarcă (necesită conexiune internet)
- [ ] **ACȚIUNE OBLIGATORIE**: Înlocuiește imaginile Unsplash cu fotografii reale ale produselor Krema
  - Adaugă imaginile reale în `/public/images/`
  - Actualizează URL-urile în `components/MenuFilter.tsx`, `app/page.tsx`, `app/galerie/page.tsx`

### SEO & Accesibilitate
- [ ] Titlul paginii în tab browser este corect pe fiecare pagină
- [ ] Meta description setată corect (verifică cu DevTools > Application > Manifest sau un SEO checker)
- [ ] Toate imaginile au `alt` text descriptiv
- [ ] Navigația are `aria-label`
- [ ] Contrastul culorilor este WCAG AA compliant (cream pe chocolate ≈ 10:1)

### Producție (înainte de deployment)
- [ ] Actualizează `metadataBase` în `app/layout.tsx` cu domeniul real
- [ ] Verifică `npm run build` – 0 erori TypeScript
- [ ] Adaugă un favicon real în `/public/favicon.ico`
- [ ] Configurează formularul de contact pentru a trimite email real (EmailJS / Resend / Nodemailer)
- [ ] Setează variabile de mediu dacă folosești un email service (`.env.local`)
- [ ] Testează pe mobile (Chrome DevTools → responsive mode)
- [ ] Testează pe Safari / Firefox

### Optional – îmbunătățiri viitoare
- [ ] Adaugă un sistem CMS (Sanity / Contentful) pentru editare ușoară a meniurilor
- [ ] Implementează un sistem de rezervări / comenzi online
- [ ] Adaugă Google Analytics sau Plausible pentru tracking
- [ ] Integrare WhatsApp Business button fix pe mobile
- [ ] Pagini de eroare custom: `app/not-found.tsx` și `app/error.tsx`
- [ ] Optimizare Core Web Vitals cu `next/image` priority pe hero

---

## Date de contact incluse în site

| | |
|---|---|
| **Telefon** | 0747 527 069 |
| **Adresă** | Str. Biruinței 7, Popești-Leordeni, 077160, Romania |
| **Facebook** | [Krema Artisan Dessert House](https://www.facebook.com/profile.php?id=61586616428582) |
| **Google Maps** | Embed integrat în pagina Contact |
