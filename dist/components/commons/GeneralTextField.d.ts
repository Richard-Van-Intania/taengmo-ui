type Props = {
    label: string;
    required: boolean;
    placeholder: string;
    text: string;
    updateText: (value: string) => void;
};
export default function GeneralTextField({ label, required, placeholder, text, updateText }: Props): import("react/jsx-runtime").JSX.Element;
export {};
