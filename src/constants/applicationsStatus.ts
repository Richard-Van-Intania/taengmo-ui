import type { ApplicationsStatus, DropdownSchema } from "./types";

export const applicationsStatusRaw: ApplicationsStatus[] = [
  {
    applications_status_uuid: "019d3f3c-d4ae-7af5-bc71-ffe88e0d4167",
    status: "REJECTED",
  },
  {
    applications_status_uuid: "019d3f3c-d4ad-723b-88ce-05801ecae82d",
    status: "APPLIED",
  },
  {
    applications_status_uuid: "019d3f3c-d4ae-79f3-8091-250ad00077a5",
    status: "SHORTLISTED",
  },
  {
    applications_status_uuid: "019d4d77-8001-740c-837e-47cb6b79537c",
    status: "INTERVIEWED",
  },
  {
    applications_status_uuid: "019d4d77-8004-777e-a9d3-9011c67e6509",
    status: "OFFERED",
  },
  {
    applications_status_uuid: "019d51f2-3e56-72f7-b4bd-f68aa366f175",
    status: "HIRED",
  },
];

export const applicationsStatusDropdown = applicationsStatusRaw.map<DropdownSchema>((item) => ({ label: item.status, value: item.applications_status_uuid }));
