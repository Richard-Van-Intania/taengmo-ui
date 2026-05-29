export function FormDialogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex justify-center overflow-y-scroll px-4 pt-16">
      <div className="w-full max-w-160">{children}</div>
    </div>
  );
}
