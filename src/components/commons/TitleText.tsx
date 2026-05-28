type Props = {
  label: string;
};

export default function TitleText({ label }: Props) {
  return <div className="text-on-surface text-[24px]">{label}</div>;
}
