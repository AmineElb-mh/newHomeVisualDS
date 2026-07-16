import svgPaths from "./svg-e8gi8nlvrn";

function Time() {
  return (
    <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Time">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[33.96%_36.71%_25.3%_36.96%] leading-[22px] text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        9:41
      </p>
    </div>
  );
}

function Levels() {
  return (
    <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Levels">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.065 54">
        <g id="Levels">
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="78.5" y="23.5" />
            <path d={svgPaths.p1af82040} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="80" y="25" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p397d7f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <path clipRule="evenodd" d={svgPaths.p37488800} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <button className="content-stretch cursor-pointer flex flex-[1_0_0] items-center min-w-px relative" data-name="left">
      <div className="bg-[rgba(255,255,255,0)] drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] relative rounded-[2px] shrink-0 size-[48px]" data-name="IconButton">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[24px]" data-name="chevron-back">
            <div className="absolute inset-[26.44%_37.28%_26.44%_34.78%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.70765 11.3077">
                <path d={svgPaths.p2c8f0600} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </button>
  );
}

function Center() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="center">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:Bold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[20px] text-black text-center">Beheer</p>
    </div>
  );
}

function Right() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-w-px relative" data-name="right">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function MainNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="main-nav">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Left />
          <Center />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arnhem:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.4]">Title</p>
      </div>
      <div className="flex flex-col font-['Arnhem:Blond',sans-serif] justify-center relative shrink-0 text-[#666] text-[14px] w-full">
        <p className="leading-[1.25]">5 nieuwe items</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arnhem:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.4]">Title</p>
      </div>
      <div className="flex flex-col font-['Arnhem:Blond',sans-serif] justify-center relative shrink-0 text-[#666] text-[14px] w-full">
        <p className="leading-[1.25]">5 nieuwe items</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arnhem:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.4]">Title</p>
      </div>
      <div className="flex flex-col font-['Arnhem:Blond',sans-serif] justify-center relative shrink-0 text-[#666] text-[14px] w-full">
        <p className="leading-[1.25]">5 nieuwe items</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arnhem:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.4]">Title</p>
      </div>
      <div className="flex flex-col font-['Arnhem:Blond',sans-serif] justify-center relative shrink-0 text-[#666] text-[14px] w-full">
        <p className="leading-[1.25]">5 nieuwe items</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arnhem:SemiBold',sans-serif] justify-center relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[1.4]">Title</p>
      </div>
      <div className="flex flex-col font-['Arnhem:Blond',sans-serif] justify-center relative shrink-0 text-[#666] text-[14px] w-full">
        <p className="leading-[1.25]">5 nieuwe items</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#f2f2f2] h-[67px] relative rounded-[12px] shrink-0 w-full" data-name="SectionOpen">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0" data-name="toggleButton">
              <div aria-hidden className="absolute border border-[#068467] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[16px]" data-name="checkmark">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-[26.46%_17.56%_26.44%_17.56%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3795 7.53587">
                      <path d={svgPaths.pa2c3800} fill="var(--fill-0, #068467)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Container />
            <div className="relative shrink-0 size-[24px]" data-name="menu">
              <div className="absolute inset-[18.75%_10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 15">
                  <g id="Vector">
                    <path d={svgPaths.pb816700} fill="var(--fill-0, black)" />
                    <path d="M0 13.5V15H18.9999V13.5H0Z" fill="var(--fill-0, black)" />
                    <path d={svgPaths.p1d49dcf1} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] h-[67px] relative rounded-[12px] shrink-0 w-full" data-name="SectionOpen">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0" data-name="toggleButton">
              <div aria-hidden className="absolute border border-[#068467] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[16px]" data-name="checkmark">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-[26.46%_17.56%_26.44%_17.56%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3795 7.53587">
                      <path d={svgPaths.pa2c3800} fill="var(--fill-0, #068467)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Container1 />
            <div className="relative shrink-0 size-[24px]" data-name="menu">
              <div className="absolute inset-[18.75%_10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 15">
                  <g id="Vector">
                    <path d={svgPaths.pb816700} fill="var(--fill-0, black)" />
                    <path d="M0 13.5V15H18.9999V13.5H0Z" fill="var(--fill-0, black)" />
                    <path d={svgPaths.p1d49dcf1} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] h-[67px] relative rounded-[12px] shrink-0 w-full" data-name="SectionOpen">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0" data-name="toggleButton">
              <div aria-hidden className="absolute border border-[#068467] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[16px]" data-name="checkmark">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-[26.46%_17.56%_26.44%_17.56%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3795 7.53587">
                      <path d={svgPaths.pa2c3800} fill="var(--fill-0, #068467)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Container2 />
            <div className="relative shrink-0 size-[24px]" data-name="menu">
              <div className="absolute inset-[18.75%_10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 15">
                  <g id="Vector">
                    <path d={svgPaths.pb816700} fill="var(--fill-0, black)" />
                    <path d="M0 13.5V15H18.9999V13.5H0Z" fill="var(--fill-0, black)" />
                    <path d={svgPaths.p1d49dcf1} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] h-[67px] relative rounded-[12px] shrink-0 w-full" data-name="SectionOpen">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0" data-name="toggleButton">
              <div aria-hidden className="absolute border border-[#068467] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[16px]" data-name="checkmark">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-[26.46%_17.56%_26.44%_17.56%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3795 7.53587">
                      <path d={svgPaths.pa2c3800} fill="var(--fill-0, #068467)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Container3 />
            <div className="relative shrink-0 size-[24px]" data-name="menu">
              <div className="absolute inset-[18.75%_10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 15">
                  <g id="Vector">
                    <path d={svgPaths.pb816700} fill="var(--fill-0, black)" />
                    <path d="M0 13.5V15H18.9999V13.5H0Z" fill="var(--fill-0, black)" />
                    <path d={svgPaths.p1d49dcf1} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] h-[67px] relative rounded-[12px] shrink-0 w-full" data-name="SectionOpen">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0" data-name="toggleButton">
              <div aria-hidden className="absolute border border-[#068467] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[16px]" data-name="checkmark">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-[26.46%_17.56%_26.44%_17.56%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3795 7.53587">
                      <path d={svgPaths.pa2c3800} fill="var(--fill-0, #068467)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Container4 />
            <div className="relative shrink-0 size-[24px]" data-name="menu">
              <div className="absolute inset-[18.75%_10.42%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 15">
                  <g id="Vector">
                    <path d={svgPaths.pb816700} fill="var(--fill-0, black)" />
                    <path d="M0 13.5V15H18.9999V13.5H0Z" fill="var(--fill-0, black)" />
                    <path d={svgPaths.p1d49dcf1} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Beheer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center px-[16px] relative size-full" data-name="Beheer">
      <div className="bg-white relative shrink-0 w-[375px]" data-name="Navigation2.0 - MobileApp - Android">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name=".Status Bar - iPhone">
            <Time />
            <Levels />
          </div>
          <MainNav />
        </div>
        <div aria-hidden className="absolute border-[#d6d6d6] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">
        <p className="leading-[1.375]">Sleep de items om de volgorde van Mijn Nieuws te bepalen</p>
      </div>
      <Frame />
    </div>
  );
}