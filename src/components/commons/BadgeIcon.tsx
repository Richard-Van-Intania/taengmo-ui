import Iconify from "./Iconify";

type Props = {
  label: string;
  iconify: string;
};

export default function BadgeIcon({ label, iconify }: Props) {
  return (
    <div className="bg-primary-container border-primary-fixed-dim text-on-primary-container flex items-center gap-x-1 rounded-full border px-3 py-1">
      <Iconify iconify={iconify} size={16} color="var(--color-on-primary-container)" />
      <div className="text-[14px] font-medium">{label}</div>
    </div>
  );
}
