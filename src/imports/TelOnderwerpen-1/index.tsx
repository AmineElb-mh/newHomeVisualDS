function NavItem({ label, isLast }: { label: string; isLast?: boolean }) {
  return (
    <div
      className={`content-stretch flex h-[56px] items-center justify-center py-[var(--scale-6)] relative shrink-0 w-full`}
      data-name="NavItem"
    >
      {!isLast && (
        <div aria-hidden className="absolute border-[color:var(--color-neutral-40)] border-b border-solid inset-0 pointer-events-none" />
      )}
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto',_sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[color:var(--color-neutral-90)] text-[14px]">
        <p className="leading-[1.15]">{label}</p>
      </div>
    </div>
  );
}

const TOPICS = [
  "Auto",
  "Binnenland",
  "Boeken",
  "Buitenland",
  "Cultuur & Media",
  "Entertainment",
  "Film & Series",
  "Financieel",
  "Formule 1",
  "Gezondheid",
  "Klimaat",
  "Koken & Recepten",
  "Misdaad",
  "Muziek",
  "Opinie",
  "Podcasts",
  "Politiek",
  "Puzzels",
  "Regio",
  "Reizen",
  "Royals",
  "Sport",
  "Tech",
  "Voetbal",
  "Wetenschap",
  "Wonen & Lifestyle",
];

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[var(--scale-7)] relative size-full">
        {TOPICS.map((topic, i) => (
          <NavItem key={topic} label={topic} isLast={i === TOPICS.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function TelOnderwerpen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[var(--scale-9)] items-center relative size-full" data-name="TEL Onderwerpen">
      <Frame1 />
    </div>
  );
}
