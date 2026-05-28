import { proficiencyScaleDropdown } from "../../constants";
import { cn } from "../../uis";
import { ERROR_PLACEHOLDER } from "../../utilities";

function borderColor(proficiencyScaleUuid: string): string {
  switch (proficiencyScaleUuid) {
    case "019b8396-c5f5-7138-beea-0a4f561c4ad2":
      return "border-yellow-300";
    case "019b8396-c5f8-7f3d-9475-ec4f15677fa3":
      return "border-lime-300";
    case "019b8396-c5f9-7030-a77c-72dca3920ac1":
      return "border-green-300";
    case "019b8396-c5f9-7097-a068-4313d2ba30f5":
      return "border-emerald-300";
    case "019b8396-c5f9-70f7-9155-82e4ad066468":
      return "border-teal-300";
    case "019b8396-c5f9-714d-8882-88b82426e010":
      return "border-cyan-300";
    case "019b8396-c5f9-71ac-bfdd-64bdf8156a7a":
      return "border-sky-300";
    case "019b8396-c5f9-720a-98ba-57c1c59956c3":
      return "border-blue-300";
    case "019b8396-c5f9-7262-a8d0-543a69ea2067":
      return "border-indigo-300";
    case "019b8396-c5f9-72c2-bda8-41a1c312351c":
      return "border-violet-300";
    default:
      return "border-red-300";
  }
}

function bgColor(proficiencyScaleUuid: string): string {
  switch (proficiencyScaleUuid) {
    case "019b8396-c5f5-7138-beea-0a4f561c4ad2":
      return "bg-yellow-100";
    case "019b8396-c5f8-7f3d-9475-ec4f15677fa3":
      return "bg-lime-100";
    case "019b8396-c5f9-7030-a77c-72dca3920ac1":
      return "bg-green-100";
    case "019b8396-c5f9-7097-a068-4313d2ba30f5":
      return "bg-emerald-100";
    case "019b8396-c5f9-70f7-9155-82e4ad066468":
      return "bg-teal-100";
    case "019b8396-c5f9-714d-8882-88b82426e010":
      return "bg-cyan-100";
    case "019b8396-c5f9-71ac-bfdd-64bdf8156a7a":
      return "bg-sky-100";
    case "019b8396-c5f9-720a-98ba-57c1c59956c3":
      return "bg-blue-100";
    case "019b8396-c5f9-7262-a8d0-543a69ea2067":
      return "bg-indigo-100";
    case "019b8396-c5f9-72c2-bda8-41a1c312351c":
      return "bg-violet-100";
    default:
      return "bg-red-100";
  }
}

function textColor(proficiencyScaleUuid: string): string {
  switch (proficiencyScaleUuid) {
    case "019b8396-c5f5-7138-beea-0a4f561c4ad2":
      return "text-yellow-700";
    case "019b8396-c5f8-7f3d-9475-ec4f15677fa3":
      return "text-lime-700";
    case "019b8396-c5f9-7030-a77c-72dca3920ac1":
      return "text-green-700";
    case "019b8396-c5f9-7097-a068-4313d2ba30f5":
      return "text-emerald-700";
    case "019b8396-c5f9-70f7-9155-82e4ad066468":
      return "text-teal-700";
    case "019b8396-c5f9-714d-8882-88b82426e010":
      return "text-cyan-700";
    case "019b8396-c5f9-71ac-bfdd-64bdf8156a7a":
      return "text-sky-700";
    case "019b8396-c5f9-720a-98ba-57c1c59956c3":
      return "text-blue-700";
    case "019b8396-c5f9-7262-a8d0-543a69ea2067":
      return "text-indigo-700";
    case "019b8396-c5f9-72c2-bda8-41a1c312351c":
      return "text-violet-700";
    default:
      return "text-red-700";
  }
}

type Props = {
  proficiencyScaleUuid: string;
};

export function ProficiencyScaleBadge({ proficiencyScaleUuid }: Props) {
  return (
    <div className={cn("rounded-full border px-3 py-1 text-[14px] font-medium", borderColor(proficiencyScaleUuid), bgColor(proficiencyScaleUuid), textColor(proficiencyScaleUuid))}>
      {proficiencyScaleDropdown.find((scale) => scale.value === proficiencyScaleUuid)?.label ?? ERROR_PLACEHOLDER}
    </div>
  );
}
