import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Benötigte Unterlagen für Studienbewerbungen</h1>
        
        <Tabs defaultValue="university" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="university">Universität</TabsTrigger>
            <TabsTrigger value="studienkolleg">Studienkolleg</TabsTrigger>
            <TabsTrigger value="language">Sprachkurs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="university">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Baccalauréat</CardTitle>
                  <CardDescription>Abiturzeugnis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Beglaubigte Kopie des Originals</li>
                    <li>Beglaubigte Übersetzung ins Deutsche oder Englische</li>
                    <li>Notenauszug aller Fächer beifügen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Muss von einer offiziellen Stelle beglaubigt werden.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sprachnachweis</CardTitle>
                  <CardDescription>Deutschkenntnisse</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>TestDaF (mindestens TDN 4 in allen Teilen)</li>
                    <li>DSH (Stufe 2 oder 3)</li>
                    <li>Goethe-Zertifikat C1/C2</li>
                    <li>telc Deutsch C1 Hochschule</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Der Nachweis sollte nicht älter als 2 Jahre sein.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Motivationsschreiben</CardTitle>
                  <CardDescription>Persönliches Statement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>1-2 Seiten Umfang</li>
                    <li>Erklärung der Studienmotivation</li>
                    <li>Bezug zum gewählten Studiengang</li>
                    <li>Berufliche Ziele</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Auf Deutsch oder Englisch verfassen (je nach Anforderung).</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Lebenslauf</CardTitle>
                  <CardDescription>Curriculum Vitae (CV)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Tabellarisches Format</li>
                    <li>Bildungsweg chronologisch auflisten</li>
                    <li>Praktische Erfahrungen angeben</li>
                    <li>Sprachkenntnisse und Fähigkeiten</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Maximal 2 Seiten, klar strukturiert.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Reisepass</CardTitle>
                  <CardDescription>Identitätsnachweis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Muss mindestens 6 Monate über das Studienende hinaus gültig sein</li>
                    <li>Kopie aller relevanten Seiten</li>
                    <li>Im Original bei Visumsantrag vorlegen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Für das Visum wird der Original-Reisepass benötigt.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Finanzierungsnachweis</CardTitle>
                  <CardDescription>Sperrkonto oder Stipendium</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Nachweis über ca. 11.000 € pro Jahr</li>
                    <li>Meist als Sperrkonto bei einer deutschen Bank</li>
                    <li>Alternativ: Verpflichtungserklärung oder Stipendiennachweis</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Erforderlich für Visum und Aufenthaltserlaubnis.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Krankenversicherung</CardTitle>
                  <CardDescription>Gesundheitsnachweis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Deutsche gesetzliche Krankenversicherung</li>
                    <li>Oder anerkannte private Krankenversicherung</li>
                    <li>Muss während des gesamten Studiums gültig sein</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Verpflichtend für alle Studierenden in Deutschland.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Passfoto</CardTitle>
                  <CardDescription>Biometrisches Foto</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Biometrisches Format (3,5 x 4,5 cm)</li>
                    <li>Nicht älter als 6 Monate</li>
                    <li>Neutraler Hintergrund</li>
                    <li>Mehrere Exemplare mitbringen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Wird für Visum, Aufenthaltserlaubnis und Studierendenausweis benötigt.</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="studienkolleg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Baccalauréat</CardTitle>
                  <CardDescription>Abiturzeugnis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Beglaubigte Kopie des Originals</li>
                    <li>Beglaubigte Übersetzung ins Deutsche</li>
                    <li>Notenauszug aller Fächer beifügen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Auch eine vorläufige Bescheinigung kann oft akzeptiert werden.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sprachnachweis</CardTitle>
                  <CardDescription>Deutschkenntnisse</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Mindestens B1-Niveau erforderlich</li>
                    <li>Goethe-Zertifikat B1</li>
                    <li>telc Deutsch B1</li>
                    <li>Oder vergleichbarer Nachweis</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Für einige Studienkollegs reicht A2, andere verlangen B2.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Lebenslauf</CardTitle>
                  <CardDescription>Curriculum Vitae (CV)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Tabellarisches Format</li>
                    <li>Bildungsweg chronologisch auflisten</li>
                    <li>Praktische Erfahrungen angeben</li>
                    <li>Sprachkenntnisse</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Auf Deutsch verfasst, maximal 2 Seiten.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Reisepass</CardTitle>
                  <CardDescription>Identitätsnachweis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Muss mindestens 6 Monate über das Studienende hinaus gültig sein</li>
                    <li>Kopie aller relevanten Seiten</li>
                    <li>Im Original bei Visumsantrag vorlegen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Für das Visum wird der Original-Reisepass benötigt.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Finanzierungsnachweis</CardTitle>
                  <CardDescription>Sperrkonto oder Stipendium</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Nachweis über ca. 11.000 € pro Jahr</li>
                    <li>Meist als Sperrkonto bei einer deutschen Bank</li>
                    <li>Alternativ: Verpflichtungserklärung oder Stipendiennachweis</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Erforderlich für Visum und Aufenthaltserlaubnis.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Passfoto</CardTitle>
                  <CardDescription>Biometrisches Foto</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Biometrisches Format (3,5 x 4,5 cm)</li>
                    <li>Nicht älter als 6 Monate</li>
                    <li>Neutraler Hintergrund</li>
                    <li>Mehrere Exemplare mitbringen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Wird für verschiedene Anträge benötigt.</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="language">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Antragsformular</CardTitle>
                  <CardDescription>Bewerbungsunterlagen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Vollständig ausgefülltes Anmeldeformular</li>
                    <li>Unterschrift nicht vergessen</li>
                    <li>Online oder postalisch einreichen (je nach Institution)</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Bei jeder Sprachschule direkt erhältlich.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Nachweis der Vorbildung</CardTitle>
                  <CardDescription>Schulabschlusszeugnis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Kopie des Baccalauréat</li>
                    <li>Ggf. weitere Bildungsnachweise</li>
                    <li>Teilweise mit Übersetzung</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Einfache Kopien sind meist ausreichend.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Vorhandene Sprachkenntnisse</CardTitle>
                  <CardDescription>Falls vorhanden</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Zeugnisse über bisherige Deutschkurse</li>
                    <li>Einstufungstests werden oft vor Ort durchgeführt</li>
                    <li>Nicht zwingend erforderlich für Anfängerkurse</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Hilft bei der richtigen Kurseinstufung.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Reisepass</CardTitle>
                  <CardDescription>Identitätsnachweis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Muss während des gesamten Aufenthalts gültig sein</li>
                    <li>Kopie für die Anmeldung</li>
                    <li>Original für Visumsantrag</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Für Sprachkurse unter 90 Tagen reicht ggf. ein Touristenvisum.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Finanzierungsnachweis</CardTitle>
                  <CardDescription>Bei längeren Kursen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Bei Kursen über 3 Monate erforderlich</li>
                    <li>Nachweis über Lebenshaltungskosten</li>
                    <li>Plus Kursgebühren</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Für Visumantrag bei längerfristigen Sprachkursen.</p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Passfoto</CardTitle>
                  <CardDescription>Biometrisches Foto</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Biometrisches Format</li>
                    <li>Für Anmeldung und Visumantrag</li>
                    <li>Mehrere Exemplare mitbringen</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <p className="text-xs text-muted-foreground">Für Schülerausweis und Anmeldeunterlagen.</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Beglaubigung von Dokumenten</h2>
            <p className="mb-4">
              Für die Bewerbung an deutschen Hochschulen müssen viele Dokumente beglaubigt sein. Hier erfahren Sie, wie Sie Ihre Dokumente korrekt beglaubigen lassen:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">1</div>
                <span><strong>In Marokko:</strong> Durch das marokkanische Bildungsministerium und anschließend das deutsche Konsulat oder die deutsche Botschaft.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">2</div>
                <span><strong>In Deutschland:</strong> Durch Notare, bestimmte Behörden oder deutsche Auslandsvertretungen.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">3</div>
                <span><strong>Apostille:</strong> Für manche Dokumente ist eine Apostille erforderlich, die die Echtheit der Unterschriften bestätigt.</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline">Mehr erfahren</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Übersetzung von Dokumenten</h2>
            <p className="mb-4">
              Dokumente, die nicht auf Deutsch oder Englisch ausgestellt sind, müssen von einem vereidigten Übersetzer übersetzt werden:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">1</div>
                <span>Übersetzer müssen offiziell anerkannt oder vereidigt sein.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">2</div>
                <span>Die Übersetzung muss mit dem Original zusammengeheftet und gestempelt sein.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">3</div>
                <span>In Marokko: Listen anerkannter Übersetzer sind bei der deutschen Botschaft erhältlich.</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline">Übersetzungsdienste finden</Button>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Checkliste für Ihre Bewerbung</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium">Vor der Bewerbung:</h3>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check1" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check1">Hochschulen recherchieren</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check2" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check2">Bewerbungsfristen notieren</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check3" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check3">Sprachtest planen und ablegen</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check4" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check4">Dokumente beglaubigen lassen</label>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">Bewerbungsunterlagen:</h3>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check5" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check5">Bewerbungsformular ausfüllen</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check6" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check6">Beglaubigte Zeugniskopien</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check7" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check7">Sprachnachweis</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check8" className="rounded text-primary focus:ring-primary" />
                <label htmlFor="check8">Motivationsschreiben und Lebenslauf</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Bereit für Ihre Bewerbung?</h2>
          <p className="text-gray-600 mb-8">
            Finden Sie passende Universitäten und Studienkollegs für Ihre Bedürfnisse
          </p>
          <Link to="/" className="text-primary hover:underline">Zurück zur Startseite</Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documents;
