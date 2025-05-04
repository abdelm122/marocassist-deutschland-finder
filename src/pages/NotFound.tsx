
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-9xl font-bold text-gray-200 mb-6">404</div>
            <h1 className="text-3xl font-bold mb-4">Seite nicht gefunden</h1>
            <p className="text-lg text-gray-600 mb-8">
              Die gesuchte Seite existiert nicht. Vielleicht haben Sie sich bei der URL vertippt oder die Seite wurde verschoben.
            </p>
            <Button size="lg" asChild>
              <Link to="/">Zurück zur Startseite</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
