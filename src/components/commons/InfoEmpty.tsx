import { Iconify } from "./Iconify";

export function InfoEmpty() {
  return (
    <div className="bg-surface-container flex h-20 w-full items-center justify-center gap-x-4 rounded-b-lg">
      <Iconify iconify="streamline-freehand:app-window-search-text" size={40} color="var(--color-outline-variant)"></Iconify>
      <div className="text-outline-variant text-[16px]">Not found at the moment</div>
    </div>
  );
}
