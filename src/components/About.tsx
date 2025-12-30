import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const stats = [
  { value: "20", suffix: "+", label: "Years of experience" },
  { value: "99", suffix: "%", label: "Client satisfaction" },
  { value: "3K", suffix: "+", label: "Projects completed" },
  { value: "24", suffix: "/7", label: "Emergency service" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Intro */}
            <div className="space-y-4">
              <span className="badge-primary">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your <span className="text-accent">trusted</span> roofing
                company
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                RoofFix has built a strong reputation for providing
                exceptional roofing services, handling everything from minor
                fixes to complex residential projects with care and expertise.
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

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 lg:p-8 shadow-soft hover-lift"
              >
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-strong">
          <img
            src={teamImage}
            alt="RoofFix professional team"
            className="w-full h-64 lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
