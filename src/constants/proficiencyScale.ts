import { ProficiencyScale, DropdownSchema } from "./types";

export const proficiencyScaleRaw: ProficiencyScale[] = [
  {
    proficiency_scale_uuid: "019b8396-c5f5-7138-beea-0a4f561c4ad2",
    level: 1,
    meaning: "Very Beginner",
    description: "No practical experience, only awareness",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f8-7f3d-9475-ec4f15677fa3",
    level: 2,
    meaning: "Beginner",
    description: "Can follow tutorials, needs constant guidance",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-7030-a77c-72dca3920ac1",
    level: 3,
    meaning: "Beginner+",
    description: "Can do simple tasks with help",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-7097-a068-4313d2ba30f5",
    level: 4,
    meaning: "Basic",
    description: "Can handle straightforward tasks independently",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-70f7-9155-82e4ad066468",
    level: 5,
    meaning: "Basic+",
    description: "Comfortable with common use cases",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-714d-8882-88b82426e010",
    level: 6,
    meaning: "Intermediate",
    description: "Can solve non-trivial problems independently",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-71ac-bfdd-64bdf8156a7a",
    level: 7,
    meaning: "Intermediate+",
    description: "Understands best practices and edge cases",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-720a-98ba-57c1c59956c3",
    level: 8,
    meaning: "Advanced",
    description: "Designs solutions and mentors others",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-7262-a8d0-543a69ea2067",
    level: 9,
    meaning: "Expert",
    description: "Deep domain expertise; optimizes and debugs complex issues",
  },
  {
    proficiency_scale_uuid: "019b8396-c5f9-72c2-bda8-41a1c312351c",
    level: 10,
    meaning: "Master",
    description: "Recognized authority who sets standards and innovates",
  },
];

export const proficiencyScaleDropdown = proficiencyScaleRaw.map<DropdownSchema>((item) => ({ label: `${item.level}/10 - ${item.meaning}`, value: item.proficiency_scale_uuid }));
