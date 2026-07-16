import svgPaths from "./svg-qdlcfaysxa";
import imgHeaderLogo from "./e8bfd1eb435253c130d94b9469d9fcba48236ead.png";
import imgImage from "./478afed3ef350e10cc24e99776166f63334d5923.png";
import imgImage1 from "./91830b77325ef8d291544963a536e199c131d3c2.png";
import imgImage2 from "./986ddab44e2806044ffa15f949ab110bdd1adcc3.png";
import imgImage3 from "./cbf3e4a76d76bfc37fd1d4f388cbbe983ed71bd5.png";
import imgImage4 from "./38eeafce1d9c05c2f5786d2c6454542f76f5eb9a.png";
import imgImage5 from "./b0384df487e3fa4e29f222fa13b88b552e215efc.png";
import imgRectangle33 from "./93094b8f72fcc9f2f9cb0a63fcf983e0d1d6ea4e.png";
import imgImage6 from "./1cbeb13aaf79be4864f59e35c80c240eccab5352.png";
import imgImage7 from "./5810a71e2271f8cd1a0ff9cf6460383eb797ef69.png";
import imgImage8 from "./7e323351a756c04b4eb7d47c1a8921bbafaf4e6a.png";

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

function Spacer() {
  return <div className="bg-white relative shrink-0 size-0" data-name="spacer" />;
}

