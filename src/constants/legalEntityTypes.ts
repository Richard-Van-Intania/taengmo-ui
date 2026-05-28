import type { LegalEntityTypes, DropdownSchema } from "./types";

export const legalEntityTypesRaw: LegalEntityTypes[] = [
  {
    legal_entity_types_uuid: "019b8385-604d-71a2-b024-b05f6f6e8a5e",
    name: "Businesses (For-Profit Companies)",
  },
  {
    legal_entity_types_uuid: "019b8385-604e-7a7d-9405-45d5ec37f0a6",
    name: "Nonprofit Organizations (NPOs, NGOs)",
  },
  {
    legal_entity_types_uuid: "019b8385-604e-7bb7-b144-793460ab9c8e",
    name: "Government Agencies & Public Institutions",
  },
  {
    legal_entity_types_uuid: "019b8385-604e-7c9c-8a43-7da70fadc99a",
    name: "Individuals, Freelancers & Independent Contractors",
  },
];

export const legalEntityTypesDropdown = legalEntityTypesRaw.map<DropdownSchema>((item) => ({ label: item.name, value: item.legal_entity_types_uuid }));
