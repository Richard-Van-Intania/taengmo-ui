import { Activity } from "react";

type Props = {
  children: React.ReactNode;
  index: number;
  value: number;
};

export function CustomTabPanel({ children, index, value }: Props) {
  return <Activity mode={value === index ? "visible" : "hidden"}>{children}</Activity>;
}
