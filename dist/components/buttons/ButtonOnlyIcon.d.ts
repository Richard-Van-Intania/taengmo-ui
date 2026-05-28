import { type ButtonSize } from "../../uis";
type Props = {
    iconify: string;
    iconColor?: string;
    enable?: boolean;
    scale?: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function ButtonOnlyIcon({ iconify, iconColor, enable, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
