import { Award, Ruler, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const pillars = [
  {
    icon: Sparkles,
    title: 'Bespoke by Design',
    text: 'No two homes are alike. Every detail is drawn around the way your family lives.',
  },
  {
    icon: Ruler,
    title: 'Precision Engineering',
    text: 'Millimetre-accurate joinery and vetted hardware that holds up for decades.',
  },
  {
    icon: Award,
    title: 'Obsessive Finish',
    text: 'Materials, proportions, and light composed with the eye of a craftsman.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad bg-navy-gradient">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left — client images in about only */}
          <div ref={ref} className={`reveal-left ${visible ? 'is-visible' : ''} relative`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/dining/IMG-20260608-WA0044.jpg"
                alt="Swayam designed dining space"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            {/* Inset thumbnail — kitchen */}
            <div className="absolute -bottom-8 -right-4 w-2/3 overflow-hidden rounded-2xl border-4 border-navy-950 shadow-2xl md:-right-8">
              <img
                src="/images/kitchen/IMG-20260608-WA0012.jpg"
                alt="Swayam modular kitchen"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Right — copy only */}
          <div className={`reveal-right ${visible ? 'is-visible' : ''}`}>
            <p className="eyebrow">About Swayam</p>
            <h2 className="mt-5 heading-lg text-navy-50">
              A Hyderabad studio devoted to the art of living well.
            </h2>
            <div className="mt-6 divider-gold" />
            <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
              Swayam Interior Designs, founded by{' '}
              <span className="text-gold-300">S. Rohit Krishna</span>, was built on a single
              belief: your home should feel like you, only more beautiful. We have designed and
              delivered luxury interiors across Hyderabad — from compact apartments to sprawling
              villas and commercial spaces.
            </p>
            <p className="mt-4 leading-relaxed text-navy-200/70">
              We handle everything end to end — concept, 3D visualisation, material selection,
              execution, and finishing — so you enjoy the journey as much as the result.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="glass-card group p-5 transition-all duration-300 hover:border-gold-400/30 hover:bg-navy-900/70"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-400/20">
                    <p.icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-navy-50">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200/70">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
