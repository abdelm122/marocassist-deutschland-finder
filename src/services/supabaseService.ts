
import { supabase } from "@/integrations/supabase/client";
import { UniversityProps, UniversityDetail } from "@/types/universityTypes";

// Fetch all universities
export const fetchAllUniversities = async (): Promise<UniversityProps[]> => {
  const { data, error } = await supabase
    .from('universities')
    .select('*');

  if (error) {
    console.error("Error fetching universities:", error);
    throw error;
  }

  return data.map(uni => ({
    id: uni.id,
    name: uni.name,
    description: uni.description,
    location: uni.location,
    imageUrl: uni.image_url,
    type: uni.type
  }));
};

// Fetch university details
export const fetchUniversityById = async (id: string): Promise<UniversityDetail | null> => {
  // Fetch the university basic info
  const { data: uniData, error: uniError } = await supabase
    .from('universities')
    .select('*')
    .eq('id', id)
    .single();

  if (uniError) {
    console.error("Error fetching university:", uniError);
    return null;
  }

  // Fetch the university details
  const { data: detailsData, error: detailsError } = await supabase
    .from('university_details')
    .select('*')
    .eq('university_id', id)
    .single();

  if (detailsError && detailsError.code !== 'PGRST116') { // Not found is ok
    console.error("Error fetching university details:", detailsError);
  }

  // Fetch required documents
  const { data: documentsData, error: documentsError } = await supabase
    .from('required_documents')
    .select('document_name')
    .eq('university_id', id);

  if (documentsError) {
    console.error("Error fetching required documents:", documentsError);
  }

  // Fetch test requirements
  const { data: testsData, error: testsError } = await supabase
    .from('test_requirements')
    .select('test_name')
    .eq('university_id', id);

  if (testsError) {
    console.error("Error fetching test requirements:", testsError);
  }

  // Fetch semester availability
  const { data: semestersData, error: semestersError } = await supabase
    .from('semester_availability')
    .select('semester')
    .eq('university_id', id);

  if (semestersError) {
    console.error("Error fetching semester availability:", semestersError);
  }

  // Construct the complete university detail object
  const universityDetail: UniversityDetail = {
    id: uniData.id,
    name: uniData.name,
    description: uniData.description,
    location: uniData.location,
    imageUrl: uniData.image_url,
    type: uniData.type,
    requiredDocuments: documentsData ? documentsData.map(doc => doc.document_name) : [],
    applicationDeadline: detailsData?.application_deadline || "",
    websiteUrl: detailsData?.website_url || "",
    languageRequirements: detailsData?.language_requirements || "",
    testRequirements: testsData ? testsData.map(test => test.test_name) : [],
    semesterAvailability: semestersData ? semestersData.map(sem => sem.semester) : [],
    bundesland: detailsData?.bundesland,
    status: detailsData?.status,
    kurse: detailsData?.kurse,
    email: detailsData?.email,
    applicationTestDate: detailsData?.application_test_date,
    applicationMethod: detailsData?.application_method,
    address: detailsData?.address,
  };

  return universityDetail;
};

