import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { feedPosts } from '@/lib/content';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const serviceLinks = [
  { label: 'Modular Kitchen', href: '#services' },
  { label: 'Bedroom', href: '#services' },
  { label: 'Living Room', href: '#services' },
  { label: 'Office', href: '#services' },
  { label: 'Commercial', href: '#services' },
  { label: 'Budget Planner', href: '#budget' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/15 bg-navy-950">
      {/* Instagram strip */}
      <div className="border-b border-white/5 px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <Instagram size={20} className="text-gold-400" />
              <div>
                <p className="font-display text-lg text-navy-50">@swayaminteriordesigns</p>
                <p className="text-xs text-navy-300">Latest from our studio</p>
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Follow Us <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
            {feedPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/60" />
                <p className="absolute inset-0 flex items-center justify-center p-2 text-center text-[0.6rem] text-navy-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {post.caption}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted brands strip */}
      <div className="border-b border-white/5 px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-center text-[0.65rem] uppercase tracking-widest text-gold-400/70">
            Premium Materials &amp; Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {['Hettich', 'Häfele', 'Crompton', 'Gilma', 'Global Kitchen Appliances'].map((b) => (
              <span
                key={b}
                className="font-display text-lg font-medium text-navy-300/60 transition-colors hover:text-gold-400"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo/image.png"
                  alt="Swayam Interior Designs logo"
                  className="h-14 w-auto object-contain drop-shadow-lg"
                />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-xl font-semibold text-gold-gradient">Swayam</span>
                  <span className="mt-0.5 text-[0.5rem] uppercase tracking-widest-3 text-gold-400/80">Interior Designs</span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-navy-200/70">
                You Desire, We Design. Crafting luxury homes with bespoke interiors, precision
                engineering, and timeless design across Hyderabad.
              </p>
              <div className="mt-6 flex gap-3">
                <SocialLink href="https://instagram.com/swayaminteriordesigns" label="Instagram"><Instagram size={16} /></SocialLink>
                <SocialLink href="https://facebook.com" label="Facebook"><Facebook size={16} /></SocialLink>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-400">Quick Links</h4>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-navy-200/70 transition-colors hover:text-gold-300">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-400">Services</h4>
              <ul className="mt-5 space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-navy-200/70 transition-colors hover:text-gold-300">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold-400">Contact</h4>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm text-navy-200/70">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                  1-3-665 Kawadiguda, Hyderabad,
                  <br />Telangana — 500080
                </li>
                <li className="flex items-center gap-3 text-sm text-navy-200/70">
                  <Phone size={16} className="shrink-0 text-gold-400" />
                  <a href="tel:+919963349988" className="hover:text-gold-300">+91 99633 49988</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy-200/70">
                  <Mail size={16} className="shrink-0 text-gold-400" />
                  <a href="mailto:swayaminteriordesigns@gmail.com" className="hover:text-gold-300 break-all">swayaminteriordesigns@gmail.com</a>
                </li>
              </ul>
              <a href="#consultation" className="btn-gold mt-6 w-full">Book a Consultation</a>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-navy-300">
              © {new Date().getFullYear()} Swayam Interior Designs. All rights reserved.
            </p>
            <p className="text-xs text-navy-300">Crafted with care in Hyderabad.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-600/40 text-navy-200 transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/10 hover:text-gold-300"
    >
      {children}
    </a>
  );
}
