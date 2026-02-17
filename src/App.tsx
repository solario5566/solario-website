import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Certifications from "./pages/Certifications";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Projects from "./pages/Projects";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";
import Finance from "./pages/Finance";
import ProjectDetail from "./pages/ProjectDetail";
import SolarInstallation from "./pages/services/SolarInstallation";
import EVCharging from "./pages/services/EVCharging";
import BatteryStorage from "./pages/services/BatteryStorage";
import HeatPumps from "./pages/services/HeatPumps";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/solar-installation" element={<SolarInstallation />} />
          <Route path="/services/ev-charging" element={<EVCharging />} />
          <Route path="/services/battery-storage" element={<BatteryStorage />} />
          <Route path="/services/heat-pumps" element={<HeatPumps />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
