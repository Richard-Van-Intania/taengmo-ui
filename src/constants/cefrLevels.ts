import type { CefrLevels, DropdownSchema } from "./types";

export const cefrLevelsRaw: CefrLevels[] = [
  {
    cefr_levels_uuid: "019b834e-eb34-778f-b803-d37e680161ba",
    level_code: "A1",
    level_name: "Beginner",
    description: "Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and ask/answer simple questions",
  },
  {
    cefr_levels_uuid: "019b834e-eb37-7363-bb7c-f9fbc77c2a0a",
    level_code: "A2",
    level_name: "Elementary",
    description: "Can understand sentences and frequently used expressions related to personal information, shopping, work, and immediate surroundings",
  },
  {
    cefr_levels_uuid: "019b834e-eb37-7402-821a-e74d460541dd",
    level_code: "B1",
    level_name: "Intermediate",
    description: "Can understand the main points of clear standard input on familiar topics. Can describe experiences, events, and ambitions and give reasons or explanations",
  },
  {
    cefr_levels_uuid: "019b834e-eb37-745f-9f99-8c159f39a3e5",
    level_code: "B2",
    level_name: "Upper Intermediate",
    description: "Can understand more complex texts, interact fluently, and express opinions on a range of topics clearly and in detail",
  },
  {
    cefr_levels_uuid: "019b834e-eb37-74bc-932f-559d2dfb4f81",
    level_code: "C1",
    level_name: "Advanced",
    description: "Can understand demanding texts, express themselves fluently without much effort, and use language flexibly in social, academic, and professional settings",
  },
  {
    cefr_levels_uuid: "019b834e-eb37-751b-b66c-91ddd57fe878",
    level_code: "C2",
    level_name: "Proficiency",
    description: "Can understand almost everything they hear or read, summarize information from different spoken and written sources, and express themselves with high precision and nuance",
  },
];

export const cefrLevelsDropdown = cefrLevelsRaw.map<DropdownSchema>((item) => ({ label: `${item.level_code} - ${item.level_name}`, value: item.cefr_levels_uuid }));
