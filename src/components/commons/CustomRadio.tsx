import { cn } from "../../uis/cn";

type Props = {
  label: string;
  id: string;
  name: string;
  itemValue: string;
  selectedValue: string;
  updateSelectedValue: (value: string) => void;
};

export function CustomRadio({ label, id, name, itemValue, selectedValue, updateSelectedValue }: Props) {
  const isSelected: boolean = itemValue === selectedValue;
  return (
    <button
      type="button"
      className={cn("flex w-full cursor-pointer items-center rounded-lg border-2 px-6 py-3", isSelected ? "bg-primary-container border-on-primary-container" : "bg-surface-container-highest border-outline")}
      onClick={() => updateSelectedValue(itemValue)}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={itemValue}
        className={cn("size-2 cursor-pointer appearance-none rounded-full outline-2 outline-offset-2", isSelected ? "bg-on-primary-container outline-on-primary-container" : "bg-surface-container-highest outline-outline")}
        required
      />
      <label className={cn("ml-4 cursor-pointer text-start text-[16px] font-medium", isSelected ? "text-on-primary-container" : "text-on-surface-variant")}>{label}</label>
    </button>
  );
}
