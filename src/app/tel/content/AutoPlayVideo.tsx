import { useEffect, useRef } from "react";

type AutoPlayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
};

// Plays the video when it scrolls into view and pauses it when it leaves,
// so it only runs while visible. Muted + playsInline so mobile browsers
// allow autoplay without user interaction.
export default function AutoPlayVideo({ src, className, poster }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* autoplay can be blocked; ignore */
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
