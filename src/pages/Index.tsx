
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import { UniversityProps } from "@/types/universityTypes";
import { getAllUniversities } from "@/services/universityData";

// Import newly created components
import HeroSection from "@/components/home/HeroSection";
import UniversitySection from "@/components/home/UniversitySection";
import InfoSection from "@/components/home/InfoSection";

const Index = () => {
  const [featuredUniversities, setFeaturedUniversities] = useState<UniversityProps[]>([]);
  const [specificUniversities, setSpecificUniversities] = useState<UniversityProps[]>([]);
  
  useEffect(() => {
    // Get all universities
    const allUniversities = getAllUniversities();
    
    // Get specific universities the user is looking for
    const targetCities = ["frankfurt", "halle", "jena", "nordhausen", "bochum", "wismar", "darmstadt"];
    
    const specificUnis = allUniversities.filter(uni => 
      targetCities.some(
        keyword => uni.name.toLowerCase().includes(keyword.toLowerCase()) || 
                  uni.location.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    
    console.log("Found specific universities:", specificUnis);
    
    // Regular featured studienkollegs
    const studienkollegs = allUniversities
      .filter(uni => uni.type === "Studienkolleg")
      .slice(0, 6); // Limit to 6 for display
    
    setFeaturedUniversities(studienkollegs);
    setSpecificUniversities(specificUnis.length > 0 ? specificUnis : studienkollegs);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Search Section */}
          <section className="mb-16">
            <SearchForm />
          </section>
          
          {/* Highlighted Universities Section */}
          <UniversitySection 
            title="Universitäten in Frankfurt, Halle, Jena, Nordhausen, Bochum, Wismar, Darmstadt"
            universities={specificUniversities}
            linkTo="/results"
          />
          
          {/* Featured Studienkollegs Section */}
          <UniversitySection 
            title="Studienkollegs in Deutschland"
            universities={featuredUniversities}
            linkTo="/results?type=Studienkolleg"
          />
          
          {/* Info Sections */}
          <InfoSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
