import {
  Gem,
  PenTool,
  Clock,
  ReceiptText,
  Heart,
  Box,
  Headphones,
  Infinity as InfinityIcon,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { whyChoose } from '@/lib/content';

const iconMap: Record<string, typeof Gem> = {
  Gem,
  PenTool,
  Clock,
  ReceiptText,
  Heart,
  Box,
  Headphones,
  Infinity: InfinityIcon,
};

export default function WhyChoose() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="why" className="section-pad bg-navy-gradient">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <p className="eyebrow">Why Swayam</p>
          <h2 className="mt-5 heading-lg text-navy-50">Why discerning homeowners choose us.</h2>
          <div className="mt-6 mx-auto divider-gold" />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Gem;
            return (
              <div
                key={item.id}
                className={`reveal ${visible ? 'is-visible' : ''} glass-card group p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/30 hover:bg-navy-900/70`}
                style={{ transitionDelay: `${(i % 4) * 100}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300 transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-navy-950">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg text-navy-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
