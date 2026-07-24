import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      {/* ── Single horizontal row ── */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8 lg:px-12">

        {/* Logo + brand */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="Swayam Interior Designs home"
        >
          <img
            src="/images/logo/image.png"
            alt="Swayam Interior Designs"
            className="h-11 w-auto object-contain drop-shadow-lg"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide text-gold-gradient">
              Swayam
            </span>
            <span className="text-[0.48rem] uppercase tracking-widest text-gold-400/80">
              Interior Designs
            </span>
          </div>
        </a>

        {/* Desktop nav — all links in ONE line, no wrap */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center" style={{ gap: '2rem' }}>
            {links.map((l) => {
              const isActive = active === l.href.replace('#', '');
              return (
                <li key={l.href} className="shrink-0">
                  <a
                    href={l.href}
                    className={`relative whitespace-nowrap text-[0.7rem] uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-gold-300' : 'text-navy-100/90 hover:text-gold-300'
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-gold-gradient transition-all duration-300 ${
                        isActive ? 'w-5' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA — desktop */}
        <a href="#consultation" className="hidden shrink-0 btn-gold px-5 py-3 text-xs lg:inline-flex">
          Book Consultation
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="ml-2 text-gold-300 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <div className="glass-nav mx-3 mt-2 rounded-2xl">
          <ul className="flex flex-col px-5 py-2">
            {links.map((l) => {
              const isActive = active === l.href.replace('#', '');
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className={`block py-3 text-sm uppercase tracking-widest transition-colors ${
                      isActive ? 'text-gold-300' : 'text-navy-100 hover:text-gold-300'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="py-3">
              <a href="#consultation" onClick={close} className="btn-gold w-full">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
