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
  // Studienkollegs from the table data
  {
    id: "studienkolleg-bochum",
    name: "STK Bochum",
    description: "Staatlich genehmigtes Studienkolleg mit T und G Kursen für internationale Studierende.",
    location: "Bochum",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-darmstadt",
    name: "STK Darmstadt",
    description: "Studienkolleg an der TU Darmstadt mit T und G Kursen und DSH-Vorbereitung.",
    location: "Darmstadt",
    imageUrl: "https://images.unsplash.com/photo-1584697964400-2af6a2f6204c",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-coburg",
    name: "STK FH Coburg",
    description: "Fachhochschul-Studienkolleg mit T und W Kursen in Bayern.",
    location: "Coburg",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kiel",
    name: "STK FH Kiel",
    description: "Fachhochschul-Studienkolleg mit T und W Kursen in Schleswig-Holstein.",
    location: "Kiel",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-frankfurt-fuas",
    name: "STK Frankfurt (FUAS)",
    description: "Studienkolleg an der Frankfurt University of Applied Sciences mit T, W und G Kursen.",
    location: "Frankfurt am Main",
    imageUrl: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-frankfurt",
    name: "STK UNI Frankfurt",
    description: "Universitäts- und Fachhochschul-Studienkolleg mit T, W und G Kursen.",
    location: "Frankfurt am Main",
    imageUrl: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-hamburg",
    name: "STK Hamburg",
    description: "Staatliches Studienkolleg mit M, T, W und G Kursen in Hamburg.",
    location: "Hamburg",
    imageUrl: "https://images.unsplash.com/photo-1572439048287-37659a75a4d6",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-hannover",
    name: "STK Hannover (Nieders.)",
    description: "Staatliches Universitäts-Studienkolleg mit M, T, W, G und S Kursen.",
    location: "Hannover",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-hannover-mhh",
    name: "STK Hannover (MHH)",
    description: "Studienkolleg spezialisiert auf medizinische Fachrichtungen mit M, T, W, G und S Kursen.",
    location: "Hannover",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-heidelberg",
    name: "STK Heidelberg",
    description: "Vorbereitung internationaler Studierender auf ein Studium an deutschen Hochschulen mit M, T, W, G und S Kursen.",
    location: "Heidelberg",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kaiserslautern",
    name: "STK HS Kaiserslautern",
    description: "Fachhochschul-Studienkolleg mit T und W Kursen für internationale Studierende.",
    location: "Kaiserslautern",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-konstanz",
    name: "STK HS Konstanz",
    description: "Fachhochschul-Studienkolleg mit T und W Kursen.",
    location: "Konstanz",
    imageUrl: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-wismar",
    name: "STK HS Wismar",
    description: "Fachhochschul-Studienkolleg mit T und W Kursen.",
    location: "Wismar",
    imageUrl: "https://images.unsplash.com/photo-1575893930205-bb2825ccbdbd",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-tu-berlin",
    name: "STK HTW Berlin (TU Berlin)",
    description: "Studienkolleg an der Hochschule für Technik und Wirtschaft Berlin/TU Berlin mit T und W Kursen.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kit",
    name: "STK Karlsruhe (KIT)",
    description: "Studienkolleg des Karlsruher Instituts für Technologie mit T und W Kursen.",
    location: "Karlsruhe",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-kassel",
    name: "STK Kassel",
    description: "Universitäts- und Fachhochschul-Studienkolleg mit T und W Kursen.",
    location: "Kassel",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-koethen",
    name: "STK Köthen",
    description: "Studienkolleg an der Hochschule Anhalt mit M, T, W, G und S Kursen.",
    location: "Köthen",
    imageUrl: "https://images.unsplash.com/photo-1580060860978-4c6efb9b3742",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-leipzig",
    name: "STK Leipzig",
    description: "Universität Leipzig Studienkolleg Sachsen mit M, T, W, G und S Kursen.",
    location: "Leipzig",
    imageUrl: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-mettingen",
    name: "STK Mettingen",
    description: "Staatlich anerkanntes Studienkolleg mit M, T, W, G und S Kursen.",
    location: "Mettingen",
    imageUrl: "https://images.unsplash.com/photo-1585333222813-7dc234c024a4",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-marburg",
    name: "STK Mittelhessen",
    description: "Studienkolleg Mittelhessen der Universität Marburg mit M, T, W, G und S Kursen.",
    location: "Marburg",
    imageUrl: "https://images.unsplash.com/photo-1571424161765-c4080147b3fb",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-muenchen",
    name: "STK München",
    description: "Studienkolleg bei den Universitäten des Freistaates Bayern mit M, T, W, G und S Kursen.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-nordhausen",
    name: "STK Nordhausen",
    description: "Staatliches Studienkolleg mit M, T, W, G und S Kursen.",
    location: "Nordhausen",
    imageUrl: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-tu-berlin-uni",
    name: "STK TU Berlin",
    description: "Studienkolleg an der TU Berlin mit M, T, W, G und S Kursen.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-halle",
    name: "STK Uni Halle",
    description: "Studienkolleg an der Martin-Luther-Universität Halle-Wittenberg mit M, T, W, G und S Kursen.",
    location: "Halle",
    imageUrl: "https://images.unsplash.com/photo-1612212909979-5ae8ae87177e",
    type: "Studienkolleg",
  },
  {
    id: "studienkolleg-mainz",
    name: "STK Uni Mainz",
    description: "Studienkolleg der Johannes-Gutenberg-Universität mit M, T, W, G und S Kursen.",
    location: "Mainz",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
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
  applicationTestDate?: string;
  applicationMethod?: string;
  address?: string;
}

