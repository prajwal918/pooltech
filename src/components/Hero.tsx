import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Star, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import useParallax from "@/hooks/useParallax";

const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional roofing team at work"
          className="w-full h-[120%] object-cover transition-transform duration-100"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Hero Info */}
          <div 
            className="text-primary-foreground"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Reliable roofing
              <br />
              <span className="text-accent">solutions</span>
            </h1>

            {/* Rating Badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent/20 border-2 border-primary-foreground/20 flex items-center justify-center"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'scale(1)' : 'scale(0)',
                      transition: `opacity 0.5s ease-out ${0.3 + i * 0.1}s, transform 0.5s ease-out ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: `opacity 0.3s ease-out ${0.5 + i * 0.05}s`,
                      }}
                    />
                  ))}
                  <span className="ml-2 font-bold">5.0</span>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  2K+ User reviews
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
              }}
            >
              <Button variant="hero" size="xl" className="gap-2 group">
                Contact us
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </Button>
              <Button
                variant="outline-light"
                size="xl"
                className="gap-2"
              >
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div
            className="bg-card rounded-2xl p-6 lg:p-8 shadow-strong"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0) translateX(0)' : 'translateY(40px) translateX(20px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
            }}
          >
            <h2 className="text-xl lg:text-2xl font-bold text-card-foreground mb-6">
              Get your free roofing quote today!
            </h2>
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full name"
                  className="h-12 bg-secondary border-0"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="h-12 bg-secondary border-0"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="h-12 bg-secondary border-0"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select className="h-12 px-4 rounded-md bg-secondary text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-ring">
                  <option value="" disabled selected>
                    Type of service
                  </option>
                  <option value="installation">New Installation</option>
                  <option value="repair">Roof Repair</option>
                  <option value="replacement">Roof Replacement</option>
                  <option value="inspection">Inspection</option>
                </select>
                <Input
                  type="text"
                  placeholder="Zip code"
                  className="h-12 bg-secondary border-0"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Address"
                  className="h-12 bg-secondary border-0"
                />
              </div>
              <div>
                <textarea
                  placeholder="Enter your message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button variant="accent" size="xl" className="w-full group">
                <span className="relative z-10">Get our free quote</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
