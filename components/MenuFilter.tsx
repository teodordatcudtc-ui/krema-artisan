'use client';

import { useState, useEffect, useRef } from 'react';
import ProductCard, { ProductCardProps } from '@/components/ProductCard';

type Product = Omit<ProductCardProps, 'dark'> & {
  category: string;
  fallbackImage: string;
};

const allProducts: Product[] = [
  // ── Torturi ──────────────────────────────────────────
  { name: 'Tort Ciocolată & Zmeură', description: 'Ganache ciocolată 70%, mousse zmeură și glazură oglindă.', price: 'de la 200 RON', image: '/images/products/tort-ciocolata-zmeura.jpg', fallbackImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80', categoryDisplay: 'TORT', category: 'Torturi', slug: 'tort-ciocolata-zmeura' },
  { name: 'Tort de Nuntă Clasic', description: 'Tort pe mai multe niveluri, personalizat după viziunea ta.', price: 'de la 350 RON', image: '/images/products/tort-nunta.jpg', fallbackImage: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80', categoryDisplay: 'TORT NUNTĂ', category: 'Torturi', slug: 'tort-nunta' },
  { name: 'Tort Tiramisu', description: 'Cremă mascarpone și pandișpan cu espresso — clasic reinterpretat.', price: 'de la 160 RON', image: '/images/products/tort-tiramisu.jpg', fallbackImage: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&q=80', categoryDisplay: 'TORT', category: 'Torturi', slug: 'tort-tiramisu' },
  // ── Prăjituri ─────────────────────────────────────────
  { name: 'Ecler cu Vanilie', description: 'Choux crocant cu cremă diplomat vanilie Madagascar și glazură caramel.', price: '18 RON', image: '/images/products/ecler-vanilie.jpg', fallbackImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', category: 'Prăjituri', slug: 'ecler-vanilie' },
  { name: 'Tarte cu Fructe', description: 'Aluat sablé cu cremă de citrice și fructe proaspete de sezon.', price: '22 RON', image: '/images/products/tarte-fructe.jpg', fallbackImage: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', category: 'Prăjituri', slug: 'tarte-fructe' },
  { name: 'Cheesecake New York', description: 'Cream cheese cremos, bază crocantă și coulis de fructe roșii.', price: '25 RON', image: '/images/products/cheesecake.jpg', fallbackImage: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', category: 'Prăjituri', slug: 'cheesecake' },
  { name: 'Cannoli Siciliano', description: 'Coajă crocantă umplută cu ricotta dulce, stafide și ciocolată rasă.', price: '20 RON', image: '/images/products/cannoli.jpg', fallbackImage: 'https://images.unsplash.com/photo-1549488497-0c25ea9c7e43?w=800&q=80', categoryDisplay: 'PRĂJITURĂ', category: 'Prăjituri', slug: 'cannoli' },
  // ── Deserturi Fine ────────────────────────────────────
  { name: 'Macarons Sezonieri', description: 'Colecție limitată cu ganache din ingrediente de sezon, schimbată lunar.', price: '12 RON / buc', image: '/images/products/macarons.jpg', fallbackImage: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80', categoryDisplay: 'DESERT FIN', category: 'Deserturi Fine', slug: 'macarons' },
  { name: 'Trufle de Ciocolată', description: 'Ciocolată Valrhona 66%, rulate în cacao, nucă de cocos sau pralinée.', price: '10 RON / buc', image: '/images/products/trufle.jpg', fallbackImage: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&q=80', categoryDisplay: 'DESERT FIN', category: 'Deserturi Fine', slug: 'trufle' },
];

const categories = ['Toate', 'Torturi', 'Prăjituri', 'Deserturi Fine'];

export default function MenuFilter() {
  const [active, setActive] = useState('Toate');
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === 'Toate' ? allProducts : allProducts.filter((p) => p.category === active);

  useEffect(() => {
    // Grid transition
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div>
      {/* ── Category tabs ── */}
      <div className="flex flex-wrap gap-3 mb-16" role="tablist" aria-label="Filtrare categorii">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`font-raleway text-[0.65rem] tracking-[0.3em] uppercase px-6 py-3 border transition-all duration-300 ${
              active === cat
                ? 'bg-gold border-gold text-white font-bold'
                : 'border-chocolate/20 text-chocolate/60 hover:border-gold hover:text-amber'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Product grid ── */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        role="tabpanel"
      >
        {filtered.map((product) => (
          <ProductCard key={product.slug} {...product} dark />
        ))}
      </div>

      {/* La comandă box */}
      <div className="mt-20 border border-gold/25 bg-white p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1">
          <p className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase mb-3">
            Creații personalizate
          </p>
          <h3 className="font-playfair text-2xl md:text-3xl text-chocolate mb-4">
            Tort la comandă pentru orice ocazie
          </h3>
          <p className="font-raleway text-chocolate/55 text-sm leading-relaxed max-w-lg">
            Lucrăm cu tine pentru a crea tortul perfect — de la conceptul vizual la alegerea
            aromelor. Nunți, botezuri, aniversări sau evenimente corporate.
          </p>
        </div>
        <a
          href="/contact"
          className="btn-outline-gold shrink-0"
        >
          Solicită ofertă
        </a>
      </div>
    </div>
  );
}
