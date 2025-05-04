
import { UniversityProps } from "@/components/UniversityCard";

// Sample university data
const universities: UniversityProps[] = [
  {
    id: "tu-berlin",
    name: "Technische Universität Berlin",
    description: "Eine der größten technischen Universitäten Deutschlands mit einem starken Fokus auf Ingenieurwissenschaften und Informatik.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    type: "Universität",
  },
  {
    id: "fu-berlin",
    name: "Freie Universität Berlin",
    description: "Eine forschungsorientierte Universität mit einem breiten Spektrum an Fächern in den Geistes-, Sozial- und Naturwissenschaften.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    type: "Universität",
  },
  {
    id: "uni-hamburg",
    name: "Universität Hamburg",
    description: "Eine der größten Universitäten Deutschlands mit einem umfangreichen Angebot an Studienfächern.",
    location: "Hamburg",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    type: "Universität",
  },
  {
    id: "rwth-aachen",
    name: "RWTH Aachen",
    description: "Eine der führenden technischen Universitäten Europas mit Schwerpunkt auf Ingenieurwissenschaften und Technologie.",
    location: "Aachen",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    type: "Universität",
  },
  {
    id: "lmu-muenchen",
    name: "Ludwig-Maximilians-Universität München",
    description: "Eine der renommiertesten Universitäten Europas mit einem breiten Fächerangebot und exzellenter Forschung.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "Universität",
  },
  {
    id: "uni-heidelberg",
    name: "Ruprecht-Karls-Universität Heidelberg",
    description: "Die älteste Universität Deutschlands mit einer starken internationalen Ausrichtung und hervorragenden Forschungsbedingungen.",
    location: "Heidelberg",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    type: "Universität",
  },
  {
    id: "uni-frankfurt",
    name: "Goethe-Universität Frankfurt",
    description: "Eine forschungsstarke Universität mit einem breiten Fächerspektrum im Herzen von Frankfurt am Main.",
    location: "Frankfurt",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7",
    type: "Universität",
  },
  {
    id: "studienkolleg-heidelberg",
    name: "Studienkolleg Heidelberg",
    description: "Vorbereitung internationaler Studierender auf ein Studium an deutschen Hochschulen.",
    location: "Heidelberg",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-munchen",
    name: "Studienkolleg München",
    description: "Bereitet internationale Studierende auf die Feststellungsprüfung vor, die zum Studium an deutschen Hochschulen berechtigt.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-berlin",
    name: "Studienkolleg Berlin",
    description: "Ein Vorbereitungskolleg für internationale Studierende in der Hauptstadt mit verschiedenen Schwerpunktkursen.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "Studienkolleg",
  },
  {
    id: "goethe-institut-berlin",
    name: "Goethe-Institut Berlin",
    description: "Das weltweit bekannte Institut zur Förderung der deutschen Sprache mit hervorragenden Sprachkursen für alle Niveaustufen.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1502772066658-3006ff41449b",
    type: "Sprachinstitut",
  },
  {
    id: "goethe-institut-muenchen",
    name: "Goethe-Institut München",
    description: "Sprachkurse und kulturelle Veranstaltungen in der bayerischen Landeshauptstadt für internationale Studierende.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    type: "Sprachinstitut",
  },
];

// University interface with additional details for the detail page
export interface UniversityDetail extends UniversityProps {
  requiredDocuments: string[];
  applicationDeadline: string;
  websiteUrl: string;
  languageRequirements: string;
  testRequirements: string[];
  semesterAvailability: string[];
}

