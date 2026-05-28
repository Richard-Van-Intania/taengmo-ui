import { type ButtonSize } from "../../uis";
type Props = {
    label: string;
    scale: ButtonSize;
    whenClicked: React.MouseEventHandler<HTMLButtonElement>;
};
export default function ButtonOutlined({ label, scale, whenClicked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
