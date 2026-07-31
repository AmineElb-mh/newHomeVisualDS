import { useEffect, useRef, type ReactNode } from "react";

/**
 * A horizontally scrollable container that swallows the gestures the page-level
 * SwipeCarousel listens for, so scrolling through these items never triggers a
 * page/tab change. The carousel attaches a *native* wheel listener plus React
 * touch/mouse handlers on ancestors, so we stop propagation with native
 * listeners here (before the events can bubble up to the carousel).
 */
export default function HorizontalScroller({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const stop = (e: Event) => e.stopPropagation();
    const onWheel = (e: WheelEvent) => {
      // Only intercept horizontal intent; vertical scroll should still bubble
      // so the page can keep scrolling normally.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel);
    el.addEventListener("touchstart", stop);
    el.addEventListener("touchmove", stop);
    el.addEventListener("touchend", stop);
    el.addEventListener("mousedown", stop);
    el.addEventListener("mouseup", stop);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", stop);
      el.removeEventListener("touchmove", stop);
      el.removeEventListener("touchend", stop);
      el.removeEventListener("mousedown", stop);
      el.removeEventListener("mouseup", stop);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
