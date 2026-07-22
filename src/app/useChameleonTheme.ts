import { useEffect } from "react";

// Chameleon's CSS scopes every token under [data-chameleon-theme="X"], so
// switching brands per-route is just flipping this attribute on <html>.
export function useChameleonTheme(theme: "ds" | "tel") {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.getAttribute("data-chameleon-theme");
    html.setAttribute("data-chameleon-theme", theme);
    return () => {
      if (previous) html.setAttribute("data-chameleon-theme", previous);
    };
  }, [theme]);
}
