"use client";

import { useEffect, useRef, useState } from "react";
import Iconify from "./Iconify";

type Props = {
  label: string;
  required: boolean;
  password: string;
  updatePassword: (value: string) => void;
  passwordHasError: boolean;
};

export default function PasswordTextField({ label, required, password, updatePassword, passwordHasError }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const showError: boolean = password !== "" && passwordHasError;

  useEffect(() => {
    if (inputRef.current) {
      updatePassword(inputRef.current.value);
    }
  }, [updatePassword]);

  return (
    <div>
      <div className="mb-1 text-[16px] font-medium">
        <span className="text-on-surface">{label}</span>
        {required && <span className="text-error">*</span>}
      </div>
      <div className="relative">
        <input
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="y0ur_p@$$w0rd_h3r3"
          className="bg-surface-container-highest border-outline text-on-surface focus:border-primary placeholder:text-outline h-14 w-full rounded-lg border-2 px-12 text-[16px] outline-none placeholder:text-[16px]"
          required
          maxLength={140}
          value={password}
          onChange={(event) => updatePassword(event.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-4 left-4 cursor-pointer">
          <Iconify iconify={showPassword ? "ri:eye-line" : "ri:eye-off-line"} size={24} color="var(--color-on-surface-variant)" />
        </button>
        <button type="button" onClick={() => updatePassword("")} className="absolute top-4 right-4 cursor-pointer">
          <Iconify iconify="ri:close-circle-line" size={24} color="var(--color-on-surface-variant)" />
        </button>
      </div>
      <div className="flex h-10 items-center">{showError && <div className="text-error px-4 text-[12px]">Password must be at least 10 characters long include uppercase lowercase and number.</div>}</div>
    </div>
  );
}
