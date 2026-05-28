import Iconify from "./Iconify";

type Props = {
  label: string;
  placeholder: string;
  required: boolean;
  height: number;
  text: string;
  updateText: (value: string) => void;
};

export default function GeneralTextArea({ label, placeholder, required, height, text, updateText }: Props) {
  return (
    <div>
      <div className="mb-1 text-[16px] font-medium">
        <span className="text-on-surface">{label}</span>
        {required && <span className="text-error">*</span>}
      </div>
      <div className="relative">
        <textarea
          id="text"
          name="text"
          placeholder={placeholder}
          className="bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline w-full rounded-lg border-2 py-3 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]"
          style={{ height: height, resize: "none" }}
          required
          value={text}
          onChange={(event) => updateText(event.target.value)}
        ></textarea>
        <button type="button" onClick={() => updateText("")} className="absolute top-4 right-4 cursor-pointer">
          <Iconify iconify="ri:close-circle-line" size={24} color="var(--color-on-surface-variant)" />
        </button>
      </div>
    </div>
  );
}
