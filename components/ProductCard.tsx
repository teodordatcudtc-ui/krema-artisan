import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';

export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  fallbackImage?: string;
  categoryDisplay: string;
  slug: string;
  dark?: boolean;
}

/** Blob SVG organic – identic pe toate cardurile, indiferent de produs */
function Blob() {
  return (
    <svg
      viewBox="0 0 220 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="
          M 110 12
          C 148 10, 192 38, 200 78
          C 210 122, 192 176, 152 202
          C 118 224, 68 222, 38 196
          C 8 170, 4 124, 16 84
          C 28 44, 68 14, 110 12
          Z
        "
        fill="#c4906a"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stele">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 text-gold" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ name, price, image, fallbackImage, slug }: ProductCardProps) {
  return (
    <article className="group text-center select-none">
      {/* ── Zona vizuală: blob fix + poză produs deasupra ── */}
      <div className="relative flex justify-center items-center w-[200px] mx-auto mb-5" style={{ height: '210px' }}>

        {/* Blob organic – mereu același, indiferent de produs */}
        <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
          <Blob />
        </div>

        {/* Linii decorative subtile (ca în referință) */}
        <div
          className="absolute pointer-events-none"
          style={{ top: '20px', right: '-10px', width: '52px', height: '1px', background: 'rgba(53,21,7,0.12)', transform: 'rotate(-20deg)' }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: '40px', right: '-14px', width: '38px', height: '1px', background: 'rgba(53,21,7,0.09)', transform: 'rotate(16deg)' }}
          aria-hidden="true"
        />

        {/* Poză produs – centrată pe blob, ușor mai mare */}
        <div
          className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1"
          style={{ width: '160px', height: '190px' }}
        >
          <ImageWithFallback
            src={`/images/products/${slug}.jpg`}
            fallback={fallbackImage || image}
            alt={name}
            fill
            sizes="180px"
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* ── Text ── */}
      <h3 className="font-playfair text-base font-bold text-chocolate mb-1 leading-snug">
        {name}
      </h3>

      <Link
        href="/contact"
        className="inline-block font-raleway text-[0.6rem] tracking-[0.22em] uppercase text-chocolate/45 hover:text-amber transition-colors duration-200 mb-3"
      >
        Vezi detalii
      </Link>

      {/* Preț + stele + coș */}
      <div className="flex items-center justify-center gap-3">
        <span className="font-playfair font-bold text-chocolate text-sm">{price}</span>
        <StarRating />
        <Link
          href="/contact"
          className="w-7 h-7 rounded-full bg-chocolate/7 flex items-center justify-center text-chocolate/50 hover:bg-gold hover:text-white transition-all duration-300"
          aria-label="Adaugă în comandă"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
