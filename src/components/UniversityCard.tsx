
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export interface UniversityProps {
  id: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  type: string;
  deadlineStatus?: "open" | "closed";
}

const UniversityCard = ({ university }: { university: UniversityProps }) => {
  return (
    <Card className="university-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="aspect-video rounded-md overflow-hidden bg-muted mb-2">
          <img 
            src={university.imageUrl} 
            alt={university.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-2">
          {university.deadlineStatus === "open" ? (
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
              <Check className="h-4 w-4 text-green-600" />
            </span>
          ) : university.deadlineStatus === "closed" ? (
            <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
              <X className="h-4 w-4 text-red-600" />
            </span>
          ) : null}
          <h3 className="text-xl font-semibold">{university.name}</h3>
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {university.location}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{university.description}</p>
      </CardContent>
      <CardFooter className="pt-4 flex justify-between">
        <div className="text-xs px-2 py-1 bg-muted rounded-full">
          {university.type}
        </div>
        <Button asChild>
          <Link to={`/university/${university.id}`}>Mehr erfahren</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UniversityCard;
