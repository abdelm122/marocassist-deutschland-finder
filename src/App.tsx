
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Results from "./pages/Results";
import UniversityDetail from "./pages/UniversityDetail";
import NotFound from "./pages/NotFound";
import Information from "./pages/Information";
import Documents from "./pages/Documents";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results" element={<Results />} />
          <Route path="/university/:id" element={<UniversityDetail />} />
          <Route path="/information" element={<Information />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
