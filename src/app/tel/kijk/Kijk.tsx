import { useEffect, useRef, useState } from "react";
import StatusBar from "../../components/StatusBar";
import BottomNav from "../components/BottomNav";
import VideoSlide, { type VideoSlideData } from "./VideoSlide";

const SLIDES: VideoSlideData[] = [
  {
    src: "/videos/video1.mp4",
    category: "Video",
    title: "Carola Schouten na abseiltocht Euromast",
    topicsCount: 3,
  },
  {
    src: "/videos/video2.mp4",
    category: "Video",
    title: "'Ze hebben er schijt aan!' Vrachtwagens blijven over Merwedebrug rijden",
    topicsCount: 3,
  },
];

const PILL_TABS = ["Vandaag", "Sport", "Amerikaanse politiek", "Koken"];

export default function Kijk({ onExit }: { onExit: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.slideIndex);
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { root: container, threshold: 0.6 },
    );

    container.querySelectorAll("[data-slide-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative size-full flex flex-col overflow-hidden select-none bg-black">
      <div className="absolute top-0 left-0 right-0 z-10">
        <StatusBar dark />
      </div>

      {/* Fixed pill tabs — sit above the video feed and do not move when swiping between slides */}
      <div
        className="absolute top-[64px] left-0 right-0 z-10 flex gap-[var(--scale-5)] items-center overflow-x-auto px-[var(--scale-7)] [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
        data-name="Kijk-PillTabs"
      >
        {PILL_TABS.map((label) => (
          <div
            key={label}
            className="shrink-0 rounded-[var(--scale-infinite)] bg-black/30 backdrop-blur-sm px-[var(--scale-7)] py-[var(--scale-4)]"
          >
            <p className="[word-break:break-word] whitespace-nowrap font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-white/90">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div ref={containerRef} className="relative flex-1 overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
        {SLIDES.map((slide, index) => (
          <div key={slide.src} data-slide-index={index} className="h-full w-full snap-start">
            <VideoSlide data={slide} isActive={index === activeIndex} />
          </div>
        ))}
      </div>

      <BottomNav activeTab="kijk" onNavigate={(tab) => tab === "actueel" && onExit()} />
    </div>
  );
}
