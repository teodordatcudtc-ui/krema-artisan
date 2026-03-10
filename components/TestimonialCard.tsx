interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  initials: string;
  occasion: string;
}

export default function TestimonialCard({
  name,
  text,
  rating,
  initials,
  occasion,
}: TestimonialCardProps) {
  return (
    <article className="bg-white/75 backdrop-blur-sm border border-chocolate/10 p-8 card-lift flex flex-col h-full">
      {/* Gold quote mark */}
      <div
        className="font-cormorant text-7xl leading-none text-gold/25 mb-2 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5" aria-label={`Rating: ${rating} din 5 stele`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-chocolate/15'}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="font-raleway text-sm leading-relaxed text-chocolate/75 italic flex-1 mb-7">
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="font-raleway font-bold text-chocolate text-sm">{initials}</span>
        </div>
        <div>
          <p className="font-playfair text-chocolate font-semibold text-sm leading-none mb-1">
            {name}
          </p>
          <p className="font-raleway text-[0.6rem] tracking-[0.25em] uppercase text-chocolate/45">
            {occasion}
          </p>
        </div>
      </div>
    </article>
  );
}
