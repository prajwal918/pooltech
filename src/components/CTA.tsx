import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTA = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <ScrollReveal animation="zoom-in">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
              Ready to build your dream pool?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Get your free, no-obligation quote today and discover why customers in Mangalore trust PoolTech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
              >
                Get a free quote
                <ArrowUpRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-accent-foreground/30 text-accent-foreground bg-transparent hover:bg-accent-foreground/10 gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
