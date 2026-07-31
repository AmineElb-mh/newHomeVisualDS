import imgRectangle33 from "./1d9f6ad557798c7a1dc0e6f0e9b88c6204c0303e.png";
import imgRectangle34 from "./b4a5c166e625fb4c9f6806630561651aeda085a2.png";
import imgRectangle35 from "./6a85bbcf22057805c1359628e671c43fe618f803.png";
import svgPaths from "./svg-ot5u8y1y4m";
import AutoPlayVideo from "../../../app/tel/content/AutoPlayVideo";
import HorizontalScroller from "../../../app/tel/content/HorizontalScroller";
import imgHeaderLogo from "./f09b0ddcd0eef32a8b65e86f5fdc9d5858fbca93.png";
import imgTeaser from "./ec610ab4bac1f22b593fe8a46500566ed8aee910.png";
import imgImage from "./37b957358c28dbd58e7eaaec69d9b5ccba322445.png";
import imgTeaser1 from "./a663dbdf156be14cc095902a2eaf7f5dfb33f49a.png";
import imgTeaser2 from "./79cf0ba99ffecd93aa23e401d57621504f854ffd.png";
import imgTeaser3 from "./6764954f0afafbe6390062bc9f4b21859139e1ac.png";
import imgTeaser4 from "./b3f9f67d2f6f4378836a54ee65e11c6d1bc77bcc.png";
import imgTeaser5 from "./b7307901aeaf604e12770abd4766cbf690c2e211.png";
import imgImage1 from "./5053757e81fcb589bd0e5e2672e036a938c6105a.png";
import imgTeaser6 from "./d875cfd7977fd6fe558ec05c8123ce5cad87b860.png";
import imgImage2 from "./dad4bc7018d64a91522698a5a7adc51b25af2ace.png";
import imgTeaser7 from "./a5176c37df6fb2ce71ed7413ee48dce118c3756f.png";
import imgImage3 from "./42351036402021a1b0e025e04b377634f61d2fb8.png";
import imgImage4 from "./81910657cbf3cb29e2f81387d840d82f49f956c3.png";
import imgImage5 from "./0604ee97e615d5edd162633bd15714be4544dc5f.png";
import imgTeaser8 from "./a1b155b3767cc75eeaefe8a2494242f7de7184ef.png";
import imgTeaser9 from "./07303000ce97ad27e64e345f2458fb0e7bf411a9.png";
import imgTeaser10 from "./c39f4275d8f0c3e1a425b0efd43533fe9fd9764c.png";
import imgTeaser11 from "./1ca5027e53648643b9326bcd4d66433728939992.png";
import imgImage6 from "./25cb702aa71c87f1e8a215f5dd23417d748f67fd.png";
import imgImage7 from "./9e40d41a9e2c74e04b97796142292f0af4e8ae8a.png";
import imgImage8 from "./add1e723818556c56839f05e6339894118cbaae1.png";
type AdProps = {
  className?: string;
  variant?: "AD2" | "AD4" | "AD5";
};

function Ad({ className, variant = "AD2" }: AdProps) {
  return (
    <div className={className || "bg-[#ececec] h-[307px] relative w-[375px]"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.335] relative shrink-0 text-[12px] text-black text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Advertentie
        </p>
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={variant === "AD5" ? imgRectangle35 : variant === "AD4" ? imgRectangle34 : imgRectangle33} />
        </div>
      </div>
    </div>
  );
}

