
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Informationen</h1>
          <p className="text-xl text-gray-600 mb-8">
            Alles, was marokkanische Studenten über das Studium in Deutschland wissen müssen
          </p>
          
          {/* Information sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              {/* FAQ Accordion */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Häufig gestellte Fragen</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Welche Dokumente benötige ich für die Bewerbung?</AccordionTrigger>
                    <AccordionContent>
                      <p>Für die meisten Bewerbungen an deutschen Hochschulen benötigen marokkanische Studierende folgende Dokumente:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Beglaubigte Kopie des Baccalauréat-Zeugnisses mit deutscher oder englischer Übersetzung</li>
                        <li>Lebenslauf (CV)</li>
                        <li>Motivationsschreiben</li>
                        <li>Sprachnachweis (je nach Hochschule B1, B2 oder C1)</li>
                        <li>Kopie des Reisepasses</li>
                        <li>Passfoto</li>
                        <li>Nachweis über Vorkenntnisse (je nach Studiengang)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Was ist ein Studienkolleg?</AccordionTrigger>
                    <AccordionContent>
                      <p>Ein Studienkolleg ist eine Bildungseinrichtung in Deutschland, die internationale Studierende auf ein Studium an deutschen Hochschulen vorbereitet. Im Studienkolleg werden Kurse angeboten, die auf die Feststellungsprüfung (FSP) vorbereiten. Das erfolgreiche Bestehen dieser Prüfung ist eine Voraussetzung für die Zulassung zu einem Studium an einer deutschen Hochschule, wenn der ausländische Schulabschluss nicht direkt zum Studium in Deutschland berechtigt.</p>
                      <p className="mt-2">Für viele marokkanische Studenten mit Baccalauréat ist das Studienkolleg der Weg zum Hochschulstudium in Deutschland.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Welches Sprachniveau benötige ich?</AccordionTrigger>
                    <AccordionContent>
                      <p>Die Sprachanforderungen variieren je nach Hochschule und Studiengang:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Für ein Studienkolleg: In der Regel mindestens B1</li>
                        <li>Für ein Bachelorstudium: Meist B2 oder C1</li>
                        <li>Für ein Masterstudium: Meist C1</li>
                      </ul>
                      <p className="mt-2">Anerkannte Sprachprüfungen sind:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>TestDaF (Test Deutsch als Fremdsprache)</li>
                        <li>DSH (Deutsche Sprachprüfung für den Hochschulzugang)</li>
                        <li>Goethe-Zertifikate</li>
                        <li>telc Deutsch</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Wie funktioniert die Bewerbung?</AccordionTrigger>
                    <AccordionContent>
                      <p>Die Bewerbung an deutschen Hochschulen erfolgt in der Regel über:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>uni-assist:</strong> Zentrale Servicestelle für internationale Studienbewerbungen</li>
                        <li><strong>Direkte Bewerbung:</strong> Bei manchen Hochschulen direkt über deren Online-Portal</li>
                        <li><strong>Hochschulstart:</strong> Für zulassungsbeschränkte Studiengänge</li>
                      </ul>
                      <p className="mt-2">Beachten Sie die Bewerbungsfristen:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Für das Sommersemester: meist bis 15. Januar</li>
                        <li>Für das Wintersemester: meist bis 15. Juli</li>
                      </ul>
                      <p className="mt-2">Einige Studiengänge oder Hochschulen können abweichende Fristen haben.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Wie bekomme ich ein Studentenvisum?</AccordionTrigger>
                    <AccordionContent>
                      <p>Für ein Studentenvisum benötigen Sie:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Gültigen Reisepass</li>
                        <li>Zulassungsbescheid der deutschen Hochschule</li>
                        <li>Nachweis über ausreichende finanzielle Mittel (meist Sperrkonto mit ca. 11.000 Euro)</li>
                        <li>Krankenversicherung</li>
                        <li>Sprachnachweis</li>
                      </ul>
                      <p className="mt-2">Beantragen Sie das Visum frühzeitig bei der deutschen Botschaft in Rabat oder dem Generalkonsulat in Casablanca, da die Bearbeitungszeit mehrere Wochen betragen kann.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              {/* German Education System */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Das deutsche Bildungssystem</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Hochschultypen</h3>
                    <p className="mb-4">In Deutschland gibt es verschiedene Arten von Hochschulen:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Universitäten</h4>
                        <p className="text-sm">Forschungsorientierte Hochschulen mit einem breiten Fächerspektrum. Sie bieten Bachelor-, Master- und Promotionsstudiengänge an.</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Fachhochschulen (FH)</h4>
                        <p className="text-sm">Praxisorientierte Hochschulen mit Fokus auf angewandte Wissenschaften. Bieten Bachelor- und Masterstudiengänge an.</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Kunst- und Musikhochschulen</h4>
                        <p className="text-sm">Spezialisierte Hochschulen für künstlerische Fächer. Erfordern oft eine Aufnahmeprüfung zum Nachweis der künstlerischen Eignung.</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Duale Hochschulen</h4>
                        <p className="text-sm">Kombination aus akademischem Studium und praktischer Berufsausbildung in Unternehmen.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Studienabschlüsse</h3>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-1">Bachelor (6-8 Semester)</h4>
                      <p className="text-sm mb-3">Erster berufsqualifizierender Hochschulabschluss.</p>
                      
                      <h4 className="font-semibold mb-1">Master (2-4 Semester)</h4>
                      <p className="text-sm mb-3">Aufbauend auf dem Bachelor, weiterführender akademischer Grad.</p>
                      
                      <h4 className="font-semibold mb-1">Promotion / Doktorat</h4>
                      <p className="text-sm">Höchster akademischer Grad, setzt in der Regel einen Master-Abschluss voraus.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Studienjahr</h3>
                    <p className="mb-2">Das akademische Jahr in Deutschland ist in zwei Semester unterteilt:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Wintersemester:</strong> Oktober bis März</li>
                      <li><strong>Sommersemester:</strong> April bis September</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {/* Sidebar with quick links and info */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Wichtige Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.daad.de" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Deutscher Akademischer Austauschdienst (DAAD)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.uni-assist.de" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      uni-assist
                    </a>
                  </li>
                  <li>
                    <a href="https://www.study-in-germany.de" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Study in Germany
                    </a>
                  </li>
                  <li>
                    <a href="https://www.goethe.de" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Goethe-Institut
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testdaf.de" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      TestDaF-Institut
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Cost of living info */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Lebenshaltungskosten</h3>
                <p className="text-sm mb-4">Durchschnittliche monatliche Kosten für Studierende in Deutschland:</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Miete</span>
                    <span className="font-medium">300€ - 500€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lebensmittel</span>
                    <span className="font-medium">150€ - 250€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport</span>
                    <span className="font-medium">70€ - 100€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Krankenversicherung</span>
                    <span className="font-medium">~110€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sonstiges</span>
                    <span className="font-medium">100€ - 200€</span>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Gesamt pro Monat</span>
                      <span>~850€</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-primary text-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Noch Fragen?</h3>
                <p className="mb-4">Finden Sie passende Universitäten und Studienkollegs für Ihre Bedürfnisse.</p>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <Link to="/">Jetzt Suchen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Information;
