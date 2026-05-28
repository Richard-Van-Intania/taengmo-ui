import { cefrLevelsDropdown } from "../../constants";
import { cn } from "../../uis";
import { ERROR_PLACEHOLDER } from "../../utilities";

function borderColor(cefrLevelsUuid: string): string {
  switch (cefrLevelsUuid) {
    case "019b834e-eb34-778f-b803-d37e680161ba":
      return "border-teal-300";
    case "019b834e-eb37-7363-bb7c-f9fbc77c2a0a":
      return "border-cyan-300";
    case "019b834e-eb37-7402-821a-e74d460541dd":
      return "border-sky-300";
    case "019b834e-eb37-745f-9f99-8c159f39a3e5":
      return "border-blue-300";
    case "019b834e-eb37-74bc-932f-559d2dfb4f81":
      return "border-indigo-300";
    case "019b834e-eb37-751b-b66c-91ddd57fe878":
      return "border-violet-300";
    default:
      return "border-red-300";
  }
}

function bgColor(cefrLevelsUuid: string): string {
  switch (cefrLevelsUuid) {
    case "019b834e-eb34-778f-b803-d37e680161ba":
      return "bg-teal-100";
    case "019b834e-eb37-7363-bb7c-f9fbc77c2a0a":
      return "bg-cyan-100";
    case "019b834e-eb37-7402-821a-e74d460541dd":
      return "bg-sky-100";
    case "019b834e-eb37-745f-9f99-8c159f39a3e5":
      return "bg-blue-100";
    case "019b834e-eb37-74bc-932f-559d2dfb4f81":
      return "bg-indigo-100";
    case "019b834e-eb37-751b-b66c-91ddd57fe878":
      return "bg-violet-100";
    default:
      return "bg-red-100";
  }
}

function textColor(cefrLevelsUuid: string): string {
  switch (cefrLevelsUuid) {
    case "019b834e-eb34-778f-b803-d37e680161ba":
      return "text-teal-700";
    case "019b834e-eb37-7363-bb7c-f9fbc77c2a0a":
      return "text-cyan-700";
    case "019b834e-eb37-7402-821a-e74d460541dd":
      return "text-sky-700";
    case "019b834e-eb37-745f-9f99-8c159f39a3e5":
      return "text-blue-700";
    case "019b834e-eb37-74bc-932f-559d2dfb4f81":
      return "text-indigo-700";
    case "019b834e-eb37-751b-b66c-91ddd57fe878":
      return "text-violet-700";
    default:
      return "text-red-700";
  }
}

type Props = {
  cefrLevelsUuid: string;
};

export default function CefrLevelsBadge({ cefrLevelsUuid }: Props) {
  return (
    <div className={cn("rounded-full border px-3 py-1 text-[14px] font-medium", borderColor(cefrLevelsUuid), bgColor(cefrLevelsUuid), textColor(cefrLevelsUuid))}>
      {cefrLevelsDropdown.find((level) => level.value === cefrLevelsUuid)?.label ?? ERROR_PLACEHOLDER}
    </div>
  );
}