const universityDetails: Record<string, UniversityDetail> = {
  "tu-berlin": {
    ...universities.find(u => u.id === "tu-berlin")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (B2/C1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.tu-berlin.de",
    languageRequirements: "B2/C1",
    testRequirements: ["TestDaF", "DSH"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "fu-berlin": {
    ...universities.find(u => u.id === "fu-berlin")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (C1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.fu-berlin.de",
    languageRequirements: "C1",
    testRequirements: ["TestDaF", "DSH"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "uni-hamburg": {
    ...universities.find(u => u.id === "uni-hamburg")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (B2 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.uni-hamburg.de",
    languageRequirements: "B2",
    testRequirements: ["TestDaF"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "rwth-aachen": {
    ...universities.find(u => u.id === "rwth-aachen")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (B2/C1 Deutsch)",
      "Reisepass",
      "Passfoto",
      "Nachweis über Vorkenntnisse (je nach Studiengang)"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.rwth-aachen.de",
    languageRequirements: "B2/C1",
    testRequirements: ["TestDaF", "DSH"],
    semesterAvailability: ["Wintersemester"],
  },
  "lmu-muenchen": {
    ...universities.find(u => u.id === "lmu-muenchen")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (C1 Deutsch)",
      "Reisepass",
      "Passfoto",
      "Krankenversicherungsnachweis"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.lmu.de",
    languageRequirements: "C1",
    testRequirements: ["TestDaF", "DSH"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "uni-heidelberg": {
    ...universities.find(u => u.id === "uni-heidelberg")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (B2/C1 Deutsch)",
      "Reisepass",
      "Passfoto",
      "Finanzierungsnachweis"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.uni-heidelberg.de",
    languageRequirements: "B2/C1",
    testRequirements: ["TestDaF", "DSH"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "uni-frankfurt": {
    ...universities.find(u => u.id === "uni-frankfurt")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Motivationsschreiben",
      "Lebenslauf (CV)",
      "Sprachnachweis (B2 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.uni-frankfurt.de",
    languageRequirements: "B2",
    testRequirements: ["TestDaF", "DSH"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "studienkolleg-heidelberg": {
    ...universities.find(u => u.id === "studienkolleg-heidelberg")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.uni-heidelberg.de/de/studium/studienorganisation/studienkolleg",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "studienkolleg-munchen": {
    ...universities.find(u => u.id === "studienkolleg-munchen")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.studienkolleg.mhn.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "studienkolleg-berlin": {
    ...universities.find(u => u.id === "studienkolleg-berlin")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto",
      "Zulassungsantrag"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.stukolberlin.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
  },
  "goethe-institut-berlin": {
    ...universities.find(u => u.id === "goethe-institut-berlin")!,
    requiredDocuments: [
      "Anmeldeformular",
      "Reisepass",
      "Passfoto",
      "Bezahlungsnachweis"
    ],
    applicationDeadline: "Kursbeginn mehrmals im Jahr",
    websiteUrl: "https://www.goethe.de/ins/de/de/ort/ber.html",
    languageRequirements: "Keine",
    testRequirements: ["telc", "Goethe-Zertifikat"],
    semesterAvailability: ["Ganzjährig"],
  },
  "goethe-institut-muenchen": {
    ...universities.find(u => u.id === "goethe-institut-muenchen")!,
    requiredDocuments: [
      "Anmeldeformular",
      "Reisepass",
      "Passfoto",
      "Bezahlungsnachweis"
    ],
    applicationDeadline: "Kursbeginn mehrmals im Jahr",
    websiteUrl: "https://www.goethe.de/ins/de/de/ort/mue.html",
    languageRequirements: "Keine",
    testRequirements: ["telc", "Goethe-Zertifikat"],
    semesterAvailability: ["Ganzjährig"],
  },
};

export const getUniversities = (): UniversityProps[] => {
  return universities;
};

export const getUniversityById = (id: string): UniversityDetail | undefined => {
  return universityDetails[id];
};

export const searchUniversities = (
  query: string = "",
  filters: {
    language?: string[];
    type?: string[];
    tests?: string[];
    semester?: string[];
  } = {}
): UniversityProps[] => {
  return universities.filter(university => {
    // Text search
    const matchesQuery = query === "" || 
      university.name.toLowerCase().includes(query.toLowerCase()) ||
      university.description.toLowerCase().includes(query.toLowerCase()) ||
      university.location.toLowerCase().includes(query.toLowerCase());
    
    if (!matchesQuery) return false;
    
    // Type filter
    const detail = universityDetails[university.id];
    if (!detail) return false;
    
    // Institution type filter
    if (filters.type && filters.type.length > 0) {
      const typeMatch = filters.type.some(type => {
        if (type === "university") return university.type === "Universität";
        if (type === "studienkolleg") return university.type === "Studienkolleg";
        if (type === "sprachinstitut") return university.type === "Sprachinstitut";
        return false;
      });
      if (!typeMatch) return false;
    }
    
    // Language level filter
    if (filters.language && filters.language.length > 0) {
      const languageMatch = filters.language.some(lang => {
        if (lang === "b1") return detail.languageRequirements.includes("B1") || detail.languageRequirements.includes("Keine");
        if (lang === "b2plus") return detail.languageRequirements.includes("B2") || detail.languageRequirements.includes("C1");
        return false;
      });
      if (!languageMatch) return false;
    }
    
    // Test requirements filter
    if (filters.tests && filters.tests.length > 0) {
      const testMatch = filters.tests.some(test => 
        detail.testRequirements.some(reqTest => {
          if (test === "dsh") return reqTest.includes("DSH");
          if (test === "testDaf") return reqTest.includes("TestDaF");
          if (test === "fsp") return reqTest.includes("FSP");
          if (test === "telc") return reqTest.includes("telc");
          if (test === "goethe") return reqTest.includes("Goethe-Zertifikat");
          return false;
        })
      );
      if (!testMatch) return false;
    }
    
    // Semester availability filter
    if (filters.semester && filters.semester.length > 0) {
      const semesterMatch = filters.semester.some(sem => 
        detail.semesterAvailability.some(availSem => {
          if (sem === "summer") return availSem.includes("Sommersemester") || availSem.includes("Ganzjährig");
          if (sem === "winter") return availSem.includes("Wintersemester") || availSem.includes("Ganzjährig");
          return false;
        })
      );
      if (!semesterMatch) return false;
    }
    
    return true;
  });
};
