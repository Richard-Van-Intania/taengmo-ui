"use client";

import { useEffect, useRef } from "react";
import { Iconify } from "./Iconify";

type Props = {
  label: string;
  required: boolean;
  email: string;
  updateEmail: (value: string) => void;
  emailHasError: boolean;
};

export function EmailTextField({ label, required, email, updateEmail, emailHasError }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const showError: boolean = email.trim() !== "" && emailHasError;

  useEffect(() => {
    if (inputRef.current) {
      updateEmail(inputRef.current.value.trim());
    }
  }, [updateEmail]);

  return (
    <div>
      <div className="mb-1 text-[16px] font-medium">
        <span className="text-on-surface">{label}</span>
        {required && <span className="text-error">*</span>}
      </div>
      <div className="relative">
        <input
          ref={inputRef}
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@example.com"
          className="bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 px-12 text-[16px] outline-none placeholder:text-[16px]"
          required
          maxLength={140}
          value={email}
          onChange={(event) => updateEmail(event.target.value.trim())}
        />
        <div className="absolute top-4 left-4">
          <Iconify iconify="ri:mail-line" size={24} color="var(--color-on-surface-variant)" />
        </div>
        <button type="button" className="absolute top-4 right-4 cursor-pointer" onClick={() => updateEmail("")}>
          <Iconify iconify="ri:close-circle-line" size={24} color="var(--color-on-surface-variant)" />
        </button>
      </div>
      <div className="flex h-6 items-center">{showError && <div className="text-error px-4 text-[12px]">Please enter a valid email address.</div>}</div>
    </div>
  );
}
