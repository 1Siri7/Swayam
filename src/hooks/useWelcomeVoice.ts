import { useEffect, useState } from "react";

const SESSION_KEY = "swayam_welcome_played";

export function useWelcomeVoice(canPlay: boolean) {
  const [bannerState, setBannerState] = useState<"hidden" | "visible" | "fading">("hidden");

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

  // Play audio on first scroll, click, or tap
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

      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };

    window.addEventListener("scroll", playAudio, { passive: true });
    window.addEventListener("click", playAudio, { passive: true });
    window.addEventListener("touchstart", playAudio, { passive: true });

    return () => {
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, [canPlay]);

  return { bannerState };
}
