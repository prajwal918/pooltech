import { Button } from "@/components/ui/button";
import { ArrowUpRight, ClipboardCheck, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    index: "01",
    title: "Free Consultation",
    description: "Thorough inspection and no obligation estimate",
  },
  {
    icon: FileText,
    index: "02",
    title: "Detailed Plan",
    description: "Comprehensive plans with materials timeline and specs",
  },
  {
    icon: Wrench,
    index: "03",
    title: "Expert Installation",
    description: "Precision execution with safety and quality standards",
  },
  {
    icon: CheckCircle,
    index: "04",
    title: "Final Inspection",
    description: "Thorough inspection and complete cleanup",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="space-y-4 max-w-xl">
            <span className="badge-primary">How We Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="text-accent">proven</span> roofing process
            </h2>
          </div>
          <div className="space-y-4 max-w-md">
            <p className="text-muted-foreground">
              Our 4-step process keeps roofing simple, with quality work and
              clear communication at every step, from start to finish.
            </p>
            <Button variant="accent" className="gap-2">
              Get a free quote
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <step.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Step Index */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-muted/50 select-none">
                {step.index}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
