import { useEffect, useState } from 'react';

const WELCOME_TEXT =
  'Welcome to Swayam Interior Designs. We are delighted to help you design your dream home.';

const SESSION_KEY = 'swayam_welcome_played';

type BannerState = 'hidden' | 'visible' | 'fading';

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>('hidden');

  // Banner Animation
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const t1 = window.setTimeout(() => {
      setBannerState('visible');

      const t2 = window.setTimeout(() => {
        setBannerState('fading');

        const t3 = window.setTimeout(() => {
          setBannerState('hidden');
        }, 700);

        return () => window.clearTimeout(t3);
      }, 5500);

      return () => window.clearTimeout(t2);
    }, 600);

    return () => window.clearTimeout(t1);
  }, []);

  // Welcome Voice
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let hasSpoken = false;

    const speakWelcome = () => {
      if (hasSpoken) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;

      const voices = window.speechSynthesis.getVoices();

      // Wait until voices are available
      if (voices.length === 0) {
        return;
      }

      hasSpoken = true;
      sessionStorage.setItem(SESSION_KEY, '1');

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(WELCOME_TEXT);

      utterance.rate = 0.9;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      const preferredVoice =
        voices.find(v => v.lang === 'en-IN') ||
        voices.find(v => v.lang === 'en-US') ||
        voices.find(v => v.lang.startsWith('en'));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.speak(utterance);
    };

    // Try immediately
    speakWelcome();

    // Some browsers load voices later
    window.speechSynthesis.onvoiceschanged = () => {
      speakWelcome();
    };

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return { bannerState };
}