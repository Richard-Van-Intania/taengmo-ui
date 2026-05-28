type Props = {
    label: string;
    id: string;
    name: string;
    itemValue: string;
    selectedValue: string;
    updateSelectedValue: (value: string) => void;
};
export declare function CustomRadio({ label, id, name, itemValue, selectedValue, updateSelectedValue }: Props): import("react/jsx-runtime").JSX.Element;
export {};
