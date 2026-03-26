import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Journeys from "./pages/Journeys";
import JourneyDetail from "./pages/JourneyDetail";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EgyptDestination from "./pages/EgyptDestination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<Experiences />} />
          <Route path="/destinations/egypt" element={<EgyptDestination />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/journeys/:slug" element={<JourneyDetail />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
