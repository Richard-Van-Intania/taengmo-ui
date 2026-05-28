"use client";

import { Icon } from "@iconify/react";

type Props = {
  iconify: string;
  size: number;
  color: string;
};

export default function Iconify({ iconify, size, color }: Props) {
  return <Icon icon={iconify} width={size} height={size} style={{ color: color }} />;
}
