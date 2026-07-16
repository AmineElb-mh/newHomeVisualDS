import { useEffect, useRef } from "react";
import { animate } from "motion/react";

const TABS = [
  "Politiek",
  "Opinie",
  "Cultuur",
  "Mijn Nieuws",
  "Vandaag",
  "Recent",
  "Economie",
  "Puzzels",
  "Onderwerpen",
];

// Below this page index there aren't enough tabs to the left to center the
// active one without revealing empty space before "Politiek" — so those
// stay pinned to the start instead.
const CENTER_FROM_INDEX = 2;

export default function TabRow({ activeIndex }: { activeIndex: number }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const activeTab = activeTabRef.current;
    if (!viewport || !track || !activeTab) return;

    const viewportWidth = viewport.getBoundingClientRect().width;
    const trackWidth = track.scrollWidth;
    const tabLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.getBoundingClientRect().width;

    let targetX = 0;
    if (activeIndex >= CENTER_FROM_INDEX) {
      const centered = viewportWidth / 2 - tabWidth / 2 - tabLeft;
      const minX = -(trackWidth - viewportWidth);
      targetX = Math.min(0, Math.max(minX, centered));
    }

    animate(track, { x: targetX }, { duration: 0.35, ease: [0.4, 0, 0.2, 1] });
  }, [activeIndex]);

  return (
    <div
      ref={viewportRef}
      className="bg-white content-stretch flex items-start pointer-events-auto sticky top-0 w-[375px] overflow-hidden"
      data-name="TabRow-Brand"
    >
      <div
        ref={trackRef}
        className="bg-white content-stretch flex gap-[var(--scale-9)] items-center px-[var(--scale-7)] relative shrink-0"
        data-name="TabRow"
      >
        <div aria-hidden className="absolute border-[var(--color-neutral-30)] border-b border-solid inset-0 pointer-events-none" />
        {TABS.map((label, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={label}
              ref={isActive ? activeTabRef : undefined}
              className="content-stretch flex items-center justify-center py-[var(--scale-8)] relative shrink-0"
              data-name="Tab"
            >
              {isActive && (
                <div
                  aria-hidden
                  className="absolute border-[var(--color-tertiary-60)] border-b-4 border-solid inset-0 pointer-events-none"
                />
              )}
              <div
                className={`[word-break:break-word] flex flex-col font-[family-name:var(--font-family-secondary)] font-normal justify-center leading-[0] relative shrink-0 text-[var(--font-size-sm)] text-center whitespace-nowrap ${
                  isActive ? "text-black" : "text-[var(--color-neutral-70)]"
                }`}
              >
                <p className="leading-[1.1]">{label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
