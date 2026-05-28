import { Checkbox } from "@mui/material";
import { cn } from "../../uis/cn";

type Props = {
  label: string;
  checked: boolean;
  updateChecked: (value: boolean) => void;
};

export default function CustomCheckbox({ label, checked, updateChecked }: Props) {
  return (
    <div className="flex items-center">
      <Checkbox
        checked={checked}
        onChange={(event) => updateChecked(event.target.checked)}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 28,
          },
          color: "var(--color-on-surface-variant)",
          "&.Mui-checked": {
            color: "var(--color-primary)",
          },
          "&:hover": {
            backgroundColor: "var(--color-primary-op8)",
          },
        }}
      />
      <label className={cn("ml-1 text-[16px] font-medium", checked ? "text-on-surface" : "text-on-surface-op38")}>{label}</label>
    </div>
  );
}
