
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchUniversities } from "@/services/universityData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityCard from "@/components/UniversityCard";
import { UniversityProps } from "@/types/universityTypes";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [universities, setUniversities] = useState<UniversityProps[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        setIsLoading(true);
        const query = searchParams.get("query") || "";
        const language = searchParams.get("language")?.split(",") || [];
        const type = searchParams.get("type")?.split(",") || [];
        
        console.log("Filter parameters:", { query, language, type });
        const results = await searchUniversities(query, { language, type });
        
        console.log("Search results:", results);
        setUniversities(results);
      } catch (error) {
        console.error("Error fetching universities:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUniversities();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          {/* Search heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Suchergebnisse</h1>
            {!isLoading && (
              <p className="text-gray-600">
                {universities.length} {universities.length === 1 ? "Ergebnis" : "Ergebnisse"} gefunden
              </p>
            )}
          </div>
          
          {/* Mobile toggle for filters */}
          <div className="md:hidden mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full"
            >
              {showFilters ? "Filter ausblenden" : "Filter anzeigen"}
            </Button>
          </div>
          
          {/* Search form (hidden on mobile by default) */}
          <div className={`${showFilters ? "block" : "hidden"} md:block mb-10`}>
            <SearchForm />
          </div>
          
          {/* Results */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
            </div>
          ) : universities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((university) => (
                <UniversityCard key={university.id} university={university} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Keine Ergebnisse gefunden</h2>
              <p className="text-gray-600 mb-8">
                Bitte versuchen Sie andere Suchkriterien oder wenden Sie sich an uns für weitere Unterstützung.
              </p>
              <Button onClick={() => window.history.back()}>
                Zurück zur Suche
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
