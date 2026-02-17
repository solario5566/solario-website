import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Sun, DollarSign, Calendar, Home, Building } from "lucide-react";
import SEO from "@/components/SEO";

// Import project images
import muskokaCottage from "@/assets/projects/muskoka-cottage.jpg";
import vaughanResidentialSolar from "@/assets/projects/vaughan-residential-solar.jpg";
import caledonResidentialSolar from "@/assets/projects/caledon-residential-solar.jpg";
import garageWorkshop from "@/assets/projects/garage-workshop.jpg";
import commercialInstall from "@/assets/projects/commercial-install.jpg";
import urbanRooftop from "@/assets/projects/urban-rooftop.jpg";
import torontoCommercialSolar from "@/assets/projects/toronto-commercial-solar.jpg";
import modernSubdivision from "@/assets/projects/modern-subdivision.jpg";
import groundMountFarm from "@/assets/projects/ground-mount-farm.jpg";

const projects = [
  {
    location: "Muskoka, ON",
    systemSize: "8.4 kW",
    type: "Residential",
    savingsPer25Year: "$60,000+",
    completedDate: "June 2024",
    image: muskokaCottage,
    description: "Off-grid cottage solar installation with battery backup in scenic Muskoka region.",
  },
  {
    location: "Vaughan, ON",
    systemSize: "14.0 kW",
    type: "Residential",
    savingsPer25Year: "$95,000+",
    completedDate: "June 2024",
    image: vaughanResidentialSolar,
    description: "High-capacity residential system installed on a suburban family home.",
  },
  {
    location: "Caledon, ON",
    systemSize: "9.6 kW",
    type: "Residential",
    savingsPer25Year: "$65,000+",
    completedDate: "June 2024",
    image: caledonResidentialSolar,
    description: "Rural farmhouse solar installation with smart monitoring system.",
  },
  {
    location: "Barrie, ON",
    systemSize: "11.2 kW",
    type: "Residential",
    savingsPer25Year: "$77,500+",
    completedDate: "June 2024",
    image: garageWorkshop,
    description: "Workshop and garage building with full rooftop solar coverage.",
  },
  {
    location: "Hamilton, ON",
    systemSize: "45.0 kW",
    type: "Commercial",
    savingsPer25Year: "$312,000+",
    completedDate: "September 2024",
    image: commercialInstall,
    description: "Large-scale commercial flat-roof installation with ballasted racking system.",
  },
  {
    location: "Toronto, ON",
    systemSize: "18.0 kW",
    type: "Commercial",
    savingsPer25Year: "$130,000+",
    completedDate: "September 2024",
    image: urbanRooftop,
    description: "Urban multi-unit residential building with rooftop solar array.",
  },
  {
    location: "Toronto, ON",
    systemSize: "32.0 kW",
    type: "Commercial",
    savingsPer25Year: "$220,000+",
    completedDate: "September 2024",
    image: torontoCommercialSolar,
    description: "Commercial building flat-roof installation with premium panels.",
  },
  {
    location: "Brampton, ON",
    systemSize: "12.5 kW",
    type: "Residential",
    savingsPer25Year: "$85,000+",
    completedDate: "March 2025",
    image: modernSubdivision,
    description: "Modern subdivision home with sleek all-black solar panel installation.",
  },
  {
    location: "Orangeville, ON",
    systemSize: "15.6 kW",
    type: "Residential",
    savingsPer25Year: "$105,000+",
    completedDate: "April 2025",
    image: groundMountFarm,
    description: "Ground-mounted solar array for rural property with optimal sun exposure.",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <SEO title="Projects" description="Browse Solario's portfolio of solar installations across the GTA. Residential and commercial projects with real savings data." path="/projects" />
      {/* Hero */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm mb-2">Our Portfolio</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Our Work Across Ontario
            </h1>
            <p className="text-muted-foreground">
              Browse our portfolio of successful solar installations throughout the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Solar installation in ${project.location}`}
                    loading="lazy"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.type === "Residential" ? (
                      <Home className="w-3 h-3" />
                    ) : (
                      <Building className="w-3 h-3" />
                    )}
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>

                  <p className="text-foreground text-sm mb-4">{project.description}</p>

                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                    <div className="text-center">
                      <Sun className="w-4 h-4 text-primary mx-auto mb-1" />
                      <span className="text-xs font-semibold text-foreground block">{project.systemSize}</span>
                      <span className="text-[10px] text-muted-foreground">System</span>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-4 h-4 text-primary mx-auto mb-1" />
                      <span className="text-xs font-semibold text-foreground block">{project.savingsPer25Year}</span>
                      <span className="text-[10px] text-muted-foreground">Over 25 Yr</span>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
                      <span className="text-xs font-semibold text-foreground block">{project.completedDate.split(" ")[0]}</span>
                      <span className="text-[10px] text-muted-foreground">{project.completedDate.split(" ")[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Be Our Next Project?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Join hundreds of satisfied customers who have made the switch to solar energy.
          </p>
          <Button
            size="lg"
            className="bg-navy-dark text-foreground hover:bg-navy"
            asChild
          >
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
