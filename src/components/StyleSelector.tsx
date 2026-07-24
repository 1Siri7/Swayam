import { useRef, useState } from 'react';
import { Upload, Sparkles, RotateCcw, Image as ImageIcon, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { designStyles, type DesignStyle } from '@/lib/content';

export default function StyleSelector() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [active, setActive] = useState<DesignStyle>(designStyles[0]);
  const [showPreview, setShowPreview] = useState(false);

  const onFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result as string);
      setShowPreview(true);
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setPhoto(null);
    setShowPreview(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <section id="styles" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Design Style Selector</p>
          <h2 className="mt-5 heading-lg text-navy-50">See your room in a new style.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Upload a photo of your room and choose from eight signature styles. Swayam can
            redesign your space in any of them — this is a preview of the mood.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Preview panel */}
          <div className="flex flex-col">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onFile(e.dataTransfer.files?.[0]);
              }}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-navy-700/50 bg-navy-900/60"
            >
              {photo ? (
                <>
                  <img
                    src={photo}
                    alt="Your room"
                    className="h-full w-full object-cover transition-all duration-700"
                    style={showPreview ? { filter: active.filter } : undefined}
                  />
                  {showPreview && (
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                      style={{ background: active.overlay }}
                    />
                  )}
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-widest ${
                      showPreview
                        ? 'bg-gold-gradient text-navy-950'
                        : 'glass text-navy-100'
                    }`}
                  >
                    {showPreview ? active.name : 'Original'}
                  </span>
                </>
              ) : (
                <button
                  onClick={() => inputRef.current?.click()}
                  className="flex flex-col items-center gap-3 px-6 text-center text-navy-200 transition-colors hover:text-gold-300"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-navy-600/60">
                    <Upload size={24} />
                  </span>
                  <span className="text-sm uppercase tracking-widest">Click to browse</span>
                  <span className="text-xs text-navy-300/60">or drag &amp; drop</span>
                </button>
              )}
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onFile(e.target.files?.[0] ?? undefined)}
            />

            <div className="mt-5 flex flex-wrap gap-3">
              {photo ? (
                <>
                  <button onClick={reset} className="btn-outline-gold">
                    <RotateCcw size={16} />
                    Upload New
                  </button>
                  <a href="#consultation" className="btn-gold">
                    Redesign in {active.name}
                  </a>
                </>
              ) : (
                <button onClick={() => inputRef.current?.click()} className="btn-gold">
                  <ImageIcon size={16} />
                  Upload Room Photo
                </button>
              )}
            </div>

            {showPreview && (
              <p className="mt-5 glass rounded-xl p-4 text-xs leading-relaxed text-navy-200/70">
                <Sparkles size={14} className="mb-1 inline text-gold-400" /> This is a conceptual
                mood preview. Book a consultation for a true 3D redesign of your actual space.
              </p>
            )}
          </div>

          {/* Style picker */}
          <div className="flex flex-col">
            <h3 className="font-display text-xl text-navy-50">Choose a style</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {designStyles.map((s) => {
                const isActive = s.id === active.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActive(s);
                      if (photo) setShowPreview(true);
                    }}
                    className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-gold-400 bg-gold-400/10'
                        : 'border-navy-700/40 bg-navy-900/40 hover:border-gold-400/40'
                    }`}
                  >
                    <span
                      className="mb-3 block h-14 w-full rounded-lg"
                      style={{
                        backgroundImage: `${s.overlay}, url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: s.filter,
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <span className={`font-display text-base ${isActive ? 'text-gold-300' : 'text-navy-50'}`}>
                        {s.name}
                      </span>
                      {isActive && <Check size={16} className="text-gold-400" />}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-navy-200/60">{s.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Active style features */}
            <div className="mt-5 glass-card p-5">
              <p className="text-xs uppercase tracking-widest text-gold-400">{active.name} — Signature Elements</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-navy-600/40 px-3 py-1.5 text-xs text-navy-100/80"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
