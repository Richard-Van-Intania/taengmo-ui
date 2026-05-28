/* eslint-disable @typescript-eslint/no-explicit-any */

export type PlainText = {
  text: string;
};

export type PresignResponse = {
  url: string;
  key: string;
  content_type: string;
  expires_in: number;
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type PhotoUrlStatus = {
  url: string;
  success: boolean;
};

export type ErrorWithStatus = {
  message: string;
  status: number;
};

export type Email = {
  email: string;
};

export type EmailPassword = Email & {
  password: string;
};

export type CommonAuthen = {
  verification_uuid: string;
  reference: number;
  code: number;
  email: string;
  password: string;
};

export type PersonnelCredential = {
  personnel_uuid: string;
  employers_uuid: string;
  access_token: string;
  refresh_token: string;
  is_admin: boolean;
};

export type PersonnelAuthen = Omit<PersonnelCredential, "refresh_token">;

export type NewOrganizationAccount = CommonAuthen & {
  primary_name: string;
  position_title: string;
  legal_entity_types_uuid: string;
  iso_country_code_uuid: string;
  iso_currency_code_uuid: string;
  legal_entity_size_uuid: string;
};

export type NewPersonnelAccount = CommonAuthen & {
  primary_name: string;
  position_title: string;
  employers_uuid: string;
};

export type PersonnelCreate = {
  primary_name: string;
  position_title: string;
};

export type Employers = {
  employers_uuid: string;
  iso_country_code_uuid: string;
  iso_currency_code_uuid: string;
  legal_entity_types_uuid: string;
  legal_entity_size_uuid: string;
  founded_at: string | null;
  profile_url: string | null;
  cover_url: string | null;
  about: string;
  contact_info: string;
  invoice_name: string;
  invoice_address: string;
  invoice_contact: string;
  invoice_unique_id: string;
  verified_at: string | null;
  packages_uuid: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
};

export type EmployersName = {
  employers_name_uuid: string;
  employers_uuid: string;
  name: string;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
};

export type Personnel = {
  personnel_uuid: string;
  employers_uuid: string;
  email: string;
  is_admin: boolean;
  primary_name: string;
  position_title: string;
  contact_info: string;
  about: string;
  profile_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  latest_login: string;
};

export type EmployersLocations = {
  employers_locations_uuid: string;
  employers_uuid: string;
  iso_country_code_uuid: string;
  address: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
  is_headquarters: boolean;
};

export type EmployersSectors = {
  employers_sectors_uuid: string;
  employers_uuid: string;
  sectors_uuid: string;
  created_at: string;
  name: string;
};

export type EmployersSocialUrl = {
  employers_social_url_uuid: string;
  employers_uuid: string;
  url: string;
  label: string;
  created_at: string;
  updated_at: string;
};

export type EmployersBenefits = {
  employers_benefits_uuid: string;
  employers_uuid: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type PersonnelSocialUrl = {
  personnel_social_url_uuid: string;
  personnel_uuid: string;
  employers_uuid: string;
  url: string;
  label: string;
  created_at: string;
  updated_at: string;
};

export type SeekersCredential = {
  seekers_uuid: string;
  access_token: string;
  refresh_token: string;
};

export type SeekersAuthen = Omit<SeekersCredential, "refresh_token">;

export type NewSeekersAccount = {
  verification_uuid: string;
  reference: number;
  code: number;
  email: string;
  password: string;
  primary_name: string;
  birth_iso_country_code_uuid: string;
  nationality_iso_country_code_uuid: string;
  resident_iso_country_code_uuid: string;
  birthdate: string;
  sex_uuid: string;
  position_title: string;
};

export type Seekers = {
  seekers_uuid: string;
  email: string;
  primary_name: string;
  birth_iso_country_code_uuid: string;
  nationality_iso_country_code_uuid: string;
  resident_iso_country_code_uuid: string;
  birthdate: string;
  profile_url: string | null;
  cover_url: string | null;
  about: string;
  contact_info: string;
  interests: string;
  open_to_work: boolean;
  sex_uuid: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  latest_login: string;
  resume_url: string | null;
  position_title: string;
};

export type SeekersEducation = {
  seekers_education_uuid: string;
  seekers_uuid: string;
  institution_name: string;
  degrees_uuid: string;
  degrees_description: string;
  started_at: string;
  ended_at: string | null;
  gpa: string;
  created_at: string;
  updated_at: string;
  field_of_study: string;
};

export type SeekersExperience = {
  seekers_experience_uuid: string;
  seekers_uuid: string;
  name_of_employer: string;
  final_position_title: string;
  description: string;
  started_at: string;
  ended_at: string | null;
  created_at: string;
  updated_at: string;
  contract_types_uuid: string;
};

export type SeekersFiles = {
  seekers_files_uuid: string;
  seekers_uuid: string;
  files_url: string;
  label: string;
  created_at: string;
  updated_at: string;
};

export type SeekersHonorsAndAwards = {
  seekers_honors_and_awards_uuid: string;
  seekers_uuid: string;
  title: string;
  description: string;
  issuer: string;
  issued_at: string;
  created_at: string;
  updated_at: string;
};

export type SeekersLanguage = {
  seekers_language_uuid: string;
  seekers_uuid: string;
  iso_language_code_uuid: string;
  cefr_levels_uuid: string;
  created_at: string;
  updated_at: string;
};

export type SeekersLicensesAndCertifications = {
  seekers_licenses_and_certifications_uuid: string;
  seekers_uuid: string;
  title: string;
  issuer: string;
  issued_at: string;
  expired_at: string | null;
  files_url: string | null;
  created_at: string;
  updated_at: string;
};

export type SeekersSavedEmployers = {
  seekers_saved_employers_uuid: string;
  seekers_uuid: string;
  employers_uuid: string;
  created_at: string;
};

export type SeekersSavedJobs = {
  seekers_saved_jobs_uuid: string;
  seekers_uuid: string;
  jobs_uuid: string;
  employers_uuid: string;
  personnel_uuid: string;
  created_at: string;
};

export type SeekersSkills = {
  seekers_skills_uuid: string;
  seekers_uuid: string;
  proficiency_scale_uuid: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export type SeekersSocialUrl = {
  seekers_social_url_uuid: string;
  seekers_uuid: string;
  url: string;
  label: string;
  created_at: string;
  updated_at: string;
};

export type Jobs = {
  jobs_uuid: string;
  employers_uuid: string;
  personnel_uuid: string;
  contract_types_uuid: string;
  physical_location_uuid: string;
  position_title: string;
  vacancies: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  about_this_job: any;
  job_plain_text: string;
  started_at: string | null;
  ended_at: string | null;
  salary: string;
  profile_url: string | null;
  applications_uuid_count: number;
};

export type JobsLocations = {
  jobs_locations_uuid: string;
  jobs_uuid: string;
  employers_uuid: string;
  employers_locations_uuid: string;
  personnel_uuid: string;
  created_at: string;
};

export type Applications = {
  applications_uuid: string;
  jobs_uuid: string;
  employers_uuid: string;
  personnel_uuid: string;
  seekers_uuid: string;
  rating: number;
  notes: string;
  created_at: string;
  updated_at: string;
  applications_status_uuid: string;
  is_viewed: boolean;
};

export type ApplicationsSelect = Applications & {
  email: string;
  primary_name: string;
  nationality_iso_country_code_uuid: string;
  birthdate: string;
  profile_url: string | null;
  about: string;
  sex_uuid: string;
  position_title: string;
  seekers_education: SeekersEducation[];
  seekers_experience: SeekersExperience[];
};
