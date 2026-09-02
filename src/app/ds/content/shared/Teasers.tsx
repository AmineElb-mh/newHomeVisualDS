import { PlayIcon } from "./icons";

export type Article = {
  label: string;
  title: string;
  intro?: string;
  image?: string;
  hasAudio?: boolean;
  author?: string;
};

export function ArticleLabel({ label }: { label: string }) {
  return (
    <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-xs)] font-semibold uppercase text-[var(--color-secondary-80)]">
      {label}
    </span>
  );
}

export function AudioBar() {
  return (
    <div className="flex items-center gap-[var(--scale-3)] rounded-[var(--scale-infinite)] border border-[var(--color-neutral-30)] py-[var(--scale-3)] pl-[var(--scale-3)] pr-[var(--scale-6)]">
      <span className="flex size-[24px] items-center justify-center rounded-[var(--scale-infinite)] bg-black">
        <PlayIcon />
      </span>
      <span className="flex items-end gap-[2px]" aria-hidden>
        {[6, 10, 5, 9, 6, 10, 5].map((height, i) => (
          <span key={i} className="w-[2px] rounded-[var(--scale-infinite)] bg-black" style={{ height }} />
        ))}
      </span>
      <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-secondary-80)]">04:23</span>
    </div>
  );
}

export function ArticleHero({ article, titleSize = "3xl" }: { article: Article; titleSize?: "2xl" | "3xl" }) {
  return (
    <div className="flex w-full flex-col gap-[var(--scale-5)] border-b border-[var(--color-neutral-30)] pb-[var(--scale-9)]">
      {article.image && (
        <div className="aspect-[343/193] w-full overflow-hidden">
          <img src={article.image} alt="" className="size-full object-cover" />
        </div>
      )}
      <ArticleLabel label={article.label} />
      <p
        className={`font-[family-name:var(--font-family-primary)] font-bold leading-[1.1] text-black ${
          titleSize === "2xl" ? "text-[length:var(--font-size-2xl)]" : "text-[length:var(--font-size-3xl)]"
        }`}
      >
        {article.title}
      </p>
      {article.intro && (
        <p className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] leading-[1.35] text-[var(--color-neutral-70)]">{article.intro}</p>
      )}
      {article.hasAudio && <AudioBar />}
    </div>
  );
}

export function ArticleRow({ article }: { article: Article }) {
  return (
    <div className="grid w-full grid-cols-[repeat(3,minmax(0,1fr))] items-start gap-x-[var(--scale-7)] border-b border-[var(--color-neutral-30)] py-[var(--scale-9)]">
      <div className={`flex flex-col gap-[var(--scale-3)] ${article.image ? "col-span-2" : "col-span-3"}`}>
        <ArticleLabel label={article.label} />
        <p className="font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-lg)] font-semibold leading-[1.15] text-black">{article.title}</p>
        {article.author && (
          <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-xs)] text-[var(--color-neutral-70)]">{article.author}</span>
        )}
        {article.hasAudio && <AudioBar />}
      </div>
      {article.image && (
        <div className="col-span-1 aspect-[267/200] w-full shrink-0 overflow-hidden">
          <img src={article.image} alt="" className="size-full object-cover" />
        </div>
      )}
    </div>
  );
}
