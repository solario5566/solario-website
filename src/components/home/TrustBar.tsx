import { Shield, Award, Leaf, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Full system coverage",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "ESA approved installers",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "2-3 Weeks our average install",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-navy-dark py-10 md:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
