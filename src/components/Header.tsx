
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
            <div className="relative w-10 h-10 flex">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-morocco-red"></div>
                <div className="w-1/2 h-full bg-morocco-green"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 transform rotate-45 text-morocco-green">
                  ★
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 flex">
              <div className="absolute inset-0 flex flex-col">
                <div className="w-full h-1/3 bg-germany-black"></div>
                <div className="w-full h-1/3 bg-germany-red"></div>
                <div className="w-full h-1/3 bg-germany-gold"></div>
              </div>
            </div>
            <span className="text-xl font-bold">MAROCASSIST</span>
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
