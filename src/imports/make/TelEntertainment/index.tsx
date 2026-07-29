import imgRectangle33 from "./1d9f6ad557798c7a1dc0e6f0e9b88c6204c0303e.png";
import imgRectangle34 from "./b4a5c166e625fb4c9f6806630561651aeda085a2.png";
import svgPaths from "./svg-u3g45bynzo";
import imgHeaderLogo from "./f09b0ddcd0eef32a8b65e86f5fdc9d5858fbca93.png";
import imgTeaser from "./acfbd4048b084b832030ab89d963a055a9883cf0.png";
import imgTeaser1 from "./9e15a46bd2a050a1c095e61fec6fa5f0f554a6ba.png";
import imgTeaser2 from "./00bd8129ad4b5d95b04262206ef13fd0a714cfbb.png";
import imgTeaser3 from "./fe5e60b885884e82fac05e9e25aac5e45174fbb7.png";
import imgTeaser4 from "./3ea0e3fb8de146abdd01bb4eeb3914fb47468eaa.png";
import imgImage from "./ac58354b209cdaa2258b2d845cf210cae4fa3fc5.png";
import imgTeaser5 from "./07303000ce97ad27e64e345f2458fb0e7bf411a9.png";
import imgImage1 from "./a67b6d68493a47e2a348df9cb3bcd00b657bf330.png";
import imgTeaser6 from "./d8b534e3cfa2c111385bc388f23e3104b64d606b.png";
import imgTeaser7 from "./7079d2e9e65a5b8941d847136f3e09a9a9a6f217.png";
import imgTeaser8 from "./7a9fa9ff5f7c800d19d2f261cdcf8681ba5db902.png";
import imgTeaser9 from "./1cc42d34761705eddd17c195b6c6525c5045e903.png";
import imgTeaser10 from "./c169aa025d435e9e12e6936b82a916fdfc9e3b54.png";
import imgImage2 from "./93a01ed1840ee313e039f683f498346ed2c6ef3c.png";
import imgImage3 from "./3700744e0ab513ad0825a39b802a7c60aee67672.png";
import imgImage4 from "./c41994a4d0f5bf88bcee9dd6eb2237b0e8f43807.png";
type AdProps = {
  className?: string;
  variant?: "AD2" | "AD4";
};

function Ad({ className, variant = "AD2" }: AdProps) {
  return (
    <div className={className || "bg-[#ececec] h-[307px] relative w-[375px]"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.335] relative shrink-0 text-[12px] text-black text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Advertentie
        </p>
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={variant === "AD4" ? imgRectangle34 : imgRectangle33} />
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

function Frame78() {
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
          <Frame78 />
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
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            HOLLYWOOD
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
      <Frame />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">{`Timothée Chalamet schrikt van `}</span>
              <span className="leading-none text-[#fdc300]">{`pikante dubbelganger `}</span>
              <span className="leading-none">op OnlyFans</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            ZANGER
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
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[20px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-[1.1]">{`Mart Hoogkamer (28) over de `}</span>
              <span className="leading-[1.1] text-[#fdc300]">verleidingen én zijn leven</span>
              <span className="leading-[1.1]">{` als vader`}</span>
            </p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full">
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            FAMILIE
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
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[20px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-[1.1]">{`Christina Curry (35) schenkt `}</span>
              <span className="leading-[1.1] text-[#fdc300]">{`Patricia Paay `}</span>
              <span className="leading-[1.1]">(77) haar eerste kleinkind</span>
            </p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame11 />
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
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser1} />
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <Frame2 />
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
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute h-full left-[-196.53%] max-w-none top-0 w-[303.89%]" src={imgTeaser2} />
                  </div>
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                  <Frame4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            VOETBAL
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
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">{`Cody Gakpo en partner Noa van der Bij `}</span>
              <span className="leading-none text-[#fdc300]">op vakantie op Ibiza</span>
            </p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame12 />
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
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[119.38%] left-0 max-w-none top-[-9.69%] w-full" src={imgTeaser} />
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame1 />
            </div>
          </div>
        </div>
      </div>
      <Frame79 />
      <div className="relative shrink-0 w-[343px]" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser3} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame6 />
            </div>
          </div>
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

function Frame91() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Uitgelicht</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame91 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">TELEVISIE</p>
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
            <span className="leading-none">{`Nieuw seizoen B&B vol liefde maakt tongen weer los:`}</span>
            <span className="leading-none text-[#fdc300]">{` ‘De paradijsvogels zijn terug’`}</span>
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

function Frame22() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame22 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Zangeres Madison Beer verloofd met American-footballspeler</p>
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
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
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
            MUZIEK
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Sam Smith bevestigt verloving met Christian Cowan</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
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
            INTERVIEW
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Gert Verhulst: ‘Mensen denken soms dat ik arrogant ben, maar eigenlijk ben ik verlegen’</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame28 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer entertainment</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">{`Media & TV`}</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame92 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">STREAMING</p>
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
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
            <span className="leading-none">{`Prime zoekt randje op met `}</span>
            <span className="leading-none text-[#fdc300]">{`guilty pleasure-programma’s `}</span>
            <span className="leading-none">waar RTL juist afstand van nam</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[388px] items-start justify-end relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            FILM
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
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">‘Macaulay Culkin (45) heeft plannen voor nieuwe Home Alone-film’</p>
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
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
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

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame41 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Lisette Wellens zwaait na negen jaar af bij WNL: ‘Het is mooi geweest’</p>
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

function Frame45() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            QUIZ
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

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame45 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">AvroTros onthult kandidaten doorstart ‘Triviant’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame43 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer media</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">{`Film & muziek`}</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame93 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            BIOSCOOP
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

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame49 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">{`Megasucces van The Odyssey ontketent Homerus-hype: `}</span>
              <span className="leading-none text-[#fdc300]">‘Ik gun iedereen dit’</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame47 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            MUZIEK
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

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame53 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[20px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-[1.1]">{`The Beatles plaatsen aftelklok op website: `}</span>
              <span className="leading-[1.1] text-[#fdc300]">‘Er komt binnenkort iets’</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full">
      <Frame51 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            FILM
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

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame57 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[20px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-[1.1]">{`Halina Reijn krijgt op Nederlands Filmfestival `}</span>
              <span className="leading-[1.1] text-[#fdc300]">speciaal ere-Kalf</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame55 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[343px]">
      <div className="relative shrink-0" data-name="Culture Small Left">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[300px] relative shrink-0 w-[159.5px]" data-name="Lifestyle Small Left">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[300px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser7} />
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <Frame50 />
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
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser8} />
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.5)]" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                  <Frame54 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            CONCERT
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

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame61 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_black] text-white">
              <span className="leading-none">Tyla geeft in oktober show in</span>
              <span className="leading-none text-[#fdc300]">{` AFAS Live`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame59 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser6} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame46 />
            </div>
          </div>
        </div>
      </div>
      <Frame82 />
      <div className="relative shrink-0 w-[343px]" data-name="Culture Large">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="h-[359px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser9} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame58 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer cultuur</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Verhalen</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.5] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[32px] items-center justify-center min-w-px relative">
      <Frame94 />
    </div>
  );
}

