import { useEffect, useState } from 'react';

const WELCOME_TEXT =
  'Welcome to Swayam Interior Designs. We are delighted to help you design your dream home.';
const SESSION_KEY = 'swayam_welcome_played';

type BannerState = 'hidden' | 'visible' | 'fading';

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>('hidden');

  // ── Show the visual banner once per session ──────────────────────────────
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const t1 = window.setTimeout(() => {
      setBannerState('visible');
      const t2 = window.setTimeout(() => {
        setBannerState('fading');
        window.setTimeout(() => setBannerState('hidden'), 700);
      }, 5500);
      return () => window.clearTimeout(t2);
    }, 600);

    return () => window.clearTimeout(t1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Play the voice ────────────────────────────────────────────────────────
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

      const say = () => {
        const utt = new SpeechSynthesisUtterance(WELCOME_TEXT);
        utt.rate = 0.9;
        utt.pitch = 1.05;
        utt.volume = 1;

        // Best-effort voice selection — English female preferred
        const all = window.speechSynthesis.getVoices();
        const pick =
          all.find((v) => /samantha|victoria|zira|aria|jenny|google uk english female/i.test(v.name)) ||
          all.find((v) => v.lang.startsWith('en-') && /female|woman/i.test(v.name)) ||
          all.find((v) => v.lang.startsWith('en'));
        if (pick) utt.voice = pick;

        window.speechSynthesis.speak(utt);
      };

      // Voices may not be loaded yet
      if (window.speechSynthesis.getVoices().length > 0) {
        say();
      } else {
        window.speechSynthesis.addEventListener('voiceschanged', say, { once: true });
      }
    };

    // ── Strategy 1: try auto-play 1 s after load ──
    const autoTimer = window.setTimeout(doSpeak, 1000);

    // ── Strategy 2: play on first real interaction (catches blocked autoplay) ──
    const interactEvents = ['mousedown', 'touchstart', 'keydown', 'scroll'] as const;

    const onInteract = () => {
      window.clearTimeout(autoTimer);          // cancel auto-play timer if still pending
      doSpeak();
      interactEvents.forEach((ev) => window.removeEventListener(ev, onInteract));
    };

    interactEvents.forEach((ev) =>
      window.addEventListener(ev, onInteract, { once: false, passive: true }),
    );

    return () => {
      window.clearTimeout(autoTimer);
      interactEvents.forEach((ev) => window.removeEventListener(ev, onInteract));
      window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { bannerState };
}
