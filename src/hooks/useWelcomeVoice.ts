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

  // Play welcome audio after first user interaction
  useEffect(() => {
    if (!canPlay) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const playAudio = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;

      const audio = new Audio("/welcome.mp3");
      audio.volume = 1;
      audio.preload = "auto";

      audio
        .play()
        .then(() => {
          console.log("Welcome audio played");
          sessionStorage.setItem(SESSION_KEY, "1");
          removeListeners();
        })
        .catch((err) => {
          console.error("Audio play failed:", err);
        });
    };

    const removeListeners = () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("wheel", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("keydown", playAudio);
    };

    window.addEventListener("click", playAudio, { once: true });
    window.addEventListener("scroll", playAudio, { once: true, passive: true });
    window.addEventListener("wheel", playAudio, { once: true, passive: true });
    window.addEventListener("touchstart", playAudio, { once: true, passive: true });
    window.addEventListener("keydown", playAudio, { once: true });

    return () => {
      removeListeners();
    };
  }, [canPlay]);

  return { bannerState };
}