import { useState } from "react";
import trumpHero from "../assets/mijn-nieuws/trump-hero.png";
import trumpSmall from "../assets/mijn-nieuws/trump-small.png";
import oekraineHero from "../assets/mijn-nieuws/oekraine-hero.png";
import oekraineSmall from "../assets/mijn-nieuws/oekraine-small.png";
import klimaatHero from "../assets/mijn-nieuws/klimaat-hero.png";
import klimaatSmall from "../assets/mijn-nieuws/klimaat-small.png";
import WeergaveSheet, { type ViewMode } from "./WeergaveSheet";
import { type Article, ArticleHero, ArticleRow } from "./shared/Teasers";

const tuneIconPath =
  "M5.33333 11.6666V8H6.3333V9.33333H11.6666V10.3333H6.3333V11.6666H5.33333ZM0 10.3333V9.33333H3.66663V10.3333H0ZM2.66667 7.66663V6.3333H0V5.33333H2.66667V4H3.66663V7.66663H2.66667ZM5.33333 6.3333V5.33333H11.6666V6.3333H5.33333ZM8 3.66663V0H8.99997V1.33333H11.6666V2.3333H8.99997V3.66663H8ZM0 2.3333V1.33333H6.3333V2.3333H0Z";
const settingsIconPath =
  "M7.08845 19L6.70768 15.9538C6.43973 15.8641 6.16504 15.7384 5.88363 15.5769C5.60221 15.4153 5.3506 15.2422 5.1288 15.0576L2.30765 16.2499L0 12.25L2.44038 10.4058C2.41729 10.257 2.40094 10.1077 2.39133 9.95768C2.38171 9.80768 2.3769 9.65832 2.3769 9.5096C2.3769 9.36728 2.38171 9.22273 2.39133 9.07593C2.40094 8.92913 2.41729 8.76855 2.44038 8.5942L0 6.74998L2.30765 2.76925L5.11917 3.95195C5.36021 3.76092 5.61758 3.58623 5.8913 3.4279C6.16503 3.26955 6.43395 3.1423 6.69805 3.04615L7.08845 0H11.7038L12.0845 3.05578C12.3845 3.16474 12.656 3.29198 12.899 3.4375C13.1419 3.58302 13.3871 3.7545 13.6346 3.95195L16.4846 2.76925L18.7922 6.74998L16.3134 8.62303C16.3493 8.78458 16.3688 8.93554 16.372 9.07593C16.3752 9.21631 16.3768 9.35766 16.3768 9.49998C16.3768 9.63588 16.3736 9.77402 16.3672 9.9144C16.3608 10.0548 16.3377 10.2154 16.298 10.3962L18.7576 12.25L16.4499 16.2499L13.6346 15.048C13.3871 15.2455 13.1345 15.4201 12.8768 15.5721C12.6191 15.724 12.355 15.848 12.0845 15.9442L11.7038 19H7.08845ZM8.3961 17.5H10.3615L10.7211 14.8211C11.2313 14.6878 11.6977 14.4984 12.1201 14.2529C12.5426 14.0074 12.9499 13.6917 13.3422 13.3058L15.8269 14.35L16.8115 12.65L14.6423 11.0154C14.7256 10.7564 14.7823 10.5025 14.8124 10.2538C14.8426 10.0051 14.8576 9.75383 14.8576 9.49998C14.8576 9.23973 14.8426 8.98844 14.8124 8.74613C14.7823 8.50383 14.7256 8.25639 14.6423 8.00383L16.8307 6.34998L15.8461 4.64998L13.3326 5.7096C12.998 5.3519 12.5971 5.03588 12.1298 4.76153C11.6624 4.48716 11.1897 4.29293 10.7115 4.17883L10.3961 1.49998H8.41148L8.08073 4.1692C7.57046 4.28972 7.0993 4.47433 6.66725 4.72305C6.2352 4.97177 5.82303 5.29228 5.43073 5.6846L2.9461 4.64998L1.96148 6.34998L4.1211 7.9596C4.03777 8.19677 3.97943 8.44356 3.9461 8.69998C3.91277 8.95639 3.8961 9.22627 3.8961 9.5096C3.8961 9.76985 3.91277 10.025 3.9461 10.275C3.97943 10.525 4.03456 10.7718 4.11147 11.0154L1.96148 12.65L2.9461 14.35L5.4211 13.3C5.80058 13.6897 6.20635 14.009 6.6384 14.2577C7.07045 14.5064 7.54802 14.6974 8.0711 14.8308L8.3961 17.5ZM9.40763 12.5C10.2397 12.5 10.9477 12.208 11.5316 11.624C12.1156 11.04 12.4076 10.332 12.4076 9.49998C12.4076 8.66794 12.1156 7.95993 11.5316 7.37595C10.9477 6.79198 10.2397 6.5 9.40763 6.5C8.56534 6.5 7.85477 6.79198 7.27592 7.37595C6.69709 7.95993 6.40768 8.66794 6.40768 9.49998C6.40768 10.332 6.69709 11.04 7.27592 11.624C7.85477 12.208 8.56534 12.5 9.40763 12.5Z";

type Topic = { id: string; title: string; articles: Article[] };

