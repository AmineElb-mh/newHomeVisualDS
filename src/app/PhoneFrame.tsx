import type { ReactNode } from "react";
import { useIsMobile } from "./components/ui/use-mobile";

const DEVICE_WIDTH = 375;
const DEVICE_HEIGHT = 812;
const BEZEL_WIDTH = 14;
const CORNER_RADIUS = 54;

export default function PhoneFrame({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <>{children}</>;
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
          {/* Dynamic Island: floats inside the screen with clear margin on
              every side, rather than sitting flush against the bezel. */}
          <div
            className="absolute top-[12px] left-1/2 z-20 h-[28px] w-[96px] -translate-x-1/2 rounded-full bg-black"
            aria-hidden
          />
          {children}
        </div>
      </div>
    </div>
  );
}
