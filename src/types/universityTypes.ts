
// University card component props interface
export interface UniversityProps {
  id: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  type: string;
}

// University detail interface with extended info for detail page
export interface UniversityDetail extends UniversityProps {
  requiredDocuments: string[];
  applicationDeadline: string;
  websiteUrl: string;
  languageRequirements: string;
  testRequirements: string[];
  semesterAvailability: string[];
  bundesland?: string;
  status?: string;
  kurse?: string;
  email?: string;
  applicationTestDate?: string;
  applicationMethod?: string;
  address?: string;
}
