import { useRef, useState, useCallback, useEffect } from "react";
import { animate } from "motion/react";
import Header from "./components/Header";
import TabRow from "./components/TabRow";
import BottomNav from "./components/BottomNav";
import DsPolitiek from "../imports/DsPolitiek-1/index";
import DsOpinie from "../imports/DsOpinie-1/index";
import DsCultuur from "../imports/DsCultuur-1/index";
import DsMijnNieuws from "../imports/DsMijnNieuws-1/index";
import DsVandaag from "../imports/DsVandaag-1/index";
import DsRecent from "../imports/DsRecent-1/index";
import DsEconomie from "../imports/DsEconomie-1/index";
import DsPuzzels from "../imports/DsPuzzels-1/index";
import DsSecties from "../imports/DsSecties-1/index";

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

// Swipe tuning: high enough that scrolling/jitter never accidentally
// triggers a page change, low enough that a normal flick registers.
const WHEEL_SWIPE_THRESHOLD = 75;
const DRAG_SWIPE_THRESHOLD = 50;

// A trackpad flick keeps sending decaying "momentum" wheel events long
// after the fingers lift. Rather than a fixed cooldown (which either
// blocks a fast next swipe or, if too short, lets that momentum tail
// cross the threshold again and skip an extra page), we stay locked
// until the wheel goes fully idle for this long.
const WHEEL_IDLE_RESET_MS = 120;

const TRANSITION_DURATION = 0.22;
const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

type Transition = {
  from: number;
  to: number;
  direction: 1 | -1;
  width: number;
};

function Slide({ pageIndex, width }: { pageIndex: number; width: number }) {
  const Page = pages[pageIndex];
  return (
    <div style={{ width, flexShrink: 0 }}>
      <Page />
    </div>
  );
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState<Transition | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const pendingTargetRef = useRef<number | null>(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const goTo = useCallback((targetIndex: number) => {
    const to = Math.max(0, Math.min(pages.length - 1, targetIndex));

    // A swipe landed while the previous transition is still animating —
    // don't drop it, just remember where it wants to go and apply it the
    // moment the current one settles.
    if (isAnimatingRef.current) {
      pendingTargetRef.current = to;
      return;
    }

    const from = currentIndexRef.current;
    if (to === from) return;
    const width = containerRef.current?.getBoundingClientRect().width ?? 0;
    if (!width) return;

    containerRef.current?.scrollTo({ top: 0 });
    isAnimatingRef.current = true;
    setTransition({ from, to, direction: to > from ? 1 : -1, width });
  }, []);

  // Slide the outgoing/incoming page pair past each other, then settle
  // back to rendering a single page once the animation completes.
  useEffect(() => {
    if (!transition || !rowRef.current) return;

    const { direction, width, to } = transition;
    const startX = direction > 0 ? 0 : -width;
    const endX = direction > 0 ? -width : 0;

    const controls = animate(
      rowRef.current,
      { x: [startX, endX] },
      {
        duration: TRANSITION_DURATION,
        ease: TRANSITION_EASE,
        onComplete: () => {
          setCurrentIndex(to);
          currentIndexRef.current = to;
          setTransition(null);
          isAnimatingRef.current = false;

          const pending = pendingTargetRef.current;
          pendingTargetRef.current = null;
          if (pending !== null && pending !== to) {
            goTo(pending);
          }
        },
      },
    );

    return () => controls.stop();
  }, [transition, goTo]);

  // Trackpad/mousepad horizontal swipe, native listener so we can
  // preventDefault (React's onWheel is passive and can't block the
  // browser's own back/forward swipe gesture).
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let accumulatedDeltaX = 0;
    let locked = false;
    let idleTimer: number | undefined;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();

      // Any wheel event (including a momentum tail) pushes the "gesture
      // has ended" idle timer back, so we only unlock once it's truly over.
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        locked = false;
        accumulatedDeltaX = 0;
      }, WHEEL_IDLE_RESET_MS);

      if (locked) return;

      accumulatedDeltaX += e.deltaX;
      if (Math.abs(accumulatedDeltaX) > WHEEL_SWIPE_THRESHOLD) {
        const direction = accumulatedDeltaX > 0 ? 1 : -1;
        goTo(currentIndexRef.current + direction);
        locked = true;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      window.clearTimeout(idleTimer);
    };
  }, [goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > DRAG_SWIPE_THRESHOLD) {
      goTo(currentIndexRef.current + (dx < 0 ? 1 : -1));
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.clientX - touchStartX.current;
    const dy = e.clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > DRAG_SWIPE_THRESHOLD) {
      goTo(currentIndexRef.current + (dx < 0 ? 1 : -1));
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const CurrentPage = pages[currentIndex];

  return (
    <div className="relative size-full flex flex-col overflow-hidden select-none">
      <Header />
      <TabRow activeIndex={transition ? transition.to : currentIndex} />
      <div
        ref={containerRef}
        className="relative flex-1 overflow-y-auto overflow-x-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {transition ? (
          <div ref={rowRef} className="flex" style={{ width: transition.width * 2 }}>
            <Slide
              pageIndex={transition.direction > 0 ? transition.from : transition.to}
              width={transition.width}
            />
            <Slide
              pageIndex={transition.direction > 0 ? transition.to : transition.from}
              width={transition.width}
            />
          </div>
        ) : (
          <CurrentPage />
        )}
      </div>
      <BottomNav />
    </div>
  );
}
