import { type ButtonSize, BUTTON_SIZE, cn, buttonIconSize } from "../../uis";
import { Iconify } from "../commons/Iconify";

type Props = {
  iconify: string;
  iconColor?: string;
  enable?: boolean;
  scale?: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonOnlyIcon({ iconify, iconColor = "var(--color-on-surface-variant)", enable = true, scale = BUTTON_SIZE.LARGE, whenClicked }: Props) {
  return (
    <button type="button" className={cn("hover:bg-on-surface-variant-op8 flex items-center justify-center rounded-full bg-transparent p-3", enable ? "cursor-pointer" : "cursor-not-allowed")} disabled={!enable} onClick={whenClicked}>
      <Iconify iconify={iconify} size={buttonIconSize(scale)} color={enable ? iconColor : "var(--color-on-surface-op38)"} />
    </button>
  );
}