const TOPICS: Topic[] = [
  {
    id: "trump",
    title: "Trump",
    articles: [
      {
        label: "Podcast",
        title: "Trump wil 'Truth-posts' voor 1,2 miljoen dollar per jaar verkopen aan Wall Street: “Dit slaat echt alles”",
        intro:
          "Grote beleggers op Wall Street bereiden zich voor op een nieuwe datafeed van Trump Media, die vanaf 1 augustus voor 100.000 dollar een snellere toegang biedt tot berichten van de president.",
        image: trumpHero,
        hasAudio: true,
      },
      { label: "Video", title: "Trump krijgt deze keer geen foto tussen de overwinnaars, maar treuzelt lang genoeg om in beeld te blijven", image: trumpSmall },
      { label: "VS", title: "Trumps nieuwe Air Force One mist afweer, maar kritiek wordt niet geduld" },
      { label: "De grote markt", title: "Trump wil 'Truth-posts' voor 1,2 miljoen dollar per jaar verkopen aan Wall Street: “Dit slaat echt alles”" },
    ],
  },
  {
    id: "oekraine",
    title: "Oekraïne",
    articles: [
      {
        label: "Oekraïne",
        title: 'Tien gewonden na Oekraïens drone-salvo in regio rond Moskou: "Grootste in jaren"',
        intro: "Het Oekraïense leger heeft daags na de Russische aanvallen op Kiev een reeks bombardementen uitgevoerd in verschillende Russische regio's.",
        image: oekraineHero,
      },
      { label: "In beeld", title: "Rusland treft verschillende civiele doelen in Kiev", image: oekraineSmall },
      { label: "Oekraïne", title: "Oekraïne valt drie oliedepots aan in Russische regio Stavropol, ook tankers in Zwarte Zee getroffen" },
      { label: "Oekraïne", title: '"Rusland heeft grootste aantal ballistische raketten afgevuurd op Oekraïne sinds start oorlog"' },
    ],
  },
  {
    id: "klimaat",
    title: "Klimaat",
    articles: [
      {
        label: "Klimaat",
        title: "Europees compromis voor emissiehandel: industrie mag het klimaat nog wat langer opwarmen, maar einddoel blijft overeind",
        intro: "De Europese industrie reageerde ontgoocheld op het nieuwe ETS-voorstel.",
        image: klimaatHero,
      },
      { label: "In Europa", title: "De beschaving trekt zich terug: in Noord-Portugal neemt de natuur het over en zijn de gieren weer baas", image: klimaatSmall },
      { label: "Economie", title: "Belgische economie creëert in het buitenland jobs en meerwaarde, maar ook luchtvervuiling" },
      { label: "Luister", title: "Hitte veroorzaakt almaar meer economische schade: “We zijn georganiseerd op een klimaat dat er niet langer is”", hasAudio: true },
    ],
  },
];

function TuneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 11.6666 11.6666" fill="none">
      <path d={tuneIconPath} fill="var(--color-primary-100)" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 18.7922 19" fill="none">
      <path d={settingsIconPath} fill="black" />
    </svg>
  );
}

function TopicSection({ topic, viewMode, articleCount }: { topic: Topic; viewMode: ViewMode; articleCount: number }) {
  const articles = topic.articles.slice(0, articleCount);
  const showImages = viewMode !== "tekst";

  return (
    <div className="flex w-full flex-col items-start gap-[var(--scale-7)] px-[var(--scale-7)]">
      <div className="flex w-full items-center justify-between rounded-[var(--scale-3)] bg-[var(--color-neutral-10)] px-[var(--scale-7)] py-[var(--scale-6)]">
        <span className="font-[family-name:var(--font-family-primary)] text-[length:var(--font-size-lg)] font-semibold text-black">{topic.title}</span>
        <SettingsIcon />
      </div>

      {viewMode === "rijk" ? (
        <>
          <ArticleHero article={articles[0]} />
          {articles.slice(1).map((article, i) => (
            <ArticleRow key={i} article={showImages ? article : { ...article, image: undefined }} />
          ))}
        </>
      ) : (
        articles.map((article, i) => (
          <ArticleRow key={i} article={showImages ? article : { ...article, image: undefined }} />
        ))
      )}

      <button
        type="button"
        className="w-full pb-[var(--scale-7)] text-center font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-primary-60)]"
      >
        Meer {topic.title} ›
      </button>
    </div>
  );
}

export default function MijnNieuwsContent() {
  const [viewMode, setViewMode] = useState<ViewMode>("rijk");
  const [articleCount, setArticleCount] = useState(5);
  const [sheetOpen, setSheetOpen] = useState(false);

  const totalArticles = TOPICS.reduce((sum, topic) => sum + Math.min(articleCount, topic.articles.length), 0);

  return (
    <div className="flex w-full flex-col items-center gap-[var(--scale-9)]">
      <div className="flex w-full items-center justify-between px-[var(--scale-7)]">
        <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-neutral-70)]">
          {TOPICS.length} topics • {totalArticles} nieuwsitems
        </span>
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="flex items-center gap-[var(--scale-2)] rounded-[var(--scale-2)] border border-[var(--color-primary-100)] px-[13px] py-[var(--scale-5)]"
        >
          <span className="font-[family-name:var(--font-family-secondary)] text-[length:var(--font-size-sm)] text-[var(--color-primary-100)]">Weergave</span>
          <TuneIcon />
        </button>
      </div>

      {TOPICS.map((topic) => (
        <TopicSection key={topic.id} topic={topic} viewMode={viewMode} articleCount={articleCount} />
      ))}

      {sheetOpen && (
        <WeergaveSheet
          viewMode={viewMode}
          onSelectViewMode={setViewMode}
          articleCount={articleCount}
          onSelectArticleCount={setArticleCount}
          topicLabels={TOPICS.map((topic) => topic.title)}
          onBack={() => setSheetOpen(false)}
        />
      )}
    </div>
  );
}
