import imgHeaderLogo from "../assets/header-logo.png";

const svgPaths = {
  p1af82040:
    "M104 27.7811V31.8566C104.805 31.5114 105.328 30.7085 105.328 29.8189C105.328 28.9293 104.805 28.1263 104 27.7811",
  p397d7f00:
    "M62.2705 26.104C64.7576 26.1041 67.1496 27.0262 68.9522 28.6797C69.0879 28.8074 69.3048 28.8058 69.4385 28.6761L70.736 27.4126C70.8037 27.3469 70.8414 27.2578 70.8409 27.1651C70.8403 27.0724 70.8015 26.9838 70.733 26.9188C66.002 22.5441 58.5383 22.5441 53.8073 26.9188C53.7388 26.9837 53.6999 27.0724 53.6992 27.165C53.6986 27.2577 53.7363 27.3468 53.8039 27.4126L55.1018 28.6761C55.2354 28.8059 55.4525 28.8076 55.5882 28.6797C57.3909 27.0261 59.7832 26.104 62.2705 26.104ZM62.2672 30.3243C63.6245 30.3242 64.9334 30.836 65.9395 31.7601C66.0756 31.8913 66.2899 31.8884 66.4226 31.7537L67.7099 30.4344C67.7777 30.3652 67.8153 30.2713 67.8143 30.1738C67.8133 30.0762 67.7738 29.9831 67.7047 29.9153C64.6408 27.0245 59.8961 27.0245 56.8323 29.9153C56.7631 29.9831 56.7236 30.0762 56.7227 30.1738C56.7218 30.2714 56.7595 30.3653 56.8274 30.4344L58.1144 31.7537C58.247 31.8884 58.4614 31.8913 58.5975 31.7601C59.6029 30.8366 60.9108 30.3249 62.2672 30.3243ZM64.7916 33.1179C64.7935 33.2232 64.7565 33.3248 64.6892 33.3986L62.5125 35.8533C62.4487 35.9255 62.3617 35.9661 62.2709 35.9661C62.1802 35.9661 62.0932 35.9255 62.0294 35.8533L59.8523 33.3986C59.7851 33.3247 59.7481 33.2231 59.7501 33.1178C59.7521 33.0124 59.7929 32.9127 59.8629 32.842C61.253 31.5282 63.2889 31.5282 64.679 32.842C64.7489 32.9127 64.7897 33.0125 64.7916 33.1179Z",
  p37488800:
    "M46.2 24.6821C46.2 24.049 45.7224 23.5358 45.1333 23.5358H44.0667C43.4776 23.5358 43 24.049 43 24.6821V34.616C43 35.2491 43.4776 35.7622 44.0667 35.7622H45.1333C45.7224 35.7622 46.2 35.2491 46.2 34.616V24.6821ZM38.7659 25.9811H39.8326C40.4217 25.9811 40.8992 26.5066 40.8992 27.1548V34.5885C40.8992 35.2367 40.4217 35.7622 39.8326 35.7622H38.7659C38.1768 35.7622 37.6992 35.2367 37.6992 34.5885V27.1548C37.6992 26.5066 38.1768 25.9811 38.7659 25.9811ZM34.4341 28.6302H33.3674C32.7783 28.6302 32.3008 29.1623 32.3008 29.8188V34.5735C32.3008 35.23 32.7783 35.7622 33.3674 35.7622H34.4341C35.0232 35.7622 35.5008 35.23 35.5008 34.5735V29.8188C35.5008 29.1623 35.0232 28.6302 34.4341 28.6302ZM29.1333 31.0754H28.0667C27.4776 31.0754 27 31.6 27 32.2471V34.5905C27 35.2377 27.4776 35.7622 28.0667 35.7622H29.1333C29.7224 35.7622 30.2 35.2377 30.2 34.5905V32.2471C30.2 31.6 29.7224 31.0754 29.1333 31.0754Z",
  p3e57e180:
    "M7.49997 6.99993C6.53749 6.99993 5.71354 6.65723 5.02813 5.97183C4.34271 5.28641 4 4.46246 4 3.49998C4 2.53748 4.34271 1.71353 5.02813 1.02813C5.71354 0.342708 6.53749 0 7.49997 0C8.46246 0 9.28641 0.342708 9.97183 1.02813C10.6572 1.71353 11 2.53748 11 3.49998C11 4.46246 10.6572 5.28641 9.97183 5.97183C9.28641 6.65723 8.46246 6.99993 7.49997 6.99993ZM0 14.6153V12.3923C0 11.9025 0.133016 11.449 0.39905 11.0317C0.665066 10.6144 1.02051 10.2936 1.46537 10.0692C2.45384 9.58458 3.45096 9.22113 4.45672 8.97883C5.46249 8.73653 6.47691 8.61538 7.49997 8.61538C8.52304 8.61538 9.53746 8.73653 10.5432 8.97883C11.549 9.22113 12.5461 9.58458 13.5346 10.0692C13.9794 10.2936 14.3349 10.6144 14.6009 11.0317C14.8669 11.449 15 11.9025 15 12.3923V14.6153H0ZM1.49997 13.1153H13.5V12.3923C13.5 12.1897 13.4413 12.0022 13.324 11.8298C13.2067 11.6573 13.0474 11.5166 12.8461 11.4076C11.9846 10.9833 11.1061 10.6618 10.2107 10.4432C9.31524 10.2246 8.41167 10.1153 7.49997 10.1153C6.58827 10.1153 5.68471 10.2246 4.78927 10.4432C3.89384 10.6618 3.01536 10.9833 2.15382 11.4076C1.95254 11.5166 1.79325 11.6573 1.67595 11.8298C1.55863 12.0022 1.49997 12.1897 1.49997 12.3923V13.1153ZM7.49997 5.49998C8.04997 5.49998 8.52081 5.30414 8.91247 4.91248C9.30414 4.52081 9.49998 4.04998 9.49998 3.49998C9.49998 2.94998 9.30414 2.47914 8.91247 2.08748C8.52081 1.69581 8.04997 1.49998 7.49997 1.49998C6.94997 1.49998 6.47914 1.69581 6.08747 2.08748C5.69581 2.47914 5.49997 2.94998 5.49997 3.49998C5.49997 4.04998 5.69581 4.52081 6.08747 4.91248C6.47914 5.30414 6.94997 5.49998 7.49997 5.49998Z",
};

