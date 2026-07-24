import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { faqs } from '@/lib/content';

export default function FAQ() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="section-pad bg-navy-gradient">
      <div className="mx-auto max-w-4xl">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 heading-lg text-navy-50">Questions, answered.</h2>
          <div className="mt-6 mx-auto divider-gold" />
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <div
                key={f.id}
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-gold-400/30' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-navy-50">{f.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-gold-gradient text-navy-950' : 'bg-navy-700/50 text-gold-300'
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-navy-100/80">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-navy-200/70">Still have a question?</p>
          <a href="#consultation" className="btn-gold mt-4">
            Ask Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
