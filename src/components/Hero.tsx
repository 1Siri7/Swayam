import { ArrowDown, Star } from 'lucide-react';

const stats = [
  { value: '250+', label: 'Homes Designed' },
  { value: '5-Yr', label: 'Warranty' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">

      {/* ── Background: navy → light-blue gradient base ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0a1628 0%, #0d2044 30%, #0f3460 55%, #1a5f8a 78%, #2196b3 100%)',
        }}
      />

      {/* Client kitchen image — right panel, fading into gradient */}
      <div className="absolute inset-0">
        <img
          src="/images/kitchen/IMG-20260608-WA0012.jpg"
          alt="Swayam modular kitchen"
          className="h-full w-full object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        {/* Strong left-to-right gradient so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, #0a1628 0%, #0a1628 35%, rgba(10,22,40,0.75) 60%, rgba(10,22,40,0.15) 100%)',
          }}
        />
        {/* Top & bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,22,40,0.55) 0%, transparent 30%, transparent 70%, #0a1628 100%)',
          }}
        />
      </div>

      {/* Light-blue ambient glow blobs */}
      <div
        className="pointer-events-none absolute right-[5%] top-[15%] h-72 w-72 rounded-full blur-[120px]"
        style={{ background: 'rgba(33,150,179,0.22)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[3%] h-80 w-80 rounded-full blur-[100px]"
        style={{ background: 'rgba(26,95,138,0.25)' }}
      />
      <div
        className="pointer-events-none absolute right-[25%] bottom-[25%] h-48 w-48 rounded-full blur-[80px]"
        style={{ background: 'rgba(192,143,42,0.12)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-3 opacity-0 [animation:fadeDown_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="flex items-center gap-0.5 text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </span>
            <p className="eyebrow">Hyderabad · Bespoke Interiors</p>
          </div>

          <h1
            className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white opacity-0 [animation:fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: '0.25s' }}
          >
            You Desire,
            <br />
            <span className="text-gold-shimmer italic">We Design</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-blue-100/85 opacity-0 [animation:fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: '0.45s' }}
          >
            Luxury interiors thoughtfully designed for modern homes in Hyderabad. We create elegant
            living spaces that reflect your personality and lifestyle — from concept to keys in hand.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 [animation:fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: '0.6s' }}
          >
            <a href="#consultation" className="btn-gold">
              Book a Consultation
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-sky-400/50 px-8 py-4 text-sm font-medium uppercase tracking-widest text-sky-200 transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:text-white"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-14 flex flex-wrap gap-12 opacity-0 [animation:fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: '0.8s' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-gold-gradient">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-sky-200/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sky-300/70 transition-colors hover:text-sky-200"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="animate-bounce-slow" />
      </a>
    </section>
  );
}
