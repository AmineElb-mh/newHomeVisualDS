import { useState } from "react";
import heroMain from "../assets/sport/hero-main.png";
import heroMainRow1 from "../assets/sport/hero-main-row1.png";
import wkVoetbalHero from "../assets/sport/wk-voetbal-hero.png";
import wkVoetbalRow1 from "../assets/sport/wk-voetbal-row1.png";
import wkVoetbalRow2 from "../assets/sport/wk-voetbal-row2.png";
import tdfHero from "../assets/sport/tdf-hero.png";
import tdfRow1 from "../assets/sport/tdf-row1.png";
import tdfRow2 from "../assets/sport/tdf-row2.png";
import biekeOpinionLarge from "../assets/sport/bieke-opinion-large.png";
import biekeOpinionSmall from "../assets/sport/bieke-opinion-small.png";
import verderInSportHero from "../assets/sport/verder-in-sport-hero.png";
import verderInSportRow1 from "../assets/sport/verder-in-sport-row1.png";
import { type Article, ArticleHero, ArticleRow } from "./shared/Teasers";
import { PillRow, LiveRaceBanner, AdPlaceholder, SectionHeader, SectionCloseLink, OpinionCard } from "./shared/SportPieces";
import WielrennenContent from "./WielrennenContent";

const PILLS = ["Wielrennen", "Voetbal", "Tennis", "Formule 1", "Zaalsporten", "Atletiek"];

const HERO_ARTICLES: Article[] = [
  {
    label: "Tour de France",
    title: 'Ook Remco Evenepoel kreeg \'s avonds laat bezoek van dopingcontroleurs, Red Bull-ploegbaas Ralph Denk: "De renners waren al gaan slapen"',
    intro: "Niet alleen Jonas Vingegaard en Tadej Pogacar kregen deze Tour al een dopingcontrole op een onmenselijk uur.",
    image: heroMain,
  },
  { label: "Tour de France", title: "Op de flanken van de Solaison klimt Remco Evenepoel boven zichzelf uit", image: heroMainRow1 },
  { label: "Analyse", title: "Dit WK was een onfatsoenlijk vipfeest dat de voetbalwereld choqueerde" },
  { label: "Wielrennen", title: "Met de opgave van Vingegaard is de Tour weer een podiumkandidaat rijker" },
];

const WK_VOETBAL_ARTICLES: Article[] = [
  {
    label: "Voetbal",
    title: "Yamal zet Paredes te kijk met een veelzeggend bord tijdens de huldiging",
    intro: "Tijdens de huldiging in Madrid nam Lamine Yamal ploegmaat Leandro Paredes met een veelzeggend spandoek in het ootje.",
    image: wkVoetbalHero,
  },
  { label: "Voetbal", title: "Rudi Garcia was succesvol, maar te autoritair voor de voetbalbond", image: wkVoetbalRow1 },
  { label: "Video", title: "Trump krijgt geen foto tussen de winnaars, maar treuzelt bij de ceremonie", image: wkVoetbalRow2 },
];

const TDF_ARTICLES: Article[] = [
  {
    label: "Aan de meet",
    title: "Met elke bergrit wordt de podiumdroom van Evenepoel minder realistisch",
    intro: "Met elke bergrit die verstrijkt, wordt de kloof naar het podium voor Remco Evenepoel moeilijker te dichten.",
    image: tdfHero,
  },
  { label: "4 vragen", title: "Streng controleren of onnodig provoceren? De nachtelijke dopingtests uitgelegd", image: tdfRow1 },
  { label: "Wielrennen", title: 'Jonathan Vaughters over dopingcontroles: "Wij werden om 2 uur \'s nachts getest"', image: tdfRow2 },
];

