import PhoneFrame from "./PhoneFrame";
import TelApp from "./tel/App";
import { useChameleonTheme } from "./useChameleonTheme";

export default function TelRoute() {
  useChameleonTheme("tel");
  return (
    <PhoneFrame>
      <TelApp />
    </PhoneFrame>
  );
}
