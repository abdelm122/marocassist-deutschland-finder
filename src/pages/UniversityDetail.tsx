import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUniversityById, UniversityDetail } from "@/services/universityData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UniversityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [university, setUniversity] = useState<UniversityDetail | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUniversity = async () => {
      if (!id) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }
      
      try {
        setIsLoading(true);
        const universityData = await getUniversityById(id);
        if (universityData) {
          setUniversity(universityData);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching university:", error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUniversity();
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Universität nicht gefunden</h2>
            <p className="text-gray-600 mb-8">
              Die gesuchte Universität konnte nicht gefunden werden.
            </p>
            <Button asChild>
              <Link to="/results">Zurück zu den Ergebnissen</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="text-center py-16">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <p className="mt-4 text-gray-600">Laden...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!university) {
    return null; // This shouldn't happen, but just in case
  }

  const isStudienkolleg = university.type === "Studienkolleg";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          {/* Breadcrumbs */}
          <div className="flex text-sm mb-6">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/results" className="text-gray-600 hover:text-primary">Suchergebnisse</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{university.name}</span>
          </div>
          
          {/* Hero section */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-10">
            <div className="aspect-video w-full bg-muted">
              <img src={university.imageUrl} alt={university.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{university.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {university.location}
                  </div>
                  {university.address && (
                    <div className="text-sm text-gray-600 mt-1">
                      {university.address}
                    </div>
                  )}
                </div>
                
                <Button size="lg" asChild>
                  <a href={university.websiteUrl} target="_blank" rel="noopener noreferrer">
                    Website besuchen
                  </a>
                </Button>
              </div>
              
              <p className="text-gray-700">{university.description}</p>
            </div>
          </div>
          
          {/* Details grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Required documents */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Benötigte Dokumente</h2>
                <ul className="space-y-3">
                  {university.requiredDocuments.map((document, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{document}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Language requirements */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Sprachanforderungen</h2>
                <div className="flex gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Niveau: {university.languageRequirements}
                  </div>
                </div>
                
                <h3 className="font-medium mb-2">Akzeptierte Sprachprüfungen:</h3>
                <div className="flex flex-wrap gap-2">
                  {university.testRequirements.map((test, index) => (
                    <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                      {test}
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Bewerbungsmethode */}
              {university.applicationMethod && (
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Bewerbungsmethode</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">{university.applicationMethod}</div>
                      <p className="text-sm text-gray-600">
                        {university.applicationMethod.includes("Direkt") 
                          ? "Bewerbung direkt an der Hochschule" 
                          : university.applicationMethod.includes("Uni-Assist") 
                            ? "Bewerbung über uni-assist.de" 
                            : "Bewerbung über spezielle Verfahren"}
                      </p>
                    </div>
                  </div>
                  
                  {university.applicationTestDate && (
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Aufnahmetestdatum:</h3>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-amber-800">{university.applicationTestDate}</p>
                      </div>
                    </div>
                  )}
                </Card>
              )}
              
              {/* Studienkolleg specific information */}
              {isStudienkolleg && university.kurse && (
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Kursangebot</h2>
                  <div className="flex flex-wrap gap-2">
                    {university.kurse.split(", ").map((kurs, index) => (
                      <div key={index} className="bg-purple-100 px-3 py-1 rounded-full text-sm text-purple-800">
                        {kurs}
                      </div>
                    ))}
                  </div>
                  
                  {university.bundesland && (
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Bundesland:</h3>
                      <div className="text-gray-700">{university.bundesland}</div>
                    </div>
                  )}
                  
                  {university.status && (
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Status:</h3>
                      <div className="text-gray-700">{university.status}</div>
                    </div>
                  )}
                </Card>
              )}
            </div>
            
            {/* Right column */}
            <div className="space-y-8">
              {/* Application info */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Bewerbungsdeadline</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-medium">{university.applicationDeadline}</p>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Semesterbeginn:</h3>
                  <div className="flex flex-wrap gap-2">
                    {university.semesterAvailability.map((semester, index) => (
                      <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                        {semester}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              
              {/* Institution type */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Institutionstyp</h2>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                  {university.type}
                </div>
              </Card>
              
              {/* Contact */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${university.email || `info@${university.id}.de`}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    E-Mail senden
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityDetailPage;
