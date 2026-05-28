type Props = {
    label: string;
    required: boolean;
    email: string;
    updateEmail: (value: string) => void;
    emailHasError: boolean;
};
export declare function EmailTextField({ label, required, email, updateEmail, emailHasError }: Props): import("react/jsx-runtime").JSX.Element;
export {};
