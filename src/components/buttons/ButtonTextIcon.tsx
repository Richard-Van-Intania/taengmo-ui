import { type ButtonSize, cn, buttonHeight, buttonIconSize, buttonFontSize } from "../../uis";
import Iconify from "../commons/Iconify";

type Props = {
  label: string;
  iconify: string;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonTextIcon({ label, iconify, scale, whenClicked }: Props) {
  return (
    <button type="button" className={cn("text-primary hover:bg-primary-op8 flex cursor-pointer items-center justify-center rounded-lg bg-transparent px-4", buttonHeight(scale))} onClick={whenClicked}>
      <Iconify iconify={iconify} size={buttonIconSize(scale)} color="" />
      <div className={cn("ml-2 font-medium", buttonFontSize(scale))}>{label}</div>
    </button>
  );
}
