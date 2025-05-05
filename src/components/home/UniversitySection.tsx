
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UniversityCard from "@/components/UniversityCard";
import { UniversityProps } from "@/types/universityTypes";

interface UniversitySectionProps {
  title: string;
  universities: UniversityProps[];
  linkTo: string;
  emptyMessage?: string;
}

const UniversitySection = ({ 
  title, 
  universities, 
  linkTo,
  emptyMessage = "Diese Universitäten werden bald hinzugefügt."
}: UniversitySectionProps) => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to={linkTo}>
          <Button variant="outline">Alle anzeigen</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.length > 0 ? (
          universities.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500">{emptyMessage}</p>
            <Link to="/results" className="text-primary hover:underline mt-2 inline-block">
              Alle Universitäten anzeigen
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversitySection;
