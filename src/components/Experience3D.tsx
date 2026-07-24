import { useEffect, useState } from 'react';
import { RotateCw, Pause, Box, Eye, Maximize2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type View = { id: string; label: string; rotationY: number };

const views: View[] = [
  { id: 'front', label: 'Living Wall', rotationY: 0 },
  { id: 'left', label: 'Window Side', rotationY: -90 },
  { id: 'back', label: 'Back Wall', rotationY: 180 },
  { id: 'right', label: 'Kitchen Side', rotationY: 90 },
];

export default function Experience3D() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [auto, setAuto] = useState(true);
  const [angle, setAngle] = useState(0);
  const [active, setActive] = useState('front');

  const selectView = (v: View) => {
    setAuto(false);
    setAngle(v.rotationY);
    setActive(v.id);
  };

  useEffect(() => {
    if (!auto) return;
    let raf = 0;
    let last = performance.now();
    let deg = angle;

    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      deg = (deg + dt * 0.028) % 360;
      setAngle(deg);
      const matched = views.find(
        (v) => Math.abs(((deg - v.rotationY + 360) % 360) - 0) < 10,
      );
      if (matched) setActive(matched.id);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto]);

  return (
    <section id="experience" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">3D Experience</p>
          <h2 className="mt-5 heading-lg text-navy-50">Walk through your home before it exists.</h2>
          <div className="mt-6 mx-auto divider-gold" />
          <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
            Every Swayam project includes a fully modelled 3D walkthrough. Explore this living room
            concept from every angle — then imagine yours.
          </p>
        </div>

        {/* 3D stage */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="perspective-1000">
            <div
              className="relative h-[420px] overflow-hidden rounded-2xl bg-navy-900"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse at 50% 30%, rgba(54,90,135,0.25), transparent 60%)',
              }}
            >
              {/* Room faces */}
              <div
                className="preserve-3d absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
                style={{ transform: `rotateY(${angle}deg)` }}
              >
                {views.map((v) => (
                  <div
                    key={v.id}
                    className="absolute h-[300px] w-[420px] overflow-hidden rounded-xl border border-gold-400/15"
                    style={{
                      transform: wallTransform(v.id),
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <img
                      src={wallImage(v.id)}
                      alt={v.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs uppercase tracking-widest text-gold-300">
                      {v.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floor reflection */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />

              {/* HUD */}
              <div className="absolute left-4 top-4 flex items-center gap-2 glass rounded-full px-3 py-1.5">
                <Box size={14} className="text-gold-400" />
                <span className="text-[0.65rem] uppercase tracking-widest text-navy-100">
                  Swayam 3D Walkthrough
                </span>
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
                <Eye size={14} className="text-gold-400" />
                <span className="text-[0.65rem] uppercase tracking-widest text-navy-100">
                  {auto ? 'Auto-rotating' : 'Manual'}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4">
            <div className="glass-card p-5">
              <h3 className="font-display text-lg text-navy-50">Camera angle</h3>
              <p className="mt-1 text-xs text-navy-200/70">Tap a wall to face it directly.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {views.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => selectView(v)}
                    className={`rounded-lg px-3 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ${
                      active === v.id && !auto
                        ? 'bg-gold-gradient text-navy-950'
                        : 'border border-navy-600/40 text-navy-200 hover:border-gold-400/50 hover:text-gold-300'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card flex items-center justify-between p-5">
              <div>
                <p className="font-display text-base text-navy-50">Auto-rotate</p>
                <p className="mt-0.5 text-xs text-navy-200/70">Slowly orbit the room</p>
              </div>
              <button
                onClick={() => setAuto((a) => !a)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/10 text-gold-300 transition-colors hover:bg-gold-400/20"
                aria-label={auto ? 'Pause rotation' : 'Start rotation'}
              >
                {auto ? <Pause size={18} /> : <RotateCw size={18} />}
              </button>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-2 text-gold-300">
                <Maximize2 size={16} />
                <span className="text-xs uppercase tracking-widest">Experience this for your home</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy-200/70">
                Book a consultation and we will build a 3D model of your actual space with your
                chosen materials and layout.
              </p>
              <a href="#consultation" className="btn-gold mt-4 w-full">
                Get My 3D Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function wallTransform(id: string): string {
  switch (id) {
    case 'front':
      return 'translateZ(210px)';
    case 'back':
      return 'rotateY(180deg) translateZ(210px)';
    case 'left':
      return 'rotateY(-90deg) translateZ(210px)';
    case 'right':
      return 'rotateY(90deg) translateZ(210px)';
    default:
      return 'translateZ(210px)';
  }
}

function wallImage(id: string): string {
  switch (id) {
    case 'front':
      return 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800';
    case 'back':
      return 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800';
    case 'left':
      return 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800';
    case 'right':
      return 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800';
    default:
      return '';
  }
}
