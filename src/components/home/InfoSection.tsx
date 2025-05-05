
import React from "react";

const InfoSection = () => {
  return (
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
  );
};

export default InfoSection;
