import SwipeCarousel from "../SwipeCarousel";
import Header from "./components/Header";
import TabRow from "./components/TabRow";
import BottomNav from "./components/BottomNav";
import DsPolitiek from "../../imports/DsPolitiek-1/index";
import DsOpinie from "../../imports/DsOpinie-1/index";
import DsCultuur from "../../imports/DsCultuur-1/index";
import DsMijnNieuws from "../../imports/DsMijnNieuws-1/index";
import DsVandaag from "../../imports/DsVandaag-1/index";
import DsRecent from "../../imports/DsRecent-1/index";
import DsEconomie from "../../imports/DsEconomie-1/index";
import DsPuzzels from "../../imports/DsPuzzels-1/index";
import DsSecties from "../../imports/DsSecties-1/index";

const pages = [
  DsPolitiek,
  DsOpinie,
  DsCultuur,
  DsMijnNieuws,
  DsVandaag,
  DsRecent,
  DsEconomie,
  DsPuzzels,
  DsSecties,
];
const START_PAGE_INDEX = 4; // Vandaag

export default function App() {
  return <SwipeCarousel pages={pages} Header={Header} TabRow={TabRow} BottomNav={BottomNav} initialIndex={START_PAGE_INDEX} />;
}
