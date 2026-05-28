import { type ButtonSize, cn, buttonHeight, buttonFontSize } from "../../uis";

type Props = {
  label: string;
  enable: boolean;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonFilled({ label, enable, scale, whenClicked }: Props) {
  return (
    <button
      type="button"
      className={cn("w-full rounded-lg font-medium", buttonHeight(scale), buttonFontSize(scale), enable ? "bg-primary text-on-primary cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed")}
      disabled={!enable}
      onClick={whenClicked}
    >
      {label}
    </button>
  );
}
