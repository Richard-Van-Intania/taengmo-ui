type Props = {
  label: string;
  placeholder: string;
  text: string;
};

export default function ReadonlyTextField({ label, placeholder, text }: Props) {
  return (
    <div>
      <div className="text-on-surface mb-1 text-[16px] font-medium">{label}</div>
      <input
        type="text"
        id="text"
        name="text"
        placeholder={placeholder}
        readOnly
        disabled
        className="bg-surface-container-highest border-outline text-outline focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]"
        value={text}
      />
    </div>
  );
}
