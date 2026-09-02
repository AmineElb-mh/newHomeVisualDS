import { useState } from "react";
import SwipeCarousel from "../SwipeCarousel";
import Header from "./components/Header";
import TabRow from "./components/TabRow";
import BottomNav from "./components/BottomNav";
import Kijk from "./kijk/Kijk";
import DsPolitiek from "../../imports/DsPolitiek-1/index";
import DsOpinie from "../../imports/DsOpinie-1/index";
import DsCultuur from "../../imports/DsCultuur-1/index";
import DsMijnNieuws from "./content/MijnNieuwsContent";
import DsVandaag from "../../imports/DsVandaag-1/index";
import DsRecent from "../../imports/DsRecent-1/index";
import DsEconomie from "../../imports/DsEconomie-1/index";
import DsSport from "./content/SportContent";
import DsSecties from "../../imports/DsSecties-1/index";

const pages = [
  DsPolitiek,
  DsOpinie,
  DsCultuur,
  DsMijnNieuws,
  DsVandaag,
  DsRecent,
  DsEconomie,
  DsSport,
  DsSecties,
];
const START_PAGE_INDEX = 4; // Vandaag

function FeedBottomNav({ onNavigate }: { onNavigate: (tab: "actueel" | "kijk") => void }) {
  return <BottomNav activeTab="actueel" onNavigate={onNavigate} />;
}

export default function App() {
  const [view, setView] = useState<"feed" | "kijk">("feed");

  if (view === "kijk") {
    return <Kijk onExit={() => setView("feed")} />;
  }

  return (
    <SwipeCarousel
      pages={pages}
      Header={Header}
      TabRow={TabRow}
      BottomNav={() => <FeedBottomNav onNavigate={(tab) => tab === "kijk" && setView("kijk")} />}
      initialIndex={START_PAGE_INDEX}
    />
  );
}
