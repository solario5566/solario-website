import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsIntegration from "./components/analytics/AnalyticsIntegration";
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
import SolarRepair from "./pages/services/SolarRepair";
import LocationSolarPage from "./pages/location/LocationSolarPage";
import GreaterTorontoArea from "./pages/GreaterTorontoArea";
import ServiceAreas from "./pages/ServiceAreas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsIntegration />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/solar-installation" element={<SolarInstallation />} />
          <Route path="/services/ev-charging" element={<EVCharging />} />
          <Route path="/services/battery-storage" element={<BatteryStorage />} />
          <Route path="/services/heat-pumps" element={<HeatPumps />} />
          <Route path="/services/solar-repair" element={<SolarRepair />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/solar-installation-greater-toronto-area" element={<GreaterTorontoArea />} />
          <Route path="/solar-installation-toronto" element={<LocationSolarPage cityKey="toronto" />} />
          <Route path="/solar-installation-north-york" element={<LocationSolarPage cityKey="north-york" />} />
          <Route path="/solar-installation-scarborough" element={<LocationSolarPage cityKey="scarborough" />} />
          <Route path="/solar-installation-etobicoke" element={<LocationSolarPage cityKey="etobicoke" />} />
          <Route path="/solar-installation-mississauga" element={<LocationSolarPage cityKey="mississauga" />} />
          <Route path="/solar-installation-vaughan" element={<LocationSolarPage cityKey="vaughan" />} />
          <Route path="/solar-installation-markham" element={<LocationSolarPage cityKey="markham" />} />
          <Route path="/solar-installation-richmond-hill" element={<LocationSolarPage cityKey="richmond-hill" />} />
          <Route path="/solar-installation-brampton" element={<LocationSolarPage cityKey="brampton" />} />
          <Route path="/solar-installation-oakville" element={<LocationSolarPage cityKey="oakville" />} />
          <Route path="/solar-installation-burlington" element={<LocationSolarPage cityKey="burlington" />} />
          <Route path="/solar-installation-milton" element={<LocationSolarPage cityKey="milton" />} />
          <Route path="/solar-installation-ajax" element={<LocationSolarPage cityKey="ajax" />} />
          <Route path="/solar-installation-whitby" element={<LocationSolarPage cityKey="whitby" />} />
          <Route path="/solar-installation-oshawa" element={<LocationSolarPage cityKey="oshawa" />} />
          <Route path="/solar-installation-hamilton" element={<LocationSolarPage cityKey="hamilton" />} />
          <Route path="/solar-installation-waterloo" element={<LocationSolarPage cityKey="waterloo" />} />
          <Route path="/solar-installation-kitchener" element={<LocationSolarPage cityKey="kitchener" />} />
          <Route path="/solar-installation-guelph" element={<LocationSolarPage cityKey="guelph" />} />
          <Route path="/solar-installation-cambridge" element={<LocationSolarPage cityKey="cambridge" />} />
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
