import type { ComponentType } from "react";

type MakeContentOnlyProps = {
  Page: ComponentType;
};

const CONTENT_ONLY_OVERRIDES = `
  .make-content-only {
    --tel-title-t1-color: #ffffff;
    --tel-title-t1-font-family: "Roboto Condensed", sans-serif;
    --tel-title-t1-font-size: 36px;
    --tel-title-t1-font-weight: 900;

  --tel-title-t3-color: #202223;
    --tel-title-t3-font-family: "Roboto Condensed", sans-serif;
    --tel-title-t3-font-size: 20px;
    --tel-title-t3-font-weight: 900;
  }

  .make-content-only [data-name="Navigation2.0 - MobileApp - Android"],
  .make-content-only [data-name="TEL-TabRow"],
  .make-content-only [data-name="header-nav"],
  .make-content-only [data-name="Navigation2.0 - bottom-nav"],
  .make-content-only [data-name*="bottom-nav"],
  .make-content-only [data-name*="Bottom nav"],
  .make-content-only [data-name*="Bottom Nav"] {
    display: none !important;
  }

  .make-content-only > div {
    padding-top: 0 !important;
  }

  /* T1: hoofdtitel van de eerste teaser */
  .make-content-only [class*="Roboto_Condensed:Black"][class*="text-[36px]"] {
    color: var(--tel-title-t1-color) !important;
    font-family: var(--tel-title-t1-font-family) !important;
    font-size: var(--tel-title-t1-font-size) !important;
    font-weight: var(--tel-title-t1-font-weight) !important;
  }

  /* T3: titels van normale teasers */
  .make-content-only [class*="Roboto_Condensed:Black"][class*="text-[20px]"] {
    color: var(--tel-title-t3-color) !important;
    font-family: var(--tel-title-t3-font-family) !important;
    font-size: var(--tel-title-t3-font-size) !important;
    font-weight: var(--tel-title-t3-font-weight) !important;
  }

  /* T3 op image (met text-shadow) blijft wit voor contrast */
  .make-content-only [class*="Roboto_Condensed:Black"][class*="text-[20px]"][class*="text-shadow-"] {
    color: #ffffff !important;
  }

  /* T3 titels binnen een teaser die een image-laag bevat: wit voor leesbaarheid.
     De titel ligt bovenop de image, dus zwarte tekst zou onleesbaar zijn. */
  .make-content-only [data-name="Teaser"]:has(> [aria-hidden] img) [class*="Roboto_Condensed:Black"][class*="text-[20px]"],
  .make-content-only [data-name="Teaser"]:has(> [aria-hidden] > img) [class*="Roboto_Condensed:Black"][class*="text-[20px]"] {
    color: #ffffff !important;
  }

  /* Highlights in titels gebruiken token */
  .make-content-only [class*="text-[#fdc300]"],
  .make-content-only [class*="text-[#FDC300]"] {
    color: var(--color-tel-highlight) !important;
  }

  /* Gele premium/highlight blokjes ook via token */
  .make-content-only [class*="bg-[#ffcb3d]"],
  .make-content-only [class*="bg-[#FFCB3D]"] {
    background-color: var(--color-tel-highlight) !important;
  }

  /* Premium-icoon: de Figma Make pagina's renderen een geel blokje (data-name
     ="logo-premium-main"). We vervangen dat door het echte Telegraaf premium-
     icoon uit chameleon via een background-image en verbergen de Figma-inhoud. */
  .make-content-only [data-name="logo-premium-main"] {
    background-image: var(--tel-premium-icon) !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
  .make-content-only [data-name="logo-premium-main"] > * {
    visibility: hidden !important;
  }

  /* Donkere linear overlay ENKEL op teasers waar tekst OP de image staat.
     De image-laag (aria-hidden met <img>) vult de hele teaser; de titel is een
     sibling die er bovenop ligt. We geven de image-laag een eigen stacking
     context (z-index: 0) zodat de overlay-::after (z-index: 1) BOVEN de image
     maar ONDER de titel blijft. Zo verdonkert de overlay nooit de tekst. */
  .make-content-only [data-name="Teaser"] > [aria-hidden]:has(> img) {
    z-index: 0;
  }

  .make-content-only [data-name="Teaser"] > [aria-hidden]:has(> img)::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

export default function MakeContentOnly({ Page }: MakeContentOnlyProps) {
  return (
    <div
      className="make-content-only"
      style={{ ["--tel-premium-icon" as string]: `url(/logo-premium-main.svg)` }}
    >
      <style>{CONTENT_ONLY_OVERRIDES}</style>
      <Page />
    </div>
  );
}
