export declare const SORT_OPTIONS: {
    readonly CREATED_AT_ASC: "created_at_asc";
    readonly CREATED_AT_DESC: "created_at_desc";
    readonly UPDATED_AT_ASC: "updated_at_asc";
    readonly UPDATED_AT_DESC: "updated_at_desc";
    readonly RATING_ASC: "rating_asc";
    readonly RATING_DESC: "rating_desc";
};
export type SortOptions = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
export declare const APPLICATION_STATUS: {
    readonly APPLIED: "019d3f3c-d4ad-723b-88ce-05801ecae82d";
    readonly SHORTLISTED: "019d3f3c-d4ae-79f3-8091-250ad00077a5";
    readonly REJECTED: "019d3f3c-d4ae-7af5-bc71-ffe88e0d4167";
    readonly INTERVIEWED: "019d4d77-8001-740c-837e-47cb6b79537c";
    readonly OFFERED: "019d4d77-8004-777e-a9d3-9011c67e6509";
    readonly HIRED: "019d51f2-3e56-72f7-b4bd-f68aa366f175";
};
export type ApplicationStatus = (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];
export declare const VIEW_OPTION: {
    readonly DENSE: "dense";
    readonly COMPACT: "compact";
    readonly EXPANDED: "expanded";
};
export type ViewOption = (typeof VIEW_OPTION)[keyof typeof VIEW_OPTION];
