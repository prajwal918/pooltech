import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "How We Work" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className={`flex items-center gap-2 text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            <span className="text-accent">Abhishek</span> Swimming Pool
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled 
                      ? 'text-muted-foreground hover:text-foreground' 
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="accent" size="default" className="gap-2 group">
              Get a free quote
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                }`} 
              />
              <span 
                className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} 
              />
              <span 
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`} 
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-border/50 bg-background/95 backdrop-blur-md -mx-4 px-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li 
                  key={link.href}
                  style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `transform 0.3s ease-out ${index * 0.05}s, opacity 0.3s ease-out ${index * 0.05}s`,
                  }}
                >
                  <a
                    href={link.href}
                    className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li 
                className="pt-2"
                style={{
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `transform 0.3s ease-out ${navLinks.length * 0.05}s, opacity 0.3s ease-out ${navLinks.length * 0.05}s`,
                }}
              >
                <Button variant="accent" size="default" className="w-full gap-2 group">
                  Get a free quote
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
