import type { Metadata } from 'next';
import SectionReveal from '@/components/SectionReveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactează Krema Artisan Dessert House din Popești-Leordeni. Comenzi torturi, prăjituri și deserturi artizanale pentru orice ocazie.',
};

const contactInfo = [
  {
    label: 'Adresă',
    value: 'Str. Biruinței 7\nPopești-Leordeni, 077160\nRomania',
    link: 'https://maps.google.com/?q=Str.+Biruintei+7,+Popesti-Leordeni',
    linkLabel: 'Deschide în Google Maps',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Telefon',
    value: '0747 527 069',
    link: 'tel:+40747527069',
    linkLabel: 'Sună acum',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Program',
    value: 'Marți – Vineri: 09:00 – 19:00\nSâmbătă – Duminică: 10:00 – 17:00\nLuni: Închis',
    link: null,
    linkLabel: null,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Social Media',
    value: 'Facebook – Krema Artisan Dessert House',
    link: 'https://www.facebook.com/profile.php?id=61586616428582',
    linkLabel: 'Urmărește-ne',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="page-hero overflow-hidden bg-white" aria-label="Pagina Contact">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="section-tag">
            <span className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase">Suntem aici pentru tine</span>
          </div>
          <h1 className="font-playfair text-[clamp(2.2rem,4.2vw,3.4rem)] font-bold leading-tight text-chocolate mt-4">
            Contactează <em className="text-gold not-italic">Krema</em>
          </h1>
        </div>
      </section>

      {/* ══ CONTACT INFO + FORM ══ */}
      <section className="bg-white py-28" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">

            {/* ── Left: Contact Info ── */}
            <SectionReveal direction="left">
              <div>
                <h2
                  id="contact-heading"
                  className="font-playfair text-[clamp(1.8rem,3vw,2.6rem)] text-chocolate mb-12 leading-tight"
                >
                  Hai să creăm ceva
                  <br />
                  <em className="text-amber not-italic">memorabil</em> împreună
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-5">
                      <div className="w-10 h-10 border border-chocolate/12 bg-cream flex items-center justify-center text-amber shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-raleway text-[0.6rem] tracking-[0.3em] uppercase text-chocolate/38 mb-2">
                          {item.label}
                        </p>
                        <p className="font-raleway text-sm text-chocolate/70 leading-relaxed whitespace-pre-line mb-1">
                          {item.value}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-raleway text-[0.62rem] tracking-[0.25em] uppercase text-amber hover:text-chocolate transition-colors duration-300 inline-flex items-center gap-2"
                          >
                            {item.linkLabel}
                            <span className="block h-px w-5 bg-current" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* ── Right: Form ── */}
            <SectionReveal direction="right">
              <div className="bg-cream p-8 md:p-12 border border-gold/20">
                <h3 className="font-playfair text-2xl text-chocolate mb-2">Trimite-ne un mesaj</h3>
                <p className="font-raleway text-chocolate/45 text-sm mb-10">
                  Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.
                </p>
                <ContactForm />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ══ GOOGLE MAPS ══ */}
      <section className="bg-cream py-16 pb-28" aria-label="Locație pe hartă">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="mb-10 flex items-center gap-4">
            <div className="h-px w-12 bg-gold" aria-hidden="true" />
            <span className="font-raleway text-gold text-[0.62rem] tracking-[0.4em] uppercase">Unde ne găsești</span>
          </SectionReveal>

          <SectionReveal>
            <div className="relative overflow-hidden border border-gold/20" style={{ paddingTop: '42%' }}>
              <iframe
                title="Krema Artisan Dessert House – locație Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307.6950334886592!2d26.155873383711132!3d44.369473155866515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fd5fd80411a9%3A0x474799a55fc64d5b!2sStr.%20Biruin%C8%9Bei%207%2C%20077160%20Pope%C8%99ti-Leordeni!5e0!3m2!1sen!2sro!4v1773120725591!5m2!1sen!2sro"
                className="absolute inset-0 w-full h-full hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center justify-between mt-4 text-chocolate/30 font-raleway text-xs">
              <span>Str. Biruinței 7, Popești-Leordeni, 077160</span>
              <a
                href="https://maps.google.com/?q=Str.+Biruintei+7,+Popesti-Leordeni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors duration-300 tracking-widest uppercase"
              >
                Deschide în Maps ↗
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
