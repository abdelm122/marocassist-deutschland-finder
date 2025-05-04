
import { UniversityDetail } from "../types/universityTypes";
import { sprachinstitute } from "./sprachinstitute";

// Map with details for all language institutes
export const sprachinstitutDetails: Record<string, UniversityDetail> = {
  "goethe-institut-berlin": {
    ...sprachinstitute.find(u => u.id === "goethe-institut-berlin")!,
    requiredDocuments: ["Bewerbungsunterlagen"],
    applicationDeadline: "offen",
    websiteUrl: "https://www.goethe.de/berlin",
    languageRequirements: "Alle Niveaus",
    testRequirements: ["TestDaF", "Goethe-Zertifikat"],
    semesterAvailability: ["Ganzjährig"],
    email: "berlin@goethe.de",
    address: "Neue Schönhauser Str. 20, 10178 Berlin"
  },
  "goethe-institut-muenchen": {
    ...sprachinstitute.find(u => u.id === "goethe-institut-muenchen")!,
    requiredDocuments: ["Bewerbungsunterlagen"],
    applicationDeadline: "offen",
    websiteUrl: "https://www.goethe.de/muenchen",
    languageRequirements: "Alle Niveaus",
    testRequirements: ["TestDaF", "Goethe-Zertifikat"],
    semesterAvailability: ["Ganzjährig"],
    email: "muenchen@goethe.de",
    address: "Sonnenstraße 25, 80331 München"
  },
};
