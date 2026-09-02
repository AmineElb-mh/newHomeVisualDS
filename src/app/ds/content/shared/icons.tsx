const backIconPath = "M5.65383 11.3077L0 5.65383L5.65383 0L6.70765 1.05383L2.10765 5.65383L6.70765 10.2538L5.65383 11.3077Z";
const playIconPath = "M0 9.3948V0L7.41788 4.6974L0 9.3948Z";

export function BackIcon() {
  return (
    <svg width="7" height="12" viewBox="0 0 6.70765 11.3077" fill="none">
      <path d={backIconPath} fill="black" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="9" height="12" viewBox="0 0 7.41788 9.3948" fill="none">
      <path d={playIconPath} fill="white" />
    </svg>
  );
}