function Time() {
  return (
    <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Time">
      <p
        className="[word-break:break-word] absolute font-[family-name:var(--font-family-system)] font-[590] inset-[33.96%_36.71%_25.3%_36.96%] leading-[22px] text-[var(--font-size-md)] text-black text-center whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
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

function HeaderLogo() {
  return (
    <div className="h-[16px] relative shrink-0 w-[135px]" data-name="header__logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLogo} />
    </div>
  );
}

function AccountActions() {
  return (
    <div className="content-stretch flex gap-[var(--scale-3)] items-center relative shrink-0">
      <div
        className="bg-[var(--color-primary-60)] content-stretch drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] flex gap-[var(--scale-2)] items-center justify-center px-[13px] py-[var(--scale-5)] relative rounded-[var(--scale-2)] shrink-0"
        data-name="Button"
      >
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[var(--scale-2)]" />
        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font-family-secondary)] font-normal justify-center leading-[0] relative shrink-0 text-[var(--font-size-sm)] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Abonneer</p>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name=".nav__account">
        <div className="bg-[rgba(255,255,255,0)] drop-shadow-[0px_0px_0px_rgba(255,255,255,0)] relative rounded-[var(--scale-2)] shrink-0 size-[48px]" data-name="IconButton">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[var(--scale-7)] relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[24px]" data-name="person">
              <div className="absolute inset-[19.55%_18.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.6153">
                  <path d={svgPaths.p3e57e180} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[var(--scale-2)]" />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="bg-white content-stretch flex items-center justify-between relative w-full" data-name=".Status Bar - iPhone">
        <Time />
        <Levels />
      </div>
      <div className="bg-white content-stretch flex h-[48px] items-center justify-between px-[var(--scale-7)] py-[var(--scale-6)] w-full" data-name="header-nav">
        <HeaderLogo />
        <AccountActions />
      </div>
    </div>
  );
}
