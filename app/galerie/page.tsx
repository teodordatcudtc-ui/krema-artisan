import type { Metadata } from 'next';
import Image from 'next/image';
import SectionReveal from '@/components/SectionReveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie foto Krema Artisan Dessert House – torturi, prăjituri și deserturi fine realizate manual. Fiecare imagine spune o poveste dulce.',
};

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80', alt: 'Tort signature cu ciocolată belgiană și decoruri aurii', tag: 'Tort Signature', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=700&q=80', alt: 'Macarons colorate în nuanțe pastelate', tag: 'Macarons', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&q=80', alt: 'Eclere cu glazură caramel și cremă de vanilie', tag: 'Eclere', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=700&q=80', alt: 'Tartă cu fructe proaspete de sezon', tag: 'Tarte', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=900&q=80', alt: 'Tort de nuntă elegant pe trei niveluri cu flori comestibile', tag: 'Tort de Nuntă', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80', alt: 'Cheesecake New York cu topping de fructe roșii', tag: 'Cheesecake', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=700&q=80', alt: 'Petit fours asortate pentru evenimente', tag: 'Petit Fours', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=700&q=80', alt: 'Trufle artizanale de ciocolată Valrhona', tag: 'Trufle', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1549488497-0c25ea9c7e43?w=700&q=80', alt: 'Produse de patiserie fine asortate', tag: 'Patiserie', span: 'col-span-1 row-span-1' },
];

export default function GaleriePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="page-hero overflow-hidden bg-white" aria-label="Galerie foto Krema">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="section-tag">
            <span className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase">Arta noastră</span>
          </div>
          <h1 className="font-playfair text-[clamp(2.2rem,4.2vw,3.4rem)] font-bold leading-tight text-chocolate mt-4">
            Galerie <em className="text-gold not-italic">Foto</em>
          </h1>
        </div>
      </section>

      {/* ══ INTRO ══ */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <p className="font-cormorant text-[clamp(1.5rem,3vw,2.2rem)] italic text-chocolate/65 max-w-2xl leading-relaxed">
              &ldquo;Fiecare desert este o operă de artă comestibilă — și o invitație la o experiență senzorială unică.&rdquo;
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ══ GALLERY GRID ══ */}
      <section className="bg-white py-10 pb-28" aria-label="Galerie imagini Krema">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            style={{ gridAutoRows: '220px' }}
          >
            {galleryItems.map((item, i) => (
              <SectionReveal
                key={i}
                delay={i * 60}
                className={`${item.span} group relative overflow-hidden`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="border border-gold/70 bg-white/85 backdrop-blur-sm px-4 py-2">
                    <span className="font-raleway text-gold text-[0.6rem] tracking-[0.3em] uppercase">{item.tag}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-20 text-center">
            <div className="gold-line mb-12" />
            <p className="font-cormorant text-[clamp(1.4rem,3vw,2rem)] italic text-chocolate/65 mb-8">
              Fiecare creație este realizată la comandă cu atenție și dragoste.
            </p>
            <Link href="/contact" className="btn-outline-gold">
              Comandă ceva special
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
