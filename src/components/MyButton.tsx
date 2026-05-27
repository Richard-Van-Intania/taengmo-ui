import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function MyButton(props: Props) {
  return (
    <button
      {...props}
      className="
        bg-primary-dev
        hover:bg-(--color-primary-hover)
        text-black
        px-4
        py-2
        rounded-(--radius-button)
        transition-colors
      "
    >
      BT
    </button>
  );
}
