import { Iconify } from "./Iconify";

type Props = {
  label: string;
  reference: number;
  required: boolean;
  verification: string;
  updateVerification: (value: string) => void;
};

export function VerificationTextField({ label, reference, required, verification, updateVerification }: Props) {
  return (
    <div>
      <div className="mb-1 text-[16px] font-medium">
        <span className="text-on-surface">{label}</span>
        {required && <span className="text-error">*</span>}
      </div>
      <div className="relative">
        <input
          type="text"
          id="verification"
          name="verification"
          placeholder="1234567"
          className="bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 pr-12 pl-4 text-[16px] outline-none placeholder:text-[16px]"
          required
          maxLength={8}
          value={verification}
          onChange={(event) => updateVerification(event.target.value.trim())}
        />
        <button type="button" className="absolute top-4 right-4 cursor-pointer" onClick={() => updateVerification("")}>
          <Iconify iconify="ri:close-circle-line" size={24} color="var(--color-on-surface-variant)" />
        </button>
      </div>
      <div className="text-on-surface-variant flex h-6 items-center text-[12px]">
        <div className="pl-4">Reference:</div>
        <div className="pl-1 font-medium">{reference}</div>
      </div>
    </div>
  );
}
