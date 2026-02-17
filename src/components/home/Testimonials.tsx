import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Toronto, ON",
    savings: "$70,000/25yr",
    systemSize: "10.5 kW",
    review: "Solario made the entire process seamless. From the initial consultation to the final installation, everything was handled professionally. Our electricity bill dropped by 75% immediately!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    location: "Mississauga, ON",
    savings: "$85,000/25yr",
    systemSize: "12.2 kW",
    review: "Best decision we ever made for our home. The team was knowledgeable, the installation was quick, and the savings are real. Highly recommend Solario to everyone.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    location: "Brampton, ON",
    savings: "$52,500/25yr",
    systemSize: "8.8 kW",
    review: "I was skeptical at first, but Solario's transparent pricing and excellent customer service won me over. Now I'm generating my own power and saving thousands.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    location: "Oakville, ON",
    savings: "$105,000/25yr",
    systemSize: "15.0 kW",
    review: "The 25-year warranty gave us peace of mind. The installation crew was professional and completed everything in just one day. Amazing experience!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-navy-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Customers. Real Savings.
          </h2>
          <p className="text-muted-foreground">
            See what our customers have to say about their solar experience with Solario.
          </p>
        </div>

        {/* Testimonial Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/90 mb-6 leading-relaxed text-sm">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary text-sm">{testimonial.savings}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.systemSize} system</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;