function Frame65() {
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

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame65 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[0] min-w-px relative text-[36px] text-shadow-[0px_0px_4px_rgba(0,0,0,0.9)] text-white">
              <span className="leading-none">Knox (11) is</span>
              <span className="leading-none text-[#fdc300]">{` jongste dj ooit `}</span>
              <span className="leading-none">op Tomorrowland: ‘Megazenuwachtig!’</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame63 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`B&B VOL LIEFDE`}</p>
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

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame69 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">{`B&B vol liefde’s Eline over horrornacht waarin haar vriend Elco verdween`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame67 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            RELATIE
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

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame73 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Natasja en René Froger over het geheim van hun huwelijk: ‘Natuurlijk botst het’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame71 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0" data-name="Label">
        <div className="content-stretch flex items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#757778] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            MUZIEK
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

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame77 />
      <div className="relative shrink-0 w-full" data-name="Title">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto_Condensed:Black',sans-serif] font-black leading-[1.1] min-w-px relative text-[#202223] text-[20px]">Angstig moment voor Douwe Bob: ‘Dit is wel schrikken’</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame76 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame75 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold gap-[4px] items-center justify-center min-w-px relative text-black whitespace-nowrap">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] leading-none relative shrink-0 text-[16px] uppercase">Meer verhalen</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] leading-[1.15] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ›
      </p>
    </div>
  );
}

export default function TelEntertainment() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pt-[173px] relative size-full" data-name="TEL Entertainment">
      <div className="absolute bg-[#27509a] left-0 top-0 w-[375px]" data-name="Navigation2.0 - MobileApp - Android">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <StatusBarIPhone className="relative shrink-0 w-full" />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[6136px] left-[calc(50%+12.5px)] pointer-events-none top-[102px]">
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
      <div className="relative shrink-0 w-[375px]" data-name="Culture">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <Frame80 />
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
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame83 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser4} />
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
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame19 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame23 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame27 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame85 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" />
      <div className="relative shrink-0 w-[375px]" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame84 />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser5} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
                <Frame31 />
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
          <div className="relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="relative shrink-0 w-[343px]" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start pb-[24px] relative size-full">
                  <Frame42 />
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
      <Ad className="bg-[#ececec] h-[307px] relative shrink-0 w-[375px]" variant="AD4" />
      <div className="relative shrink-0 w-[375px]" data-name="Culture">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame87 />
              </div>
            </div>
          </div>
          <Frame81 />
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame88 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[375px]" data-name="Stories">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative size-full">
                <Frame89 />
              </div>
            </div>
          </div>
          <div className="h-[428px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgTeaser10} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-1/2 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame62 />
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Interview Small">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <div className="h-[153.583px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#b6b8bb] border-b border-solid inset-0 pointer-events-none" />
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative size-full">
                  <div className="aspect-[160/200] col-1 justify-self-stretch relative row-1 shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame66 />
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
                  <Frame70 />
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
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full" />
                    </div>
                  </div>
                  <Frame74 />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="SectionClose">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[16px] relative size-full">
                <Frame90 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}