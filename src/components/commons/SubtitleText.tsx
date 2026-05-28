type Props = {
  label: string;
};

export default function SubtitleText({ label }: Props) {
  return <div className="text-on-surface-variant text-[16px]">{label}</div>;
}
