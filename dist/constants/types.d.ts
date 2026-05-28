export type DropdownSchema = {
    label: string;
    value: string;
};
export type LegalEntityTypes = {
    legal_entity_types_uuid: string;
    name: string;
};
export type IsoCountryCode = {
    iso_country_code_uuid: string;
    country: string;
    alpha2: string;
    alpha3: string;
    numeric: number;
    latitude: number;
    longitude: number;
};
export type IsoCurrencyCode = {
    iso_currency_code_uuid: string;
    currency: string;
    code: string;
    number: number;
};
export type IsoLanguageCode = {
    iso_language_code_uuid: string;
    language: string;
    code: string;
};
export type LegalEntitySize = {
    legal_entity_size_uuid: string;
    name: string;
    definition: string;
};
export type Sectors = {
    sectors_uuid: string;
    name: string;
};
export type ContractTypes = {
    contract_types_uuid: string;
    name: string;
    definition: string;
};
export type PhysicalLocation = {
    physical_location_uuid: string;
    name: string;
};
export type CefrLevels = {
    cefr_levels_uuid: string;
    level_code: string;
    level_name: string;
    description: string;
};
export type Degrees = {
    degrees_uuid: string;
    level: string;
};
export type ProficiencyScale = {
    proficiency_scale_uuid: string;
    level: number;
    meaning: string;
    description: string;
};
export type Sex = {
    sex_uuid: string;
    description: string;
};
export type ApplicationsStatus = {
    applications_status_uuid: string;
    status: string;
};
export type Packages = {
    packages_uuid: string;
    name: string;
    created_at: string;
    updated_at: string;
    max_active_jobs: number;
};
