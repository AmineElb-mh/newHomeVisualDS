import imgRectangle33 from "./ce394ac3c36a992cfdad8407a003e8a6c70f4a7e.png";
import imgRectangle34 from "./1d9f6ad557798c7a1dc0e6f0e9b88c6204c0303e.png";
import svgPaths from "./svg-36ftvo0khn";
import imgHeaderLogo from "./f09b0ddcd0eef32a8b65e86f5fdc9d5858fbca93.png";
import imgTeaser from "./ac6e9f16a5d1d25b9e0911dc44f0032278c0f576.png";
import imgImage from "./3f4a22463898fd64f59e3bf860cfffeab7be55f9.png";
import imgTeaser1 from "./10aa4bb77e97cfdc40f8ba3b921a54af78a2020f.png";
import imgImage1 from "./8977cab23bfab7f1dc823ecf8d3296a3361cdb7c.png";
import imgImage2 from "./dd7c8221312850bb1ad938684d998ca7726043da.png";
import imgImage3 from "./d8fa37e637f23120b2d51fa3e8375a2cb290c1b9.png";
import imgTeaser2 from "./a776dc9e4ece927130c770429c21db433653f372.png";
import imgTeaser3 from "./3accd4b791f93acaee3d384290b12f7cacf64f13.png";
import imgTeaser4 from "./edd879166938a6d7e5ae8e72959855b1c9e0d923.png";
import imgTeaser5 from "./32bf307887599881f949fe4e9c51c9b68ba92145.png";
import imgImage4 from "./4c546907605131a832bda8259cac72f82e930437.png";
import imgImage5 from "./d6c16fc20892018eb767fcde11b5d429c5a670fa.png";
import imgImage6 from "./410d40b05520236d8151950990937b3e8c78a32c.png";
import imgTeaser6 from "./05c4ccee245d2d2670dfe3ee04d45d7a82af9de3.png";
import imgImage7 from "./040bbfa14d8fc00f37ff4ca8430f05643a9c0a93.png";
type AdProps = {
  className?: string;
  variant?: "AD1" | "AD2";
};

