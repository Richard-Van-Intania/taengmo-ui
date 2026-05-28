import { Degrees, DropdownSchema } from "./types";

export const degreesRaw: Degrees[] = [
  {
    degrees_uuid: "019b8358-8d62-723f-8ad6-8f3d4650e320",
    level: "Primary and Secondary Education",
  },
  {
    degrees_uuid: "019b8358-8d62-7c38-aefc-147fe7486f24",
    level: "Associate Degrees",
  },
  {
    degrees_uuid: "019b8358-8d62-7d44-8fb4-26f3503409e0",
    level: "Bachelor's Degrees",
  },
  {
    degrees_uuid: "019b8358-8d62-7e28-9a63-473a6fec9b3f",
    level: "Master's Degrees",
  },
  {
    degrees_uuid: "019b8358-8d62-7f0b-b9bf-5845cdd6634d",
    level: "Doctoral and Professional Degrees",
  },
];

export const degreesDropdown = degreesRaw.map<DropdownSchema>((item) => ({ label: item.level, value: item.degrees_uuid }));
