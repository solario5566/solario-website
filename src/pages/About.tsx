import PageLayout from "@/components/layout/PageLayout";
import { Home, Users, Star, Calendar, Heart, Shield, Wrench, Target } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const stats = [
  { icon: Calendar, value: "15+", label: "Years in Business" },
  { icon: Home, value: "1,500+", label: "Systems Installed" },
  { icon: Users, value: "20+", label: "Team Members" },
  { icon: Star, value: "4.9", label: " Rating" },
];

const timeline = [
  { year: "2009", event: "Company founded in Toronto" },
  { year: "2012", event: "100th installation completed" },
  { year: "2015", event: "Rebranded To Solario" },
  { year: "2018", event: "Finance Team Setup" },
  { year: "2021", event: "EV charging services launched" },
  { year: "2026", event: "1,500+ systems installed" },
];

const values = [
  {
    icon: Heart,
    title: "Honesty Over Sales",
    description:
      "We'll always tell you the truth about what your home needs—even if it means recommending a smaller system or no solar at all.",
  },
  {
    icon: Shield,
    title: "Quality Over Speed",
    description:
      "We never rush an installation. Every connection, every panel, every wire is done right the first time, every time.",
  },
  {
    icon: Wrench,
    title: "In-House Teams",
    description:
      "No subcontractors. Our own trained and certified technicians handle every installation from start to finish.",
  },
  {
    icon: Target,
    title: "Long-Term Thinking",
    description:
      "We build relationships, not transactions. We're here for the life of your system—25 years and beyond.",
  },
];

const About = () => {
  return (
    <PageLayout>
      <SEO title="About Us" description="Ontario's trusted solar installer since 2009. 1,500+ systems installed with a 4.9-star rating. Meet the Solario team." path="/about" />
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Solario
            </h1>
            <p className="text-muted-foreground">
              Ontario's trusted solar installer since 2009. Helping homeowners and businesses harness the power of the sun.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              Why We Started Solario
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Solario was founded in 2009 with a simple mission: to make solar energy accessible, affordable, and hassle-free for Ontario homeowners and businesses.
              </p>
              <p>
                We saw an industry plagued by pushy salespeople, confusing pricing, and questionable installation quality. We knew there had to be a better way—an honest approach that puts customers first and delivers real value.
              </p>
              <p>
                Today, with over 2,400 installations and 15 years of experience, we've become one of Ontario's most trusted solar companies. Our success comes from our commitment to honesty, quality workmanship, and long-term customer relationships.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-10 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"
                      }`}
                    >
                      <div className="bg-card border border-border rounded-lg p-4 inline-block">
                        <span className="text-primary font-bold">
                          {item.year}
                        </span>
                        <p className="text-foreground text-sm mt-1">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default About;
