
import { UniversityProps, UniversityDetail } from "../types/universityTypes";
import { 
  fetchAllUniversities, 
  fetchUniversityById, 
  updateUniversityDetail as updateUniversityInSupabase,
  filterUniversities
} from "./supabaseService";

// Export functions to access data that now use Supabase
export const getAllUniversities = async (): Promise<UniversityProps[]> => {
  return await fetchAllUniversities();
};

export const getUniversityById = async (id: string): Promise<UniversityDetail | null> => {
  return await fetchUniversityById(id);
};

// Update university details - now uses Supabase
export const updateUniversityDetail = async (updatedUniversity: UniversityDetail): Promise<void> => {
  await updateUniversityInSupabase(updatedUniversity);
};

// Filtering universities - now uses Supabase
export const getFilteredUniversities = async (
  searchQuery: string = "", 
  types: string[] = []
): Promise<UniversityProps[]> => {
  return await filterUniversities(searchQuery, { type: types });
};

// Search universities - now uses Supabase
export const searchUniversities = async (
  query: string = "", 
  filters: {
    language?: string[],
    type?: string[],
    semester?: string[]
  } = {}
): Promise<UniversityProps[]> => {
  return await filterUniversities(query, filters);
};

// Function to check if application deadline is still open
export const checkDeadlineStatus = (deadline: string | undefined): "open" | "closed" => {
  if (!deadline) {
    return "closed"; // Default to closed if no deadline info
  }
  
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  
  // Parse the application deadline
  const deadlineParts = deadline.split(".");
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
export type { UniversityProps, UniversityDetail } from "../types/universityTypes";
