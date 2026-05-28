import { type ButtonSize } from "../../uis";
type Props = {
    label: string;
    scale: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function ButtonOutlinedError({ label, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
