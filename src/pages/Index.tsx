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
            
            <a href="#" className="header__logo" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>
              PoolTech
            </a>
            
            <ul className="header__menu">
              <li className="header__menu-item"><a href="#hero">Home</a></li>
              <li className="header__menu-item"><a href="#about">About</a></li>
              <li className="header__menu-item"><a href="#service">Services</a></li>
              <li className="header__menu-item"><a href="#testimonial">Testimonial</a></li>
              <li className="header__menu-item"><a href="#footer">Locations</a></li>
            </ul>
            
            <a id="header__cta-mobile" href="#quote" className="header__cta">Get a quote</a>
            
            <a id="header__cta-desktop" href="#quote" className="btn btn--primary magnetic-button">
              <span className="btn__text">Get a free quote</span>
              <span className="btn__icon">
                <ArrowUpRight size={24} />
              </span>
              <span className="btn__bg"></span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section id="hero" className="hero">
          <div className="hero__bg">
            <div className="hero__bg-top">
              <img src={heroBg} alt="Swimming pool installation" loading="eager" />
            </div>
          </div>
          
          <div className="hero__wrapper container">
            <div className="hero__info slide-up">
              <h1 className="hero__title">
                Premium pool<br />
                <span className="colored-text">solutions</span>
              </h1>
              
              <div className="hero__info-group">
                <div className="image-box">
                  <div className="avatar-group">
                    <figure className="img-avatar">
                      <Shield size={20} style={{ color: '#ff6525' }} />
                    </figure>
                    <figure className="img-avatar">
                      <Award size={20} style={{ color: '#ff6525' }} />
                    </figure>
                    <figure className="img-avatar">
                      <Star size={20} style={{ color: '#ff6525' }} />
                    </figure>
                  </div>
                  
                  <div className="image-box__content">
                    <div className="rating">
                      <div className="rating__icon">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={18} />
                        ))}
                      </div>
                      <span>5.0</span>
                    </div>
                    <div className="description">2K+ User reviews</div>
                  </div>
                </div>
                
                <a href="#contact" className="btn btn--secondary magnetic-button">
                  <span className="btn__text">contact us</span>
                  <span className="btn__icon">
                    <ArrowUpRight size={24} />
                  </span>
                  <span className="btn__bg"></span>
                </a>
              </div>
            </div>
            
            <div className="hero__form slide-up" id="quote">
              <div className="hero__form-wrapper">
                <p className="hero__form-title">
                  Get your free pool quote today!
                </p>
                
                <form className="quote-form">
                  <div className="quote-form__row">
                    <div className="quote-form__group">
                      <label htmlFor="full_name">Full name</label>
                      <input type="text" id="full_name" placeholder="Full name" required />
                    </div>
                  </div>
                  
                  <div className="quote-form__row">
                    <div className="quote-form__group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" id="email" placeholder="Email address" required />
                    </div>
                    <div className="quote-form__group">
                      <label htmlFor="phone">Phone number</label>
                      <input type="tel" id="phone" placeholder="Phone number" required />
                    </div>
                  </div>
                  
                  <div className="quote-form__row">
                    <div className="quote-form__group">
                      <label htmlFor="service">Type of service</label>
                      <select id="service" required defaultValue="">
                        <option value="" disabled>Type of service</option>
                        <option value="installation">New pool installation</option>
                        <option value="repair">Pool repair</option>
                        <option value="maintenance">Pool maintenance</option>
                        <option value="renovation">Pool renovation</option>
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
                      <textarea id="message" placeholder="Enter your message" />
                    </div>
                  </div>
                  
                  <button type="submit">Get our free quote</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PARTNER SECTION ==================== */}
        <section className="partner">
          <div className="partner__wrapper container">
            <div className="partner__list">
              <div className="partner__item">
                <Shield size={32} style={{ color: '#ff6525' }} />
                <span>Licensed & Insured</span>
              </div>
              <div className="partner__item">
                <Award size={32} style={{ color: '#ff6525' }} />
                <span>BBB Accredited</span>
              </div>
              <div className="partner__item">
                <Star size={32} fill="#ff6525" style={{ color: '#ff6525' }} />
                <span>5-Star Rated</span>
              </div>
              <div className="partner__item">
                <CheckCircle size={32} style={{ color: '#ff6525' }} />
                <span>Most Trusted</span>
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
                  Your <span className="colored-text">trusted</span> pool company
                </h2>
                <button className="about__video-btn">
                  <span className="icon">
                    <Play size={16} fill="currentColor" />
                  </span>
                  <span className="text">Watch</span>
                </button>
              </div>
              
              <div className="about__info-detail slide-up">
                <p className="about__description">
                  PoolTech in Murva, Mangalore has built a strong reputation for providing exceptional pool services, handling everything from new installations to complex maintenance projects with care and expertise.
                </p>
                
                <div className="about__btn-group">
                  <button className="about__video-btn">
                    <span className="icon">
                      <Play size={16} fill="currentColor" />
                    </span>
                    <span className="text">Watch</span>
                  </button>
                  
                  <a href="#" className="btn btn--primary magnetic-button">
                    <span className="btn__text">more about us</span>
                    <span className="btn__icon">
                      <ArrowUpRight size={24} />
                    </span>
                    <span className="btn__bg"></span>
                  </a>
                  
                  <a href="#contact" className="callback-btn">
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
              <img src={teamImage} alt="Team of PoolTech" />
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section id="service" className="service">
          <div className="service__wrapper container">
            <div className="service__intro slide-up">
              <div className="badge">services</div>
              <h2 className="service__heading">
                Your <span className="colored-text">pool</span> needs fully covered
              </h2>
            </div>
            
            <div className="service__tile-list">
              {[
                { img: serviceInstallation, title: "Pool installation", desc: "Custom pool construction with premium materials designed for durability, aesthetics, and your lifestyle needs." },
                { img: serviceRepair, title: "Pool repair", desc: "Fast and dependable repair services for leaks, cracks, and equipment issues to keep your pool in perfect condition." },
                { img: serviceReplacement, title: "Pool renovation", desc: "Complete pool renovation with modern finishes, improving safety, efficiency, and property value." },
                { img: serviceInspection, title: "Pool maintenance", desc: "Regular pool checkups and preventative maintenance to ensure crystal clear water and extend pool life." }
              ].map((service, index) => (
                <div key={index}>
                  <article className="service-item slide-up">
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
                      <span className="service-item__icon">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </article>
                  {index < 3 && <div className="divider"></div>}
                </div>
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
                  Our <span className="colored-text">proven</span> pool building process
                </h2>
              </div>
              <div className="process__intro-description">
                <p className="process__description">
                  Our 4-step process keeps pool construction simple, with quality work and clear communication at every step, from start to finish.
                </p>
                <a href="#quote" className="btn btn--primary magnetic-button">
                  <span className="btn__text">get a free quote</span>
                  <span className="btn__icon">
                    <ArrowUpRight size={24} />
                  </span>
                  <span className="btn__bg"></span>
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
                  <div className="process__item-media">
                    <step.icon size={40} style={{ color: '#ff6525' }} />
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
                { name: "Rajesh Kumar", location: "Mangalore", text: "PoolTech exceeded our expectations! They built our dream pool in just a few weeks with minimal disruption. The team was professional, clean, and the quality is outstanding." },
                { name: "Priya Shetty", location: "Murva", text: "After years of wanting a pool, PoolTech made it happen. Their design team understood exactly what we wanted. The pool has become the centerpiece of our home!" },
                { name: "Mohammed Ashraf", location: "Mangalore", text: "The maintenance service keeps our pool crystal clear year-round. Their detailed care and fair pricing made pool ownership simple and stress-free." }
              ].map((testimonial, i) => (
                <article key={i} className="testimonial-item slide-up">
                  <Quote className="testimonial-item__quote" />
                  <div className="testimonial-item__rating">
                    {[1,2,3,4,5].map(j => (
                      <Star key={j} size={16} />
                    ))}
                  </div>
                  <p className="testimonial-item__text">"{testimonial.text}"</p>
                  <div className="testimonial-item__author">
                    <div className="testimonial-item__author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testimonial-item__author-name">{testimonial.name}</p>
                      <p className="testimonial-item__author-location">{testimonial.location}</p>
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
            <h2 className="cta__heading">Ready to build your dream pool?</h2>
            <p className="cta__description">
              Get your free, no-obligation quote today and discover why customers in Mangalore trust PoolTech.
            </p>
            <div className="cta__buttons">
              <a href="#quote" className="btn btn--cta-primary" style={{ background: '#fff', color: '#ff6525', padding: '16px 24px', borderRadius: '50px', fontWeight: 600 }}>
                <span>Get a free quote</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="tel:+15551234567" className="btn btn--cta-secondary" style={{ background: 'transparent', color: '#fff', padding: '16px 24px', borderRadius: '50px', border: '2px solid rgba(255,255,255,0.3)', fontWeight: 600 }}>
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer" id="footer">
        <div className="footer__wrapper container">
          <div className="footer-cta">
            <div className="footer-cta__heading-wrapper">
              <h2 className="footer-cta__heading">Ready to get started?</h2>
            </div>
            <div className="footer-cta__content">
              <p>Contact us today for a free consultation and quote. We're here to help with all your pool needs.</p>
              <a href="#quote" className="btn btn--secondary magnetic-button">
                <span className="btn__text">Get a quote</span>
                <span className="btn__icon">
                  <ArrowUpRight size={24} />
                </span>
                <span className="btn__bg"></span>
              </a>
            </div>
          </div>
          
          <div className="footer__logo">PoolTech</div>
          
          <div className="footer-main">
            <div className="footer-main__introduction">
              <p>Professional pool solutions in Murva, Mangalore. Quality craftsmanship you can trust.</p>
              <ul className="footer__social">
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="#" className="footer__social-link" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-main__nav">
              <h4 className="footer-main__nav-title">Quick Links</h4>
              <ul className="footer-main__nav-list">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
                <li><a href="#footer">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-main__nav">
              <h4 className="footer-main__nav-title">Our Services</h4>
              <ul className="footer-main__nav-list">
                <li><a href="#">Pool Installation</a></li>
                <li><a href="#">Pool Repair</a></li>
                <li><a href="#">Pool Renovation</a></li>
                <li><a href="#">Pool Maintenance</a></li>
                <li><a href="#">Aquatic Solutions</a></li>
              </ul>
            </div>
            
            <div className="footer-main__contact">
              <h4 className="footer-main__contact-title">Contact Us</h4>
              <ul className="footer-main__contact-list">
                <li>
                  <a href="#">
                    <MapPin size={18} className="footer-main__contact-icon" />
                    <span>24 Abd, Old Airport Road, Murva, Mangalore</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+915551234567">
                    <Phone size={18} className="footer-main__contact-icon" />
                    <span>+91 555-123-4567</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@pooltech.com">
                    <Mail size={18} className="footer-main__contact-icon" />
                    <span>info@pooltech.com</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Clock size={18} className="footer-main__contact-icon" />
                    <span>Mon - Sun: 7:30 AM - 1:30 PM</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="footer-copyright">© {new Date().getFullYear()} PoolTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
