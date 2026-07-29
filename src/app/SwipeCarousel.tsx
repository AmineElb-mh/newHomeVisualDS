import { useRef, useState, useCallback, useEffect, type ComponentType } from "react";
import { animate } from "motion/react";

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

export type TabRowComponent = ComponentType<{
  activeIndex: number;
  onSelect?: (index: number) => void;
}>;

export type SwipeCarouselProps = {
  pages: ComponentType[];
  Header: ComponentType;
  TabRow: TabRowComponent;
  BottomNav: ComponentType;
  initialIndex?: number;
};

// Brand-agnostic swipeable multi-page carousel: fixed Header/TabRow/BottomNav
// chrome, only the content area between them slides on swipe (touch, mouse
// drag, or trackpad wheel) or on a direct TabRow tap. Used by both the DS
// and Telegraaf prototypes — see App.tsx in each brand folder for the
// brand-specific pages/chrome passed in as props.
export default function SwipeCarousel({ pages, Header, TabRow, BottomNav, initialIndex = 0 }: SwipeCarouselProps) {
  const clampedInitialIndex = Math.max(0, Math.min(pages.length - 1, initialIndex));

  const [currentIndex, setCurrentIndex] = useState(clampedInitialIndex);
  const [transition, setTransition] = useState<Transition | null>(null);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollMetrics, setScrollMetrics] = useState({ thumbHeight: 0, thumbTop: 0, visible: false });

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(clampedInitialIndex);
  const isAnimatingRef = useRef(false);
  const pendingTargetRef = useRef<number | null>(null);
  const lastScrollTopRef = useRef(0);
  const scrollIdleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (scrollIdleTimerRef.current) window.clearTimeout(scrollIdleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const goTo = useCallback(
    (targetIndex: number) => {
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
    },
    [pages.length],
  );

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

  const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const delta = scrollTop - lastScrollTopRef.current;

    // Show the scrollbar only while actively scrolling; hide it again once
    // scrolling goes idle for a short moment.
    if (!isScrolling) setIsScrolling(true);
    if (scrollIdleTimerRef.current) window.clearTimeout(scrollIdleTimerRef.current);
    scrollIdleTimerRef.current = window.setTimeout(() => setIsScrolling(false), 700);

    // Custom overlay scrollbar metrics: computed from the scroll geometry so
    // the indicator floats over the content and never affects layout width.
    const { scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight > clientHeight) {
      const trackHeight = clientHeight;
      const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 32);
      const maxThumbTop = trackHeight - thumbHeight;
      const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;
      setScrollMetrics({ thumbHeight, thumbTop, visible: true });
    } else {
      setScrollMetrics((m) => (m.visible ? { ...m, visible: false } : m));
    }

    // Near the very top we always show the full header chrome again.
    if (scrollTop <= 8) {
      if (isHeaderCollapsed) setIsHeaderCollapsed(false);
      lastScrollTopRef.current = scrollTop;
      return;
    }

    // Ignore tiny scroll jitter to avoid flicker.
    if (Math.abs(delta) < 4) {
      lastScrollTopRef.current = scrollTop;
      return;
    }

    if (delta > 0 && scrollTop > 24 && !isHeaderCollapsed) {
      setIsHeaderCollapsed(true);
    } else if (delta < 0 && isHeaderCollapsed) {
      setIsHeaderCollapsed(false);
    }

    lastScrollTopRef.current = scrollTop;
  };

  return (
    <div className="relative size-full flex flex-col overflow-hidden select-none">
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[max-height] ${isHeaderCollapsed ? "max-h-[54px]" : "max-h-[102px]"}`}
      >
        <Header />
      </div>
      <TabRow activeIndex={transition ? transition.to : currentIndex} onSelect={goTo} />
      <style>{`
        .swipe-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .swipe-scroll::-webkit-scrollbar { width: 0; height: 0; background: transparent; }
      `}</style>
      <div className="relative flex-1 min-h-0">
        <div
          ref={containerRef}
          className="swipe-scroll absolute inset-0 overflow-y-auto overflow-x-hidden pt-[var(--scale-5)]"
          onScroll={handleContentScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {transition ? (
            <div ref={rowRef} className="flex" style={{ width: transition.width * 2 }}>
              <Slide pages={pages} pageIndex={transition.direction > 0 ? transition.from : transition.to} width={transition.width} />
              <Slide pages={pages} pageIndex={transition.direction > 0 ? transition.to : transition.from} width={transition.width} />
            </div>
          ) : (
            <CurrentPage />
          )}
        </div>
        {/* Overlay scrollbar: floats over content, never affects layout width */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[2px] top-0 w-[6px] rounded-full transition-opacity duration-200"
          style={{
            height: scrollMetrics.thumbHeight,
            transform: `translateY(${scrollMetrics.thumbTop}px)`,
            background: "rgba(0, 0, 0, 0.28)",
            opacity: isScrolling && scrollMetrics.visible ? 1 : 0,
          }}
        />
      </div>
      <BottomNav />
    </div>
  );
}

function Slide({ pages, pageIndex, width }: { pages: ComponentType[]; pageIndex: number; width: number }) {
  const Page = pages[pageIndex];
  return (
    <div style={{ width, flexShrink: 0 }}>
      <Page />
    </div>
  );
}
