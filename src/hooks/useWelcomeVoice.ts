import { useEffect, useState } from "react";

const SESSION_KEY = "swayam_welcome_played";

type BannerState = "hidden" | "visible" | "fading";

export function useWelcomeVoice() {
  const [bannerState, setBannerState] = useState<BannerState>("hidden");

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
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const audio = new Audio("/welcome.mp3");
    audio.preload = "auto";
    audio.volume = 1;

    const playAudio = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;

      audio
        .play()
        .then(() => {
          sessionStorage.setItem(SESSION_KEY, "1");
        })
        .catch((err) => {
          console.error("Audio play failed:", err);
        });

      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("wheel", playAudio);
      window.removeEventListener("touchmove", playAudio);
      window.removeEventListener("click", playAudio);
    };

    window.addEventListener("scroll", playAudio, { once: true });
    window.addEventListener("wheel", playAudio, { once: true });
    window.addEventListener("touchmove", playAudio, { once: true });
    window.addEventListener("click", playAudio, { once: true });

    return () => {
      removeListeners();
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return { bannerState };
}