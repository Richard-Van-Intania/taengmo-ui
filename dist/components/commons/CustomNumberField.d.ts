import * as React from "react";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
export default function CustomNumberField({ id: idProp, label, error, size, ...other }: BaseNumberField.Root.Props & {
    label?: React.ReactNode;
    size?: "small" | "medium";
    error?: boolean;
}): import("react/jsx-runtime").JSX.Element;
