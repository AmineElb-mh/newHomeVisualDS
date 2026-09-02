import { type Article, ArticleLabel } from "./Teasers";
import crestImage from "../../assets/sport/crest.png";
import adImage from "../../assets/sport/ad-placeholder.png";

export function PillRow({ pills, linkedPill, onSelectLinkedPill }: { pills: string[]; linkedPill: string; onSelectLinkedPill: () => void }) {
  return (
    <div className="flex w-full gap-[var(--scale-5)] overflow-x-auto px-[var(--scale-7)] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
      {pills.map((pill) =>
        pill === linkedPill ? (
          <button
            key={pill}
            type="button"
            onClick={onSelectLinkedPill}
            className="shrink-0 rounded-[var(--scale-infinite)] border border-[var(--color-neutral-30)] bg-white px-[var(--scale-6)] py-[var(--scale-5)] font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-black"
          >
            {pill}
          </button>
        ) : (
          <span
            key={pill}
            className="shrink-0 rounded-[var(--scale-infinite)] border border-[var(--color-neutral-30)] bg-white px-[var(--scale-6)] py-[var(--scale-5)] font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-black"
          >
            {pill}
          </span>
        ),
      )}
    </div>
  );
}

export function LiveRaceBanner() {
  return (
    <div className="flex h-[59px] w-full shrink-0 px-[var(--scale-7)]">
      <div className="flex h-full shrink-0 items-center justify-center rounded-l-[var(--scale-3)] bg-[var(--color-secondary-80)] px-[var(--scale-5)]">
        <span className="rotate-180 font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] font-semibold text-white [writing-mode:vertical-lr]">
          LIVE
        </span>
      </div>
      <div className="flex flex-1 items-center justify-between rounded-r-[var(--scale-3)] bg-[var(--color-neutral-10)] px-[var(--scale-6)]">
        <div className="flex items-center gap-[var(--scale-5)]">
          <img src={crestImage} alt="" className="size-[24px] shrink-0 rounded-[var(--scale-infinite)] object-cover" />
          <div className="flex flex-col font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-primary-70)]">
            <span className="font-semibold">Tour de France</span>
            <span>Vichy - Nevers</span>
          </div>
        </div>
        <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-primary-70)]">132 km</span>
      </div>
    </div>
  );
}

export function AdPlaceholder() {
  return (
    <div className="flex h-[307px] w-full shrink-0 flex-col gap-[var(--scale-5)] bg-[var(--color-neutral-10)] p-[var(--scale-7)]">
      <p className="text-center font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-xs)] text-black">Advertentie</p>
      <div className="flex flex-1 items-center justify-center">
        <img src={adImage} alt="" className="max-h-full max-w-full object-contain" />
      </div>
    </div>
  );
}

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full border-t-2 border-black px-[var(--scale-7)] pt-[var(--scale-6)]">
      <span className="flex items-center gap-[var(--scale-3)] font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-lg)] font-semibold text-black">
        {title} <span aria-hidden>›</span>
      </span>
    </div>
  );
}

export function SectionCloseLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="w-full px-[var(--scale-7)] pb-[var(--scale-6)] text-center font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] font-semibold text-black"
    >
      {label} ›
    </button>
  );
}

export function OpinionCard({ article, centered = true }: { article: Article & { author?: string }; centered?: boolean }) {
  return (
    <div className={`flex w-full flex-col gap-[var(--scale-5)] border-b border-[var(--color-neutral-30)] px-[var(--scale-7)] py-[var(--scale-9)] ${centered ? "items-center" : "items-start"}`}>
      <div className={`flex flex-col gap-[var(--scale-3)] ${centered ? "items-center text-center" : "items-start"}`}>
        <ArticleLabel label={article.label} />
        <p className="font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-2xl)] font-bold leading-[1.15] text-black">{article.title}</p>
        {article.intro && (
          <p className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] leading-[1.35] text-[var(--color-neutral-70)]">{article.intro}</p>
        )}
        {article.author && (
          <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-black">{article.author}</span>
        )}
      </div>
      {article.image && (
        <div className="aspect-[343/193] w-full overflow-hidden">
          <img src={article.image} alt="" className="size-full object-cover" />
        </div>
      )}
    </div>
  );
}
