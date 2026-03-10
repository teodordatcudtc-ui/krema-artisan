import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'Povestea cofetăriei Krema – pasiune pentru meșteșugul artizanal, ingrediente premium și deserturi care creează amintiri în Popești-Leordeni.',
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Calitate fără compromis',
    description:
      'Selectăm cele mai bune ingrediente — ciocolată belgiană, vanilie de Madagascar, frișcă naturală — pentru o experiență senzorială autentică la fiecare îmbucătură.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Creativitate autentică',
    description:
      'Fiecare creare Krema este unică. Combinăm tehnici clasice de patiserie cu inovații moderne pentru deserturi care surprind și creează momente memorabile.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Meșteșug artizanal',
    description:
      'Fiecare produs este realizat manual, cu atenție la detalii și respect față de tradițiile de cofetărie care ne-au inspirat. Nu facem deserturi în serie — facem experiențe.',
  },
];

const process = [
  { step: '01', title: 'Selecția', description: 'Alegem cu atenție ingredientele din surse de încredere — produse naturale, fără aditivi artificiali.' },
  { step: '02', title: 'Creația', description: 'Preparăm manual, zi de zi, cu tehnici de patiserie clasică și moderne adaptate gustului contemporan.' },
  { step: '03', title: 'Finisajul', description: 'Fiecare detaliu decorativ este aplicat cu precizie artizanală — pentru un rezultat care impresionează vizual și senzorial.' },
  { step: '04', title: 'Livrarea', description: 'Prezentăm și livrăm cu grijă maximă, astfel încât produsul să ajungă la tine în stare perfectă.' },
];

export default function DesprePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="page-hero overflow-hidden bg-white" aria-label="Pagina Despre noi">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="section-tag">
            <span className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase">Povestea noastră</span>
          </div>
          <h1 className="font-playfair text-[clamp(2.2rem,4.2vw,3.4rem)] font-bold leading-tight text-chocolate mt-4">
            Despre <em className="text-gold not-italic">Krema</em>
          </h1>
        </div>
      </section>

      {/* ══ STORY ══ */}
      <section className="bg-white py-28" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                    alt="Interior cofetărie Krema – atelier artizanal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-8 bg-gold px-8 py-6 text-white">
                  <p className="font-playfair text-5xl font-bold leading-none">2019</p>
                  <p className="font-raleway text-[0.6rem] tracking-[0.3em] uppercase font-bold mt-1">Fondată</p>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40 pointer-events-none" aria-hidden="true" />
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div>
                <div className="section-tag">
                  <span className="font-raleway text-amber text-[0.62rem] tracking-[0.4em] uppercase">Originile noastre</span>
                </div>
                <h2 id="story-heading" className="font-playfair text-[clamp(2rem,4vw,3.2rem)] text-chocolate leading-tight mb-8">
                  O pasiune transformată
                  <br />în <em className="text-amber not-italic">artă</em>
                </h2>
                <p className="font-raleway text-chocolate/65 text-base leading-relaxed mb-6">
                  Krema s-a născut dintr-o dragoste profundă față de cofetăria tradițională și
                  dorința de a aduce în Popești-Leordeni deserturi cu adevărat artizanale —
                  produse cu grijă, cu ingrediente de calitate superioară și cu o atenție ieșită
                  din comun față de detalii.
                </p>
                <p className="font-raleway text-chocolate/65 text-base leading-relaxed mb-10">
                  Fiecare prăjitură, fiecare tort, fiecare macaron poartă amprenta dedicării
                  noastre. Nu facem deserturi la scară industrială — creăm arte comestibile,
                  în cantități mici, pentru experiențe mari.
                </p>
                <Link href="/meniu" className="btn-gold">Descoperă meniul nostru</Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="bg-white py-28" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-gold" aria-hidden="true" />
              <span className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase">Filosofia noastră</span>
              <div className="h-px w-12 bg-gold" aria-hidden="true" />
            </div>
            <h2 id="values-heading" className="font-playfair text-[clamp(2rem,4vw,3.5rem)] text-chocolate">
              Ce ne <em className="text-gold not-italic">definește</em>
            </h2>
          </SectionReveal>

          <SectionReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-chocolate/8">
              {values.map((v) => (
                <div key={v.title} className="bg-cream p-10 md:p-12 group hover:bg-white transition-colors duration-300 text-center">
                  <div className="text-gold mb-7 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-playfair text-xl text-chocolate mb-5">{v.title}</h3>
                  <p className="font-raleway text-sm text-chocolate/55 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="bg-white py-28" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-end">
              <div>
                <div className="section-tag">
                  <span className="font-raleway text-amber text-[0.62rem] tracking-[0.4em] uppercase">Procesul nostru</span>
                </div>
                <h2 id="process-heading" className="font-playfair text-[clamp(2rem,4vw,3.2rem)] text-chocolate leading-tight">
                  De la idee la<br /><em className="text-amber not-italic">capodoperă</em>
                </h2>
              </div>
              <p className="font-raleway text-chocolate/55 text-base leading-relaxed max-w-lg self-end">
                Fiecare produs Krema parcurge un proces riguros, de la alegerea ingredientelor
                până la prezentarea finală.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p) => (
                <div key={p.step}>
                  <p className="font-playfair text-[6rem] font-bold text-chocolate/6 leading-none select-none mb-2">{p.step}</p>
                  <div className="w-10 h-[2px] bg-gold mb-5" aria-hidden="true" />
                  <h3 className="font-playfair text-xl text-chocolate mb-3">{p.title}</h3>
                  <p className="font-raleway text-chocolate/55 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] text-chocolate mb-6">
              Gata să <em className="text-gold not-italic">guști</em> diferența?
            </h2>
            <p className="font-raleway text-chocolate/50 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Vizitează-ne la Str. Biruinței 7, Popești-Leordeni sau comandă pentru evenimentul tău special.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/meniu" className="btn-gold">Vezi Meniul</Link>
              <Link href="/contact" className="btn-outline-gold">Contactează-ne</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
