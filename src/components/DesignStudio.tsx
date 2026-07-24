import { useState } from 'react';
import { Sun, Sunset, Moon, Lightbulb } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { materials } from '@/lib/content';

const palettes = [
  { id: 'navy-gold', name: 'Navy & Gold', colors: ['#0f1f33', '#152841', '#d4a73c', '#f6eecf'] },
  { id: 'warm-earth', name: 'Warm Earth', colors: ['#5e421e', '#a37422', '#c08f2a', '#f6eecf'] },
  { id: 'cool-stone', name: 'Cool Stone', colors: ['#2c3340', '#5272a0', '#aebfd9', '#eef2f9'] },
  { id: 'forest', name: 'Forest Luxe', colors: ['#1c2820', '#3a5231', '#7d9d6b', '#e5ebe0'] },
  { id: 'rose', name: 'Rose Quartz', colors: ['#3f2b2b', '#8c5a5a', '#d6afaf', '#faf0f0'] },
  { id: 'charcoal', name: 'Charcoal & Brass', colors: ['#1a1a1a', '#3a3a3a', '#c08f2a', '#e0bd63'] },
];

const lightingModes = [
  {
    id: 'day',
    name: 'Daylight',
    icon: Sun,
    overlay: 'linear-gradient(135deg, rgba(255,250,230,0.18), rgba(180,200,220,0.06))',
    filter: 'brightness(1.12) saturate(1.02)',
  },
  {
    id: 'golden',
    name: 'Golden Hour',
    icon: Sunset,
    overlay: 'linear-gradient(135deg, rgba(212,167,60,0.28), rgba(94,66,30,0.12))',
    filter: 'sepia(0.28) saturate(1.2) brightness(1.04) contrast(1.04)',
  },
  {
    id: 'evening',
    name: 'Evening',
    icon: Lightbulb,
    overlay: 'linear-gradient(135deg, rgba(255,200,120,0.22), rgba(60,40,20,0.18))',
    filter: 'sepia(0.18) brightness(0.92) contrast(1.06) saturate(1.1)',
  },
  {
    id: 'night',
    name: 'Night',
    icon: Moon,
    overlay: 'linear-gradient(135deg, rgba(20,30,50,0.45), rgba(10,15,25,0.3))',
    filter: 'brightness(0.7) contrast(1.15) saturate(0.85) hue-rotate(-5deg)',
  },
];

export default function DesignStudio() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeMaterial, setActiveMaterial] = useState(materials[0]);
  const [activePalette, setActivePalette] = useState(palettes[0]);
  const [light, setLight] = useState(lightingModes[0]);

  return (
    <section id="studio" className="section-pad bg-navy-gradient">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Design Studio</p>
          <h2 className="mt-5 heading-lg text-navy-50">Explore the finishes, colours, and light.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Three interactive tools in one. Browse premium materials, try on curated colour
            palettes, and preview how lighting changes a room's mood.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Material Explorer */}
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <h3 className="font-display text-2xl text-navy-50">
                <span className="text-gold-400">01 ·</span> Material Explorer
              </h3>
              <p className="mt-2 text-sm text-navy-200/70">
                Tap a swatch to preview it large and read about its character.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {materials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMaterial(m)}
                    className={`group overflow-hidden rounded-xl border text-left transition-all duration-300 ${
                      activeMaterial.id === m.id
                        ? 'border-gold-400'
                        : 'border-navy-700/40 hover:border-gold-400/40'
                    }`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-navy-50">{m.name}</p>
                      <p className="text-[0.65rem] uppercase tracking-widest text-gold-400/80">{m.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Material preview */}
            <div className="glass-card overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  key={activeMaterial.id}
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  className="h-full w-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <p className="text-[0.65rem] uppercase tracking-widest text-gold-400">
                    {activeMaterial.category}
                  </p>
                  <h4 className="mt-1 font-display text-xl text-navy-50">{activeMaterial.name}</h4>
                </div>
              </div>
              <p className="p-5 text-sm leading-relaxed text-navy-100/80">{activeMaterial.description}</p>
            </div>
          </div>

          {/* Colour Palette Selector + Lighting Preview */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Palette */}
            <div className="glass-card p-7">
              <h3 className="font-display text-2xl text-navy-50">
                <span className="text-gold-400">02 ·</span> Colour Palette Selector
              </h3>
              <p className="mt-2 text-sm text-navy-200/70">
                Curated palettes tuned for luxury interiors. Tap to preview the scheme.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePalette(p)}
                    className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                      activePalette.id === p.id
                        ? 'border-gold-400 bg-gold-400/5'
                        : 'border-navy-700/40 hover:border-gold-400/40'
                    }`}
                  >
                    <div className="flex gap-1.5">
                      {p.colors.map((c) => (
                        <span
                          key={c}
                          className="h-8 flex-1 rounded-md"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-xs font-medium text-navy-50">{p.name}</p>
                  </button>
                ))}
              </div>

              {/* Palette preview banner */}
              <div
                className="mt-5 flex h-24 items-center justify-center rounded-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${activePalette.colors.join(', ')})`,
                }}
              >
                <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-navy-50">
                  {activePalette.name}
                </span>
              </div>
            </div>

            {/* Lighting */}
            <div className="glass-card p-7">
              <h3 className="font-display text-2xl text-navy-50">
                <span className="text-gold-400">03 ·</span> Lighting Preview
              </h3>
              <p className="mt-2 text-sm text-navy-200/70">
                See how the same room feels under different light.
              </p>
              <div className="mt-6 relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lighting preview"
                  className="aspect-[16/10] w-full object-cover transition-all duration-700"
                  style={{ filter: light.filter }}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-soft-light transition-all duration-700"
                  style={{ background: light.overlay }}
                />
                <span className="absolute left-4 top-4 glass rounded-full px-3 py-1.5 text-xs uppercase tracking-widest text-navy-50">
                  {light.name}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {lightingModes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setLight(m)}
                    className={`flex flex-col items-center gap-2 rounded-lg border py-3 transition-all duration-300 ${
                      light.id === m.id
                        ? 'border-gold-400 bg-gold-400/10 text-gold-300'
                        : 'border-navy-700/40 text-navy-200 hover:border-gold-400/40'
                    }`}
                  >
                    <m.icon size={18} />
                    <span className="text-[0.6rem] uppercase tracking-widest">{m.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
