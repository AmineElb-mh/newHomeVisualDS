import SwipeCarousel from "../SwipeCarousel";
import Header from "./components/Header";
import TabRow from "./components/TabRow";
import BottomNav from "./components/BottomNav";
import TelPolitiek from "../../imports/TelPolitiek-1/index";
import TelOpinie from "../../imports/TelOpinie-1/index";
import TelCultuur from "../../imports/TelCultuur-1/index";
import TelMijnNieuws from "../../imports/TelMijnNieuws-1/index";
import TelVandaag from "../../imports/TelVandaag-1/index";
import TelRecent from "../../imports/TelRecent-1/index";
import TelEconomie from "../../imports/TelEconomie-1/index";
import TelPuzzels from "../../imports/TelPuzzels-1/index";
import TelSecties from "../../imports/TelSecties-1/index";

// Bootstrapped as an exact structural clone of the DS prototype (same
// components, same placeholder articles) so the Telegraaf skeleton is
// immediately swipeable/functional under Telegraaf's own Chameleon tokens.
// Content gets replaced page by page once the real designs/articles land —
// see project memory for the plan.
const pages = [
  TelPolitiek,
  TelOpinie,
  TelCultuur,
  TelMijnNieuws,
  TelVandaag,
  TelRecent,
  TelEconomie,
  TelPuzzels,
  TelSecties,
];

export default function App() {
  return <SwipeCarousel pages={pages} Header={Header} TabRow={TabRow} BottomNav={BottomNav} />;
}
