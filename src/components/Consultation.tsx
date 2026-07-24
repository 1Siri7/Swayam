import { useState } from 'react';
import { Check, Loader2, AlertCircle, CalendarCheck, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';
import { roomTypes } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const WA_PHONE = '919963349988';
const WA_MSG = encodeURIComponent(
  "Hello Swayam Interior Designs! I'd like to book a design consultation for my home.",
);
// Deep-link opens desktop/mobile WhatsApp app directly
const WA_URL = `whatsapp://send?phone=${WA_PHONE}&text=${WA_MSG}`;
const WA_WEB  = `https://wa.me/${WA_PHONE}?text=${WA_MSG}`;

const openWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.location.href = WA_URL;
  const t = window.setTimeout(() => window.open(WA_WEB, '_blank', 'noopener,noreferrer'), 1500);
  window.addEventListener('blur', () => window.clearTimeout(t), { once: true });
};

export default function Consultation() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      room_type: String(data.get('room_type') || '').trim(),
      budget: String(data.get('budget') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };

    try {
      const { error } = await supabase.from('consultations').insert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="consultation" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — copy */}
          <div ref={ref} className={`reveal-left ${visible ? 'is-visible' : ''}`}>
            <p className="eyebrow">Book a Consultation</p>
            <h2 className="mt-5 heading-lg text-navy-50">
              Ready to begin your home&apos;s story?
            </h2>
            <div className="mt-6 divider-gold" />
            <p className="mt-6 text-lg leading-relaxed text-navy-100/80">
              Book a complimentary design consultation. We will bring samples, a 3D concept, and a
              transparent quote to your home.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Complimentary home visit across Hyderabad',
                '3D concept preview on the spot',
                'Itemised, fixed quote — no hidden costs',
                '5-year warranty on all work',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-navy-100/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4 glass rounded-2xl p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-950">
                <CalendarCheck size={22} />
              </span>
              <div>
                <p className="font-display text-lg text-navy-50">Free · No obligation</p>
                <p className="text-sm text-navy-200/70">We reply within 24 hours.</p>
              </div>
            </div>

            {/* ── WhatsApp direct connect ── */}
            <div className="mt-6 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/8 p-5">
              <p className="text-sm font-medium text-navy-50">Prefer to chat directly?</p>
              <p className="mt-1 text-xs text-navy-200/70">
                Tap below — a message to our team is pre-written and ready to send.
              </p>
              <a
                href={WA_URL}
                onClick={openWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-6px_rgba(37,211,102,0.7)]"
              >
                <MessageCircle size={18} />
                WhatsApp Swayam Now
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={`reveal-right ${visible ? 'is-visible' : ''} glass-card p-7 md:p-9`}>
            {status === 'success' ? (
              <div className="flex flex-col items-center py-10 text-center animate-fade-in">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-navy-950">
                  <Check size={32} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-navy-50">Thank you!</h3>
                <p className="mt-3 max-w-sm text-sm text-navy-200/80">
                  Your consultation request has been received. Our team will reach out within 24
                  hours to schedule your visit.
                </p>
                {/* Also offer WhatsApp after form submission */}
                <a
                  href={WA_URL}
                  onClick={openWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
                >
                  <MessageCircle size={16} />
                  Also send on WhatsApp
                </a>
                <button onClick={() => setStatus('idle')} className="btn-outline-gold mt-4">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label-field">Full Name</label>
                    <input id="name" name="name" required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-field">Phone</label>
                    <input id="phone" name="phone" required type="tel" className="input-field" placeholder="+91 99633 49988" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label-field">Email</label>
                  <input id="email" name="email" type="email" className="input-field" placeholder="you@email.com" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="room_type" className="label-field">Room Type</label>
                    <select id="room_type" name="room_type" className="input-field" defaultValue="">
                      <option value="" disabled>Select…</option>
                      {roomTypes.map((r) => (
                        <option key={r.id} value={r.id}>{r.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="label-field">Budget</label>
                    <select id="budget" name="budget" className="input-field" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option value="2-5">₹2–5 Lakhs</option>
                      <option value="5-10">₹5–10 Lakhs</option>
                      <option value="10-20">₹10–20 Lakhs</option>
                      <option value="20+">₹20 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label-field">Tell us about your project (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="input-field resize-none"
                    placeholder="What are you envisioning?"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                {/* Two CTAs side by side */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-gold flex-1 disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Book Consultation'
                    )}
                  </button>
                  <a
                    href={WA_URL}
                    onClick={openWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_-6px_rgba(37,211,102,0.5)]"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                </div>

                <p className="text-center text-xs text-navy-300">
                  By submitting you agree to be contacted about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
