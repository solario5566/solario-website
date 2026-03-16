import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Sun, Home, Building, ArrowRight, Zap, Phone } from "lucide-react";
import homeProject1 from "@/assets/projects/home-project-1.jpg";
import homeProject2 from "@/assets/projects/home-project-2.jpg";
import homeProject3 from "@/assets/projects/home-project-3.webp";

export interface ProjectData {
  slug: string;
  location: string;
  city: string;
  province: string;
  systemSize: string;
  type: "Residential" | "Commercial";
  benefit: string;
  image: string;
  altText: string;
  title: string;
  description: string;
}

export const featuredProjects: ProjectData[] = [
  {
    slug: "toronto-residential-solar",
    location: "Toronto, ON",
    city: "Toronto",
    province: "Ontario",
    systemSize: "12.5 kW",
    type: "Residential",
    benefit: "Estimated 78% bill reduction",
    image: homeProject1,
    altText: "Residential solar panel installation on a Toronto home rooftop",
    title: "Toronto Residential Solar Installation",
    description:
      "A 12.5 kW rooftop solar system installed on a family home in Toronto, dramatically reducing monthly electricity costs with premium Canadian Solar panels.",
  },
  {
    slug: "brampton-commercial-solar",
    location: "Brampton, ON",
    city: "Brampton",
    province: "Ontario",
    systemSize: "15.2 kW",
    type: "Commercial",
    benefit: "Net-zero energy achieved",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
    altText: "Commercial solar installation on a Brampton business rooftop",
    title: "Brampton Commercial Solar Installation",
    description:
      "A 15.2 kW commercial solar array installed on a Brampton business, achieving net-zero energy consumption and significant operational savings.",
  },
  {
    slug: "ottawa-commercial-solar",
    location: "Ottawa, ON",
    city: "Ottawa",
    province: "Ontario",
    systemSize: "45.0 kW",
    type: "Commercial",
    benefit: "Estimated 85% bill reduction",
    image: homeProject2,
    altText: "Large commercial solar panel system installed in Ottawa Ontario",
    title: "Ottawa Commercial Solar Installation",
    description:
      "A large-scale 45 kW commercial solar installation in Ottawa, providing significant energy independence for a multi-unit commercial property.",
  },
  {
    slug: "caledon-commercial-solar",
    location: "Caledon, ON",
    city: "Caledon",
    province: "Ontario",
    systemSize: "22.0 kW",
    type: "Commercial",
    benefit: "Estimated 72% bill reduction",
    image: homeProject3,
    altText: "Solar panel installation on a commercial property in Caledon Ontario",
    title: "Caledon Commercial Solar Installation",
    description:
      "A 22 kW solar system designed for a commercial property in Caledon, reducing reliance on grid electricity with a ground-and-roof hybrid approach.",
  },
];

const RecentProjects = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="container mx-auto">
        {/* Header with SEO-rich copy */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm mb-2">Solar Projects Across the GTA</p>
          <h2 className="text-3xl md:text-4xl font-bold text-section-light-foreground mb-4">
            Solar Projects Across the GTA
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From residential rooftop solar panel installation in Toronto and Brampton to large-scale commercial
            solar systems in Ottawa and Caledon, Solario delivers certified solar projects across the Greater
            Toronto Area and throughout Ontario.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group bg-section-light border border-gray-200 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 block"
              aria-label={`View ${project.title}`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.altText}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {project.type === "Residential" ? (
                    <Home className="w-3 h-3" />
                  ) : (
                    <Building className="w-3 h-3" />
                  )}
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-section-light-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {project.location}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-section-light-foreground font-medium">
                      {project.systemSize}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs text-section-light-foreground font-medium leading-tight">
                      {project.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Primary + Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button variant="default" size="default" asChild>
            <Link to="/projects">
              See All Ontario Solar Installations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="default" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Get a Free Solar Assessment
            </Link>
          </Button>
        </div>

        {/* Internal linking block */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link
              to="/services/solar-installation"
              className="group p-4 rounded-lg hover:bg-section-gray transition-colors"
            >
              <Sun className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-semibold text-section-light-foreground group-hover:text-primary transition-colors block">
                Residential Solar Installation Services
              </span>
              <span className="text-xs text-muted-foreground mt-1 block">
                Rooftop systems for Ontario homes
              </span>
            </Link>
            <Link
              to="/services/battery-storage"
              className="group p-4 rounded-lg hover:bg-section-gray transition-colors"
            >
              <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-semibold text-section-light-foreground group-hover:text-primary transition-colors block">
                Commercial Solar &amp; Battery Solutions
              </span>
              <span className="text-xs text-muted-foreground mt-1 block">
                Scalable energy for Ontario businesses
              </span>
            </Link>
            <Link
              to="/contact"
              className="group p-4 rounded-lg hover:bg-section-gray transition-colors"
            >
              <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-semibold text-section-light-foreground group-hover:text-primary transition-colors block">
                Request a Free Solar Consultation
              </span>
              <span className="text-xs text-muted-foreground mt-1 block">
                No-obligation quotes for any project
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
