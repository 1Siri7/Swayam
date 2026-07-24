import { useState, useEffect } from 'react';
import { useWelcomeVoice } from '@/hooks/useWelcomeVoice';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience3D from '@/components/Experience3D';
import BudgetPlanner from '@/components/BudgetPlanner';
import StyleSelector from '@/components/StyleSelector';
import DesignStudio from '@/components/DesignStudio';
import InteractiveTools from '@/components/InteractiveTools';
import Portfolio from '@/components/Portfolio';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { bannerState } = useWelcomeVoice();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <ScrollProgress />

      {/* ── Welcome banner (visible on screen) ── */}
      <div
        aria-live="polite"
        className={`fixed left-1/2 z-[80] -translate-x-1/2 transition-all duration-500 ${
          bannerState === 'visible'
            ? 'top-24 opacity-100 scale-100'
            : bannerState === 'fading'
              ? 'top-24 opacity-0 scale-95'
              : 'top-20 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 rounded-full border border-gold-400/40 bg-navy-900/95 px-6 py-3.5 shadow-[0_8px_40px_-8px_rgba(192,143,42,0.4)] backdrop-blur-xl">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-950">
            <Sparkles size={14} />
          </span>
          <p className="font-display text-base text-navy-50">
            Welcome to{' '}
            <span className="text-gold-gradient font-semibold">Swayam Interior Designs</span>
          </p>
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience3D />
        <BudgetPlanner />
        <StyleSelector />
        <DesignStudio />
        <InteractiveTools />
        <Portfolio />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <Consultation />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
