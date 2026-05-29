export const SORT_OPTIONS = {
  CREATED_AT_ASC: "created_at_asc",
  CREATED_AT_DESC: "created_at_desc",
  UPDATED_AT_ASC: "updated_at_asc",
  UPDATED_AT_DESC: "updated_at_desc",
  RATING_ASC: "rating_asc",
  RATING_DESC: "rating_desc",
} as const;

export type SortOptions = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

export const APPLICATION_STATUS = {
  APPLIED: "019d3f3c-d4ad-723b-88ce-05801ecae82d",
  SHORTLISTED: "019d3f3c-d4ae-79f3-8091-250ad00077a5",
  REJECTED: "019d3f3c-d4ae-7af5-bc71-ffe88e0d4167",
  INTERVIEWED: "019d4d77-8001-740c-837e-47cb6b79537c",
  OFFERED: "019d4d77-8004-777e-a9d3-9011c67e6509",
  HIRED: "019d51f2-3e56-72f7-b4bd-f68aa366f175",
} as const;

export type ApplicationStatus = (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];

export const VIEW_OPTION = {
  DENSE: "dense",
  COMPACT: "compact",
  EXPANDED: "expanded",
} as const;

export type ViewOption = (typeof VIEW_OPTION)[keyof typeof VIEW_OPTION];
