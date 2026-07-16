import { useIsMobile } from "./components/ui/use-mobile";
import App from "./App";

const DEVICE_WIDTH = 375;
const DEVICE_HEIGHT = 812;
const BEZEL_WIDTH = 14;
const CORNER_RADIUS = 54;

export default function PhoneFrame() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <App />;
  }

  return (
    <div className="flex size-full items-center justify-center bg-neutral-900 p-8">
      <div
        className="relative bg-black shadow-2xl"
        style={{
          width: DEVICE_WIDTH + BEZEL_WIDTH * 2,
          height: DEVICE_HEIGHT + BEZEL_WIDTH * 2,
          borderRadius: CORNER_RADIUS,
          padding: BEZEL_WIDTH,
        }}
      >
        <div
          className="absolute top-[14px] left-1/2 z-10 h-[24px] w-[110px] -translate-x-1/2 rounded-full bg-black"
          aria-hidden
        />
        <div
          className="relative overflow-hidden bg-white"
          style={{
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT,
            borderRadius: CORNER_RADIUS - BEZEL_WIDTH,
            // Establishes a containing block for `position: fixed` descendants
            // (e.g. the bottom nav) so they stay pinned to this phone screen
            // instead of escaping to the real browser viewport.
            contain: "layout",
          }}
        >
          <App />
        </div>
      </div>
    </div>
  );
}
