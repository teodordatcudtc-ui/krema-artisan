import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/meniu', label: 'Meniu' },
  { href: '/despre', label: 'Despre noi' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-gold/25" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16">
          {/* ── Brand block ── */}
          <div className="md:col-span-4">
            <Link href="/" className="group flex flex-col leading-none mb-6 w-fit">
              <span className="font-playfair text-3xl font-bold tracking-[0.2em] text-gold group-hover:text-amber transition-colors duration-300">
                KREMA
              </span>
              <span className="font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-chocolate/40 group-hover:text-gold/70 transition-colors duration-300">
                Artisan Dessert House
              </span>
            </Link>

            <p className="font-raleway text-sm text-chocolate/55 leading-relaxed mb-8 max-w-xs">
              Credem în calitate, creativitate și bucuria lucrurilor făcute manual. Fie că sărbătorești un moment important sau pur și simplu îți dorești un răsfăț dulce, suntem aici.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61586616428582"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pagina Facebook Krema"
                className="w-9 h-9 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="font-raleway text-[0.6rem] tracking-[0.35em] uppercase text-chocolate/35 mb-7">
              Pagini
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-raleway text-sm text-chocolate/55 hover:text-amber transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Contact ── */}
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="font-raleway text-[0.6rem] tracking-[0.35em] uppercase text-chocolate/35 mb-7">
              Contact
            </h3>
            <address className="not-italic space-y-5 font-raleway text-sm text-chocolate/55">
              <div>
                <p className="text-chocolate/30 text-[0.6rem] tracking-[0.3em] uppercase mb-1">Adresă</p>
                <p>Str. Biruinței 7</p>
                <p>Popești-Leordeni, 077160</p>
                <p>Romania</p>
              </div>
              <div>
                <p className="text-chocolate/30 text-[0.6rem] tracking-[0.3em] uppercase mb-1">Telefon</p>
                <a
                  href="tel:+40747527069"
                  className="hover:text-amber transition-colors duration-300"
                >
                  0747 527 069
                </a>
              </div>
              <div>
                <p className="text-chocolate/30 text-[0.6rem] tracking-[0.3em] uppercase mb-1">Program</p>
                <p>Mar–Vin: 09:00 – 19:00</p>
                <p>Sâm–Dum: 10:00 – 17:00</p>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="gold-line mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-raleway text-[0.65rem] text-chocolate/30">
            © {year} Krema – Artisan Dessert House. Toate drepturile rezervate.
          </p>
          <p className="font-raleway text-[0.65rem] text-chocolate/20">
            Popești-Leordeni, Romania
          </p>
        </div>
      </div>
    </footer>
  );
}
