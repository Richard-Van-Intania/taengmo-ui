import { type ButtonSize, cn, buttonHeight, buttonIconSize, buttonFontSize } from "../../uis";
import Iconify from "../commons/Iconify";

type Props = {
  label: string;
  iconify: string;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonOutlinedIcon({ label, iconify, scale, whenClicked }: Props) {
  return (
    <button type="button" className={cn("border-primary flex w-full cursor-pointer items-center justify-center rounded-lg border-2 bg-transparent", buttonHeight(scale))} onClick={whenClicked}>
      <Iconify iconify={iconify} size={buttonIconSize(scale)} color="var(--color-primary)" />
      <div className={cn("text-primary ml-2 font-medium", buttonFontSize(scale))}>{label}</div>
    </button>
  );
}