function Ad({ className, variant = "AD1" }: AdProps) {
  return (
    <div className={className || "bg-[#ececec] h-[307px] relative w-[375px]"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.335] relative shrink-0 text-[12px] text-black text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Advertentie
        </p>
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={variant === "AD2" ? imgRectangle34 : imgRectangle33} />
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

function Frame75() {
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
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">PERSOONLIJK</p>
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
            <span className="leading-none">{`Deze jonge vrouwen runnen een camping: `}</span>
            <span className="leading-none text-[#fdc300]">‘Mensen denken dat wij de hele winter vrij zijn’</span>
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
            ROYALS
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Zongebruinde Máxima verruilt badpak voor goud en beige bij opening Pride</p>
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
            ACHTER HET NIEUWS
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Na vader Lei en broer Rick hoopt nu de zieke Chantal (46) op een nieuwe nier</p>
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
            GEZONDHEID
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Bart (35) krijgt vrijwel zeker ALS of dementie: ‘In onzekerheid leven is zwaar’</p>
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

function Frame89() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Verhalen</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame89 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            HET VERHAAL
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame14 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
              <span className="leading-none">Nicky (32) organiseert bergtochten voor vrouwen:</span>
              <span className="leading-none text-[#fdc300]">{` ‘Door nare opmerkingen besloot ik het zelf te doen’`}</span>
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

function Frame22() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            ONDERNEMEN
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame22 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Kiki (24) heeft twee kinderen én runt twee horecazaken</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            EMIGRATIE
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame26 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Claudia (56) kocht met haar man een melkveebedrijf in Zweden: ‘De boeren hier klagen niet’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            OMSLAG
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

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame30 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Margriet (55) wil van haar verslaving af en vliegt naar yogaschool in India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer verhalen</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">{`Psyche & relaties`}</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame90 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            RELATIES
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

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame34 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">Rebecca’s seksleven lijdt onder haar pubers:</span>
              <span className="leading-none text-[#fdc300]">{` ‘Betrapt worden is zó gênant’`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame32 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            SINGLE
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

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame38 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[20px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-[1.1]">39 en weer alleen:</span>
              <span className="leading-[1.1]">{` ‘Ik had een gemist gesprek én een `}</span>
              <span className="leading-[1.1] text-[#fdc300]">nogal suggestief appje’</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full">
      <Frame36 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            LIEFDE
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

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame42 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[20px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-[1.1]">{`‘Mijn vriend `}</span>
              <span className="leading-[1.1] text-[#fdc300]">maakte het plots uit</span>
              <span className="leading-[1.1]">{` tijdens onze vakantie’`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame40 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[343px]">
      <div className="relative shrink-0" data-name="Culture Small Left">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[300px] relative shrink-0 w-[159.5px]" data-name="Lifestyle Small Left">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[300px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser3} />
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <Frame35 />
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
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser4} />
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                  <Frame39 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            PSYCHE
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

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame46 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">Inge (63) heeft vitiligo:</span>
              <span className="leading-none text-[#fdc300]">{` ‘In het begin probeerde ik het te verbergen’`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame45 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame44 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser2} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame31 />
            </div>
          </div>
        </div>
      </div>
      <Frame79 />
      <div className="relative shrink-0 w-[343px]" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser5} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame43 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer psyche</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Columns</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame91 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center justify-center relative shrink-0 w-full">
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

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame50 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-none min-w-px relative text-[#202223] text-[36px] text-center">Catherine Keyl over The Odyssey: ‘Snobistisch eigenlijk, dat ik steeds naar een boek grijp’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame49 />
      <div className="relative shrink-0 w-full" data-name="Introduction">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#525759] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
              Onze columniste bekent haar gemengde gevoelens bij de hype rond Nolans nieuwste epos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.15]">Catherine Keyl</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame48 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center justify-center relative size-full">
            <div className="relative shrink-0" data-name="Autor">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <Frame76 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="aspect-[160/200] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
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

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame55 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Leco van Zadelhoff (58): ‘De laatste twee jaar krijg ik ineens nare opmerkingen’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Leco van Zadelhoff</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame53 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <div className="relative shrink-0" data-name="Autor">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <Frame77 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
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

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame59 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Lisa Loeb: ‘Als je dít zegt op een kringverjaardag, word je met pek en veren onthaald’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757778] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Lisa Loeb</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame57 />
      <div className="relative shrink-0 w-full" data-name="Other">
        <div className="flex flex-row items-center size-full">
          <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full">
            <div className="relative shrink-0" data-name="Autor">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center relative size-full">
                  <Frame78 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer columns</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">{`Royals & lifestyle`}</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame92 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">LUXE</p>
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

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame62 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Sabine (57) `}</span>
            <span className="leading-none text-[#fdc300]">houdt van luxe:</span>
            <span className="leading-none">{` ‘Mensen die een tweede Porsche kopen, snap ik volledig’`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            VAKANTIE
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

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame66 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">De grootste camping-ergernissen: ‘Ik wil niet terug naar de natuur, ik wil naar het toilet’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame65 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            DIEREN
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

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame70 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Champagne, pedicures en bruisballetjes: honden worden in deze beautysalon extreem verwend</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame69 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame68 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            PRAAT MEE
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

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame74 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Praat mee: ontloop jij liever Nederlanders op vakantie?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame73 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame72 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer lifestyle</p>
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

function BottomNavItems1() {
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

export default function TelVrouw() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pt-[173px] relative size-full" data-name="TEL Vrouw">
      <div className="absolute bg-[#27509a] left-0 top-0 w-[375px]" data-name="Navigation2.0 - MobileApp - Android">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <StatusBarIPhone className="relative shrink-0 w-full" />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
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
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" variant="AD2" />
      <div className="relative shrink-0 w-[375px]" data-name="Stories">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame81 />
              </div>
            </div>
          </div>
          <div className="h-[428px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser1} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame8 />
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Interview Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[153.583px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame19 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Interview Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame23 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Interview Small">
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
                  <Frame27 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame83 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Culture">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame82 />
              </div>
            </div>
          </div>
          <Frame80 />
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame84 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" />
      <div className="relative shrink-0 w-[375px]" data-name="Opinion">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame85 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Opinion Large">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  <Frame47 />
                  <Frame51 />
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
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame52 />
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
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame56 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame86 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame87 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser6} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame60 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Article Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[267/200] col-3 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame63 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame67 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame71 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame88 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[6149px] left-[calc(50%+110px)] pointer-events-none top-[102px]">
        <div className="-translate-x-1/2 pointer-events-auto sticky top-0 w-[595px]" data-name="TEL-TabRow">
          <div className="content-stretch flex items-start relative size-full">
            <div className="relative shrink-0" data-name="TabRow-Brand">
              <div className="content-stretch flex items-start relative size-full">
                <div className="bg-[#27509a] relative shrink-0" data-name="TabRow">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[24px] items-center px-[24px] relative size-full">
                      <div className="relative shrink-0" data-name="Tab">
                        <div aria-hidden className="absolute border-b-4 border-solid border-white inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Vrouw</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <a className="cursor-pointer relative shrink-0" data-name="Tab">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center py-[20px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <p className="leading-[1.15]">Mijn Nieuws</p>
                            </div>
                          </div>
                        </div>
                      </a>
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
      <div className="-translate-x-1/2 absolute bg-white bottom-[-83px] left-1/2 w-[375px]" data-name="Navigation2.0 - bottom-nav">
        <div className="content-stretch flex flex-col gap-[2px] items-start pt-[7px] relative size-full">
          <BottomNavItems />
          <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="-translate-x-1/2 absolute bg-[#202223] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute bg-white bottom-0 left-0 w-[375px]" data-name="Navigation2.0 - bottom-nav">
        <div aria-hidden className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[2px] items-start pt-[7px] relative size-full">
          <BottomNavItems1 />
          <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="-translate-x-1/2 absolute bg-[#202223] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}