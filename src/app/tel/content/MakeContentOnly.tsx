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

  /* De Figma-export gebruikt klassen als font-['Roboto_Condensed:Black']
     die Tailwind omzet naar de ONGELDIGE family-naam 'Roboto Condensed:Black'
     (met :Black/:Bold), waardoor het lettertype terugvalt op sans-serif.
     We mappen elk Roboto_Condensed-element naar het echt geladen font.
     Het gewicht komt van de font-black/font-bold utility-klassen zelf. */
  .make-content-only [class*="Roboto_Condensed"] {
    font-family: "Roboto Condensed", sans-serif !important;
  }

  /* T1: hoofdtitel. Standaard donker (op witte achtergrond, bv. column-titels).
     Wit alleen wanneer de titel op een afbeelding staat (zie regels hieronder). */
  .make-content-only [class*="Roboto_Condensed:Black"][class*="text-[36px]"] {
    color: var(--tel-title-t3-color) !important;
    font-family: var(--tel-title-t1-font-family) !important;
    font-size: var(--tel-title-t1-font-size) !important;
    font-weight: var(--tel-title-t1-font-weight) !important;
  }

  /* T1 op image (met text-shadow) wit voor contrast */
  .make-content-only [class*="Roboto_Condensed:Black"][class*="text-[36px]"][class*="text-shadow-"] {
    color: var(--tel-title-t1-color) !important;
  }

  /* T1 titels binnen een teaser die een image-laag bevat: wit voor leesbaarheid. */
  .make-content-only [data-name="Teaser"]:has(> [aria-hidden] img) [class*="Roboto_Condensed:Black"][class*="text-[36px]"],
  .make-content-only [data-name="Teaser"]:has(> [aria-hidden] > img) [class*="Roboto_Condensed:Black"][class*="text-[36px]"] {
    color: var(--tel-title-t1-color) !important;
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

  /* Donkere linear overlay op image-teasers. We herstylen de INGEBOUWDE Figma-
     gradient-div (die al de juiste richting volgt: donker aan de kant waar de
     titel staat). De gradient zit in de aria-hidden image-laag, ONDER de titel,
     dus de tekst blijft altijd leesbaar. Donkere kant = rgba(0,0,0,1), uitfadend
     naar transparant op 50%. */

  /* Titel ONDER -> donker onderaan:
     - to-t met from-donker (donker = startkleur onderaan)
     - to-b met to-donker  (donker = eindkleur onderaan) */
  .make-content-only [aria-hidden] [class*="bg-gradient-to-t"][class*="from-[rgba(0,0,0,0.5)]"],
  .make-content-only [aria-hidden] [class*="bg-gradient-to-b"][class*="to-[rgba(0,0,0,0.5)]"] {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%) !important;
  }

  /* Titel BOVEN -> donker bovenaan:
     - to-t met from-transparant (donker = eindkleur bovenaan) */
  .make-content-only [aria-hidden] [class*="bg-gradient-to-t"][class*="from-[rgba(0,0,0,0)]"] {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%) !important;
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
