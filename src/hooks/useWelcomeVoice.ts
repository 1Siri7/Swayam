import { useEffect, useState } from "react";

const SESSION_KEY = "swayam_welcome_played";

type BannerState = "hidden" | "visible" | "fading";

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>("hidden");

  // Welcome Banner
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

  // Play welcome audio on first scroll
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const playWelcome = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;

      // Remove listener immediately
      window.removeEventListener("scroll", playWelcome);

      // Create audio AFTER the user scrolls
      const audio = new Audio("/welcome.mp3");
      audio.preload = "auto";
      audio.volume = 1;

      audio.play()
        .then(() => {
          console.log("Welcome audio played");
          sessionStorage.setItem(SESSION_KEY, "1");
        })
        .catch((err) => {
          console.error("Audio play failed:", err);
        });
    };

    window.addEventListener("scroll", playWelcome, { passive: true });

    return () => {
      window.removeEventListener("scroll", playWelcome);
    };
  }, []);

  return { bannerState };
}