import { type ButtonSize, cn, buttonHeight, buttonFontSize } from "../../uis";

type Props = {
  label: string;
  enable: boolean;
  scale: ButtonSize;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonFilledError({ label, enable, scale, whenClicked }: Props) {
  return (
    <button
      type="button"
      className={cn("w-full rounded-lg font-medium", buttonHeight(scale), buttonFontSize(scale), enable ? "bg-error text-on-error cursor-pointer" : "bg-on-surface-op10 text-on-surface-op38 cursor-not-allowed")}
      disabled={!enable}
      onClick={whenClicked}
    >
      {label}
    </button>
  );
}
