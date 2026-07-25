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

    const showTimer = setTimeout(() => {
      setBannerState("visible");

      const fadeTimer = setTimeout(() => {
        setBannerState("fading");

        const hideTimer = setTimeout(() => {
          setBannerState("hidden");
        }, 700);

        return () => clearTimeout(hideTimer);
      }, 5500);

      return () => clearTimeout(fadeTimer);
    }, 600);

    return () => clearTimeout(showTimer);
  }, []);

  // Welcome Voice
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    if (sessionStorage.getItem(SESSION_KEY)) return;

    const speak = () => {
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

      utterance.onstart = () => {
        console.log("Speech started");
      };

      utterance.onend = () => {
        console.log("Speech ended");
        sessionStorage.setItem(SESSION_KEY, "1");
      };

      utterance.onerror = (e) => {
        console.error("Speech Error:", e);
      };

      console.log("Speaking Welcome...");
      window.speechSynthesis.speak(utterance);
    };

    // Wait 2 seconds after page load
    const timer = setTimeout(() => {
      speak();
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, []);

  return { bannerState };
}