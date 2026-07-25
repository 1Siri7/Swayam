import { useEffect, useState } from "react";

const SESSION_KEY = "swayam_welcome_played";

type BannerState = "hidden" | "visible" | "fading";

export function useWelcomeVoice(canPlay: boolean) {
  const [bannerState, setBannerState] = useState<BannerState>("hidden");

  // Banner animation
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
    if (!canPlay) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let hasPlayed = false;

    const playAudio = () => {
      if (hasPlayed) return;
      hasPlayed = true;

      const audio = new Audio("/welcome.mp3");
      audio.volume = 1;
      audio.preload = "auto";

      audio.play()
        .then(() => {
          console.log("Welcome audio played");
          sessionStorage.setItem(SESSION_KEY, "1");
        })
        .catch((err) => {
          console.error("Audio play failed:", err);
        });

      // Remove listeners after first play
      window.removeEventListener("wheel", playAudio);
      window.removeEventListener("touchmove", playAudio);
    };

    // Desktop scroll
    window.addEventListener("wheel", playAudio, { passive: true });
    // Mobile scroll
    window.addEventListener("touchmove", playAudio, { passive: true });

    return () => {
      window.removeEventListener("wheel", playAudio);
      window.removeEventListener("touchmove", playAudio);
    };
  }, [canPlay]);

  return { bannerState };
}
