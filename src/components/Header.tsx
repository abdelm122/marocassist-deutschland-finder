
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 20V8M2 20V8M12 4v16M2 8s9-4 20 0M2 12s9-4 20 0M2 16s9-4 20 0M2 20s9-4 20 0"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold">MAROCASSIST</span>
              <span className="text-xs text-muted-foreground">Studieren in Deutschland</span>
            </div>
          </Link>

          {/* Toggle button for mobile */}
          {isMobile && (
            <Button 
              variant="ghost"
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </Button>
          )}

          {/* Navigation menu */}
          <nav className={`${isMobile ? (isMenuOpen ? "flex" : "hidden") : "flex"} ${isMobile ? "absolute top-16 left-0 right-0 flex-col bg-white shadow-md z-50 p-4" : "flex-row items-center gap-2"}`}>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/">Startseite</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/information">Informationen</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/documents">Unterlagen</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