function StatusBarIPhone({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[1550px]"} data-name=".Status Bar - iPhone">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Time">
            <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[33.96%_36.71%_25.3%_36.96%] leading-[22px] text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
          <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Levels">
            <svg className="absolute block inset-0 size-full" fill="none" height="54" preserveAspectRatio="none" viewBox="0 0 134.065 54" width="134.065">
              <g id="Levels">
                <g id="Battery">
                  <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="white" width="24" x="78.5" y="23.5" />
                  <path d={svgPaths.p1af82040} fill="white" id="Cap" opacity="0.4" />
                  <rect fill="white" height="9" id="Capacity" rx="2.5" width="21" x="80" y="25" />
                </g>
                <path clipRule="evenodd" d={svgPaths.p397d7f00} fill="white" fillRule="evenodd" id="Wifi" />
                <path clipRule="evenodd" d={svgPaths.p37488800} fill="white" fillRule="evenodd" id="Cellular Connection" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="bg-white relative shrink-0 size-0" data-name="spacer" />;
}

function HeaderLogo() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pr-[134.176px] pt-[28px] relative shrink-0" data-name="header__logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLogo} />
      <Spacer />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#27509a] drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[16px]">Subscribe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name=".nav__account">
        <div className="content-stretch flex items-start relative size-full">
          <div className="bg-[rgba(255,255,255,0)] drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] relative shrink-0 size-[48px]" data-name="IconButton">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                <div className="relative shrink-0 size-[24px]" data-name="person">
                  <div className="absolute inset-[19.55%_18.75%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="14.6153" preserveAspectRatio="none" viewBox="0 0 15 14.6153" width="15">
                      <path d={svgPaths.p3e57e180} fill="white" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="header-nav">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <HeaderLogo />
          <Frame118 />
        </div>
      </div>
    </div>
  );
}

function Animation() {
  return (
    <div className="relative shrink-0 size-[6.001px]" data-name="Animation">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.001" preserveAspectRatio="none" viewBox="0 0 6.001 6.001" width="6.001">
        <g clipPath="url(#clip0_0_6040)" id="Animation">
          <g id="Spacer">
            <rect fill="white" height="0.001" width="0.001" />
          </g>
          <ellipse cx="3.001" cy="3.00049" fill="white" id="Ellipse 1" rx="3" ry="3.00049" />
        </g>
        <defs>
          <clipPath id="clip0_0_6040">
            <rect fill="white" height="6.001" width="6.001" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] h-[16px] relative shrink-0" data-name="Editorial">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center relative size-full">
            <Animation />
            <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">live</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Gewonden, branden en instortingen na `}</span>
            <span className="leading-none text-[#fdc300]">{`zware aardbeving `}</span>
            <span className="leading-none">Japan</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[7px]">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="content-stretch flex flex-col items-center justify-end pt-[6px] relative size-full">
            <div className="relative shrink-0 size-[7px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
                <circle cx="3.5" cy="3.5" fill="#27509A" id="Ellipse 1" r="3.5" />
              </svg>
            </div>
            <div className="bg-[#b6b8bb] flex-[1_0_0] min-h-px relative w-px" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#757778] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        08:12
      </p>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[16px] text-black w-full">Japan schaalt op naar hoogste waarschuwingsniveau</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame119 />
      <Frame122 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[7px]">
        <div className="bg-[#b6b8bb] h-[12px] relative shrink-0 w-px" />
        <div className="relative shrink-0 size-[7px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
            <circle cx="3.5" cy="3.5" fill="#27509A" id="Ellipse 1" r="3.5" />
          </svg>
        </div>
        <div className="bg-[#b6b8bb] flex-[1_0_0] min-h-px relative w-px" />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pt-[9px] relative">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.335] relative shrink-0 text-[#757778] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        07:40
      </p>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[16px] text-black w-full">Beelden: eiland Kyushu getroffen door aardbeving</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame123 />
      <Frame124 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[7px]">
        <div className="bg-[#b6b8bb] h-[12px] relative shrink-0 w-px" />
        <div className="relative shrink-0 size-[7px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
            <circle cx="3.5" cy="3.5" fill="#27509A" id="Ellipse 1" r="3.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pt-[8px] relative">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.335] relative shrink-0 text-[#757778] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        07:05
      </p>
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[16px] text-black w-full">Meerdere branden in getroffen kustplaatsen</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame126 />
      <Frame127 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BINNENLAND
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Beveiliger grijpt persfotograaf bij keel terwijl agenten toekijken tijdens Zomercarnaval</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BINNENLAND
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame5 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Boerenprotesten zijn terug: trekkers vormen tekst langs de IJssel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BINNENLAND
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame7 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Tofik Dibi geeft teken van leven: ‘Schuldenindustrie doet denken aan maffia’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame12 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Bekijk</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame154 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[16px] text-white">
              <span className="leading-[1.1]">{`Boerenprotesten in beeld: `}</span>
              <span className="leading-[1.1]">trekkers vormen tekst langs de IJssel</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame13 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[16px] text-white">
              <span className="leading-[1.1]">{`Beelden: Japans eiland `}</span>
              <span className="leading-[1.1]">Kyushu getroffen door aardbeving</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame19 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Serif:Bold',sans-serif] font-bold leading-none min-w-px relative text-[16px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Brand in ondergrondse metro Barcelona: honderd passagiers behandeld
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame22 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <div className="relative shrink-0" data-name="Time">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f6f8f9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    <p className="leading-[1.335]">0:36</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Serif:Bold',sans-serif] font-bold leading-none min-w-px relative text-[16px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Oranje lucht boven Brits-Columbia door hevige bosbranden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame25 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <div className="relative shrink-0" data-name="Time">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f6f8f9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    <p className="leading-[1.335]">1:05</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <HorizontalScroller className="flex gap-[16px] items-start overflow-x-auto relative w-full snap-x snap-mandatory scroll-px-[16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="h-[357px] relative shrink-0 w-[194px] snap-start" data-name="Video 9:16">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Teaser">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <AutoPlayVideo src="/video.mp4" poster={imgTeaser1} className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[40%] backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_0%,black_45%,transparent_100%)]" />
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[60%] to-[rgba(0,0,0,0)]" />
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] pb-[12px] relative size-full">
                <Frame8 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[357px] relative shrink-0 w-[194px] snap-start" data-name="Video 9:16">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Teaser">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="" className="absolute h-full left-[-247.59%] max-w-none top-0 w-[327.15%]" src={imgTeaser2} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[40%] backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_0%,black_45%,transparent_100%)]" />
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[60%] to-[rgba(0,0,0,0)]" />
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] pb-[12px] relative size-full">
                <Frame14 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[357px] relative shrink-0 w-[194px] snap-start" data-name="Video 9:16">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Teaser">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTeaser3} />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                <Frame21 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[357px] relative shrink-0 w-[194px] snap-start" data-name="Video 9:16">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Teaser">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTeaser4} />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                <Frame24 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[357px] relative shrink-0 w-[194px] snap-start" data-name="Video 9:16">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Teaser">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTeaser6} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[60%] to-[rgba(0,0,0,0)] pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full" data-name="Title">
                      <div className="flex flex-row justify-center size-full">
                        <div className="content-stretch flex items-start justify-center relative size-full">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Serif:Bold',sans-serif] font-bold leading-none min-w-px relative text-[16px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                            Storm boven de Noordzee zorgt voor spectaculaire golven
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Other">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f6f8f9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                          <p className="leading-[1.335]">0:52</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HorizontalScroller>
  );
}

