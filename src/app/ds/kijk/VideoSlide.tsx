import { useEffect, useRef, useState } from "react";
import { Heart, Share2, Volume2, VolumeX } from "lucide-react";

export type VideoSlideData = {
  src: string;
  category: string;
  title: string;
  topicsCount: number;
};

export default function VideoSlide({ data, isActive }: { data: VideoSlideData; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black" data-name="VideoSlide">
      <video
        ref={videoRef}
        src={data.src}
        loop
        playsInline
        muted={isMuted}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Category chip */}
      <div
        className="absolute top-[112px] left-[var(--scale-7)] flex items-center gap-[var(--scale-5)] rounded-[var(--scale-infinite)] bg-black/30 backdrop-blur-sm py-[var(--scale-4)] pl-[var(--scale-4)] pr-[var(--scale-7)]"
        data-name="Kijk-CategoryChip"
      >
        <div className="relative flex size-[16px] shrink-0 items-center justify-center rounded-[var(--scale-3)]" style={{ backgroundColor: "var(--color-red-60)" }}>
          <span className="text-white text-[10px] leading-none font-bold">+</span>
        </div>
        <p className="[word-break:break-word] whitespace-nowrap font-[family-name:var(--font-family-secondary)] font-semibold text-[length:var(--font-size-xs)] text-white uppercase">
          {data.category}
        </p>
      </div>

      {/* Right action rail */}
      <div className="absolute right-[var(--scale-7)] bottom-[220px] flex flex-col items-center gap-[var(--scale-9)]" data-name="Kijk-ActionRail">
        <button type="button" onClick={() => setIsLiked((v) => !v)} className="flex flex-col items-center gap-[var(--scale-3)] bg-transparent border-0 cursor-pointer">
          <Heart size={28} strokeWidth={2} color="white" fill={isLiked ? "white" : "none"} />
        </button>
        <button type="button" className="flex flex-col items-center gap-[var(--scale-3)] bg-transparent border-0 cursor-pointer">
          <Share2 size={26} strokeWidth={2} color="white" />
        </button>
        <button type="button" onClick={() => setIsMuted((v) => !v)} className="flex flex-col items-center gap-[var(--scale-3)] bg-transparent border-0 cursor-pointer">
          {isMuted ? <VolumeX size={26} strokeWidth={2} color="white" /> : <Volume2 size={26} strokeWidth={2} color="white" />}
        </button>
      </div>

      {/* Bottom text overlay — gradient + background blur box starts 16px above the title (Figma "feed blur" spec) */}
      <div
        className="absolute inset-x-0 bottom-0 px-[var(--scale-7)] pb-[var(--scale-11)] pt-[var(--scale-7)]"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        data-name="Kijk-Overlay"
      >
        <p
          className="[word-break:break-word] font-[family-name:var(--font-family-primary)] font-bold leading-[1.1] text-[length:var(--font-size-3xl)] text-white [text-shadow:1px_0_4px_rgba(0,0,0,0.8)]"
        >
          {data.title}
        </p>
        <div className="mt-[var(--scale-7)] flex items-center gap-[var(--scale-4)]">
          <div className="flex items-center">
            {Array.from({ length: Math.min(data.topicsCount, 3) }).map((_, i) => (
              <div
                key={i}
                className="size-[18px] rounded-[var(--scale-infinite)] border-[1.5px] border-black bg-[color:var(--color-tertiary-60)]"
                style={{ marginLeft: i === 0 ? 0 : -6 }}
              />
            ))}
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-xs)] text-white/75 [text-shadow:1px_0_4px_rgba(0,0,0,0.8)]">
            {data.topicsCount} onderwerpen
          </p>
        </div>
      </div>
    </div>
  );
}
