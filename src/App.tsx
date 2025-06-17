
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import CIAOfficial from "./pages/CIAOfficial";
import UGIEP from "./pages/UGIEP";
import Establishments from "./pages/Establishments";
import Gallery from "./pages/Gallery";
import Store from "./pages/Store";
import Payment from "./pages/Payment";
import Legal from "./pages/Legal";
import WeInvite from "./pages/WeInvite";
import Career from "./pages/Career";
import YLC from "./pages/YLC";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
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
                <Route path="cia-official" element={<CIAOfficial />} />
                <Route path="ugiep" element={<UGIEP />} />
                <Route path="establishments" element={<Establishments />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="store" element={<Store />} />
                <Route path="payment" element={<Payment />} />
                <Route path="legal" element={<Legal />} />
                <Route path="we-invite" element={<WeInvite />} />
                <Route path="career" element={<Career />} />
                <Route path="ylc" element={<YLC />} />
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
