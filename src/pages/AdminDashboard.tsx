
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  fetchAllUniversities, 
  fetchUniversityById, 
  updateUniversityDetail 
} from "@/services/supabaseService";
import { UniversityProps, UniversityDetail } from "@/types/universityTypes";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Loader2, LogOut, Save, RefreshCw } from "lucide-react";
import UniversityEditForm from "@/components/admin/UniversityEditForm";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/admin/LoginForm";

const AdminDashboard = () => {
  const [universities, setUniversities] = useState<UniversityProps[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<UniversityDetail | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated, user, logout, isLoading: authLoading } = useAuth();

  const fetchUniversities = async () => {
    try {
      setIsRefreshing(true);
      const allUniversities = await fetchAllUniversities();
      setUniversities(allUniversities);
      toast({
        title: "Daten aktualisiert",
        description: "Die Universitätsdaten wurden erfolgreich aktualisiert.",
      });
    } catch (error) {
      console.error("Error fetching universities:", error);
      toast({
        title: "Fehler",
        description: "Universitäten konnten nicht geladen werden.",
        variant: "destructive",
      });
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      fetchUniversities();
    }
  }, [isAuthenticated, authLoading, toast]);

  const handleEditClick = async (id: string) => {
    try {
      setIsLoading(true);
      const universityDetail = await fetchUniversityById(id);
      
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
    } catch (error) {
      console.error("Error fetching university details:", error);
      toast({
        title: "Fehler",
        description: "Universität konnte nicht geladen werden",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveUniversity = async (updatedUniversity: UniversityDetail) => {
    try {
      setIsSaving(true);
      await updateUniversityDetail(updatedUniversity);
      setIsEditing(false);
      setSelectedUniversity(null);
      
      // Refresh the list
      await fetchUniversities();
      
      toast({
        title: "Erfolgreich gespeichert",
        description: `Die Änderungen für ${updatedUniversity.name} wurden gespeichert.`,
      });
    } catch (error) {
      console.error("Error saving university:", error);
      toast({
        title: "Fehler beim Speichern",
        description: "Die Änderungen konnten nicht gespeichert werden.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedUniversity(null);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Abgemeldet",
      description: "Sie wurden erfolgreich abgemeldet.",
    });
  };

  const handleRefresh = () => {
    fetchUniversities();
  };

  // If authentication is still loading, show a loading indicator
  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-10 px-4">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-lg text-gray-600">Wird geladen...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // If not authenticated, show the login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-10 px-4">
          <LoginForm />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Daten aktualisieren
              </Button>
              <p className="text-gray-600">
                Angemeldet als <span className="font-semibold">{user}</span>
              </p>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Abmelden
              </Button>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Hier können Sie die Informationen zu Universitäten und Studienkollegs bearbeiten.
          </p>
          
          {isLoading ? (
            <div className="text-center py-12">
              <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-lg text-gray-600">Daten werden geladen...</p>
            </div>
          ) : isEditing && selectedUniversity ? (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedUniversity.name} bearbeiten
              </h2>
              <UniversityEditForm 
                university={selectedUniversity} 
                onSave={handleSaveUniversity}
                onCancel={handleCancelEdit}
                isSaving={isSaving}
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
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {universities.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8">
                        Keine Universitäten gefunden.
                      </TableCell>
                    </TableRow>
                  ) : (
                    universities.map((university) => (
                      <TableRow key={university.id}>
                        <TableCell className="font-medium">{university.name}</TableCell>
                        <TableCell>{university.location}</TableCell>
                        <TableCell>{university.type}</TableCell>
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
                    ))
                  )}
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
