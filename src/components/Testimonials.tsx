import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [index, setIndex] = useState(0);

  const count = testimonials.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);
  const active = testimonials[index];

  return (
    <section id="testimonials" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-5 heading-lg text-navy-50">Recent completed projects &amp; reviews.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Real clients, real homes, real ratings — from across Hyderabad.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-14 mx-auto max-w-4xl">
          <div className="glass-card relative overflow-hidden p-8 md:p-12">
            <Quote size={48} className="absolute right-8 top-8 text-gold-400/15" />
            <div key={active.id} className="animate-fade-in">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 font-display text-xl leading-relaxed text-navy-50 md:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg text-gold-gradient">{active.name}</p>
                  <p className="mt-0.5 text-sm text-navy-200/70">
                    {active.role} · {active.location}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-widest text-gold-300">
                    {active.project}
                  </span>
                </div>
                <div className="hidden text-right sm:block">
                  <p className="font-display text-4xl text-gold-gradient">{active.rating}.0</p>
                  <p className="text-xs text-navy-300">Client Rating</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setIndex(i)}
                    aria-label={`Show review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-gold-gradient' : 'w-2 bg-navy-600 hover:bg-navy-400'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/40 text-navy-200 transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/40 text-navy-200 transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
