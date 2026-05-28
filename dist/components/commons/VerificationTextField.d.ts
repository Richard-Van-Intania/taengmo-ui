type Props = {
    label: string;
    reference: number;
    required: boolean;
    verification: string;
    updateVerification: (value: string) => void;
};
export declare function VerificationTextField({ label, reference, required, verification, updateVerification }: Props): import("react/jsx-runtime").JSX.Element;
export {};
