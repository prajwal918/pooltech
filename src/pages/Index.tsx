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
              <svg width="87" height="19" viewBox="0 0 87 19" fill="currentColor">
                <path d="M0 18.642V18.148L1.95 16.536V2.808L0 1.196V0.701999H5.382V16.536L7.332 18.148V18.642H0ZM12.168 18.642L6.786 10.27L10.14 9.438L15.808 18.304L13.494 15.496L16.744 18.148V18.642H12.168ZM3.588 10.894V9.542H7.176C8.33733 9.542 9.27333 9.19533 9.984 8.502C10.6947 7.80867 11.05 6.89 11.05 5.746C11.05 4.63667 10.6947 3.75267 9.984 3.094C9.29067 2.43533 8.35467 2.106 7.176 2.106H3.38V0.701999H8.06C10.192 0.701999 11.8387 1.12667 13 1.976C14.1787 2.808 14.768 3.98667 14.768 5.512C14.768 7.08933 14.1787 8.32867 13 9.23C11.8213 10.114 10.192 10.556 8.112 10.556H7.956V10.894H3.588Z" fill="currentColor"/>
                <path d="M23.9586 18.98C22.5893 18.98 21.3933 18.7113 20.3706 18.174C19.3479 17.6193 18.5419 16.8567 17.9526 15.886C17.3806 14.898 17.0946 13.7627 17.0946 12.48C17.0946 11.128 17.3979 9.94067 18.0046 8.918C18.6113 7.89533 19.4433 7.08933 20.5006 6.5C21.5753 5.91067 22.7973 5.616 24.1666 5.616C25.5359 5.616 26.7319 5.89333 27.7546 6.448C28.7946 6.98533 29.6006 7.748 30.1726 8.736C30.7446 9.70667 31.0306 10.842 31.0306 12.142C31.0306 13.4767 30.7273 14.664 30.1206 15.704C29.5139 16.7267 28.6819 17.5327 27.6246 18.122C26.5673 18.694 25.3453 18.98 23.9586 18.98ZM24.2706 17.446C24.9466 17.446 25.5359 17.2553 26.0386 16.874C26.5586 16.4753 26.9573 15.9293 27.2346 15.236C27.5293 14.5427 27.6766 13.7367 27.6766 12.818C27.6766 11.6393 27.5206 10.634 27.2086 9.802C26.8966 8.97 26.4546 8.32867 25.8826 7.878C25.3106 7.41 24.6346 7.176 23.8546 7.176C23.1786 7.176 22.5806 7.37533 22.0606 7.774C21.5579 8.15533 21.1593 8.69267 20.8646 9.386C20.5873 10.0793 20.4486 10.8853 20.4486 11.804C20.4486 12.9653 20.6046 13.9707 20.9166 14.82C21.2286 15.652 21.6706 16.302 22.2426 16.77C22.8146 17.2207 23.4906 17.446 24.2706 17.446Z" fill="currentColor"/>
                <path d="M40.1324 18.98C38.7631 18.98 37.5671 18.7113 36.5444 18.174C35.5218 17.6193 34.7158 16.8567 34.1264 15.886C33.5544 14.898 33.2684 13.7627 33.2684 12.48C33.2684 11.128 33.5718 9.94067 34.1784 8.918C34.7851 7.89533 35.6171 7.08933 36.6744 6.5C37.7491 5.91067 38.9711 5.616 40.3404 5.616C41.7098 5.616 42.9058 5.89333 43.9284 6.448C44.9684 6.98533 45.7744 7.748 46.3464 8.736C46.9184 9.70667 47.2044 10.842 47.2044 12.142C47.2044 13.4767 46.9011 14.664 46.2944 15.704C45.6878 16.7267 44.8558 17.5327 43.7984 18.122C42.7411 18.694 41.5191 18.98 40.1324 18.98ZM40.4444 17.446C41.1204 17.446 41.7098 17.2553 42.2124 16.874C42.7324 16.4753 43.1311 15.9293 43.4084 15.236C43.7031 14.5427 43.8504 13.7367 43.8504 12.818C43.8504 11.6393 43.6944 10.634 43.3824 9.802C43.0704 8.97 42.6284 8.32867 42.0564 7.878C41.4844 7.41 40.8084 7.176 40.0284 7.176C39.3524 7.176 38.7544 7.37533 38.2344 7.774C37.7318 8.15533 37.3331 8.69267 37.0384 9.386C36.7611 10.0793 36.6224 10.8853 36.6224 11.804C36.6224 12.9653 36.7784 13.9707 37.0904 14.82C37.4024 15.652 37.8444 16.302 38.4164 16.77C38.9884 17.2207 39.6644 17.446 40.4444 17.446Z" fill="currentColor"/>
                <path d="M48.4961 18.642V18.148L50.4461 16.536V2.808L48.4961 1.196V0.701999H53.8781V16.536L56.5301 18.148V18.642H48.4961ZM59.6241 10.608L52.9421 10.27V9.152L59.6241 8.788V10.608ZM59.7281 12.324L57.4661 10.218V9.178L59.7281 7.072H60.2481V12.324H59.7281ZM61.6001 2.392L53.0461 1.872V0.701999H61.6001V2.392ZM61.7301 4.706L58.4281 1.872V0.701999L61.7821 0.415999H62.1461L62.2501 4.706H61.7301Z" fill="currentColor"/>
                <path d="M63.5552 18.642V18.252L65.7652 16.302L65.3492 17.03V8.58L66.4672 10.374L63.4772 7.852V7.384L67.8452 5.824H68.5212V17.056L68.1312 16.328L70.3152 18.252V18.642H63.5552ZM66.9872 4.056C66.3458 4.056 65.8172 3.86533 65.4012 3.484C65.0025 3.10267 64.8032 2.61733 64.8032 2.028C64.8032 1.42133 65.0025 0.935999 65.4012 0.571999C65.8172 0.190666 66.3458 0 66.9872 0C67.6458 0 68.1745 0.190666 68.5732 0.571999C68.9718 0.953332 69.1712 1.43867 69.1712 2.028C69.1712 2.61733 68.9718 3.10267 68.5732 3.484C68.1745 3.86533 67.6458 4.056 66.9872 4.056Z" fill="currentColor"/>
                <path d="M79.4077 18.642V18.252L81.1757 16.12H81.4877V17.862L72.6217 6.916H74.1297V8.528L71.5037 6.37V5.98H78.4977V6.37L76.7297 8.554H76.4177V6.76L85.3097 17.706H83.8017V16.068L86.4277 18.252V18.642H79.4077ZM70.9837 18.642V18.252L74.1817 15.782V17.628H72.1017L77.4837 11.726L78.0817 12.428L74.9357 18.07V16.328H75.1957L76.8857 18.252V18.642H70.9837ZM79.5117 12.896L79.0437 12.194L82.0597 6.526V8.242H81.7997L80.1357 6.37V5.98H86.0117V6.37L82.8137 8.84V6.994H84.8937L79.5117 12.896Z" fill="currentColor"/>
              </svg>
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