function Frame155() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Buitenland</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame155 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">OEKRAÏNE</p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame29 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Trump `}</span>
            <span className="leading-none text-[#fdc300]">positiever over Zelenski</span>
            <span className="leading-none text-[#fdc300]">:</span>
            <span className="leading-none">{` ‘Hij hoort steeds meer bij de mensen met wie je zaken doet’`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            IRAN
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame33 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Iran moet vrezen voor supersonische bommenwerper: ‘Regime ayatollahs wankelt’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            FRANKRIJK
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame37 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Macabere vondst in Franse woning: vijf dode pasgeboren baby’s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame35 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            OMAN
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame41 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Oman doet Iran voorstel over gezamenlijk beheer Straat van Hormuz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame39 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer buitenland</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Binnenland</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame156 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">UTRECHT</p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame44 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Man in rolstoel bij supermarkt in Utrecht `}</span>
            <span className="leading-none text-[#fdc300]">{`doelbewust in brand gestoken `}</span>
            <span className="leading-none">met spiritus</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BINNENLAND
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame48 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Van pandjesbaas naar techprins: Bernhard zet streep onder omstreden vastgoedtijd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame47 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame46 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            HERDENKING
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame52 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Carola Schouten doorbreekt impasse: burgemeester spreekt bij Holocaustherdenking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame50 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            MISDAAD
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame56 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Notoire draaideurpedofiel Hans V. (74) opnieuw gearresteerd na misbruik</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame55 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame54 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer binnenland</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Sport</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame157 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">VOETBAL</p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame59 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Frankrijk presenteert `}</span>
            <span className="leading-none text-[#fdc300]">Zinédine Zidane</span>
            <span className="leading-none">{` als nieuwe bondscoach`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            EREDIVISIE
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame63 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">NEC bevestigt transferstunt: ‘superprof’ Dusan Tadic (37) keert terug</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame61 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            TRANSFERS
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame67 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Ajax onderzoekt komst Edson Alvarez (28)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            FORMULE 1
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame71 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">George Russell gefrustreerd na nieuwe pech in Hongarije</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame70 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame69 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer sport</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Entertainment</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame158 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            SHOWBIZZ
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame75 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">{`Ophef over webshop Kim Kötter: `}</span>
              <span className="leading-none text-[#fdc300]">‘Appels met peren vergelijken’</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame74 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame73 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            TV
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame79 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[20px] text-white">Prime zoekt randje op met guilty pleasure-programma’s waar RTL afstand van nam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full">
      <Frame77 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`B&B VOL LIEFDE`}</p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame83 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[20px] text-white">Fred weet binnen vijf minuten al dat Yvonne ‘zijn sprookje’ is</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame81 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[343px]">
      <div className="relative shrink-0" data-name="Culture Small Left">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[300px] relative shrink-0 w-[159.5px]" data-name="Lifestyle Small Left">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[300px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser9} />
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <Frame76 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Culture Small Right">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-[175.5px]" data-name="Lifestyle Small Right">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[300px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser10} />
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                  <Frame80 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            ZOMERGASTEN
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame87 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none text-[#fdc300]">{`Peter Pannekoek `}</span>
              <span className="leading-none">zorgde voor een aardige start van Zomergasten</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame86 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame85 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser8} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame72 />
            </div>
          </div>
        </div>
      </div>
      <Frame130 />
      <div className="relative shrink-0 w-[343px]" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser11} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame84 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer entertainment</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Columns</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame159 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            COMMENTAAR
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame91 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-none min-w-px relative text-[#202223] text-[36px] text-center">Verstoppen van documenten door Belastingdienst kan niet zonder gevolgen blijven</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame90 />
      <div className="relative shrink-0 w-full" data-name="Introduction">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#525759] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
              Het bewust achterhouden van stukken ondermijnt het vertrouwen in de overheid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="aspect-[160/200] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            COLUMN
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame96 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Regenboogvlag bij pro-Palestina- en pro-Hamas-demonstraties is dubieus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame95 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Afshin Ellian</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame94 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <div className="relative shrink-0" data-name="Autor">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <Frame131 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            STELLING
          </p>
        </div>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="logo-premium-main">
        <div className="absolute bg-[#ffcb3d] inset-0" data-name="Background" />
        <div className="absolute inset-[17.12%_23.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.89009" preserveAspectRatio="none" viewBox="0 0 6.44863 7.89009" width="6.44863">
            <path d={svgPaths.p22c74c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame100 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Prins Bernhard jr. doet er goed aan zijn omstreden vastgoedverleden af te sluiten</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame99 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">De Telegraaf</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame98 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <div className="relative shrink-0" data-name="Autor">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <Frame132 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer columns</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold gap-[4px] items-center min-w-px relative text-[16px] text-black uppercase whitespace-nowrap">
      <p className="leading-none relative shrink-0">Luister</p>
      <p className="leading-[1.15] relative shrink-0">›</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame160 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="aspect-[206.00100708007812/206.00099182128906] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            PODCAST
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame105 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[24px]">Wat de zware aardbeving in Japan betekent voor de regio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame104 />
      <div className="relative shrink-0 w-full" data-name="Introduction">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#525759] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              In de dagelijkse nieuwspodcast duiden we de beving bij Kyushu en de gevolgen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-[#202223] content-stretch flex items-center justify-center p-[2px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[20.64%_21.14%_20.64%_32.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.3948" preserveAspectRatio="none" viewBox="0 0 7.41788 9.3948" width="7.41788">
            <path d={svgPaths.p2c9a3300} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Audiowave() {
  return (
    <div className="h-[17px] relative shrink-0 w-[64px]" data-name="Audiowave">
      <div className="absolute inset-[-5.88%_-1.56%]">
        <svg className="block size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 66 19" width="66">
          <g id="Audiowave">
            <path d="M1 7.5L1 11.5" id="Vector 21" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M5 1V18" id="Vector 1" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M9 7.5L9 11.5" id="Vector 2" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M13 3.5L13 15.5" id="Vector 3" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M17 5.5L17 13.5" id="Vector 4" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M21 3.5L21 15.5" id="Vector 5" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M25 7.5L25 11.5" id="Vector 6" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M29 7.5L29 11.5" id="Vector 7" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M33 3.5L33 15.5" id="Vector 8" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M37 1V18" id="Vector 9" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M41 5.5L41 13.5" id="Vector 10" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M45 5.5L45 13.5" id="Vector 12" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M49 7.5L49 11.5" id="Vector 13" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M53 3.5L53 15.5" id="Vector 15" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M57 5.5L57 13.5" id="Vector 18" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M61 1V18" id="Vector 20" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M65 7.5L65 11.5" id="Vector 22" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0">
      <div className="relative rounded-[40px] shrink-0 w-full" data-name="Audiotime">
        <div aria-hidden className="absolute border border-[#b6b8bb] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative size-full">
            <Frame133 />
            <Audiowave />
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>04:23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame103 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <Frame149 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            SPORTPODCAST
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame109 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Transfers: keert Dusan Tadic terug in de Eredivisie?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame108 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#202223] content-stretch flex items-center justify-center p-[2px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[20.64%_21.14%_20.64%_32.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.3948" preserveAspectRatio="none" viewBox="0 0 7.41788 9.3948" width="7.41788">
            <path d={svgPaths.p2c9a3300} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Audiowave1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[64px]" data-name="Audiowave">
      <div className="absolute inset-[-5.88%_-1.56%]">
        <svg className="block size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 66 19" width="66">
          <g id="Audiowave">
            <path d="M1 7.5L1 11.5" id="Vector 21" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M5 1V18" id="Vector 1" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M9 7.5L9 11.5" id="Vector 2" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M13 3.5L13 15.5" id="Vector 3" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M17 5.5L17 13.5" id="Vector 4" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M21 3.5L21 15.5" id="Vector 5" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M25 7.5L25 11.5" id="Vector 6" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M29 7.5L29 11.5" id="Vector 7" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M33 3.5L33 15.5" id="Vector 8" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M37 1V18" id="Vector 9" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M41 5.5L41 13.5" id="Vector 10" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M45 5.5L45 13.5" id="Vector 12" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M49 7.5L49 11.5" id="Vector 13" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M53 3.5L53 15.5" id="Vector 15" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M57 5.5L57 13.5" id="Vector 18" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M61 1V18" id="Vector 20" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M65 7.5L65 11.5" id="Vector 22" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0">
      <div className="relative rounded-[40px] shrink-0 w-full" data-name="Audiotime">
        <div aria-hidden className="absolute border border-[#b6b8bb] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative size-full">
            <Frame134 />
            <Audiowave1 />
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>04:23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame107 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <Frame150 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            PODCAST
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame113 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Ontleed: het vastgoedverleden van prins Bernhard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame112 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[#202223] content-stretch flex items-center justify-center p-[2px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[20.64%_21.14%_20.64%_32.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.3948" preserveAspectRatio="none" viewBox="0 0 7.41788 9.3948" width="7.41788">
            <path d={svgPaths.p2c9a3300} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Audiowave2() {
  return (
    <div className="h-[17px] relative shrink-0 w-[64px]" data-name="Audiowave">
      <div className="absolute inset-[-5.88%_-1.56%]">
        <svg className="block size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 66 19" width="66">
          <g id="Audiowave">
            <path d="M1 7.5L1 11.5" id="Vector 21" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M5 1V18" id="Vector 1" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M9 7.5L9 11.5" id="Vector 2" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M13 3.5L13 15.5" id="Vector 3" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M17 5.5L17 13.5" id="Vector 4" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M21 3.5L21 15.5" id="Vector 5" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M25 7.5L25 11.5" id="Vector 6" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M29 7.5L29 11.5" id="Vector 7" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M33 3.5L33 15.5" id="Vector 8" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M37 1V18" id="Vector 9" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M41 5.5L41 13.5" id="Vector 10" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M45 5.5L45 13.5" id="Vector 12" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M49 7.5L49 11.5" id="Vector 13" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M53 3.5L53 15.5" id="Vector 15" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M57 5.5L57 13.5" id="Vector 18" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M61 1V18" id="Vector 20" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M65 7.5L65 11.5" id="Vector 22" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0">
      <div className="relative rounded-[40px] shrink-0 w-full" data-name="Audiotime">
        <div aria-hidden className="absolute border border-[#b6b8bb] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative size-full">
            <Frame135 />
            <Audiowave2 />
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>04:23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame111 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <Frame151 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BUITENLAND
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame117 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Iran onder druk: hoe wankel is het regime van de ayatollahs?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame116 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-[#202223] content-stretch flex items-center justify-center p-[2px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[20.64%_21.14%_20.64%_32.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.3948" preserveAspectRatio="none" viewBox="0 0 7.41788 9.3948" width="7.41788">
            <path d={svgPaths.p2c9a3300} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Audiowave3() {
  return (
    <div className="h-[17px] relative shrink-0 w-[64px]" data-name="Audiowave">
      <div className="absolute inset-[-5.88%_-1.56%]">
        <svg className="block size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 66 19" width="66">
          <g id="Audiowave">
            <path d="M1 7.5L1 11.5" id="Vector 21" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M5 1V18" id="Vector 1" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M9 7.5L9 11.5" id="Vector 2" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M13 3.5L13 15.5" id="Vector 3" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M17 5.5L17 13.5" id="Vector 4" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M21 3.5L21 15.5" id="Vector 5" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M25 7.5L25 11.5" id="Vector 6" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M29 7.5L29 11.5" id="Vector 7" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M33 3.5L33 15.5" id="Vector 8" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M37 1V18" id="Vector 9" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M41 5.5L41 13.5" id="Vector 10" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M45 5.5L45 13.5" id="Vector 12" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M49 7.5L49 11.5" id="Vector 13" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M53 3.5L53 15.5" id="Vector 15" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M57 5.5L57 13.5" id="Vector 18" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M61 1V18" id="Vector 20" stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M65 7.5L65 11.5" id="Vector 22" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0">
      <div className="relative rounded-[40px] shrink-0 w-full" data-name="Audiotime">
        <div aria-hidden className="absolute border border-[#b6b8bb] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative size-full">
            <Frame136 />
            <Audiowave3 />
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>04:23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame115 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <Frame152 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer podcasts</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function BottomNavItems() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-nav__items">
      <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name=".bottom-nav__item">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-between relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="logo-square-inverse">
              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                <path d={svgPaths.p361a800} fill="white" id="Background" />
              </svg>
              <div className="absolute inset-[15.28%_11.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.6658" preserveAspectRatio="none" viewBox="0 0 18.4814 16.6658" width="18.4814">
                  <path clipRule="evenodd" d={svgPaths.p1fc2d880} fill="#27509A" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[1.15] min-w-full not-italic relative shrink-0 text-[#27509a] text-[10px] text-center w-[min-content]">Actueel</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name=".bottom-nav__item">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-between relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="newspaper">
              <div className="absolute inset-[18.75%_9.38%_18.75%_3.13%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
                  <path d={svgPaths.p11cb4e80} fill="#202223" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#202223] text-[10px] text-center w-[min-content]">Publicaties</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name=".bottom-nav__item">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-between relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="play-button">
              <div className="absolute inset-[10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
                  <path d={svgPaths.p35114a00} fill="#202223" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#202223] text-[10px] text-center w-[min-content]">Kijk</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name=".bottom-nav__item">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-between relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="podcast">
              <div className="absolute inset-[14.58%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p3dd23900} fill="#202223" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#202223] text-[10px] text-center w-[min-content]">Luister</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name=".bottom-nav__item">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-between relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="menu-search">
              <div className="absolute inset-[18.74%_10.28%_18.75%_10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.0035" preserveAspectRatio="none" viewBox="0 0 19.032 15.0035" width="19.032">
                  <g id="Vector">
                    <path d="M0 0V1.5H5V0H0Z" fill="#202223" />
                    <path d={svgPaths.pf6c5200} fill="#202223" />
                    <path d={svgPaths.p15d81600} fill="#202223" />
                    <path d={svgPaths.p322b4700} fill="#202223" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#202223] text-[10px] text-center w-[min-content]">Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TelVandaag() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pt-[173px] relative size-full" data-name="TEL Vandaag">
      <div className="absolute bg-[#27509a] left-0 top-0 w-[375px]" data-name="Navigation2.0 - MobileApp - Android">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <StatusBarIPhone className="relative shrink-0 w-full" />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Hero Live">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[74.519%] to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame1 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[343px]" data-name="Timeline">
            <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="relative shrink-0 w-full" data-name="TimelineAssets">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <Frame120 />
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="TimelineAssets">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <Frame121 />
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="TimelineAssets">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <Frame125 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Article Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[267/200] col-3 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame2 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame4 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame6 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" />
      <div className="relative shrink-0 w-[375px]" data-name="Video Slider">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="SectionOpen">
              <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                  <Frame137 />
                </div>
              </div>
            </div>
            <Frame128 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame138 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-full left-[-104.07%] max-w-none top-0 w-[221.83%]" src={imgTeaser5} />
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame27 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Article Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[267/200] col-3 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame30 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame34 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame38 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame139 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" variant="AD4" />
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame140 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser6} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[74.038%] to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame42 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Article Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[267/200] col-3 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame45 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame49 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame53 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame141 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Sport">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame142 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Sport Large">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser7} />
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[74.519%] to-[rgba(0,0,0,0)]" />
                </div>
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                    <Frame57 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Sport Small Vertical">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame60 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Sport Small Vertical">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame64 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Sport Small Vertical">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame68 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame143 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" variant="AD5" />
      <div className="relative shrink-0 w-[375px]" data-name="Culture">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame144 />
              </div>
            </div>
          </div>
          <Frame129 />
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame145 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Opinion">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame146 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Opinion Large">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  <Frame88 />
                  <Frame92 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Opinion Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[175px] relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-3 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame93 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Opinion Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-3 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame97 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame147 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" variant="AD5" />
      <div className="relative shrink-0 w-[375px]" data-name="Audio">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame148 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Audio Large">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] relative size-full">
                  <Frame101 />
                  <Frame102 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Audio Small">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative size-full">
                <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                  <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                  <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                    <div className="aspect-[200/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full" />
                      </div>
                    </div>
                    <Frame106 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Audio Small">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative size-full">
                <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                  <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                  <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                    <div className="aspect-[200/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full" />
                      </div>
                    </div>
                    <Frame110 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Audio Small">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative size-full">
                <div className="h-[163px] relative shrink-0 w-[343px]" data-name="Teaser">
                  <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                  <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                    <div className="aspect-[200/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full" />
                      </div>
                    </div>
                    <Frame114 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame153 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[9549px] left-[calc(50%+12.5px)] pointer-events-none top-[102px]">
        <div className="-translate-x-1/2 pointer-events-auto sticky top-0 w-[740px]" data-name="TEL-TabRow">
          <div className="content-stretch flex items-start relative size-full">
            <div className="relative shrink-0" data-name="TabRow-Brand">
              <div className="content-stretch flex items-start relative size-full">
                <div className="bg-[#27509a] relative shrink-0" data-name="TabRow">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[24px] items-center px-[24px] relative size-full">
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Vrouw</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Misdaad</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Sport</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Mijn Nieuws</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div aria-hidden className="absolute border-b-4 border-solid border-white inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Vandaag</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Financieel</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Lifestyle</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Entertainment</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Onderwerpen</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white bottom-[-83px] left-1/2 w-[375px]" data-name="Navigation2.0 - bottom-nav">
        <div className="content-stretch flex flex-col gap-[2px] items-start pt-[7px] relative size-full">
          <BottomNavItems />
          <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="-translate-x-1/2 absolute bg-[#202223] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}