// Update university details
export const updateUniversityDetail = async (updatedUniversity: UniversityDetail): Promise<void> => {
  // Start a transaction for all updates
  const { error: uniError } = await supabase
    .from('universities')
    .update({
      name: updatedUniversity.name,
      description: updatedUniversity.description,
      location: updatedUniversity.location,
      image_url: updatedUniversity.imageUrl,
      type: updatedUniversity.type
    })
    .eq('id', updatedUniversity.id);

  if (uniError) {
    console.error("Error updating university:", uniError);
    throw uniError;
  }

  // Update university details
  const { error: detailsError } = await supabase
    .from('university_details')
    .upsert({
      university_id: updatedUniversity.id,
      application_deadline: updatedUniversity.applicationDeadline,
      website_url: updatedUniversity.websiteUrl,
      language_requirements: updatedUniversity.languageRequirements,
      bundesland: updatedUniversity.bundesland,
      status: updatedUniversity.status,
      kurse: updatedUniversity.kurse,
      email: updatedUniversity.email,
      application_test_date: updatedUniversity.applicationTestDate,
      application_method: updatedUniversity.applicationMethod,
      address: updatedUniversity.address
    });

  if (detailsError) {
    console.error("Error updating university details:", detailsError);
    throw detailsError;
  }

  // Delete existing required documents and insert new ones
  if (updatedUniversity.requiredDocuments && updatedUniversity.requiredDocuments.length > 0) {
    // First delete existing documents
    const { error: delDocsError } = await supabase
      .from('required_documents')
      .delete()
      .eq('university_id', updatedUniversity.id);

    if (delDocsError) {
      console.error("Error deleting required documents:", delDocsError);
      throw delDocsError;
    }

    // Insert new documents
    const docsToInsert = updatedUniversity.requiredDocuments.map(doc => ({
      university_id: updatedUniversity.id,
      document_name: doc
    }));

    const { error: insDocsError } = await supabase
      .from('required_documents')
      .insert(docsToInsert);

    if (insDocsError) {
      console.error("Error inserting required documents:", insDocsError);
      throw insDocsError;
    }
  }

  // Delete existing test requirements and insert new ones
  if (updatedUniversity.testRequirements && updatedUniversity.testRequirements.length > 0) {
    // First delete existing tests
    const { error: delTestsError } = await supabase
      .from('test_requirements')
      .delete()
      .eq('university_id', updatedUniversity.id);

    if (delTestsError) {
      console.error("Error deleting test requirements:", delTestsError);
      throw delTestsError;
    }

    // Insert new tests
    const testsToInsert = updatedUniversity.testRequirements.map(test => ({
      university_id: updatedUniversity.id,
      test_name: test
    }));

    const { error: insTestsError } = await supabase
      .from('test_requirements')
      .insert(testsToInsert);

    if (insTestsError) {
      console.error("Error inserting test requirements:", insTestsError);
      throw insTestsError;
    }
  }

  // Delete existing semester availability and insert new ones
  if (updatedUniversity.semesterAvailability && updatedUniversity.semesterAvailability.length > 0) {
    // First delete existing semesters
    const { error: delSemestersError } = await supabase
      .from('semester_availability')
      .delete()
      .eq('university_id', updatedUniversity.id);

    if (delSemestersError) {
      console.error("Error deleting semester availability:", delSemestersError);
      throw delSemestersError;
    }

    // Insert new semesters
    const semestersToInsert = updatedUniversity.semesterAvailability.map(semester => ({
      university_id: updatedUniversity.id,
      semester: semester
    }));

    const { error: insSemestersError } = await supabase
      .from('semester_availability')
      .insert(semestersToInsert);

    if (insSemestersError) {
      console.error("Error inserting semester availability:", insSemestersError);
      throw insSemestersError;
    }
  }
};

// Filter universities
export const filterUniversities = async (
  searchQuery: string = "", 
  filters: {
    language?: string[],
    type?: string[],
    semester?: string[]
  } = {}
): Promise<UniversityProps[]> => {
  let query = supabase
    .from('universities')
    .select('*');

  // Apply search filter if provided
  if (searchQuery) {
    query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,location.ilike.%${searchQuery}%`);
  }

  // Apply type filter if provided
  if (filters.type && filters.type.length > 0) {
    query = query.in('type', filters.type);
  }

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error filtering universities:", error);
    throw error;
  }

  // Create UniversityProps objects from the results
  const universities = data.map(uni => ({
    id: uni.id,
    name: uni.name,
    description: uni.description,
    location: uni.location,
    imageUrl: uni.image_url,
    type: uni.type
  }));

  // Apply language filter (this needs to be done after fetching since it requires a join)
  if (filters.language && filters.language.length > 0) {
    // We'll need to fetch all the university details to check language requirements
    const { data: detailsData, error: detailsError } = await supabase
      .from('university_details')
      .select('university_id, language_requirements');
    
    if (detailsError) {
      console.error("Error fetching language requirements:", detailsError);
      throw detailsError;
    }

    // Map university_id to language_requirements
    const languageMap = new Map();
    detailsData.forEach(detail => {
      languageMap.set(detail.university_id, detail.language_requirements);
    });

    // Filter universities based on language requirements
    return universities.filter(uni => {
      const langReq = languageMap.get(uni.id);
      if (!langReq) return false;
      
      return filters.language!.some(lang => 
        langReq.toUpperCase().includes(lang.toUpperCase())
      );
    });
  }

  return universities;
};

// Admin authentication
export const verifyAdminCredentials = async (username: string, password: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .single();

  if (error) {
    console.error("Error verifying admin credentials:", error);
    return false;
  }

  return !!data;
};
