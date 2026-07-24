import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 transition-opacity duration-500 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-grid-gold absolute inset-0 opacity-30" />
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-2 border-navy-700" />
          <div className="absolute inset-0 h-20 w-20 animate-spin-slow rounded-full border-t-2 border-gold-400" />
          <span className="absolute inset-0 flex items-center justify-center font-display text-2xl text-gold-gradient">
            S
          </span>
        </div>
        <p className="mt-8 font-display text-2xl tracking-wide text-navy-50">
          Swayam
        </p>
        <p className="mt-1 text-[0.6rem] uppercase tracking-widest-3 text-gold-400">
          Interior Designs
        </p>
        <div className="mt-8 h-px w-48 overflow-hidden bg-navy-700">
          <div
            className="h-full bg-gold-gradient transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-navy-300">{progress}%</p>
      </div>
    </div>
  );
}
