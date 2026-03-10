import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Krema – Artisan Dessert House | Cofetărie Artizanală Popești-Leordeni',
  description:
    'Krema – cofetărie artizanală în Popești-Leordeni. Torturi, prăjituri și deserturi fine realizate manual din ingrediente premium.',
};

const featuredProducts = [
  { name: 'Tort Ciocolată & Zmeură', description: '', price: 'de la 200 RON', image: '/images/products/tort-ciocolata-zmeura.jpg', fallbackImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80', categoryDisplay: 'TORT', slug: 'tort-ciocolata-zmeura' },
  { name: 'Ecler cu Vanilie', description: '', price: '18 RON', image: '/images/products/ecler-vanilie.jpg', fallbackImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', slug: 'ecler-vanilie' },
  { name: 'Macarons Sezonieri', description: '', price: '12 RON / buc', image: '/images/products/macarons.jpg', fallbackImage: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80', categoryDisplay: 'DESERT FIN', slug: 'macarons' },
  { name: 'Tarte cu Fructe', description: '', price: '22 RON', image: '/images/products/tarte-fructe.jpg', fallbackImage: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', slug: 'tarte-fructe' },
  { name: 'Cheesecake New York', description: '', price: '25 RON', image: '/images/products/cheesecake.jpg', fallbackImage: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', slug: 'cheesecake' },
  { name: 'Trufle de Ciocolată', description: '', price: '10 RON / buc', image: '/images/products/trufle.jpg', fallbackImage: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&q=80', categoryDisplay: 'DESERT FIN', slug: 'trufle' },
  { name: 'Tort Tiramisu', description: '', price: 'de la 160 RON', image: '/images/products/tort-tiramisu.jpg', fallbackImage: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&q=80', categoryDisplay: 'TORT', slug: 'tort-tiramisu' },
];

const testimonials = [
  { name: 'Maria D.', text: 'Tortul de nuntă a fost magnific — vizual și la gust. Recomand.', rating: 5, initials: 'MD', occasion: 'Nuntă' },
  { name: 'Alexandru P.', text: 'Cele mai bune macarons pe care le-am gustat. Calitate autentică.', rating: 5, initials: 'AP', occasion: 'Client fidel' },
  { name: 'Cristina V.', text: 'Serviciu impecabil, livrare la timp. Tortul pentru botez a impresionat pe toată lumea.', rating: 5, initials: 'CV', occasion: 'Botez' },
];

export default function HomePage() {
  return (
    <>
      {/* ═════ HERO – doar titlu, descriere scurtă, butoane + imagine fundal ═════ */}
      <section className="relative min-h-[62vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden" aria-label="Hero">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 sm:pt-24">
          <div className="max-w-2xl">
            <h1
              className="font-playfair text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.95] text-white mb-6"
              style={{ textShadow: '0 14px 40px rgba(0,0,0,0.35)' }}
            >
              Îndulcim <em className="text-gold not-italic">fiecare</em> poveste.
            </h1>
            <p
              className="font-raleway text-white/90 text-lg mb-10 max-w-xl"
              style={{ textShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
            >
            Calitate, creativitate și deserturi făcute manual. Sărbători sau răsfăț — suntem aici.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/meniu" className="btn-gold">Meniul nostru</Link>
              <Link href="/contact" className="btn-outline-cream">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════ Creații care impresionează – imediat sub hero, mai multe produse ═════ */}
      <section className="bg-white py-20" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <h2 id="products-heading" className="font-playfair text-[clamp(2rem,4vw,3.2rem)] text-chocolate">
              Creații care <em className="text-gold not-italic">impresionează</em>
            </h2>
            <Link href="/meniu" className="btn-outline-gold shrink-0">Vezi tot meniul</Link>
          </div>

          <SectionReveal stagger>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} {...product} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═════ About – o frază + link ═════ */}
      <section className="bg-white py-16" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p id="about-heading" className="font-cormorant text-xl md:text-2xl italic text-chocolate/80 mb-6">
            &ldquo;Nu facem doar deserturi — creăm momente care rămân în memorie.&rdquo;
          </p>
          <Link href="/despre" className="font-raleway text-amber text-[0.65rem] tracking-[0.3em] uppercase font-semibold hover:text-gold transition-colors">
            Povestea Krema →
          </Link>
        </div>
      </section>

      {/* ═════ Extra secțiune 1 – Colecții rapide (focus pe produse) ═════ */}
      <section className="bg-white py-18">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase mb-3">Colecții</p>
              <h3 className="font-playfair text-3xl text-chocolate leading-tight mb-5">
                Preferate pentru<br />evenimente
              </h3>
              <p className="font-raleway text-chocolate/55 text-sm leading-relaxed max-w-sm">
                Selectate pentru impact vizual și gust — perfecte pentru nuntă, botez, aniversare.
              </p>
            </div>
            <div className="lg:col-span-8">
              <SectionReveal stagger>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                  {featuredProducts.slice(0, 4).map((product) => (
                    <ProductCard key={`evt-${product.slug}`} {...product} />
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═════ Extra secțiune 2 – Comandă rapidă ═════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-gold/20 bg-white p-10 md:p-14">
            <div className="md:col-span-8">
              <p className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase mb-3">Comandă</p>
              <h3 className="font-playfair text-3xl text-chocolate mb-2">Spune-ne ce vrei, noi facem restul.</h3>
              <p className="font-raleway text-chocolate/55 text-sm leading-relaxed max-w-2xl">
                Personalizăm aromele, dimensiunea și designul. Primești recomandări rapide și o ofertă clară.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end gap-4">
              <Link href="/contact" className="btn-gold">Cere ofertă</Link>
              <a href="tel:+40747527069" className="btn-outline-gold">Sună</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═════ Process strip – scurt ═════ */}
      <section className="bg-gold py-12" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Selecție', 'Preparare', 'Finisaj', 'Livrare'].map((step) => (
              <span key={step} className="font-raleway text-chocolate font-semibold text-sm tracking-widest uppercase">
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ Testimoniale – scurte ═════ */}
      <section className="bg-white py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="testimonials-heading" className="font-playfair text-2xl text-chocolate text-center mb-12">
            Ce spun clienții
          </h2>
          <SectionReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═════ CTA – scurt ═════ */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-[clamp(1.8rem,4vw,2.8rem)] text-chocolate mb-4">
            Eveniment special? <em className="text-gold not-italic">Comandă</em> cu noi.
          </h2>
          <Link href="/contact" className="btn-gold">Contactează-ne</Link>
        </div>
      </section>
    </>
  );
}
