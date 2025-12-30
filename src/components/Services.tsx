import { ArrowUpRight } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceReplacement from "@/assets/service-replacement.jpg";
import serviceInspection from "@/assets/service-inspection.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    image: serviceInstallation,
    title: "Pool Installation",
    description:
      "Reliable installation of modern, long-lasting pool systems designed for durability, efficiency, and stunning aesthetics.",
  },
  {
    image: serviceRepair,
    title: "Pool Repair",
    description:
      "Fast and dependable repair services for leaks, cracks, and equipment issues to keep your pool in perfect condition.",
  },
  {
    image: serviceReplacement,
    title: "Pool Renovation",
    description:
      "Complete pool renovation with premium materials, improving safety, energy efficiency, and property value.",
  },
  {
    image: serviceInspection,
    title: "Pool Maintenance & Cleaning",
    description:
      "Thorough pool checkups and regular maintenance to spot issues early and keep your pool crystal clear.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="badge-primary mb-4 inline-block">Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Your <span className="text-accent">pool</span> needs fully
              covered
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong hover:bg-accent transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3 lg:w-1/4 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                          {service.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-accent-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-accent-foreground/80 leading-relaxed max-w-xl transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground group-hover:bg-accent-foreground group-hover:text-accent transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
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

export default Services;
