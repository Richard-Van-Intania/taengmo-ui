import { type ButtonSize } from "../../uis";
type Props = {
    label: string;
    iconify: string;
    scale: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function ButtonTextIcon({ label, iconify, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
