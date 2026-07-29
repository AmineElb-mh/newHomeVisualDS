import svgPaths from "./svg-29prijok85";
import imgTeaser from "./538c6c83f7d5543884d820bdada33357559b6b1e.png";
import imgImage from "./a4f233ac1b20f366f5a10eef97af558def5745e6.png";
import imgTeaser1 from "./039ad9dcf2ac55d8fb47197caee2685ec3d3fc78.png";
import imgImage1 from "./8dd3a54a96e6c120ccb3f43e6c54f2ab91c6e53a.png";
import imgTeaser2 from "./ad48482b51beb48de7ea382de0f37c440a8f48fa.png";
import imgImage2 from "./f7650689ee35e810c0393eb40209eaafe2447696.png";
import imgHeaderLogo from "./f09b0ddcd0eef32a8b65e86f5fdc9d5858fbca93.png";

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

function Time() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#202223] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">3 topics</p>
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#202223] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">12 nieuwe items</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Time />
      <div className="relative shrink-0 size-[4px]" data-name="Dot">
        <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 4 4" width="4">
          <circle cx="2" cy="2" fill="#757778" id="Dot" r="2" />
        </svg>
      </div>
      <Time1 />
    </div>
  );
}

function Other() {
  return (
    <div className="relative shrink-0 w-full" data-name="Other">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between px-[16px] relative size-full">
          <Frame49 />
          <div className="bg-[rgba(255,255,255,0)] drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] relative shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[8px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#27509a] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[16px]">Weergave</p>
                </div>
                <div className="relative shrink-0 size-[16px]" data-name="tune">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute inset-[13.54%]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="11.6666" preserveAspectRatio="none" viewBox="0 0 11.6666 11.6666" width="11.6666">
                        <path d={svgPaths.pd1df100} fill="#27509A" id="Vector" />
                      </svg>
                    </div>
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

function Container() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-black uppercase w-full">
        <p className="leading-none">misdaad</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">4 nieuwe items</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">ROTTERDAM</p>
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
            <span className="leading-none">{`Cel en tbs voor verkrachting meisje (7) in Zuiderpark Rotterdam, `}</span>
            <span className="leading-none text-[#fdc300]">straf lager dan geëist</span>
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

function Frame3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            MALLORCA
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Nederlandse (19) slachtoffer van groepsverkrachting in hotelkamer op Mallorca</p>
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
            ONLINE
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Jongeman opgepakt om sadistische online opdrachten aan meisjes</p>
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
            HOGER BEROEP
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">OM in hoger beroep in zaak doodgereden Tamar (14) uit Marken: mogelijk tóch straf</p>
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

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer misdaad</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-black uppercase w-full">
        <p className="leading-none">tech</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">4 nieuwe items</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">AI-BOOM</p>
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame14 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none text-[#fdc300]">{`Samsung en SK Hynix hard onderuit `}</span>
            <span className="leading-none">door twijfels over AI-boom</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            CHIPS
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame21 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Nvidia investeert fors in AI-datacenters</p>
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

function Frame15() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BEURS
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame25 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Chinees chipbedrijf CXMT verzesvoudigt in waarde bij beursdebuut</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame23 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            CHIPS
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame29 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Samsung sluit chipdeal van 200 miljard dollar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame27 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer tech</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Roboto_Condensed:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-black uppercase w-full">
        <p className="leading-none">Gezondheid</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">4 nieuwe items</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">HITTE</p>
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

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame32 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Veel mensen krijgen `}</span>
            <span className="leading-none text-[#fdc300]">hoofdpijn door de warmte:</span>
            <span className="leading-none">{` ‘Opvallend veel jongeren’`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            ZOMER
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

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame36 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Schaamte voor topless zonnen is nergens voor nodig: ‘Het is je goed recht’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            MEDICATIE
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

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame40 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Afslankmedicatie in verband gebracht met mogelijk verhoogd risico</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame38 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            FIT
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

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame44 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Bijna-zestiger zoekt zijn sixpack: ‘De supermarkt is plots een groot mijnenveld’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame42 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer gezondheid</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
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

function Frame45() {
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
          <Frame45 />
        </div>
      </div>
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

export default function DsMijnNieuws() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pt-[181px] relative size-full" data-name="DS Mijn Nieuws">
      <Other />
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="SectionOpen">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
                <Container />
                <div className="relative shrink-0 size-[24px]" data-name="settings">
                  <div className="absolute inset-[10.42%_10.85%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18.7922 19" width="18.7922">
                      <path d={svgPaths.p6502300} fill="#202223" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame1 />
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
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame46 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="SectionOpen">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
                <Container1 />
                <div className="relative shrink-0 size-[24px]" data-name="settings">
                  <div className="absolute inset-[10.42%_10.85%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18.7922 19" width="18.7922">
                      <path d={svgPaths.p6502300} fill="#202223" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-full left-[-25.64%] max-w-none top-0 w-[221.83%]" src={imgTeaser1} />
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame8 />
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
                  <Frame15 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame22 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame26 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame47 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="SectionOpen">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
                <Container2 />
                <div className="relative shrink-0 size-[24px]" data-name="settings">
                  <div className="absolute inset-[10.42%_10.85%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18.7922 19" width="18.7922">
                      <path d={svgPaths.p6502300} fill="#202223" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser2} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame30 />
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
                  <Frame33 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame37 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame41 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame48 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#27509a] left-0 top-0 w-[375px]" data-name="Navigation2.0 - MobileApp - Android">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <StatusBarIPhone className="relative shrink-0 w-full" />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[3157px] left-[-77px] pointer-events-none top-[102px]">
        <div className="pointer-events-auto sticky top-0" data-name="TEL-TabRow">
          <div className="content-stretch flex items-start relative size-full">
            <div className="relative shrink-0" data-name="TabRow-Brand">
              <div className="content-stretch flex items-start relative size-full">
                <div className="bg-[#27509a] relative shrink-0" data-name="TabRow">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[24px] items-center px-[24px] relative size-full">
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Vrouw</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Misdaad</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Sport</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="relative shrink-0" data-name="Tab">
                        <div aria-hidden className="absolute border-b-4 border-solid border-white inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Mijn Nieuws</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Vandaag</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Financieel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Lifestyle</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Entertainment</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
      <div className="absolute bg-white bottom-0 left-0 w-[375px]" data-name="Navigation2.0 - bottom-nav">
        <div aria-hidden className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
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