function HeaderLogo() {
  return (
    <div className="h-[16px] relative shrink-0 w-[135px]" data-name="header__logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLogo} />
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[230.412px] pt-[28px] relative size-full">
          <Spacer />
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#d90000] content-stretch drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] flex gap-[2px] items-center justify-center px-[13px] py-[8px] relative rounded-[2px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Abonneer</p>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name=".nav__account">
        <div className="bg-[rgba(255,255,255,0)] drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] relative rounded-[2px] shrink-0 size-[48px]" data-name="IconButton">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[24px]" data-name="person">
              <div className="absolute inset-[19.55%_18.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.6153">
                  <path d={svgPaths.p3e57e180} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48px] items-center justify-between left-0 px-[16px] py-[12px] top-[54px] w-[375px]" data-name="header-nav">
      <HeaderLogo />
      <Frame100 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 top-0 w-[375px]" data-name=".Status Bar - iPhone">
        <Time />
        <Levels />
      </div>
      <HeaderNav />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">ECONOMIE</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:Bold',sans-serif] leading-[1.1] min-w-px not-italic relative text-[24px] text-black">Eerste aanwijzingen dat flexi-jobs reguliere banen in de horeca verdringen</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame15 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Introduction">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] min-w-px relative text-[#666] text-[14px]">Nieuwe cijfers wijzen erop dat het flexi-statuut vaste horecajobs onder druk zet.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="aspect-[160/200] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Caption">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Caption</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BEURS</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Ongezien vette winsten voor Amerikaanse banken door aandelenjackpot</p>
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
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">HANDEL</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame5 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">China exporteert voor het eerst meer dan één miljoen wagens per maand</p>
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
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BEDRIJVEN</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame7 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Kwartaalresultaat ASML overtreft de verwachtingen</p>
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

function Frame101() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] gap-[4px] h-[32px] items-center leading-[1.4] min-w-px not-italic relative text-[18px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Economieblog</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">ASML</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame14 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Kwartaalresultaat ASML overtreft de verwachtingen</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame13 />
      <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Other">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
          <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4848] text-[12px] whitespace-nowrap">
            <p className="leading-[1.25]">09:12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">CHINA</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame24 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Groei Chinese economie valt terug tot laagste niveau in drie jaar</p>
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
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame22 />
      <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Other">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
          <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4848] text-[12px] whitespace-nowrap">
            <p className="leading-[1.25]">08:36</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">IBM</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame28 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">IBM kent grootste verlies aan beurswaarde sinds 1968</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame26 />
      <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Other">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
          <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4848] text-[12px] whitespace-nowrap">
            <p className="leading-[1.25]">08:05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BANKEN</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame32 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Amerikaanse banken boeken ongezien vette winsten</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame30 />
      <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Other">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
          <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4848] text-[12px] whitespace-nowrap">
            <p className="leading-[1.25]">07:35</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">HORMUZ</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame36 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Reders mijden de Straat van Hormuz na nieuwe dreiging</p>
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
      <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Other">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Time">
          <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a4848] text-[12px] whitespace-nowrap">
            <p className="leading-[1.25]">06:53</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[1.25] min-w-px relative text-[14px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Meer recent</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] gap-[4px] h-[32px] items-center leading-[1.4] min-w-px not-italic relative text-[18px] text-black whitespace-nowrap">
      <p className="relative shrink-0">De Grote Markt</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">DE GROTE MARKT</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame40 />
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:Bold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[22px] text-white">Hormuz dreigt voor reders een straatje zonder eind te worden</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-end min-h-px relative w-full">
      <Frame38 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">DE GROTE MARKT</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame44 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Koreaanse chipmaker SK Hynix is de nieuwe speelbal van AI-speculatie</p>
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
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame42 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">DE GROTE MARKT</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame48 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Europa moest al veel eerder van het gas af</p>
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
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame46 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[1.25] min-w-px relative text-[14px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Meer De Grote Markt</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] gap-[4px] h-[32px] items-center leading-[1.4] min-w-px not-italic relative text-[18px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Beurs</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">MONEY TIME</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame52 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:Bold',sans-serif] leading-[1.1] min-w-px not-italic relative text-[24px] text-black">IBM kent grootste verlies aan beurswaarde sinds 1968</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame51 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Introduction">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] min-w-px relative text-[#666] text-[14px]">Tegenvallende cijfers duwen het techbedrijf hard naar beneden.</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="aspect-[160/200] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Caption">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Reuters</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">HANDEL</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame57 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">China exporteert voor het eerst meer dan één miljoen wagens per maand</p>
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
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame55 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BEURS</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame61 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Amerikaanse banken boeken ongezien vette winsten</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame59 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">HANDEL</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame65 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">China exporteert voor het eerst meer dan één miljoen wagens per maand</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame63 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[1.25] min-w-px relative text-[14px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Meer beurs</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] gap-[4px] h-[32px] items-center leading-[1.4] min-w-px not-italic relative text-[18px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Bedrijven</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BPOST</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame69 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:Bold',sans-serif] leading-[1.1] min-w-px not-italic relative text-[24px] text-black">Bpost verhuurt Bbox-kluisjes nu ook als locker voor persoonlijk gebruik</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame68 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Introduction">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] min-w-px relative text-[#666] text-[14px]">Een miljardenbod moet de betaalreus in handen van nieuwe eigenaars brengen.</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="aspect-[160/200] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Caption">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Reuters</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BEURS</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame74 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Amerikaanse banken boeken ongezien vette winsten</p>
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
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame72 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">META</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame78 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Meta beschuldigd van discriminatie bij ontslagen</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame76 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">BARCO</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame82 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Barco duikt in het rood</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame81 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame80 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[1.25] min-w-px relative text-[14px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Meer bedrijven</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] gap-[4px] h-[32px] items-center leading-[1.4] min-w-px not-italic relative text-[18px] text-black whitespace-nowrap">
      <p className="relative shrink-0">De Helpdesk</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">DE HELPDESK</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame86 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:Bold',sans-serif] leading-[1.1] min-w-px not-italic relative text-[24px] text-black">Het is te heet op mijn vakantiebestemming: kan ik mijn reis dan gratis annuleren?</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame85 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Introduction">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] min-w-px relative text-[#666] text-[14px]">Onze redactie zocht uit welke rechten je hebt bij extreme hitte op je bestemming.</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame84 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="aspect-[160/200] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Caption">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Reuters</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">CONSUMENT</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame91 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Bpost verhuurt Bbox-kluisjes nu ook als locker voor persoonlijk gebruik</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame90 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame89 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">DE HELPDESK</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame95 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Wanneer heb je recht op terugbetaling bij een geannuleerde vlucht?</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame94 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame93 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Label">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">DE HELPDESK</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="Premium">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Background" />
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Vector">
            <path d={svgPaths.p339c3180} fill="var(--fill-0, #2B70E8)" />
            <path clipRule="evenodd" d={svgPaths.p840ed00} fill="var(--fill-0, #2B70E8)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame99 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] min-w-px not-italic relative text-[18px] text-black">Zo controleer je of je reisverzekering hitte-annulering dekt</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame98 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Frame97 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[1.25] min-w-px relative text-[14px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Meer De Helpdesk</p>
      <p className="relative shrink-0">›</p>
    </div>
  );
}

function BottomNavItems() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-nav__items">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-between min-w-px relative" data-name=".bottom-nav__item">
        <div className="relative shrink-0 size-[24px]" data-name="logo-square-inverse">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p361a800} fill="var(--fill-0, white)" id="Background" />
          </svg>
          <div className="absolute inset-[15.28%_11.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4814 16.6658">
              <path clipRule="evenodd" d={svgPaths.p1fc2d880} fill="var(--fill-0, #D90000)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[1.15] min-w-full not-italic relative shrink-0 text-[#d90000] text-[10px] text-center w-[min-content]">Actueel</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-between min-w-px relative" data-name=".bottom-nav__item">
        <div className="relative shrink-0 size-[24px]" data-name="newspaper">
          <div className="absolute inset-[18.75%_9.38%_18.75%_3.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
              <path d={svgPaths.p11cb4e80} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">Publicaties</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-between min-w-px relative" data-name=".bottom-nav__item">
        <div className="relative shrink-0 size-[24px]" data-name="play-button">
          <div className="absolute inset-[10.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p35114a00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">Kijk</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-between min-w-px relative" data-name=".bottom-nav__item">
        <div className="relative shrink-0 size-[24px]" data-name="podcast">
          <div className="absolute inset-[14.58%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p3dd23900} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">Luister</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-between min-w-px relative" data-name=".bottom-nav__item">
        <div className="relative shrink-0 size-[24px]" data-name="menu-search">
          <div className="absolute inset-[18.74%_10.28%_18.75%_10.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.032 15.0035">
              <g id="Vector">
                <path d="M0 0V1.5H5V0H0Z" fill="var(--fill-0, black)" />
                <path d={svgPaths.pf6c5200} fill="var(--fill-0, black)" />
                <path d={svgPaths.p15d81600} fill="var(--fill-0, black)" />
                <path d={svgPaths.p322b4700} fill="var(--fill-0, black)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">Menu</p>
      </div>
    </div>
  );
}

