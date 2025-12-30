import { Star, ArrowUpRight, Phone, Play, MapPin, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Quote, Shield, Award, CheckCircle, ClipboardCheck, FileText, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceReplacement from "@/assets/service-replacement.jpg";
import serviceInspection from "@/assets/service-inspection.jpg";
import teamImage from "@/assets/team.jpg";

const Index = () => {
  return (
    <div>
      {/* ==================== HEADER ==================== */}
      <header className="header">
        <div className="header__container container">
          <nav className="header__nav">
            <button className="header__menu-toggler" aria-label="Toggle menu">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            
            <a href="#" className="header__logo">
              <span>Roof</span>Fix
            </a>
            
            <ul className="header__menu">
              <li><a href="#hero" className="header__menu-link">Home</a></li>
              <li><a href="#about" className="header__menu-link">About</a></li>
              <li><a href="#service" className="header__menu-link">Services</a></li>
              <li><a href="#testimonial" className="header__menu-link">Testimonial</a></li>
              <li><a href="#contact" className="header__menu-link">Locations</a></li>
            </ul>
            
            <a href="#quote" className="btn btn--primary magnetic-button">
              <span>Get a free quote</span>
              <span className="btn__icon">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section id="hero" className="hero">
          <div className="hero__bg">
            <div className="hero__bg-top">
              <picture className="hero__bg-media">
                <img src={heroBg} alt="Repairing roof" loading="eager" />
              </picture>
            </div>
          </div>
          
          <div className="hero__wrapper container">
            <div className="hero__info slide-up">
              <h1 className="hero__title">
                Reliable roofing<br />
                <span className="colored-text">solutions</span>
              </h1>
              
              <div className="hero__info-group">
                <div className="image-box">
                  <div className="avatar-group">
                    <figure className="img-avatar">
                      <Shield size={16} className="text-[var(--clr-primary)]" />
                    </figure>
                    <figure className="img-avatar">
                      <Award size={16} className="text-[var(--clr-primary)]" />
                    </figure>
                    <figure className="img-avatar">
                      <Star size={16} className="text-[var(--clr-primary)]" />
                    </figure>
                  </div>
                  
                  <div className="image-box__content">
                    <div className="rating">
                      <div className="rating__icon">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <span className="font-bold">5.0</span>
                    </div>
                    <div className="text-sm opacity-70">2K+ User reviews</div>
                  </div>
                </div>
                
                <a href="#contact" className="btn btn--secondary btn--outline-light magnetic-button">
                  <span>contact us</span>
                  <span className="btn__icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>
            
            <div className="hero__form slide-up">
              <div className="hero__form-wrapper">
                <p className="hero__form-title">
                  Get your free roofing quote today!
                </p>
                
                <form className="quote-form">
                  <div className="quote-form__row">
                    <div className="quote-form__group">
                      <label htmlFor="full_name">Full name</label>
                      <input type="text" id="full_name" placeholder="Full name" required />
                    </div>
                  </div>
                  
                  <div className="quote-form__row quote-form__row--two">
                    <div className="quote-form__group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" id="email" placeholder="Email address" required />
                    </div>
                    <div className="quote-form__group">
                      <label htmlFor="phone">Phone number</label>
                      <input type="tel" id="phone" placeholder="Phone number" required />
                    </div>
                  </div>
                  
                  <div className="quote-form__row quote-form__row--two">
                    <div className="quote-form__group">
                      <label htmlFor="service">Type of service</label>
                      <select id="service" required defaultValue="">
                        <option value="" disabled>Type of service</option>
                        <option value="installation">New roof installation</option>
                        <option value="repair">Roof repair</option>
                        <option value="replacement">Roof replacement</option>
                        <option value="inspection">Roof inspection</option>
                      </select>
                    </div>
                    <div className="quote-form__group">
                      <label htmlFor="zip_code">Zip code</label>
                      <input type="text" id="zip_code" placeholder="Zip code" required />
                    </div>
                  </div>
                  
                  <div className="quote-form__row">
                    <div className="quote-form__group">
                      <label htmlFor="address">Address</label>
                      <input type="text" id="address" placeholder="Address" required />
                    </div>
                  </div>
                  
                  <div className="quote-form__row">
                    <div className="quote-form__group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" placeholder="Enter your message" className="quote-form__textarea" />
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn--primary">
                    Get our free quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PARTNER SECTION ==================== */}
        <section className="partner">
          <div className="partner__wrapper container">
            <div className="partner__list">
              <div className="flex items-center gap-2 text-[var(--clr-gray-600)]">
                <Shield size={32} className="text-[var(--clr-primary)]" />
                <span className="font-medium text-sm">Licensed & Insured</span>
              </div>
              <div className="divider"></div>
              <div className="flex items-center gap-2 text-[var(--clr-gray-600)]">
                <Award size={32} className="text-[var(--clr-primary)]" />
                <span className="font-medium text-sm">BBB Accredited</span>
              </div>
              <div className="divider"></div>
              <div className="flex items-center gap-2 text-[var(--clr-gray-600)]">
                <Star size={32} className="text-[var(--clr-primary)]" fill="currentColor" />
                <span className="font-medium text-sm">5-Star Rated</span>
              </div>
              <div className="divider"></div>
              <div className="flex items-center gap-2 text-[var(--clr-gray-600)]">
                <CheckCircle size={32} className="text-[var(--clr-primary)]" />
                <span className="font-medium text-sm">Most Trusted</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section id="about" className="about">
          <div className="about__wrapper container">
            <div className="about__info">
              <div className="about__info-intro slide-up">
                <div className="badge">about us</div>
                <h2 className="about__heading">
                  Your <span className="colored-text">trusted</span> roofing company
                </h2>
                <button className="about__video-btn">
                  <span className="icon">
                    <Play size={16} fill="currentColor" />
                  </span>
                  <span>Watch</span>
                </button>
              </div>
              
              <div className="about__info-detail slide-up">
                <p className="about__description">
                  RoofFix has built a strong reputation for providing exceptional roofing services, handling everything from minor fixes to complex residential projects with care and expertise.
                </p>
                
                <div className="about__btn-group">
                  <a href="#" className="btn btn--primary magnetic-button">
                    <span>more about us</span>
                    <span className="btn__icon">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>
                  <a href="#contact" className="flex items-center gap-2 text-[var(--clr-dark)] font-medium hover:text-[var(--clr-primary)] transition-colors">
                    <span>Request a callback</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="about__stats slide-up">
              <div className="stats__item">
                <div className="stats__item-number">
                  20<span className="stats__item-suffix">+</span>
                </div>
                <div className="stats__item-label">Years of experience</div>
              </div>
              <div className="stats__item">
                <div className="stats__item-number">
                  99<span className="stats__item-suffix">%</span>
                </div>
                <div className="stats__item-label">Client satisfaction</div>
              </div>
              <div className="stats__item">
                <div className="stats__item-number">
                  3K<span className="stats__item-suffix">+</span>
                </div>
                <div className="stats__item-label">Projects completed</div>
              </div>
              <div className="stats__item">
                <div className="stats__item-number">
                  24<span className="stats__item-suffix">/7</span>
                </div>
                <div className="stats__item-label">Emergency service</div>
              </div>
            </div>
            
            <div className="about__media slide-up">
              <img src={teamImage} alt="Team of RoofFix" />
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section id="service" className="service">
          <div className="service__wrapper container">
            <div className="service__intro slide-up">
              <div className="badge">services</div>
              <h2 className="service__heading">
                Your <span className="colored-text">roofing</span> needs fully covered
              </h2>
            </div>
            
            <div className="service__list">
              {[
                { img: serviceInstallation, title: "Roof installation", desc: "Reliable installation of modern, long-lasting roofing systems designed for strength, efficiency, and curb appeal." },
                { img: serviceRepair, title: "Roof repair", desc: "Fast and dependable repair services for leaks, cracked shingles, and storm damage to keep your home protected." },
                { img: serviceReplacement, title: "Roof replacement", desc: "Complete roof replacement with durable materials, improving safety, energy efficiency, and property value." },
                { img: serviceInspection, title: "Roof inspection & maintenance", desc: "Thorough roof checkups and preventative maintenance to spot issues early and extend the life of your roof." }
              ].map((service, index) => (
                <article key={index} className="service-item slide-up">
                  <div className="service-item__image-wrapper">
                    <img src={service.img} alt={service.title} loading="lazy" />
                  </div>
                  <div className="service-item__content">
                    <div className="service-item__header">
                      <h3 className="service-item__title">{service.title}</h3>
                      <span className="service-item__icon">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                    <p className="service-item__description">{service.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROCESS SECTION ==================== */}
        <section id="process" className="process">
          <div className="process__wrapper container">
            <div className="process__intro slide-up">
              <div className="process__intro-header">
                <div className="badge">how we work</div>
                <h2 className="process__heading">
                  Our <span className="colored-text">proven</span> roofing process
                </h2>
              </div>
              <div className="process__intro-description">
                <p className="process__description">
                  Our 4-step process keeps roofing simple, with quality work and clear communication at every step, from start to finish.
                </p>
                <a href="#quote" className="btn btn--primary magnetic-button">
                  <span>get a free quote</span>
                  <span className="btn__icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>
            
            <div className="process__list slide-up">
              {[
                { icon: ClipboardCheck, title: "Free consultation", desc: "Thorough inspection and no obligation estimate", index: "01" },
                { icon: FileText, title: "Detailed plan", desc: "Comprehensive plans with materials timeline and specs", index: "02" },
                { icon: Wrench, title: "Expert installation", desc: "Precision execution with safety and quality standards", index: "03" },
                { icon: CheckCircle, title: "Final inspection", desc: "Thorough inspection and complete cleanup", index: "04" }
              ].map((step, i) => (
                <div key={i} className="process__item">
                  <div className="process__item-media" style={{ background: 'var(--clr-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <step.icon size={32} className="text-[var(--clr-primary)]" />
                  </div>
                  <div className="process__item-content">
                    <h3 className="process__item-title">{step.title}</h3>
                    <p className="process__item-description">{step.desc}</p>
                    <span className="process__item-index">{step.index}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS SECTION ==================== */}
        <section id="testimonial" className="testimonial">
          <div className="testimonial__wrapper container">
            <div className="testimonial__intro slide-up">
              <div className="badge">Testimonials</div>
              <h2 className="testimonial__heading">
                What our <span className="colored-text">customers</span> say
              </h2>
            </div>
            
            <div className="testimonial__list">
              {[
                { name: "Sarah Johnson", location: "Downtown", text: "RoofFix exceeded our expectations! They replaced our entire roof in just two days with minimal disruption. The team was professional, clean, and the quality is outstanding." },
                { name: "Michael Chen", location: "Riverside", text: "After storm damage, I needed urgent repairs. RoofFix responded same-day and had everything fixed within hours. Their emergency service is truly 24/7. Highly recommend!" },
                { name: "Emily Rodriguez", location: "Oakwood", text: "The inspection service helped us catch issues before they became major problems. Their detailed report and fair pricing made the maintenance process simple and stress-free." }
              ].map((testimonial, i) => (
                <article key={i} className="testimonial__item slide-up">
                  <Quote className="testimonial__quote" />
                  <div className="testimonial__rating">
                    {[1,2,3,4,5].map(j => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial__text">"{testimonial.text}"</p>
                  <div className="testimonial__author">
                    <div className="testimonial__author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testimonial__author-name">{testimonial.name}</p>
                      <p className="testimonial__author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="cta">
          <div className="cta__wrapper container">
            <h2 className="cta__heading">Ready to protect your home with a reliable roof?</h2>
            <p className="cta__description">
              Get your free, no-obligation quote today and discover why thousands of homeowners trust RoofFix.
            </p>
            <div className="cta__buttons">
              <a href="#quote" className="btn btn--primary">
                <span>Get a free quote</span>
                <span className="btn__icon">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <a href="tel:+15551234567" className="btn btn--outline-light">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer" id="contact">
        <div className="footer__main container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#" className="footer__brand-logo">
                <span>Roof</span>Fix
              </a>
              <p className="footer__brand-description">
                Professional roofing solutions with over 20 years of experience. Quality craftsmanship you can trust.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                <li><a href="#hero" className="footer__link">Home</a></li>
                <li><a href="#about" className="footer__link">About Us</a></li>
                <li><a href="#service" className="footer__link">Services</a></li>
                <li><a href="#testimonial" className="footer__link">Testimonials</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer__heading">Our Services</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Roof Installation</a></li>
                <li><a href="#" className="footer__link">Roof Repair</a></li>
                <li><a href="#" className="footer__link">Roof Replacement</a></li>
                <li><a href="#" className="footer__link">Roof Inspection</a></li>
                <li><a href="#" className="footer__link">Emergency Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="footer__heading">Contact Us</h4>
              <div className="footer__contact-item">
                <MapPin />
                <span>123 Roofing Lane, Suite 100<br />City, State 12345</span>
              </div>
              <div className="footer__contact-item">
                <Phone />
                <a href="tel:+15551234567" className="footer__link">(555) 123-4567</a>
              </div>
              <div className="footer__contact-item">
                <Mail />
                <a href="mailto:info@rooffix.com" className="footer__link">info@rooffix.com</a>
              </div>
              <div className="footer__contact-item">
                <Clock />
                <span>Mon - Fri: 7AM - 7PM<br />Sat: 8AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__bottom-content container">
            <p className="footer__copyright">© {new Date().getFullYear()} RoofFix. All rights reserved.</p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Privacy Policy</a>
              <a href="#" className="footer__legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
