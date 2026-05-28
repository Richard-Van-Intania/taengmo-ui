import { type ButtonSize, cn, buttonHeight, buttonIconSize, buttonFontSize } from "../../uis";
import Iconify from "../commons/Iconify";

type Props = {
  label: string;
  iconify: string;
  enable: boolean;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonFilledErrorIcon({ label, iconify, enable, scale, whenClicked }: Props) {
  return (
    <button
      type="button"
      className={cn("flex w-full items-center justify-center rounded-lg", buttonHeight(scale), enable ? "bg-error text-on-error cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed")}
      disabled={!enable}
      onClick={whenClicked}
    >
      <Iconify iconify={iconify} size={buttonIconSize(scale)} color="" />
      <div className={cn("ml-2 font-medium", buttonFontSize(scale))}>{label}</div>
    </button>
  );
}
