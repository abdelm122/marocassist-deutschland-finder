
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterOption {
  id: string;
  label: string;
}

const languageLevels: FilterOption[] = [
  { id: "b1", label: "B1" },
  { id: "b2plus", label: "B2+" },
];

const institutionTypes: FilterOption[] = [
  { id: "university", label: "Universität" },
  { id: "studienkolleg", label: "Studienkolleg" },
];

const requiredTests: FilterOption[] = [
  { id: "dsh", label: "DSH" },
  { id: "testDaf", label: "TestDaF" },
  { id: "fsp", label: "FSP" },
];

const semesters: FilterOption[] = [
  { id: "summer", label: "Sommersemester" },
  { id: "winter", label: "Wintersemester" },
];

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguageLevels, setSelectedLanguageLevels] = useState<string[]>([]);
  const [selectedInstitutionTypes, setSelectedInstitutionTypes] = useState<string[]>([]);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [selectedSemesters, setSelectedSemesters] = useState<string[]>([]);

  const handleCheckboxChange = (
    id: string, 
    selectedItems: string[], 
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    
    if (searchTerm) {
      params.set("query", searchTerm);
    }
    
    if (selectedLanguageLevels.length) {
      params.set("language", selectedLanguageLevels.join(","));
    }
    
    if (selectedInstitutionTypes.length) {
      params.set("type", selectedInstitutionTypes.join(","));
    }
    
    if (selectedTests.length) {
      params.set("tests", selectedTests.join(","));
    }
    
    if (selectedSemesters.length) {
      params.set("semester", selectedSemesters.join(","));
    }
    
    navigate(`/results?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mt-8">
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Universität suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Language Level */}
        <div>
          <h3 className="text-lg font-medium mb-2">Sprachniveau</h3>
          <div className="space-y-2">
            {languageLevels.map((level) => (
              <div key={level.id} className="flex items-center gap-2">
                <Checkbox 
                  id={`language-${level.id}`} 
                  checked={selectedLanguageLevels.includes(level.id)}
                  onCheckedChange={() => handleCheckboxChange(
                    level.id, 
                    selectedLanguageLevels, 
                    setSelectedLanguageLevels
                  )}
                />
                <Label htmlFor={`language-${level.id}`}>{level.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Institution Type */}
        <div>
          <h3 className="text-lg font-medium mb-2">Institutionstyp</h3>
          <div className="space-y-2">
            {institutionTypes.map((type) => (
              <div key={type.id} className="flex items-center gap-2">
                <Checkbox 
                  id={`type-${type.id}`} 
                  checked={selectedInstitutionTypes.includes(type.id)}
                  onCheckedChange={() => handleCheckboxChange(
                    type.id, 
                    selectedInstitutionTypes, 
                    setSelectedInstitutionTypes
                  )}
                />
                <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Required Tests */}
        <div>
          <h3 className="text-lg font-medium mb-2">Prüfungen</h3>
          <div className="space-y-2">
            {requiredTests.map((test) => (
              <div key={test.id} className="flex items-center gap-2">
                <Checkbox 
                  id={`test-${test.id}`} 
                  checked={selectedTests.includes(test.id)}
                  onCheckedChange={() => handleCheckboxChange(
                    test.id, 
                    selectedTests, 
                    setSelectedTests
                  )}
                />
                <Label htmlFor={`test-${test.id}`}>{test.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Semester */}
        <div>
          <h3 className="text-lg font-medium mb-2">Semester</h3>
          <div className="space-y-2">
            {semesters.map((semester) => (
              <div key={semester.id} className="flex items-center gap-2">
                <Checkbox 
                  id={`semester-${semester.id}`} 
                  checked={selectedSemesters.includes(semester.id)}
                  onCheckedChange={() => handleCheckboxChange(
                    semester.id, 
                    selectedSemesters, 
                    setSelectedSemesters
                  )}
                />
                <Label htmlFor={`semester-${semester.id}`}>{semester.label}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button type="submit" size="lg" className="btn-primary">Suchen</Button>
      </div>
    </form>
  );
};

export default SearchForm;
