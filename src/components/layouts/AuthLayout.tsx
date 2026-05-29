import { AuthFooter } from "./AuthFooter";

export function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex justify-center px-4 pt-16">
        <div className="w-full max-w-160">{children}</div>
      </div>
      <AuthFooter></AuthFooter>
    </>
  );
}
