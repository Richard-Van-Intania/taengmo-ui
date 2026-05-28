type Props = {
  label: string;
};

export function FormDialogTitle({ label }: Props) {
  return <div className="text-on-surface-variant text-[22px]">{label}</div>;
}
