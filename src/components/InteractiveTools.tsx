import { useState } from 'react';
import { Calculator, CreditCard, Ruler, GitCompare } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { designStyles } from '@/lib/content';

type TabId = 'cost' | 'emi' | 'room' | 'compare';

const tabs: { id: TabId; label: string; icon: typeof Calculator }[] = [
  { id: 'cost', label: 'Cost Calculator', icon: Calculator },
  { id: 'emi', label: 'EMI Calculator', icon: CreditCard },
  { id: 'room', label: 'Room Size', icon: Ruler },
  { id: 'compare', label: 'Compare Styles', icon: GitCompare },
];

const roomRates: Record<string, number> = {
  Kitchen: 2200,
  Bedroom: 1600,
  'Living Room': 1800,
  Office: 1500,
  Commercial: 1400,
};

export default function InteractiveTools() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [tab, setTab] = useState<TabId>('cost');

  return (
    <section id="tools" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Interactive Tools</p>
          <h2 className="mt-5 heading-lg text-navy-50">Plan with confidence.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Four smart calculators to help you budget, measure, and decide — before you speak to a
            designer.
          </p>
        </div>

        {/* Tab bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs uppercase tracking-widest transition-all duration-300 ${
                tab === t.id
                  ? 'bg-gold-gradient text-navy-950'
                  : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50 hover:text-gold-300'
              }`}
            >
              <t.icon size={15} />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {tab === 'cost' && <CostCalculator />}
          {tab === 'emi' && <EmiCalculator />}
          {tab === 'room' && <RoomSizeCalculator />}
          {tab === 'compare' && <CompareStyles />}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cost Calculator ---------- */
function CostCalculator() {
  const [room, setRoom] = useState('Kitchen');
  const [sqft, setSqft] = useState(120);
  const [tier, setTier] = useState<'essential' | 'premium' | 'luxury'>('premium');

  const tierMultiplier = { essential: 1, premium: 1.6, luxury: 2.6 };
  const rate = roomRates[room];
  const low = Math.round((rate * tierMultiplier[tier] * sqft) / 1000) * 1000;
  const high = Math.round((rate * tierMultiplier[tier] * sqft * 1.25) / 1000) * 1000;

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="glass-card p-7">
        <div className="space-y-6">
          <div>
            <p className="label-field">Room Type</p>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(roomRates).map((r) => (
                <button
                  key={r}
                  onClick={() => setRoom(r)}
                  className={`rounded-lg px-2 py-2.5 text-xs font-medium transition-all ${
                    room === r
                      ? 'bg-gold-gradient text-navy-950'
                      : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="label-field mb-0">Area</p>
              <span className="text-sm font-medium text-gold-300">{sqft} sq.ft</span>
            </div>
            <input
              type="range"
              min={50}
              max={600}
              step={10}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="mt-3 w-full accent-gold-400"
            />
          </div>

          <div>
            <p className="label-field">Finish Tier</p>
            <div className="grid grid-cols-3 gap-2">
              {(['essential', 'premium', 'luxury'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`rounded-lg px-2 py-2.5 text-xs font-medium capitalize transition-all ${
                    tier === t
                      ? 'bg-gold-gradient text-navy-950'
                      : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card flex flex-col justify-center p-7 text-center">
        <p className="text-xs uppercase tracking-widest text-gold-400">Estimated Cost</p>
        <p className="mt-3 font-display text-4xl text-gold-gradient md:text-5xl">
          ₹{low.toLocaleString('en-IN')}
          <span className="text-2xl text-navy-200"> – </span>
          ₹{high.toLocaleString('en-IN')}
        </p>
        <p className="mt-4 text-sm text-navy-200/70">
          Based on ~{sqft} sq.ft {room} at a {tier} finish. Final quote is itemised after a site
          visit.
        </p>
        <a href="#consultation" className="btn-gold mt-6 self-center">
          Get Exact Quote
        </a>
      </div>
    </div>
  );
}

/* ---------- EMI Calculator ---------- */
function EmiCalculator() {
  const [amount, setAmount] = useState(800000);
  const [months, setMonths] = useState(24);
  const [rate, setRate] = useState(11);

  const r = rate / 12 / 100;
  const n = months;
  const emi = amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  const interest = total - amount;

  const fmt = (v: number) => `₹${Math.round(v).toLocaleString('en-IN')}`;

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="glass-card p-7">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between">
              <p className="label-field mb-0">Project Amount</p>
              <span className="text-sm font-medium text-gold-300">{fmt(amount)}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={5000000}
              step={50000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-3 w-full accent-gold-400"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="label-field mb-0">Tenure</p>
              <span className="text-sm font-medium text-gold-300">{months} months</span>
            </div>
            <input
              type="range"
              min={6}
              max={84}
              step={6}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="mt-3 w-full accent-gold-400"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="label-field mb-0">Interest Rate (p.a.)</p>
              <span className="text-sm font-medium text-gold-300">{rate}%</span>
            </div>
            <input
              type="range"
              min={6}
              max={18}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-3 w-full accent-gold-400"
            />
          </div>
        </div>
      </div>

      <div className="glass-card flex flex-col justify-center p-7 text-center">
        <p className="text-xs uppercase tracking-widest text-gold-400">Monthly EMI</p>
        <p className="mt-3 font-display text-4xl text-gold-gradient md:text-5xl">{fmt(emi)}</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-navy-900/50 p-4">
            <p className="text-[0.65rem] uppercase tracking-widest text-navy-300">Total Payable</p>
            <p className="mt-1 font-display text-lg text-navy-50">{fmt(total)}</p>
          </div>
          <div className="rounded-xl bg-navy-900/50 p-4">
            <p className="text-[0.65rem] uppercase tracking-widest text-navy-300">Total Interest</p>
            <p className="mt-1 font-display text-lg text-navy-50">{fmt(interest)}</p>
          </div>
        </div>
        <p className="mt-5 text-xs text-navy-300">
          Indicative only. Swayam partners with select financiers — ask us about easy EMI options.
        </p>
      </div>
    </div>
  );
}

/* ---------- Room Size Calculator ---------- */
function RoomSizeCalculator() {
  const [shape, setShape] = useState<'rect' | 'L'>('rect');
  const [l1, setL1] = useState(12);
  const [w1, setW1] = useState(10);
  const [l2, setL2] = useState(6);
  const [w2, setW2] = useState(4);

  const area = shape === 'rect' ? l1 * w1 : l1 * w1 + l2 * w2;
  const perimeter = shape === 'rect' ? 2 * (l1 + w1) : 2 * (l1 + w1) + 2 * (l2 + w2);
  // Painting estimate: walls + ceiling, ~4 wall coverage
  const paintArea = perimeter * 9 + area;

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="glass-card p-7">
        <div className="space-y-6">
          <div>
            <p className="label-field">Room Shape</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShape('rect')}
                className={`rounded-lg px-3 py-2.5 text-sm transition-all ${
                  shape === 'rect'
                    ? 'bg-gold-gradient text-navy-950'
                    : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50'
                }`}
              >
                Rectangular
              </button>
              <button
                onClick={() => setShape('L')}
                className={`rounded-lg px-3 py-2.5 text-sm transition-all ${
                  shape === 'L'
                    ? 'bg-gold-gradient text-navy-950'
                    : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50'
                }`}
              >
                L-Shaped
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SliderField label="Length (ft)" value={l1} onChange={setL1} min={4} max={40} />
            <SliderField label="Width (ft)" value={w1} onChange={setW1} min={4} max={40} />
          </div>
          {shape === 'L' && (
            <div className="grid grid-cols-2 gap-4">
              <SliderField label="Extension L (ft)" value={l2} onChange={setL2} min={2} max={20} />
              <SliderField label="Extension W (ft)" value={w2} onChange={setW2} min={2} max={20} />
            </div>
          )}
        </div>
      </div>

      <div className="glass-card flex flex-col justify-center p-7">
        <div className="grid grid-cols-2 gap-4">
          <ResultStat label="Floor Area" value={`${area} sq.ft`} />
          <ResultStat label="Perimeter" value={`${perimeter} ft`} />
          <ResultStat label="Paintable Surface" value={`${Math.round(paintArea)} sq.ft`} />
          <ResultStat label="Carpet Needed" value={`${area} sq.ft`} />
        </div>
        <p className="mt-6 text-xs leading-relaxed text-navy-300">
          Measurements are in feet. Use these when discussing materials and cost with our team.
        </p>
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="label-field mb-0">{label}</p>
        <span className="text-sm font-medium text-gold-300">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-gold-400"
      />
    </div>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-navy-900/50 p-4 text-center">
      <p className="text-[0.65rem] uppercase tracking-widest text-navy-300">{label}</p>
      <p className="mt-1 font-display text-xl text-gold-gradient">{value}</p>
    </div>
  );
}

/* ---------- Compare Styles ---------- */
function CompareStyles() {
  const [a, setA] = useState('modern');
  const [b, setB] = useState('luxury');
  const styleA = designStyles.find((s) => s.id === a)!;
  const styleB = designStyles.find((s) => s.id === b)!;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-6 md:grid-cols-2">
        <StyleCompareCard style={styleA} selectedId={a} onSelect={setA} />
        <StyleCompareCard style={styleB} selectedId={b} onSelect={setB} />
      </div>
      <div className="glass-card mt-6 p-6">
        <h4 className="font-display text-lg text-navy-50">
          {styleA.name} <span className="text-navy-400">vs</span> {styleB.name}
        </h4>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400">{styleA.name}</p>
            <p className="mt-2 text-sm text-navy-100/80">{styleA.description}</p>
            <ul className="mt-3 space-y-1.5">
              {styleA.features.map((f) => (
                <li key={f} className="text-sm text-navy-200/70">
                  · {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400">{styleB.name}</p>
            <p className="mt-2 text-sm text-navy-100/80">{styleB.description}</p>
            <ul className="mt-3 space-y-1.5">
              {styleB.features.map((f) => (
                <li key={f} className="text-sm text-navy-200/70">
                  · {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="#consultation" className="btn-gold mt-6">
          Discuss My Preferred Style
        </a>
      </div>
    </div>
  );
}

function StyleCompareCard({
  style,
  selectedId,
  onSelect,
}: {
  style: (typeof designStyles)[number];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt={style.name}
          className="h-full w-full object-cover"
          style={{ filter: style.filter }}
        />
        <div className="absolute inset-0" style={{ background: style.overlay, mixBlendMode: 'soft-light' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
        <span className="absolute bottom-3 left-4 font-display text-xl text-navy-50">{style.name}</span>
      </div>
      <div className="p-5">
        <select
          value={selectedId}
          onChange={(e) => onSelect(e.target.value)}
          className="input-field"
        >
          {designStyles.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
