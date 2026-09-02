import deRennersHero from "../assets/sport/de-renners-hero.png";
import deRennersRow1 from "../assets/sport/de-renners-row1.png";
import deRennersRow2 from "../assets/sport/de-renners-row2.png";
import deRennersRow3 from "../assets/sport/de-renners-row3.png";
import rondDeKoersHero from "../assets/sport/rond-de-koers-hero.png";
import rondDeKoersRow1 from "../assets/sport/rond-de-koers-row1.png";
import wielrennenBiekeOpinion from "../assets/sport/wielrennen-bieke-opinion.png";
import { type Article, ArticleHero, ArticleRow } from "./shared/Teasers";
import { LiveRaceBanner, AdPlaceholder, SectionHeader, SectionCloseLink, OpinionCard } from "./shared/SportPieces";
import { BackIcon } from "./shared/icons";

const DE_RENNERS_ARTICLES: Article[] = [
  {
    label: "Sprint",
    title: "De benen en het hoofd als wapens: wat van Tim Merlier zo'n killer maakt",
    intro: "Explosiviteit, koelbloedigheid en een ijzeren focus: wat sprinter Tim Merlier zo gevreesd maakt.",
    image: deRennersHero,
  },
  { label: "Wielrennen", title: "Na dagen grijze lucht trekt Mathieu van der Poel eigenhandig de hemel open", image: deRennersRow1 },
  { label: "Klassement", title: "De veerkracht van Evenepoel is podiumwaardig, zijn klimvorm (nog) niet", image: deRennersRow2 },
  { label: "Ploegen", title: "Quick Step verdwijnt, de uitdaging voor Tim Merlier en co. blijft dezelfde", image: deRennersRow3 },
];

const ROND_DE_KOERS_ARTICLES: Article[] = [
  {
    label: "Doping",
    title: "Ook Evenepoel kreeg gisteravond laat bezoek van dopingcontroleurs",
    intro: "Ook de klassementsrenners ontsnappen niet: 's nachts stonden de dopingcontroleurs aan de deur.",
    image: rondDeKoersHero,
  },
  { label: "4 vragen", title: "Streng controleren of onnodig provoceren? De nachtelijke dopingtests uitgelegd", image: rondDeKoersRow1 },
  { label: "Voeding", title: "Wie een Tourrit wil winnen, moet ook zijn maag trainen" },
];

const BIEKE_ARTICLE: Article = {
  label: "Column",
  title: "'Kieken zonder kop': Veistroffer doet zijn eigen gekke ding",
  intro: "Onze columniste over een renner die stug zijn eigen, eigenzinnige koers vaart.",
  author: "Bieke Purnelle",
  image: wielrennenBiekeOpinion,
};

export default function WielrennenContent({ onBack }: { onBack: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white">
      <div className="flex shrink-0 items-center gap-[var(--scale-5)] px-[var(--scale-7)] py-[var(--scale-6)]">
        <button type="button" onClick={onBack} aria-label="Terug naar Sport" className="flex size-[24px] items-center justify-center">
          <BackIcon />
        </button>
        <span className="flex-1 text-center font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-xl)] font-bold text-black">Wielrennen</span>
        <span className="size-[24px]" aria-hidden />
      </div>

      <div className="flex w-full flex-col items-center gap-[var(--scale-9)] pb-[var(--scale-9)]">
        <div className="flex w-full flex-col items-start gap-[var(--scale-5)] px-[var(--scale-7)]">
          <LiveRaceBanner />
          <ArticleHero article={DE_RENNERS_ARTICLES[0]} titleSize="2xl" />
          {DE_RENNERS_ARTICLES.slice(1).map((article, i) => (
            <ArticleRow key={i} article={article} />
          ))}
        </div>

        <AdPlaceholder />

        <div className="flex w-full flex-col items-start gap-[var(--scale-5)]">
          <SectionHeader title="Rond de koers" />
          <div className="flex w-full flex-col items-start gap-[var(--scale-5)] px-[var(--scale-7)]">
            <ArticleHero article={ROND_DE_KOERS_ARTICLES[0]} />
            {ROND_DE_KOERS_ARTICLES.slice(1).map((article, i) => (
              <ArticleRow key={i} article={article} />
            ))}
          </div>
          <SectionCloseLink label="Meer wielrennen" />
        </div>

        <div className="flex w-full flex-col items-start gap-[var(--scale-5)]">
          <SectionHeader title="Bieke à bloc" />
          <OpinionCard article={BIEKE_ARTICLE} />
          <SectionCloseLink label="Meer opinie" />
        </div>
      </div>
    </div>
  );
}
