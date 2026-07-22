import PhoneFrame from "./PhoneFrame";
import DsApp from "./ds/App";
import { useChameleonTheme } from "./useChameleonTheme";

export default function DsRoute() {
  useChameleonTheme("ds");
  return (
    <PhoneFrame>
      <DsApp />
    </PhoneFrame>
  );
}
