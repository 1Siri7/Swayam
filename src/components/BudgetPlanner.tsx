import { useMemo, useState } from 'react';
import { Check, Package, Clock, Layers, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { roomTypes, budgetBands, packageMatrix, type DesignPackage } from '@/lib/content';

export default function BudgetPlanner() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [room, setRoom] = useState('Kitchen');
  const [budget, setBudget] = useState('5-10');

  const pkg: DesignPackage | null = useMemo(() => {
    const row = packageMatrix[room];
    if (!row) return null;
    return row[budget] ?? null;
  }, [room, budget]);

  return (
    <section id="budget" className="section-pad bg-navy-gradient">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Budget Planner</p>
          <h2 className="mt-5 heading-lg text-navy-50">Find your perfect design package.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Pick your room type and budget range. We will show the recommended package, included
            features, suggested materials, and an estimated timeline.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* Selectors */}
          <div className="glass-card flex flex-col gap-8 p-7">
            <div>
              <p className="label-field">Room Type</p>
              <div className="grid grid-cols-2 gap-2.5">
                {roomTypes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRoom(r.id)}
                    className={`rounded-lg px-3 py-3 text-sm font-medium transition-all duration-300 ${
                      room === r.id
                        ? 'bg-gold-gradient text-navy-950'
                        : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50 hover:text-gold-300'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="label-field">Budget</p>
              <div className="grid grid-cols-2 gap-2.5">
                {budgetBands.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBudget(b.id)}
                    className={`rounded-lg px-3 py-3 text-sm font-medium transition-all duration-300 ${
                      budget === b.id
                        ? 'bg-gold-gradient text-navy-950'
                        : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50 hover:text-gold-300'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <a href="#consultation" className="btn-gold w-full">
              Get a Detailed Quote
            </a>
          </div>

          {/* Result */}
          <div className="glass-card relative overflow-hidden p-7 md:p-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />
            {pkg ? (
              <div key={`${room}-${budget}`} className="animate-fade-up">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-400">
                      {pkg.room} · {pkg.budget}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-navy-50 md:text-3xl">{pkg.name}</h3>
                  </div>
                  <span className="flex items-center gap-2 rounded-full bg-gold-400/10 px-4 py-2 text-sm text-gold-300">
                    <Clock size={15} />
                    {pkg.timeline}
                  </span>
                </div>

                <div className="mt-7 grid gap-7 md:grid-cols-2">
                  <div>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-navy-200">
                      <Package size={14} className="text-gold-400" />
                      Included Features
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {pkg.features.map((f: string) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-navy-100/85">
                          <Check size={16} className="mt-0.5 shrink-0 text-gold-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-navy-200">
                      <Layers size={14} className="text-gold-400" />
                      Suggested Materials
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {pkg.materials.map((m: string) => (
                        <li key={m} className="flex items-start gap-2.5 text-sm text-navy-100/85">
                          <Sparkles size={14} className="mt-0.5 shrink-0 text-gold-400" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-7 border-t border-white/5 pt-5 text-xs leading-relaxed text-navy-300">
                  Estimates are indicative based on typical projects. Your final quote is itemised
                  and fixed after a site visit and design consultation.
                </p>
              </div>
            ) : (
              <p className="text-navy-300">Select a room and budget to see your package.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
