
import { UniversityProps, UniversityDetail } from "../types/universityTypes";
import { studienkollegs } from "../data/studienkollegs";
import { sprachinstitute } from "../data/sprachinstitute";
import { studienkollegDetails } from "../data/studienkollegDetails";
import { sprachinstitutDetails } from "../data/sprachinstitutDetails";

// Combine all universities
const universities: UniversityProps[] = [
  ...studienkollegs,
  ...sprachinstitute
];

// Combine all details
const universityDetails: Record<string, UniversityDetail> = {
  ...studienkollegDetails,
  ...sprachinstitutDetails
};

// Export functions to access data
export const getAllUniversities = () => universities;

export const getUniversityById = (id: string): UniversityDetail | null => {
  return universityDetails[id] || null;
};

export const getFilteredUniversities = (
  searchQuery: string = "", 
  types: string[] = []
): UniversityProps[] => {
  return universities.filter((university) => {
    // Filter by search query
    const matchesSearch = searchQuery === "" || 
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      university.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by types (if any are selected)
    const matchesType = types.length === 0 || types.includes(university.type);
    
    return matchesSearch && matchesType;
  });
};

// Add the searchUniversities function
export const searchUniversities = (
  query: string = "", 
  filters: {
    language?: string[],
    type?: string[],
    semester?: string[]
  } = {}
): UniversityProps[] => {
  console.log("Filtering with:", { query, filters });
  
  return universities.filter((university) => {
    // Filter by search query
    const matchesSearch = query === "" || 
      university.name.toLowerCase().includes(query.toLowerCase()) || 
      university.description.toLowerCase().includes(query.toLowerCase()) ||
      university.location.toLowerCase().includes(query.toLowerCase());
    
    // Filter by university type
    const matchesType = !filters.type || filters.type.length === 0 || 
      filters.type.includes(university.type);
    
    // Get university details for additional filtering
    const details = universityDetails[university.id];
    
    // Filter by language level
    const matchesLanguage = !filters.language || filters.language.length === 0 ||
      (details && filters.language.some(lang => 
        details.languageRequirements && details.languageRequirements.includes(lang.toUpperCase())
      ));
    
    return matchesSearch && matchesType && matchesLanguage;
  });
};

// Function to check if application deadline is still open
export const checkDeadlineStatus = (universityId: string): "open" | "closed" => {
  const details = universityDetails[universityId];
  
  if (!details || !details.applicationDeadline) {
    return "closed"; // Default to closed if no deadline info
  }
  
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  
  // Parse the application deadline
  const deadlineParts = details.applicationDeadline.split(".");
  if (deadlineParts.length !== 3) {
    return "closed"; // Invalid format
  }
  
  const deadlineDay = parseInt(deadlineParts[0], 10);
  const deadlineMonth = parseInt(deadlineParts[1], 10);
  const deadlineYear = parseInt(deadlineParts[2], 10);
  
  // Create date objects for comparison
  const deadlineDate = new Date(deadlineYear, deadlineMonth - 1, deadlineDay);
  const today = new Date(currentYear, currentMonth - 1, currentDay);
  
  // Compare dates
  return today <= deadlineDate ? "open" : "closed";
};

// Re-export types for easier imports elsewhere
export { UniversityProps, UniversityDetail } from "../types/universityTypes";
