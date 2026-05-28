import { PhysicalLocation, DropdownSchema } from "./types";

export const physicalLocationRaw: PhysicalLocation[] = [
  {
    physical_location_uuid: "019b838c-f2fb-780f-83d7-197acc80c77d",
    name: "Office",
  },
  {
    physical_location_uuid: "019b838c-f2fd-7d24-ba35-25d06474c4d0",
    name: "Remote",
  },
  {
    physical_location_uuid: "019b838c-f2fd-7f83-ab90-761594f13578",
    name: "Hybrid",
  },
];

export const physicalLocationDropdown = physicalLocationRaw.map<DropdownSchema>((item) => ({ label: item.name, value: item.physical_location_uuid }));
