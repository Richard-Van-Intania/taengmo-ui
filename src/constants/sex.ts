import { Sex, DropdownSchema } from "./types";

export const sexRaw: Sex[] = [
  {
    sex_uuid: "019b83ac-ce10-78de-ac51-a80f373773c0",
    description: "Male",
  },
  {
    sex_uuid: "019b83ac-ce11-74d7-b53d-f0eaed2ad604",
    description: "Female",
  },
  {
    sex_uuid: "019b83ac-ce11-755d-aad1-db11faae90b4",
    description: "Prefer not to say",
  },
];

export const sexDropdown = sexRaw.map<DropdownSchema>((item) => ({ label: item.description, value: item.sex_uuid }));
