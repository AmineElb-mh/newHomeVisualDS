import { useEffect, useRef } from "react";

const TABS = ["Vrouw", "Misdaad", "Sport", "Mijn Nieuws", "Vandaag", "Financieel", "Lifestyle", "Entertainment", "Onderwerpen"];

export default function TabRow({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect?: (index: number) => void;
}) {
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Native scrollIntoView owns all the centering/clamping math itself —
    // it naturally leaves "Politiek"/"Opinie" pinned at the start (there's
    // nowhere left to scroll to center them) and centers later tabs,
    // without any custom pixel measurement that can drift out of sync
    // under rapid successive tab changes.
    activeTabRef.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIndex]);

  return (
    <div
      className="bg-[color:var(--color-primary-60)] content-stretch flex items-start pointer-events-auto sticky top-0 w-[375px] overflow-x-auto [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
      data-name="TabRow-Brand"
    >
      <div
        className="content-stretch flex gap-[var(--scale-9)] items-center px-[var(--scale-7)] relative shrink-0"
        data-name="TabRow"
      >
        {TABS.map((label, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={label}
              ref={isActive ? activeTabRef : undefined}
              type="button"
              onClick={() => onSelect?.(i)}
              className="content-stretch flex items-center justify-center py-[var(--scale-8)] relative shrink-0 cursor-pointer bg-transparent border-0 appearance-none"
              data-name="Tab"
            >
              {isActive && (
                <div aria-hidden className="absolute border-white border-b-4 border-solid inset-0 pointer-events-none" />
              )}
              <div
                className={`[word-break:break-word] flex flex-col font-[family-name:var(--font-family-secondary)] justify-center leading-[0] relative shrink-0 text-[length:var(--font-size-sm)] text-center whitespace-nowrap ${
                  isActive ? "text-white font-bold" : "text-white font-normal"
                }`}
              >
                <p className="leading-[1.1]">{label}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
