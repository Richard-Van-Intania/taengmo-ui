import { type ButtonSize } from "../../uis";
type Props = {
    label: string;
    iconify: string;
    scale: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export default function ButtonOutlinedIcon({ label, iconify, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