export default function DsEconomie() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pt-[173px] relative size-full" data-name="DS Economie">
      <Group />
      <div className="relative shrink-0 w-full" data-name="Hero Default">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Arcticle Large Default">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Arcticle Large Live">
              <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0 w-full" data-name="Teaser">
                <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                <Frame1 />
                <Frame20 />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Article Small">
            <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
              </div>
              <Frame2 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame4 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame6 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Economieblog">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <Frame101 />
          </div>
          <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
            <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
            <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
            </div>
            <Frame8 />
          </div>
          <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
            <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
            <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
            </div>
            <Frame21 />
          </div>
          <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
            <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
            <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
            </div>
            <Frame25 />
          </div>
          <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
            <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
            <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
            <Frame29 />
          </div>
          <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
            <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
            <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
            </div>
            <Frame33 />
          </div>
          <div className="content-stretch flex items-center justify-center pb-[16px] relative shrink-0 w-full" data-name="SectionClose">
            <Frame103 />
          </div>
        </div>
      </div>
      <div className="bg-[#ececec] h-[307px] relative shrink-0 w-full" data-name="Ad">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Arnhem:Blond',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center w-full">Advertentie</p>
          <div className="flex-[1_0_0] min-h-px relative w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle33} />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Stories">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <Frame102 />
          </div>
          <div className="h-[428px] relative shrink-0 w-full" data-name="Teaser">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage5} />
              <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] inset-0 to-[rgba(0,0,0,0)]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Frame37 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Interview Small">
            <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] h-[153.583px] pb-[24px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="aspect-[160/200] col-1 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
              </div>
              <Frame41 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Interview Small">
            <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="aspect-[160/200] col-1 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
              </div>
              <Frame45 />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center pb-[16px] relative shrink-0 w-full" data-name="SectionClose">
            <Frame104 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Article">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <Frame105 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Arcticle Large Live">
            <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame49 />
              <Frame53 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Article Small">
            <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
              </div>
              <Frame54 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame58 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame62 />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center pb-[16px] relative shrink-0 w-full" data-name="SectionClose">
            <Frame106 />
          </div>
        </div>
      </div>
      <div className="bg-[#ececec] h-[307px] relative shrink-0 w-full" data-name="Ad">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Arnhem:Blond',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[12px] text-black text-center w-full">Advertentie</p>
          <div className="flex-[1_0_0] min-h-px relative w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle33} />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Article">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <Frame107 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Arcticle Large Live">
            <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame66 />
              <Frame70 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Article Small">
            <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
              </div>
              <Frame71 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame75 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame79 />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center pb-[16px] relative shrink-0 w-full" data-name="SectionClose">
            <Frame108 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Article">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[12px] relative shrink-0 w-full" data-name="SectionOpen">
            <div aria-hidden className="absolute border-black border-solid border-t-2 inset-0 pointer-events-none" />
            <Frame109 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Arcticle Large Live">
            <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame83 />
              <Frame87 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Article Small">
            <div className="gap-x-[16px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[24px] relative shrink-0 w-full" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="aspect-[267/200] col-3 content-stretch flex items-center justify-center justify-self-stretch overflow-clip relative row-1 shrink-0" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
              </div>
              <Frame88 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame92 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Article Small - No Image">
            <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-[343px]" data-name="Teaser">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <Frame96 />
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center pb-[16px] relative shrink-0 w-full" data-name="SectionClose">
            <Frame110 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[6819px] left-[calc(50%-139px)] pointer-events-none top-[102px]">
        <div className="-translate-x-1/2 bg-white content-stretch flex items-start justify-center pointer-events-auto sticky top-0 w-[375px]" data-name="TabRow-Brand">
          <div className="content-stretch flex items-start justify-center shrink-0 sticky top-0" data-name="TabRow-Brand">
            <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
            <div className="bg-white content-stretch flex gap-[24px] items-center px-[16px] relative shrink-0" data-name="TabRow">
              <div aria-hidden className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Politiek</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Opinie</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Cultuur</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Mijn Nieuws</p>
                </div>
              </div>
              <a className="content-stretch cursor-pointer flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Vandaag</p>
                </div>
              </a>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Recent</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div aria-hidden className="absolute border-[#035087] border-b-4 border-solid inset-0 pointer-events-none" />
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Economie</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Puzzels</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0" data-name="Tab">
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">Onderwerpen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[2px] items-start left-0 pt-[7px] top-[6838px] w-[375px]" data-name="Navigation2.0 - bottom-nav">
        <BottomNavItems />
        <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="HomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}