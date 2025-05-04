import { UniversityProps } from "@/components/UniversityCard";

// Sample university data
const universities: UniversityProps[] = [
  {
    id: "tu-berlin",
    name: "Technische Universität Berlin",
    description: "Eine der größten technischen Universitäten Deutschlands mit einem starken Fokus auf Ingenieurwissenschaften und Informatik.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    type: "DSH",
  },
  {
    id: "fu-berlin",
    name: "Freie Universität Berlin",
    description: "Eine forschungsorientierte Universität mit einem breiten Spektrum an Fächern in den Geistes-, Sozial- und Naturwissenschaften.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    type: "DSH",
  },
  {
    id: "uni-hamburg",
    name: "Universität Hamburg",
    description: "Eine der größten Universitäten Deutschlands mit einem umfangreichen Angebot an Studienfächern.",
    location: "Hamburg",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    type: "DSH",
  },
  {
    id: "rwth-aachen",
    name: "RWTH Aachen",
    description: "Eine der führenden technischen Universitäten Europas mit Schwerpunkt auf Ingenieurwissenschaften und Technologie.",
    location: "Aachen",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    type: "DSH",
  },
  {
    id: "lmu-muenchen",
    name: "Ludwig-Maximilians-Universität München",
    description: "Eine der renommiertesten Universitäten Europas mit einem breiten Fächerangebot und exzellenter Forschung.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "DSH",
  },
  {
    id: "uni-heidelberg",
    name: "Ruprecht-Karls-Universität Heidelberg",
    description: "Die älteste Universität Deutschlands mit einer starken internationalen Ausrichtung und hervorragenden Forschungsbedingungen.",
    location: "Heidelberg",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    type: "DSH",
  },
  {
    id: "uni-frankfurt",
    name: "Goethe-Universität Frankfurt",
    description: "Eine forschungsstarke Universität mit einem breiten Fächerspektrum im Herzen von Frankfurt am Main.",
    location: "Frankfurt",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7",
    type: "DSH",
  },
  // Studienkollegs from the list
  {
    id: "studienkolleg-heidelberg",
    name: "Studienkolleg an der Universität Heidelberg",
    description: "Vorbereitung internationaler Studierender auf ein Studium an deutschen Hochschulen mit Kursen M, T, W, G, S.",
    location: "Heidelberg",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kit",
    name: "Studienkolleg des KIT",
    description: "Karlsruher Institut für Technologie bietet T-Kurse für internationale Studierende.",
    location: "Karlsruhe",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-konstanz",
    name: "Studienkolleg an der HTWG Konstanz",
    description: "Bietet T- und W-Kurse für internationale Studierende an einer Fachhochschule.",
    location: "Konstanz",
    imageUrl: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-muenchen",
    name: "Studienkolleg bei den Universitäten des Freistaates Bayern",
    description: "Bereitet internationale Studierende auf die Feststellungsprüfung vor mit Kursen M, T, W, G.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-coburg",
    name: "Studienkolleg bei den Fachhochschulen des Freistaates Bayern",
    description: "Fachhochschul-Studienkolleg mit TI- und WW-Kursen für internationale Studierende.",
    location: "Coburg",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-tu-berlin",
    name: "Studienkolleg an der TU Berlin",
    description: "Ein Vorbereitungskolleg für internationale Studierende mit T-, TI-, WW- und W-Kursen.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-fu-berlin",
    name: "Studienkolleg an der FU Berlin",
    description: "Bietet T-, M-, W-, G- und S-Kurse für internationale Studierende.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-hamburg",
    name: "Studienkolleg Hamburg",
    description: "Staatliches Studienkolleg mit M-, T-, W- und G-Kursen sowie einem Sonderlehrgang.",
    location: "Hamburg",
    imageUrl: "https://images.unsplash.com/photo-1572439048287-37659a75a4d6",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-frankfurt",
    name: "Studienkolleg an der Goethe-Universität",
    description: "Universitäts- und Fachhochschul-Studienkolleg mit M-, T-, W- und G-Kursen.",
    location: "Frankfurt am Main",
    imageUrl: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-darmstadt",
    name: "Studienkolleg an der TU-Darmstadt",
    description: "Bietet T- und G-Kurse sowie DSH-Kurse für internationale Studierende.",
    location: "Darmstadt",
    imageUrl: "https://images.unsplash.com/photo-1584697964400-2af6a2f6204c",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kassel",
    name: "Studienkolleg an der Universität Kassel",
    description: "Universitäts- und Fachhochschul-Studienkolleg mit T- und W-Kursen.",
    location: "Kassel",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-marburg",
    name: "Studienkolleg Mittelhessen der Universität Marburg",
    description: "Bietet M-, T-, W- und G-Kurse für internationale Studierende.",
    location: "Marburg",
    imageUrl: "https://images.unsplash.com/photo-1571424161765-c4080147b3fb",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-wismar",
    name: "Studienkolleg an der Hochschule Wismar",
    description: "Staatliches Universitäts-Studienkolleg mit TI-, W- und WW-Kursen.",
    location: "Wismar",
    imageUrl: "https://images.unsplash.com/photo-1575893930205-bb2825ccbdbd",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-hannover",
    name: "Studienkolleg an der Universität Hannover",
    description: "Staatliches Universitäts-Studienkolleg mit G-, M-, T- und W-Kursen.",
    location: "Hannover",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-bochum",
    name: "Studienkolleg des Ökumenischen Studienwerks e.V.",
    description: "Staatlich genehmigtes Studienkolleg mit T-Kursen für internationale Studierende.",
    location: "Bochum",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-mettingen",
    name: "Studienkolleg Mettingen",
    description: "Staatlich anerkanntes Studienkolleg mit T-, W-, G- und M-Kursen.",
    location: "Mettingen",
    imageUrl: "https://images.unsplash.com/photo-1585333222813-7dc234c024a4",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-mainz",
    name: "Studienkolleg der Johannes-Gutenberg-Universität",
    description: "Staatliches Universitäts-Studienkolleg mit M-, T-, W-, G- und S-Kursen.",
    location: "Mainz",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kaiserslautern",
    name: "Internationales Studienkolleg der Hochschule Kaiserslautern",
    description: "Staatliches FH/Uni-Studienkolleg mit TI/T- und WW/W-Kursen.",
    location: "Kaiserslautern",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-dresden",
    name: "TUDIAS-Studienkolleg TU Dresden",
    description: "Staatlich anerkanntes Studienkolleg mit M-, T- und W-Kursen.",
    location: "Dresden",
    imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-glauchau",
    name: "Studienkolleg Glauchau",
    description: "Staatlich anerkanntes Studienkolleg mit T-, TI-, W-, WW-Kursen und DSH.",
    location: "Glauchau",
    imageUrl: "https://images.unsplash.com/photo-1541882596-2b56f1de4a50",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-leipzig",
    name: "Universität Leipzig Studienkolleg Sachsen",
    description: "Staatliches Universitäts-Studienkolleg mit M-, T-, W-, G- und S-Kursen.",
    location: "Leipzig",
    imageUrl: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-zittau",
    name: "Hochschule Zittau/Görlitz Studienkolleg",
    description: "Staatliches FH-Studienkolleg mit TI- und WW-Kursen.",
    location: "Zittau",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-halle",
    name: "Studienkolleg an der Martin-Luther-Universität Halle-Wittenberg",
    description: "Staatliches Universitäts-Studienkolleg mit M-, T-, W-, G-, S-Kursen und DSH.",
    location: "Halle",
    imageUrl: "https://images.unsplash.com/photo-1612212909979-5ae8ae87177e",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-koethen",
    name: "Landesstudienkolleg Sachsen-Anhalt an der Hochschule Anhalt",
    description: "Staatliches Uni+FH-Studienkolleg mit T-, W-, G-Kursen und DSH.",
    location: "Köthen/Dessau",
    imageUrl: "https://images.unsplash.com/photo-1580060860978-4c6efb9b3742",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kiel",
    name: "Studienkolleg an der FH Kiel",
    description: "Staatliches FH-Studienkolleg mit TI-, SW- und WW-Kursen.",
    location: "Kiel",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-nordhausen",
    name: "Staatliches Studienkolleg",
    description: "Staatliches Uni+FH-Studienkolleg mit M-, T-, W-, G- und SW-Kursen.",
    location: "Nordhausen",
    imageUrl: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6",
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
  bundesland?: string;
  status?: string;
  kurse?: string;
  email?: string;
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
    websiteUrl: "https://www.isz.uni-heidelberg.de/d_kurse_sk.html",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Baden-Württemberg",
    status: "Uni/staatlich",
    kurse: "M, T, W, G, S",
    email: "studienkolleg-info@isz.uni-heidelberg.de"
  },
  "studienkolleg-kit": {
    ...universities.find(u => u.id === "studienkolleg-kit")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.stk.kit.edu",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Baden-Württemberg",
    status: "Uni/staatlich",
    kurse: "T",
    email: "info@stk.kit.edu"
  },
  "studienkolleg-konstanz": {
    ...universities.find(u => u.id === "studienkolleg-konstanz")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://studienkolleg-konstanz.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Baden-Württemberg",
    status: "FH/staatlich",
    kurse: "T, W"
  },
  "studienkolleg-muenchen": {
    ...universities.find(u => u.id === "studienkolleg-muenchen")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://studienkolleg-münchen.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Bayern",
    status: "Uni/staatlich",
    kurse: "M, T, W, G",
    email: "leitung@studienkolleg.mhn.de"
  },
  "studienkolleg-coburg": {
    ...universities.find(u => u.id === "studienkolleg-coburg")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "http://www.studienkolleg-coburg.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Bayern",
    status: "FH/staatlich",
    kurse: "TI, WW",
    email: "studienkolleg@hs-coburg.de"
  },
  "studienkolleg-tu-berlin": {
    ...universities.find(u => u.id === "studienkolleg-tu-berlin")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto",
      "Zulassungsantrag"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.studienkolleg.tu-berlin.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Berlin",
    status: "Uni/staatlich",
    kurse: "T, TI, WW, W"
  },
  "studienkolleg-fu-berlin": {
    ...universities.find(u => u.id === "studienkolleg-fu-berlin")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto",
      "Zulassungsantrag"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.fu-berlin.de/studienkolleg",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Berlin",
    status: "Uni/staatlich",
    kurse: "T, M, W, G, S",
    email: "studienkolleg@fu-berlin.de"
  },
  "studienkolleg-hamburg": {
    ...universities.find(u => u.id === "studienkolleg-hamburg")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.studienkolleg-hamburg.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Hamburg",
    status: "Uni/staatlich",
    kurse: "M, T, W, G, Sonderlehrgang",
    email: "studienkolleg@bsb.hamburg.de"
  },
  // Continue adding all other studienkollegs with similar pattern
  "studienkolleg-frankfurt": {
    ...universities.find(u => u.id === "studienkolleg-frankfurt")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.isz.uni-frankfurt.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Hessen",
    status: "Uni + FH/staatlich",
    kurse: "M, T, W, G",
    email: "studienkolleg@em.uni-frankfurt.de"
  },
  "studienkolleg-darmstadt": {
    ...universities.find(u => u.id === "studienkolleg-darmstadt")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.stk.tu-darmstadt.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Hessen",
    status: "Uni + FH/staatlich",
    kurse: "T, G, DSH",
    email: "kolleg@stk.tu-darmstadt.de"
  },
  "studienkolleg-kassel": {
    ...universities.find(u => u.id === "studienkolleg-kassel")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Wintersemester)",
    websiteUrl: "https://www.uni-kassel.de/einrichtung/studienkolleg",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    bundesland: "Hessen",
    status: "Uni + FH/staatlich",
    kurse: "T, W",
    email: "studkoll@uni-kassel.de"
  },
  "studienkolleg-marburg": {
    ...universities.find(u => u.id === "studienkolleg-marburg")!,
    requiredDocuments: [
      "Baccalauréat-Zeugnis",
      "Lebenslauf (CV)",
      "Sprachnachweis (B1 Deutsch)",
      "Reisepass",
      "Passfoto"
    ],
    applicationDeadline: "15. Januar (Sommersemester) / 15. Juli (Winter
