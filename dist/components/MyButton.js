import { jsx as _jsx } from "react/jsx-runtime";
export function MyButton(props) {
    return (_jsx("button", { ...props, className: "\n        bg-primary-dev\n        hover:bg-(--color-primary-hover)\n        text-black\n        px-4\n        py-2\n        rounded-(--radius-button)\n        transition-colors\n      ", children: "BT" }));
}
