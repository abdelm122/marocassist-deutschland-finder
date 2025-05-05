
import { UniversityProps, UniversityDetail } from "../types/universityTypes";
import { 
  fetchAllUniversities, 
  fetchUniversityById, 
  updateUniversityDetail as updateUniversityInSupabase,
  filterUniversities
} from "./supabaseService";

// Export functions to access data that now use Supabase
export const getAllUniversities = async (): Promise<UniversityProps[]> => {
  console.log("Fetching all universities...");
  try {
    const universities = await fetchAllUniversities();
    console.log(`Successfully fetched ${universities.length} universities`);
    return universities;
  } catch (error) {
    console.error("Error in getAllUniversities:", error);
    throw error;
  }
};

export const getUniversityById = async (id: string): Promise<UniversityDetail | null> => {
  console.log(`Fetching university with ID: ${id}`);
  try {
    const university = await fetchUniversityById(id);
    console.log("University fetch result:", university ? "found" : "not found");
    return university;
  } catch (error) {
    console.error(`Error fetching university with ID ${id}:`, error);
    throw error;
  }
};

// Update university details - now uses Supabase
export const updateUniversityDetail = async (updatedUniversity: UniversityDetail): Promise<void> => {
  console.log("Updating university detail:", updatedUniversity.id);
  try {
    await updateUniversityInSupabase(updatedUniversity);
    console.log("University update completed");
  } catch (error) {
    console.error("Error in updateUniversityDetail:", error);
    throw error;
  }
};

// Filtering universities - now uses Supabase
export const getFilteredUniversities = async (
  searchQuery: string = "", 
  types: string[] = []
): Promise<UniversityProps[]> => {
  console.log("Filtering universities with query:", searchQuery, "types:", types);
  try {
    const universities = await filterUniversities(searchQuery, { type: types });
    console.log(`Found ${universities.length} universities matching filters`);
    return universities;
  } catch (error) {
    console.error("Error in getFilteredUniversities:", error);
    throw error;
  }
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
  console.log("Searching universities with query:", query, "filters:", filters);
  try {
    const universities = await filterUniversities(query, filters);
    console.log(`Search returned ${universities.length} results`);
    return universities;
  } catch (error) {
    console.error("Error in searchUniversities:", error);
    throw error;
  }
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
