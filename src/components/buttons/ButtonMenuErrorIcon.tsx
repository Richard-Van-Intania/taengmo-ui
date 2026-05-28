import { cn } from "../../uis/cn";
import { Iconify } from "../commons/Iconify";

type Props = {
  label: string;
  iconify: string;
  enable: boolean;
  whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonMenuErrorIcon({ label, iconify, enable, whenClicked }: Props) {
  return (
    <button
      type="button"
      className={cn("flex w-full items-center bg-transparent px-4 py-2", enable ? "text-error hover:text-on-error-container hover:bg-error-container cursor-pointer" : "text-on-surface-op38 cursor-not-allowed")}
      disabled={!enable}
      onClick={whenClicked}
    >
      <Iconify iconify={iconify} size={24} color="" />
      <div className="ml-2 text-[16px] font-medium">{label}</div>
    </button>
  );
}
