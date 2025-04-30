import { useEffect, useRef } from "react";

function BackgroundAudio({ src, targetVolume = 0.2 }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0;
    audio.muted = false;

    const startAudio = () => {
      audio.play().then(() => {
        let currentVolume = 0;
        const fadeIn = setInterval(() => {
          currentVolume += 0.01;
          audio.volume = Math.min(currentVolume, targetVolume);
          if (currentVolume >= targetVolume) clearInterval(fadeIn);
        }, 100);
      }).catch(err => {
        console.error("Autoplay failed:", err);
      });

      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
    };
  }, [targetVolume]);

  return (
    <audio ref={audioRef} src={src} />
  );
}

export default BackgroundAudio;
