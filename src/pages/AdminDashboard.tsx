
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  getAllUniversities, 
  getUniversityById, 
  updateUniversityDetail 
} from "@/services/universityData";
import { UniversityProps, UniversityDetail } from "@/types/universityTypes";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Save } from "lucide-react";
import UniversityEditForm from "@/components/admin/UniversityEditForm";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [universities, setUniversities] = useState<UniversityProps[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<UniversityDetail | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchUniversities = () => {
      const allUniversities = getAllUniversities();
      setUniversities(allUniversities);
    };

    fetchUniversities();
  }, []);

  const handleEditClick = (id: string) => {
    const universityDetail = getUniversityById(id);
    
    if (universityDetail) {
      setSelectedUniversity(universityDetail);
      setIsEditing(true);
    } else {
      toast({
        title: "Fehler",
        description: "Universität konnte nicht gefunden werden",
        variant: "destructive",
      });
    }
  };

  const handleSaveUniversity = (updatedUniversity: UniversityDetail) => {
    try {
      updateUniversityDetail(updatedUniversity);
      setIsEditing(false);
      setSelectedUniversity(null);
      
      // Refresh the list
      setUniversities(getAllUniversities());
      
      toast({
        title: "Erfolgreich gespeichert",
        description: `Die Änderungen für ${updatedUniversity.name} wurden gespeichert.`,
      });
    } catch (error) {
      toast({
        title: "Fehler beim Speichern",
        description: "Die Änderungen konnten nicht gespeichert werden.",
        variant: "destructive",
      });
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedUniversity(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <p className="text-gray-600 mb-8">
            Hier können Sie die Informationen zu Universitäten und Studienkollegs bearbeiten.
          </p>
          
          {isEditing && selectedUniversity ? (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedUniversity.name} bearbeiten
              </h2>
              <UniversityEditForm 
                university={selectedUniversity} 
                onSave={handleSaveUniversity}
                onCancel={handleCancelEdit}
              />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Standort</TableHead>
                    <TableHead>Typ</TableHead>
                    <TableHead>Bewerbungsfrist</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {universities.map((university) => {
                    const details = getUniversityById(university.id);
                    return (
                      <TableRow key={university.id}>
                        <TableCell className="font-medium">{university.name}</TableCell>
                        <TableCell>{university.location}</TableCell>
                        <TableCell>{university.type}</TableCell>
                        <TableCell>
                          {details?.applicationDeadline || "Keine Angabe"}
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditClick(university.id)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