const BIEKE_ARTICLES: Article[] = [
  {
    label: "Column",
    title: "Eén vileine bocht en een half jaar hard labeur weg",
    intro: "Eén verkeerde inschatting in de afdaling, en maanden hard labeur zijn in één klap weg.",
    author: "Bieke Purnelle",
    image: biekeOpinionLarge,
  },
  {
    label: "Column",
    title: "Mensen die niet graag hebben dat sporters vriendelijk zijn tegen elkaar",
    author: "Bieke Purnelle",
    image: biekeOpinionSmall,
  },
];

const VERDER_IN_SPORT_ARTICLES: Article[] = [
  {
    label: "Tennis",
    title: "Vrouwentennisbond gaat geslachtstesten verplichten",
    intro: "De internationale tennisbond verplicht geslachtstesten; wie de uitkomst betwist, riskeert publieke speculatie.",
    image: verderInSportHero,
  },
  { label: "Formule 1", title: "Kimi Antonelli pakt zijn zesde F1-overwinning in Spa-Francorchamps", image: verderInSportRow1 },
  { label: "Rugby", title: "Engeland wint een zinderende troostfinale tegen Frankrijk" },
];

export default function SportContent() {
  const [showWielrennen, setShowWielrennen] = useState(false);

  if (showWielrennen) {
    return <WielrennenContent onBack={() => setShowWielrennen(false)} />;
  }

  return (
    <div className="flex w-full flex-col items-center gap-[var(--scale-9)]">
      <PillRow pills={PILLS} linkedPill="Wielrennen" onSelectLinkedPill={() => setShowWielrennen(true)} />

      <div className="flex w-full flex-col items-start gap-[var(--scale-5)] px-[var(--scale-7)]">
        <LiveRaceBanner />
        <ArticleHero article={HERO_ARTICLES[0]} />
        {HERO_ARTICLES.slice(1).map((article, i) => (
          <ArticleRow key={i} article={article} />
        ))}
      </div>

      <AdPlaceholder />

      <div className="flex w-full flex-col items-start gap-[var(--scale-5)]">
        <SectionHeader title="WK voetbal" />
        <div className="flex w-full flex-col items-start gap-[var(--scale-5)] px-[var(--scale-7)]">
          <LiveRaceBanner />
          <ArticleHero article={WK_VOETBAL_ARTICLES[0]} titleSize="2xl" />
          {WK_VOETBAL_ARTICLES.slice(1).map((article, i) => (
            <ArticleRow key={i} article={article} />
          ))}
        </div>
        <SectionCloseLink label="Meer WK voetbal" />
      </div>

      <div className="flex w-full flex-col items-start gap-[var(--scale-5)]">
        <SectionHeader title="Tour de France" />
        <div className="flex w-full flex-col items-start gap-[var(--scale-5)] px-[var(--scale-7)]">
          <LiveRaceBanner />
          <ArticleHero article={TDF_ARTICLES[0]} titleSize="2xl" />
          {TDF_ARTICLES.slice(1).map((article, i) => (
            <ArticleRow key={i} article={article} />
          ))}
        </div>
        <SectionCloseLink label="Meer Tour de France" />
      </div>

      <AdPlaceholder />

      <div className="flex w-full flex-col items-start gap-[var(--scale-5)]">
        <SectionHeader title="Bieke à bloc" />
        {BIEKE_ARTICLES.map((article, i) => (
          <OpinionCard key={i} article={article} centered={i === 0} />
        ))}
        <SectionCloseLink label="Meer opinie" />
      </div>

      <div className="flex w-full flex-col items-start gap-[var(--scale-5)]">
        <SectionHeader title="Verder in sport" />
        <div className="flex w-full flex-col items-start gap-[var(--scale-5)] px-[var(--scale-7)]">
          <ArticleHero article={VERDER_IN_SPORT_ARTICLES[0]} />
          {VERDER_IN_SPORT_ARTICLES.slice(1).map((article, i) => (
            <ArticleRow key={i} article={article} />
          ))}
        </div>
        <SectionCloseLink label="Meer sport" />
      </div>
    </div>
  );
}
