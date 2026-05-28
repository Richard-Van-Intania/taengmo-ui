type Props = {
    label: string;
    placeholder: string;
    required: boolean;
    height: number;
    text: string;
    updateText: (value: string) => void;
};
export declare function GeneralTextArea({ label, placeholder, required, height, text, updateText }: Props): import("react/jsx-runtime").JSX.Element;
export {};
