import { useEffect, useState } from 'react';

const WELCOME_TEXT =
  'Welcome to Swayam Interior Designs. We are delighted to help you design your dream home.';
const SESSION_KEY = 'swayam_welcome_played';

type BannerState = 'hidden' | 'visible' | 'fading';

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>('hidden');

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const t1 = window.setTimeout(() => {
      setBannerState('visible');

      const t2 = window.setTimeout(() => {
        setBannerState('fading');

        window.setTimeout(() => {
          setBannerState('hidden');
        }, 700);

      }, 5500);

      return () => window.clearTimeout(t2);
    }, 600);

    return () => window.clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let played = false;

    const doSpeak = () => {
      if (played) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;

      played = true;
      sessionStorage.setItem(SESSION_KEY, '1');

      window.speechSynthesis.cancel();

      const utt = new SpeechSynthesisUtterance(WELCOME_TEXT);
      utt.rate = 0.9;
      utt.pitch = 1.05;
      utt.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang.startsWith('en'));

      if (voice) {
        utt.voice = voice;
      }

      window.speechSynthesis.speak(utt);
    };

    const timer = window.setTimeout(doSpeak, 1000);

    return () => {
      window.clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, []);

  return { bannerState };
}