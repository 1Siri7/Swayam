import { useEffect, useState } from "react";

const WELCOME_TEXT =
  "Welcome to Swayam Interior Designs. We are delighted to help you design your dream home.";

const SESSION_KEY = "swayam_welcome_played";

type BannerState = "hidden" | "visible" | "fading";

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>("hidden");

  // Banner animation
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const t1 = setTimeout(() => {
      setBannerState("visible");

      const t2 = setTimeout(() => {
        setBannerState("fading");

        const t3 = setTimeout(() => {
          setBannerState("hidden");
        }, 700);

        return () => clearTimeout(t3);
      }, 5500);

      return () => clearTimeout(t2);
    }, 600);

    return () => clearTimeout(t1);
  }, []);

  // Welcome speech after first interaction
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const speak = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(WELCOME_TEXT);

      utterance.rate = 0.9;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      const voices = window.speechSynthesis.getVoices();

      const voice =
        voices.find((v) => v.lang === "en-IN") ||
        voices.find((v) => v.lang === "en-US") ||
        voices.find((v) => v.lang.startsWith("en"));

      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => {
        sessionStorage.setItem(SESSION_KEY, "1");
      };

      window.speechSynthesis.speak(utterance);

      removeEvents();
    };

    const removeEvents = () => {
      window.removeEventListener("click", speak);
      window.removeEventListener("touchstart", speak);
      window.removeEventListener("keydown", speak);
      window.removeEventListener("scroll", speak);
    };

    window.addEventListener("click", speak, { once: true });
    window.addEventListener("touchstart", speak, { once: true });
    window.addEventListener("keydown", speak, { once: true });
    window.addEventListener("scroll", speak, { once: true });

    return () => {
      removeEvents();
      window.speechSynthesis.cancel();
    };
  }, []);

  return { bannerState };
}