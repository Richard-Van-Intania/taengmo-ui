import { ContractTypes, DropdownSchema } from "./types";

export const contractTypesRaw: ContractTypes[] = [
  {
    contract_types_uuid: "019b8353-8adf-72f1-98c8-b081e5384d82",
    name: "Full-Time",
    definition: "Standard, long-term employment with benefits",
  },
  {
    contract_types_uuid: "019b8353-8ae0-7e9c-af86-3c53af9d8eac",
    name: "Part-Time",
    definition: "Fewer working hours than full-time, often with fewer benefits",
  },
  {
    contract_types_uuid: "019b8353-8ae0-7f5e-b7fa-5b4a26bffc45",
    name: "Freelance",
    definition: "Independent work on a project or contract basis",
  },
  {
    contract_types_uuid: "019b8353-8ae0-7fd6-b6b1-998b5c4dfcd5",
    name: "Temporary",
    definition: "Short-term employment, often for a specific period",
  },
  {
    contract_types_uuid: "019b8353-8ae1-7053-a388-8836c73ad72b",
    name: "Contract",
    definition: "Employment for a fixed duration or specific project, often through an agency",
  },
  {
    contract_types_uuid: "019b8353-8ae1-70c8-bd34-865048fb1473",
    name: "Internship",
    definition: "Temporary work for students or trainees, paid or unpaid",
  },
  {
    contract_types_uuid: "019b8353-8ae1-713e-bcd8-a9804bf585f6",
    name: "Apprenticeship",
    definition: "Structured training programs that combine work with learning",
  },
];

export const contractTypesDropdown = contractTypesRaw.map<DropdownSchema>((item) => ({ label: item.name, value: item.contract_types_uuid }));
