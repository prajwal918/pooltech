import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Massive Background Brand Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-primary-foreground/[0.03] whitespace-nowrap select-none">
          RoofFix
        </span>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="space-y-4">
              <a href="#" className="inline-block text-2xl font-bold">
                <span className="text-accent">Roof</span>Fix
              </a>
              <p className="text-primary-foreground/70 leading-relaxed">
                Professional roofing solutions with over 20 years of experience.
                Quality craftsmanship you can trust.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Projects", "Testimonials", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Roof Installation",
                  "Roof Repair",
                  "Roof Replacement",
                  "Roof Inspection",
                  "Emergency Services",
                  "Commercial Roofing",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/70">
                    123 Roofing Lane, Suite 100
                    <br />
                    City, State 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="mailto:info@rooffix.com"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    info@rooffix.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/70">
                    Mon - Fri: 7AM - 7PM
                    <br />
                    Sat: 8AM - 5PM
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} RoofFix. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
