import { type ButtonSize, cn, buttonHeight, buttonFontSize } from "../../uis";

type Props = {
  label: string;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonOutlinedError({ label, scale, whenClicked }: Props) {
  return (
    <button type="button" className={cn("text-error border-error w-full cursor-pointer rounded-lg border-2 bg-transparent font-medium", buttonHeight(scale), buttonFontSize(scale))} onClick={whenClicked}>
      {label}
    </button>
  );
}
