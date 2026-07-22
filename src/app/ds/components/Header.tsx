import imgHeaderLogo from "../assets/header-logo.png";
import StatusBar from "../../components/StatusBar";

const svgPaths = {
  p3e57e180:
    "M7.49997 6.99993C6.53749 6.99993 5.71354 6.65723 5.02813 5.97183C4.34271 5.28641 4 4.46246 4 3.49998C4 2.53748 4.34271 1.71353 5.02813 1.02813C5.71354 0.342708 6.53749 0 7.49997 0C8.46246 0 9.28641 0.342708 9.97183 1.02813C10.6572 1.71353 11 2.53748 11 3.49998C11 4.46246 10.6572 5.28641 9.97183 5.97183C9.28641 6.65723 8.46246 6.99993 7.49997 6.99993ZM0 14.6153V12.3923C0 11.9025 0.133016 11.449 0.39905 11.0317C0.665066 10.6144 1.02051 10.2936 1.46537 10.0692C2.45384 9.58458 3.45096 9.22113 4.45672 8.97883C5.46249 8.73653 6.47691 8.61538 7.49997 8.61538C8.52304 8.61538 9.53746 8.73653 10.5432 8.97883C11.549 9.22113 12.5461 9.58458 13.5346 10.0692C13.9794 10.2936 14.3349 10.6144 14.6009 11.0317C14.8669 11.449 15 11.9025 15 12.3923V14.6153H0ZM1.49997 13.1153H13.5V12.3923C13.5 12.1897 13.4413 12.0022 13.324 11.8298C13.2067 11.6573 13.0474 11.5166 12.8461 11.4076C11.9846 10.9833 11.1061 10.6618 10.2107 10.4432C9.31524 10.2246 8.41167 10.1153 7.49997 10.1153C6.58827 10.1153 5.68471 10.2246 4.78927 10.4432C3.89384 10.6618 3.01536 10.9833 2.15382 11.4076C1.95254 11.5166 1.79325 11.6573 1.67595 11.8298C1.55863 12.0022 1.49997 12.1897 1.49997 12.3923V13.1153ZM7.49997 5.49998C8.04997 5.49998 8.52081 5.30414 8.91247 4.91248C9.30414 4.52081 9.49998 4.04998 9.49998 3.49998C9.49998 2.94998 9.30414 2.47914 8.91247 2.08748C8.52081 1.69581 8.04997 1.49998 7.49997 1.49998C6.94997 1.49998 6.47914 1.69581 6.08747 2.08748C5.69581 2.47914 5.49997 2.94998 5.49997 3.49998C5.49997 4.04998 5.69581 4.52081 6.08747 4.91248C6.47914 5.30414 6.94997 5.49998 7.49997 5.49998Z",
};

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
        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font-family-secondary)] font-normal justify-center leading-[0] relative shrink-0 text-[length:var(--font-size-sm)] text-center text-white whitespace-nowrap">
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
      <StatusBar />
      <div className="bg-white content-stretch flex h-[48px] items-center justify-between px-[var(--scale-7)] py-[var(--scale-6)] w-full" data-name="header-nav">
        <HeaderLogo />
        <AccountActions />
      </div>
    </div>
  );
}
