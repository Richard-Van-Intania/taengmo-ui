import { DropdownSchema, LegalEntitySize } from "./types";

export const legalEntitySizeRaw: LegalEntitySize[] = [
  {
    legal_entity_size_uuid: "019b8382-9534-71ae-81ae-b08c327085eb",
    name: "Micro",
    definition: "Fewer than 10 employees",
  },
  {
    legal_entity_size_uuid: "019b8382-953b-7d1a-81f7-1397b36664ae",
    name: "Small",
    definition: "10-49 employees",
  },
  {
    legal_entity_size_uuid: "019b8382-953b-7ed3-8a77-a2ca3bdc303a",
    name: "Medium",
    definition: "50-249 employees",
  },
  {
    legal_entity_size_uuid: "019b8382-953b-7f68-ad56-e3871ac7eb65",
    name: "Large",
    definition: "250 or more employees",
  },
];

export const legalEntitySizeDropdown = legalEntitySizeRaw.map<DropdownSchema>((item) => ({ label: `${item.name} - ${item.definition}`, value: item.legal_entity_size_uuid }));
