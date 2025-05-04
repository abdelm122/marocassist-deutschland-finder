
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { UniversityProps } from "@/types/universityTypes";
import { getAllUniversities } from "@/services/universityData";
import UniversityCard from "@/components/UniversityCard";

const Index = () => {
  const [featuredUniversities, setFeaturedUniversities] = useState<UniversityProps[]>([]);
  
  useEffect(() => {
    // Get all universities and filter to show only Studienkollegs
    const allUniversities = getAllUniversities();
    const studienkollegs = allUniversities
      .filter(uni => uni.type === "Studienkolleg")
      .slice(0, 6); // Limit to 6 for display
    
    setFeaturedUniversities(studienkollegs);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 md:mb-6">
                Dein Weg zum Studium in Deutschland
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                MAROCASSIST hilft marokkanischen Studenten, die richtige Hochschule in Deutschland zu finden
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  Universitäten
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm">
                  <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                  Studienkollegs
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm">
                  <div className="h-3 w-3 bg-amber-500 rounded-full"></div>
                  Sprachkurse
                </div>
              </div>
              
              {/* Flag visual */}
              <div className="flex justify-center gap-6 mb-8">
                <div className="relative w-24 h-16">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full bg-morocco-red"></div>
                    <div className="w-1/2 h-full bg-morocco-green"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 transform rotate-45 text-morocco-green text-2xl">
                      ★
                    </div>
                  </div>
                </div>
                
                <div className="text-3xl font-bold">→</div>
                
                <div className="relative w-24 h-16">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="w-full h-1/3 bg-germany-black"></div>
                    <div className="w-full h-1/3 bg-germany-red"></div>
                    <div className="w-full h-1/3 bg-germany-gold"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Search Section */}
          <section className="mb-16">
            <SearchForm />
          </section>
          
          {/* Featured Studienkollegs Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Studienkollegs in Deutschland</h2>
              <Link to="/results?type=Studienkolleg">
                <Button variant="outline">Alle anzeigen</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredUniversities.map((university) => (
                <UniversityCard key={university.id} university={university} />
              ))}
            </div>
          </section>
          
          {/* Info Sections */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Über MAROCASSIST</h2>
                <p className="mb-4">
                  Wir helfen marokkanischen Studenten beim Finden der richtigen Hochschule und unterstützen bei allen Schritten des Bewerbungsprozesses.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Umfassende Informationen zu Universitäten
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Spezifische Anforderungen für marokkanische Bewerber
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Studienfinanzierungsinformationen
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Schritte zum Studium</h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Universität finden</h3>
                      <p className="text-sm text-gray-600">Nutzen Sie unsere Suchfunktion, um passende Universitäten zu finden.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Unterlagen vorbereiten</h3>
                      <p className="text-sm text-gray-600">Informieren Sie sich über benötigte Dokumente und bereiten Sie diese vor.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Bewerbung einreichen</h3>
                      <p className="text-sm text-gray-600">Reichen Sie Ihre Bewerbung fristgerecht über die offiziellen Kanäle ein.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Nach Deutschland reisen</h3>
                      <p className="text-sm text-gray-600">Organisieren Sie Ihr Visum und Ihre Reise nach Deutschland.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