const universityDetails: Record<string, UniversityDetail> = {
  // ... keep existing code (universities) the same ...

  // Updated studienkollegs with the provided information
  "studienkolleg-bochum": {
    ...universities.find(u => u.id === "studienkolleg-bochum")!,
    requiredDocuments: ["BAC"],
    applicationDeadline: "15.05.2025",
    websiteUrl: "https://www.studienkolleg-bochum.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    kurse: "T, G",
    email: "info@studienkolleg-bochum.de",
    applicationTestDate: "09.+12.08.2025",
    applicationMethod: "Direkt",
    address: "Girondelle 80, 44799 Bochum"
  },
  "studienkolleg-darmstadt": {
    ...universities.find(u => u.id === "studienkolleg-darmstadt")!,
    requiredDocuments: ["relevez de note"],
    applicationDeadline: "15.04.2025",
    websiteUrl: "https://www.stk.tu-darmstadt.de",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    kurse: "T, G",
    email: "kolleg@stk.tu-darmstadt.de",
    applicationTestDate: "14.06.2025",
    applicationMethod: "Direkt / Uni-Assist",
    address: "Zweifalltorweg 12, 64293 Darmstadt"
  },
  "studienkolleg-coburg": {
    ...universities.find(u => u.id === "studienkolleg-coburg")!,
    requiredDocuments: ["lebenslauf"],
    applicationDeadline: "15.07.2025",
    websiteUrl: "http://www.studienkolleg-coburg.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "T, W",
    email: "studienkolleg@hs-coburg.de",
    applicationTestDate: "JULI",
    applicationMethod: "PRIMUSS",
    address: "Friedrich-Streib-Straße 2, 96450 Coburg"
  },
  "studienkolleg-kiel": {
    ...universities.find(u => u.id === "studienkolleg-kiel")!,
    requiredDocuments: ["Passbild"],
    applicationDeadline: "31.03.2025",
    websiteUrl: "https://www.fh-kiel.de/studium/studieninteressierte/studienkolleg/",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester"],
    kurse: "T, W",
    email: "studienkolleg@fh-kiel.de",
    applicationTestDate: "07.06.2025",
    applicationMethod: "Direkt",
    address: "Sokratesplatz 4, 24149 Kiel"
  },
  "studienkolleg-frankfurt-fuas": {
    ...universities.find(u => u.id === "studienkolleg-frankfurt-fuas")!,
    requiredDocuments: ["Antrag"],
    applicationDeadline: "01.05.2025",
    websiteUrl: "https://www.frankfurt-university.de/international",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    kurse: "T, W, G",
    email: "international.admission@fra-uas.de",
    applicationTestDate: "14.06.2025",
    applicationMethod: "Uni-Assist",
    address: "Nibelungenplatz 1, 60318 Frankfurt am Main"
  },
  "studienkolleg-frankfurt": {
    ...universities.find(u => u.id === "studienkolleg-frankfurt")!,
    requiredDocuments: ["B2 oder B2"],
    applicationDeadline: "01.05.2025",
    websiteUrl: "https://www.isz.uni-frankfurt.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    kurse: "T, W, G",
    email: "studienkolleg@em.uni-frankfurt.de",
    applicationTestDate: "14.06.2025",
    applicationMethod: "Uni-Assist",
    address: "Bockenheimer Landstraße 76, 60323 Frankfurt am Main"
  },
  "studienkolleg-hamburg": {
    ...universities.find(u => u.id === "studienkolleg-hamburg")!,
    applicationDeadline: "01.03.2025",
    websiteUrl: "https://www.studienkolleg-hamburg.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester"],
    kurse: "M, T, W, G",
    email: "studienkolleg@bsb.hamburg.de",
    applicationMethod: "Direkt",
    address: "Holstenglacis 6, 20355 Hamburg"
  },
  "studienkolleg-hannover": {
    ...universities.find(u => u.id === "studienkolleg-hannover")!,
    applicationDeadline: "15.07.2025",
    websiteUrl: "https://www.stk.uni-hannover.de",
    languageRequirements: "TELC/Goethe B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "sekretariat@stk.uni-hannover.de",
    applicationTestDate: "04.09.2025",
    applicationMethod: "Via Uni/Hochschule",
    address: "Am Kleinen Felde 30, 30167 Hannover"
  },
  "studienkolleg-hannover-mhh": {
    ...universities.find(u => u.id === "studienkolleg-hannover-mhh")!,
    applicationDeadline: "15.07.2025",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    applicationTestDate: "04.09.2025"
  },
  "studienkolleg-heidelberg": {
    ...universities.find(u => u.id === "studienkolleg-heidelberg")!,
    applicationDeadline: "15.07.2025",
    websiteUrl: "https://www.isz.uni-heidelberg.de/d_kurse_sk.html",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "studienkolleg@isz.uni-heidelberg.de",
    applicationTestDate: "06.10.2025",
    applicationMethod: "Via Universität",
    address: "Im Neuenheimer Feld 684, 69120 Heidelberg"
  },
  "studienkolleg-kaiserslautern": {
    ...universities.find(u => u.id === "studienkolleg-kaiserslautern")!,
    applicationDeadline: "21.03.2025",
    websiteUrl: "https://www.hs-kl.de/internationales-studienkolleg",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester"],
    kurse: "T, W",
    email: "studienkolleg@hs-kl.de",
    applicationTestDate: "23.04.2025",
    applicationMethod: "Direkt",
    address: "Postfach 1573, 67604 Kaiserslautern"
  },
  "studienkolleg-konstanz": {
    ...universities.find(u => u.id === "studienkolleg-konstanz")!,
    applicationDeadline: "01.05.2025",
    websiteUrl: "https://www.htwg-konstanz.de/studienkolleg",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    kurse: "T, W",
    email: "studienkolleg@htwg-konstanz.de",
    applicationTestDate: "20.06.2025",
    applicationMethod: "Direkt",
    address: "Alfred-Wachtel-Str. 8, 78462 Konstanz"
  },
  "studienkolleg-wismar": {
    ...universities.find(u => u.id === "studienkolleg-wismar")!,
    applicationDeadline: "30.06.2025",
    websiteUrl: "https://www.hs-wismar.de/international/aus-dem-ausland/studienkolleg/",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "T, W",
    email: "nara@hs-wismar.de",
    applicationMethod: "Uni-Assist",
    address: "Philipp-Müller-Straße 14, 23966 Wismar"
  },
  "studienkolleg-tu-berlin": {
    ...universities.find(u => u.id === "studienkolleg-tu-berlin")!,
    applicationDeadline: "30.06.2025",
    websiteUrl: "https://www.htw-berlin.de/studium/bewerbung/internationales-studienkolleg/",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "T, W",
    email: "studienkolleg@htw-berlin.de",
    applicationTestDate: "29.+30.08.2025",
    applicationMethod: "Uni-Assist",
    address: "Treskowallee 8, 10318 Berlin"
  },
  "studienkolleg-kit": {
    ...universities.find(u => u.id === "studienkolleg-kit")!,
    applicationDeadline: "15.07.2025",
    websiteUrl: "https://www.stk.kit.edu",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "T, W",
    email: "info@stk.kit.edu",
    applicationTestDate: "SEPTEMBER",
    applicationMethod: "Via KIT (IStO)",
    address: "Adenauerring 2 (Geb. 50.20), 76131 Karlsruhe"
  },
  "studienkolleg-kassel": {
    ...universities.find(u => u.id === "studienkolleg-kassel")!,
    applicationDeadline: "30.04.2025",
    websiteUrl: "https://www.uni-kassel.de/einrichtung/studienkolleg",
    languageRequirements: "TELC/Goethe B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester"],
    kurse: "T, W",
    email: "studkoll@uni-kassel.de",
    applicationTestDate: "14.06.2025",
    applicationMethod: "Uni-Assist",
    address: "Mönchebergstraße 19, 34109 Kassel"
  },
  "studienkolleg-koethen": {
    ...universities.find(u => u.id === "studienkolleg-koethen")!,
    applicationDeadline: "15.06.2025",
    websiteUrl: "https://www.hs-anhalt.de/studienkolleg",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    applicationTestDate: "AUGUST"
  },
  "studienkolleg-leipzig": {
    ...universities.find(u => u.id === "studienkolleg-leipzig")!,
    applicationDeadline: "15.06.2025",
    websiteUrl: "https://www.uni-leipzig.de/stksachs",
    languageRequirements: "B1",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "studienkolleg@uni-leipzig.de",
    applicationTestDate: "SEPTEMBER",
    applicationMethod: "Uni-Assist",
    address: "Ritterstraße 26, 04109 Leipzig"
  },
  "studienkolleg-mettingen": {
    ...universities.find(u => u.id === "studienkolleg-mettingen")!,
    applicationDeadline: "15.06.2025",
    websiteUrl: "https://www.studienkolleg-mettingen.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "info@studienkolleg-mettingen.de",
    applicationMethod: "Direkt",
    address: "Bahnhofstraße 10, 49497 Mettingen"
  },
  "studienkolleg-marburg": {
    ...universities.find(u => u.id === "studienkolleg-marburg")!,
    applicationDeadline: "13.05.2025",
    websiteUrl: "https://www.uni-marburg.de/studienkolleg",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester", "Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "studienkolleg@uni-marburg.de",
    applicationTestDate: "24.05.2025",
    applicationMethod: "Via Universität",
    address: "Wilhelm-Röpke-Str. 6, 35039 Marburg"
  },
  "studienkolleg-muenchen": {
    ...universities.find(u => u.id === "studienkolleg-muenchen")!,
    applicationDeadline: "15.04.2025",
    websiteUrl: "https://www.studienkolleg-münchen.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Sommersemester"],
    kurse: "M, T, W, G, S",
    email: "studienkolleg@uni-muenchen.de",
    applicationTestDate: "14.06.2025",
    applicationMethod: "Uni-Assist",
    address: "Leopoldstraße 13, 80802 München"
  },
  "studienkolleg-nordhausen": {
    ...universities.find(u => u.id === "studienkolleg-nordhausen")!,
    applicationDeadline: "15.07.2025",
    websiteUrl: "https://www.hs-nordhausen.de/international/staatliches-studienkolleg/",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "studienkolleg@hs-nordhausen.de",
    applicationTestDate: "01.09.2025",
    applicationMethod: "Direkt",
    address: "Weinberghof 4, 99734 Nordhausen"
  },
  "studienkolleg-tu-berlin-uni": {
    ...universities.find(u => u.id === "studienkolleg-tu-berlin-uni")!,
    applicationDeadline: "30.06.2025",
    websiteUrl: "https://www.studienkolleg.tu-berlin.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    email: "studienkolleg@tu-berlin.de",
    applicationTestDate: "07.07.2025",
    applicationMethod: "Uni-Assist",
    address: "Hardenbergstraße 36, 10623 Berlin"
  },
  "studienkolleg-halle": {
    ...universities.find(u => u.id === "studienkolleg-halle")!,
    applicationDeadline: "30.06.2025",
    websiteUrl: "https://www.studienkolleg.uni-halle.de",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    applicationTestDate: "29.+30.08.2025",
    address: "Ludwig-Wucherer-Straße 2, 06108 Halle"
  },
  "studienkolleg-mainz": {
    ...universities.find(u => u.id === "studienkolleg-mainz")!,
    applicationDeadline: "30.06.2025",
    websiteUrl: "https://www.uni-mainz.de/studienkolleg",
    languageRequirements: "B2",
    testRequirements: ["FSP"],
    semesterAvailability: ["Wintersemester"],
    kurse: "M, T, W, G, S",
    applicationTestDate: "11.08.2025",
    address: "Johannes-von-Müller-Weg 1, 55128 Mainz"
  },
  // ... keep existing code (other universities) the same ...
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
    
    console.log(`University ${university.name}:`, { 
      type: university.type,
      matchesSearch, 
      matchesType, 
      matchesLanguage
    });
    
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
