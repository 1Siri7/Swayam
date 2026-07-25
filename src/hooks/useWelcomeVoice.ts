import { useEffect, useState } from "react";

const WELCOME_TEXT =
  "Welcome to Swayam Interior Designs. We are delighted to help you design your dream home.";

const SESSION_KEY = "swayam_welcome_played";

type BannerState = "hidden" | "visible" | "fading";

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>("hidden");

  // Banner Animation
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const t1 = window.setTimeout(() => {
      setBannerState("visible");

      const t2 = window.setTimeout(() => {
        setBannerState("fading");

        const t3 = window.setTimeout(() => {
          setBannerState("hidden");
        }, 700);

        return () => window.clearTimeout(t3);
      }, 5500);

      return () => window.clearTimeout(t2);
    }, 600);

    return () => window.clearTimeout(t1);
  }, []);

  // Welcome Voice - Plays on first scroll/wheel/touch
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let hasPlayed = false;

    const speakWelcome = () => {
      if (hasPlayed) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;

      hasPlayed = true;

      removeListeners();

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(WELCOME_TEXT);

      utterance.rate = 0.9;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      const voices = window.speechSynthesis.getVoices();

      const preferredVoice =
        voices.find((v) => v.lang === "en-IN") ||
        voices.find((v) => v.lang === "en-US") ||
        voices.find((v) => v.lang.startsWith("en"));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => {
        sessionStorage.setItem(SESSION_KEY, "1");
      };

      utterance.onerror = (e) => {
        console.error("Speech Error:", e);
      };

      window.speechSynthesis.speak(utterance);
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", speakWelcome);
      window.removeEventListener("wheel", speakWelcome);
      window.removeEventListener("touchmove", speakWelcome);
    };

    window.addEventListener("scroll", speakWelcome, { once: true });
    window.addEventListener("wheel", speakWelcome, { once: true });
    window.addEventListener("touchmove", speakWelcome, { once: true });

    return () => {
      removeListeners();
      window.speechSynthesis.cancel();
    };
  }, []);

  return { bannerState };
}