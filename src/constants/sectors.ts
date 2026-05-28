import type { Sectors, DropdownSchema } from "./types";

export const sectorsRaw: Sectors[] = [
  {
    sectors_uuid: "019b83a5-16d4-71ba-8e18-127f29de3b24",
    name: "Information Technology & Software",
  },
  {
    sectors_uuid: "019b83a5-16d7-7192-8d11-3f33445943a2",
    name: "Healthcare & Medical",
  },
  {
    sectors_uuid: "019b83a5-16d7-721b-80fe-3f2927dbd062",
    name: "Business, Finance & Legal",
  },
  {
    sectors_uuid: "019b83a5-16d7-7286-ba34-04e5b9ff4729",
    name: "Engineering & Manufacturing",
  },
  {
    sectors_uuid: "019b83a5-16d7-72ed-a650-f75de99efabc",
    name: "Education & Training",
  },
  {
    sectors_uuid: "019b83a5-16d7-7350-9d28-f9d4211c55b9",
    name: "Media, Design & Entertainment",
  },
  {
    sectors_uuid: "019b83a5-16d7-73b8-8b19-4ebff00daf28",
    name: "Sales, Retail & Customer Service",
  },
  {
    sectors_uuid: "019b83a5-16d7-7420-be93-48fdd44e8133",
    name: "Construction & Real Estate",
  },
  {
    sectors_uuid: "019b83a5-16d7-7486-93fa-9f71738f4f7c",
    name: "Hospitality, Travel & Tourism",
  },
  {
    sectors_uuid: "019b83a5-16d7-74ed-9788-c11e1a2bc8b3",
    name: "Logistics & Transportation",
  },
  {
    sectors_uuid: "019b83a5-16d7-754f-8bcf-24e166b3419b",
    name: "Government & Public Services",
  },
  {
    sectors_uuid: "019b83a5-16d7-75db-b5fc-8c80265eef8f",
    name: "Science, Research & Environmental",
  },
  {
    sectors_uuid: "019b83a5-16d7-7642-8644-47743c25eef0",
    name: "Energy & Utilities",
  },
  {
    sectors_uuid: "019b83a5-16d7-76a6-a329-86cf7fe56f73",
    name: "Recruiting & Staffing Agencies",
  },
  {
    sectors_uuid: "019b83a5-16d7-770d-abc6-6962b059e7e6",
    name: "Freelance, Remote & Gig Economy",
  },
  {
    sectors_uuid: "019b83a5-16d7-7775-ba90-d835f48c4d76",
    name: "Sports, Fitness & Recreation",
  },
  {
    sectors_uuid: "019b83a5-16d7-77db-be34-ce1c247c39b2",
    name: "Fashion, Beauty & Lifestyle",
  },
  {
    sectors_uuid: "019b83a5-16d7-7843-b837-ed13ad4cd05c",
    name: "Agriculture, Farming & Veterinary",
  },
  {
    sectors_uuid: "019b83a5-16d7-78a4-9709-9c80082c1f18",
    name: "Automotive & Mechanical Trades",
  },
  {
    sectors_uuid: "019b83a5-16d7-790d-a0ce-e9b0e714afed",
    name: "Handicrafts, Trades & Artisans",
  },
  {
    sectors_uuid: "019b83a5-16d7-797d-bea1-2afaf9bf2f71",
    name: "Others",
  },
];

export const sectorsDropdown = sectorsRaw.map<DropdownSchema>((item) => ({ label: item.name, value: item.sectors_uuid }));
