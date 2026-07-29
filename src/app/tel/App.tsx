import { useState } from "react";
import SwipeCarousel from "../SwipeCarousel";
import Header from "./components/Header";
import TabRow from "./components/TabRow";
import BottomNav from "./components/BottomNav";
import Kijk from "./kijk/Kijk";
import VandaagContent from "./content/VandaagContent";
import FinancieelContent from "./content/FinancieelContent";
import LifestyleContent from "./content/LifestyleContent";
import EntertainmentContent from "./content/EntertainmentContent";
import VrouwContent from "./content/VrouwContent";
import MisdaadContent from "./content/MisdaadContent";
import SportContent from "./content/SportContent";
import MijnNieuwsContent from "./content/MijnNieuwsContent";
import TelOnderwerpen from "../../imports/TelOnderwerpen-1/index";

const pages = [VrouwContent, MisdaadContent, SportContent, MijnNieuwsContent, VandaagContent, FinancieelContent, LifestyleContent, EntertainmentContent, TelOnderwerpen];
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
