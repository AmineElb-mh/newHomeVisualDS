import { BackIcon } from "./shared/icons";

export type ViewMode = "rijk" | "klein" | "tekst";

const MODE_OPTIONS: { mode: ViewMode; label: string }[] = [
  { mode: "rijk", label: "Rijk" },
  { mode: "klein", label: "Klein" },
  { mode: "tekst", label: "Tekst" },
];

function PreviewRow({ big, showImage }: { big?: boolean; showImage: boolean }) {
  return (
    <div className={`flex w-full gap-[3px] ${big ? "flex-col" : "items-center"}`}>
      <div className="flex flex-1 flex-col gap-[2px]">
        <div className="h-[2px] w-full rounded-[var(--scale-infinite)] bg-[var(--color-neutral-50)]" />
        <div className="h-[2px] w-full rounded-[var(--scale-infinite)] bg-[var(--color-neutral-50)]" />
        <div className="h-[2px] w-[60%] rounded-[var(--scale-infinite)] bg-[var(--color-neutral-50)]" />
      </div>
      {showImage &&
        (big ? (
          <div className="h-[24px] w-full shrink-0 bg-[var(--color-neutral-30)]" />
        ) : (
          <div className="size-[14px] shrink-0 bg-[var(--color-neutral-30)]" />
        ))}
    </div>
  );
}

function ModePreview({ mode }: { mode: ViewMode }) {
  const showImage = mode !== "tekst";
  return (
    <div className="flex h-[127px] w-[70px] flex-col gap-[8px] border border-[var(--color-neutral-30)] bg-white p-[8px]">
      {mode === "rijk" && <PreviewRow big showImage={showImage} />}
      {Array.from({ length: mode === "rijk" ? 3 : 4 }).map((_, i) => (
        <PreviewRow key={i} showImage={showImage} />
      ))}
    </div>
  );
}

function ViewSelector({ mode, label, selected, onSelect }: { mode: ViewMode; label: string; selected: boolean; onSelect: (mode: ViewMode) => void }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(mode)}
      className={`flex flex-1 cursor-pointer flex-col items-center gap-[var(--scale-5)] rounded-[var(--scale-3)] p-[var(--scale-6)] ${
        selected ? "border-2 border-[var(--color-primary-60)] bg-[var(--color-primary-10)]" : "border border-[var(--color-neutral-30)] bg-white"
      }`}
    >
      <ModePreview mode={mode} />
      <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-xs)] text-black">{label}</span>
      <span className="flex size-[20px] items-center justify-center rounded-[var(--scale-infinite)] border border-[var(--color-neutral-50)] bg-white">
        {selected && <span className="size-[12px] rounded-[var(--scale-infinite)] bg-[var(--color-primary-60)]" />}
      </span>
    </button>
  );
}

const ARTICLE_COUNT_OPTIONS = [5, 10, 15] as const;

function ArticleCountSelector({ value, onSelect }: { value: number; onSelect: (value: number) => void }) {
  return (
    <div className="flex items-center gap-[var(--scale-9)]">
      <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-neutral-70)]">Max.</span>
      {ARTICLE_COUNT_OPTIONS.map((count) => {
        const selected = value === count;
        return (
          <button
            key={count}
            type="button"
            onClick={() => onSelect(count)}
            className={`flex size-[48px] items-center justify-center rounded-[var(--scale-3)] ${
              selected ? "border-2 border-[var(--color-primary-60)] bg-[var(--color-primary-10)]" : "border border-[var(--color-neutral-30)]"
            }`}
          >
            <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-black">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-[var(--scale-3)]">
      <p className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] font-semibold text-black">{title}</p>
      <p className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-neutral-70)]">{description}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[var(--color-neutral-30)]" />;
}

export default function WeergaveSheet({
  viewMode,
  onSelectViewMode,
  articleCount,
  onSelectArticleCount,
  topicLabels,
  onBack,
}: {
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  articleCount: number;
  onSelectArticleCount: (count: number) => void;
  topicLabels: string[];
  onBack: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white">
      <div className="flex shrink-0 items-center gap-[var(--scale-5)] px-[var(--scale-7)] py-[var(--scale-6)]">
        <button type="button" onClick={onBack} aria-label="Terug naar Mijn Nieuws" className="flex size-[24px] items-center justify-center">
          <BackIcon />
        </button>
        <span className="flex-1 text-center font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-xl)] font-bold text-black">Weergave</span>
        <span className="size-[24px]" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col gap-[var(--scale-7)] overflow-y-auto px-[var(--scale-7)] pb-[var(--scale-6)]">
        <div className="flex flex-col gap-[var(--scale-5)]">
          <SectionHeading title="Volgorde" description="Sleep de items naar gewenste volgorde." />
          <div className="flex flex-col gap-[var(--scale-5)] border border-dashed border-[var(--color-neutral-40)] p-[var(--scale-5)]">
            {topicLabels.map((label) => (
              <div key={label} className="flex items-center justify-between bg-[var(--color-neutral-10)] px-[var(--scale-7)] py-[var(--scale-6)]">
                <span className="font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-lg)] font-semibold text-black">{label}</span>
                <span aria-hidden className="text-[length:var(--font-size-lg)] text-[var(--color-neutral-70)]">
                  ☰
                </span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-[var(--scale-5)]">
          <SectionHeading title="Weergave" description="Hoe wilt u de content in Mijn Nieuws weergeven?" />
          <div className="flex items-start justify-center gap-[var(--scale-5)]">
            {MODE_OPTIONS.map(({ mode, label }) => (
              <ViewSelector key={mode} mode={mode} label={label} selected={viewMode === mode} onSelect={onSelectViewMode} />
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-[var(--scale-5)]">
          <SectionHeading title="Aantal artikelen" description="Hoeveel artikelen wilt u per onderwerp tonen?" />
          <ArticleCountSelector value={articleCount} onSelect={onSelectArticleCount} />
        </div>

        <button
          type="button"
          onClick={onBack}
          className="mt-auto w-full shrink-0 rounded-[var(--scale-2)] bg-[var(--color-primary-60)] py-[var(--scale-6)] font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-md)] text-white"
        >
          Opslaan en sluiten
        </button>
      </div>
    </div>
  );
}
