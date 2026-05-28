import Iconify from "./Iconify";

type Props = {
  label: string;
  required: boolean;
  placeholder: string;
  text: string;
  updateText: (value: string) => void;
};

export default function GeneralTextField({ label, required, placeholder, text, updateText }: Props) {
  return (
    <div>
      <div className="mb-1 text-[16px] font-medium">
        <span className="text-on-surface">{label}</span>
        {required && <span className="text-error">*</span>}
      </div>
      <div className="relative">
        <input
          type="text"
          id="text"
          name="text"
          placeholder={placeholder}
          className="bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]"
          required
          value={text}
          onChange={(event) => updateText(event.target.value)}
        />
        <button type="button" onClick={() => updateText("")} className="absolute top-4 right-4 cursor-pointer">
          <Iconify iconify="ri:close-circle-line" size={24} color="var(--color-on-surface-variant)" />
        </button>
      </div>
    </div>
  );
}
