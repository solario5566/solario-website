import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { MapPin, Sun, Home, Building, Zap, ArrowLeft, Phone } from "lucide-react";
import { featuredProjects } from "@/components/home/RecentProjects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageLayout>
      <SEO
        title={project.title}
        description={`${project.description} — ${project.systemSize} ${project.type.toLowerCase()} solar in ${project.location}. View the project.`}
        path={`/projects/${project.slug}`}
      />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.altText}
                width={800}
                height={533}
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                {project.type === "Residential" ? (
                  <Home className="w-3.5 h-3.5" />
                ) : (
                  <Building className="w-3.5 h-3.5" />
                )}
                {project.type}
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-lg p-5 border border-border">
                  <Sun className="w-6 h-6 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">{project.systemSize}</p>
                  <p className="text-sm text-muted-foreground">System Size</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <Zap className="w-6 h-6 text-primary mb-2" />
                  <p className="text-lg font-bold text-foreground">{project.benefit}</p>
                  <p className="text-sm text-muted-foreground">Key Benefit</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Get a Free Solar Assessment
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">See All Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interested in a Similar Installation?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you're a homeowner or business owner in {project.city}, our team can design
            a solar solution tailored to your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link to="/services/solar-installation">
                Explore Solar Installation Services
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/services/battery-storage">
                Learn About Battery Storage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDetail;
