type Props = {
    label: string;
    required: boolean;
    password: string;
    updatePassword: (value: string) => void;
    passwordHasError: boolean;
};
export declare function PasswordTextField({ label, required, password, updatePassword, passwordHasError }: Props): import("react/jsx-runtime").JSX.Element;
export {};
