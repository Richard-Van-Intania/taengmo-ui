import { type ButtonSize, cn, buttonHeight, buttonFontSize } from "../../uis";

type Props = {
  label: string;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonText({ label, scale, whenClicked }: Props) {
  return (
    <button type="button" className={cn("text-primary hover:bg-primary-op8 cursor-pointer rounded-lg bg-transparent px-4 font-medium", buttonHeight(scale), buttonFontSize(scale))} onClick={whenClicked}>
      {label}
    </button>
  );
}
