import { type ButtonSize } from "../../uis";
type Props = {
    label: string;
    enable: boolean;
    scale: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function ButtonFilledError({ label, enable, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
