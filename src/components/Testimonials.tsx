import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "City, State",
    rating: 5,
    text: "PoolTech exceeded our expectations! They built our dream pool in just three weeks with minimal disruption. The team was professional and the quality is outstanding.",
  },
  {
    name: "Priya Shetty",
    location: "City, State",
    rating: 5,
    text: "Best swimming pool contractors! Their maintenance service is top-notch. They respond promptly and keep our pool crystal clear all year round.",
  },
  {
    name: "Mohammed Ashraf",
    location: "City, State",
    rating: 4,
    text: "The remodeling work they did on our old pool was fantastic. Fair pricing, excellent craftsmanship, and great customer service. Highly recommend their services!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              What our <span className="text-accent">customers</span> say
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <article className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/50 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary-foreground/60">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
