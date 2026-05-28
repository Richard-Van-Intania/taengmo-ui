import { type ButtonSize } from "../../uis";
type Props = {
    label: string;
    iconify: string;
    enable: boolean;
    scale: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export default function ButtonFilledErrorIcon({ label, iconify, enable, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
