
import React from "react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
