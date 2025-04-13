
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import CIAOfficial from "./pages/CIAOfficial";
import Establishments from "./pages/Establishments";
import Management from "./pages/Management";
import Gallery from "./pages/Gallery";
import Store from "./pages/Store";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="official" element={<CIAOfficial />} />
            <Route path="establishments" element={<Establishments />} />
            <Route path="management" element={<Management />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="store" element={<Store />} />
            <Route path="legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
