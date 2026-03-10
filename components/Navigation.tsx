'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/meniu', label: 'Meniu' },
  { href: '/despre', label: 'Despre noi' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Navigare principală"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-[0_2px_24px_rgba(53,21,7,0.08)]'
            : 'bg-cream/80 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="group flex flex-col leading-none" aria-label="Krema – pagina principală">
            <span className="font-playfair text-[1.6rem] font-bold tracking-[0.2em] text-gold group-hover:text-amber transition-colors duration-300">
              KREMA
            </span>
            <span className="font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-chocolate/45 group-hover:text-gold/80 transition-colors duration-300">
              Artisan Dessert House
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-10" role="list">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="listitem"
                className={`nav-link font-raleway text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-amber active'
                    : 'text-chocolate/70 hover:text-amber'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <Link
            href="/contact"
            className="hidden md:inline-block border border-gold/70 text-gold font-raleway text-[0.65rem] tracking-[0.3em] uppercase px-6 py-3 hover:bg-gold hover:text-white transition-all duration-300 font-semibold"
          >
            Comandă
          </Link>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 z-10"
            aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-[1.5px] bg-chocolate origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-chocolate transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-chocolate origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #b47c3b 1px, transparent 0)', backgroundSize: '36px 36px' }}
          aria-hidden="true"
        />

        <nav className="relative z-10 flex flex-col items-center gap-8" aria-label="Meniu mobil">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-playfair text-4xl font-bold transition-all duration-300 ${
                pathname === link.href ? 'text-gold' : 'text-chocolate hover:text-amber'
              }`}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'none' : 'translateY(16px)',
                transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-6 btn-gold"
            style={{
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : '0ms',
              transition: 'opacity 0.3s ease, background-color 0.3s ease',
            }}
          >
            Comandă acum
          </Link>
        </nav>

        <div
          className="absolute bottom-12 flex gap-8 text-chocolate/35 font-raleway text-xs tracking-widest uppercase"
          style={{
            opacity: menuOpen ? 1 : 0,
            transitionDelay: menuOpen ? '500ms' : '0ms',
            transition: 'opacity 0.4s ease',
          }}
        >
          <a href="tel:+40747527069" className="hover:text-amber transition-colors">0747 527 069</a>
          <a
            href="https://www.facebook.com/profile.php?id=61586616428582"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
}
