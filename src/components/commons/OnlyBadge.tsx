type Props = {
  label: string;
};

export default function OnlyBadge({ label }: Props) {
  return <div className="bg-primary-container border-primary-fixed-dim text-on-primary-container rounded-full border px-3 py-1 text-[14px] font-medium">{label}</div>;
}
