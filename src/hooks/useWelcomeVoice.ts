import { useEffect, useState } from "react";

const SESSION_KEY = "swayam_welcome_played";

type BannerState = "hidden" | "visible" | "fading";

export function useWelcomeVoice(canPlay: boolean) {
  const [bannerState, setBannerState] =
    useState<BannerState>("hidden");

  // Welcome banner
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

  // Try to play audio automatically after loading screen
  useEffect(() => {
    if (!canPlay) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      const audio = new Audio("/welcome.mp3");
      audio.preload = "auto";
      audio.volume = 1;

      audio
        .play()
        .then(() => {
          console.log("Welcome audio played");
          sessionStorage.setItem(SESSION_KEY, "1");
        })
        .catch((err) => {
          console.error("Autoplay blocked:", err);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, [canPlay]);

  return { bannerState };
}