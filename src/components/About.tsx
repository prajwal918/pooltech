import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import CountUpNumber from "@/components/CountUpNumber";

const stats = [
  { value: 2, suffix: "+", label: "Years in Business" },
  { value: 100, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: " Days", label: "Open Weekly" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <ScrollReveal animation="fade-right">
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <span className="badge-primary">About Us</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Your <span className="text-accent">trusted</span> swimming pool
                  contractor
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Established in 2023, Abhishek Swimming Pool in Murva, Mangalore is a top player in the category of Swimming Pool Contractors. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mangalore.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We have a wide range of products and services to cater to the varied requirements of our customers. The staff at this establishment are courteous and prompt at providing any assistance. Located at Old Airport Road, it is easy to locate and accessible by various modes of transport.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="gap-2 text-foreground hover:text-accent"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Play className="w-5 h-5 text-accent fill-accent" />
                    </div>
                    Watch Video
                  </Button>
                  <Button variant="accent" size="lg" className="gap-2">
                    More about us
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-xl p-6 lg:p-8 shadow-soft hover-lift h-full">
                  <CountUpNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground"
                    suffixClassName="text-accent"
                  />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Team Image */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-strong">
            <img
              src={teamImage}
              alt="Abhishek Swimming Pool professional team in Mangalore"
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
