import './Hero.css';
import heroBanner from '../assets/website-banner-1-scaled.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__bg-gradient"></div>
                <div className="hero__bg-pattern"></div>
                <div className="hero__bg-glow"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__eyebrow animate-fade-in-up">
                        <span className="hero__eyebrow-line"></span>
                        <span>Nagercoil's Premier Aesthetic Destination</span>
                        <span className="hero__eyebrow-line"></span>
                    </div>

                    <h1 className="hero__title animate-fade-in-up stagger-1">
                        <span className="hero__title-line">Welcome to Advanced</span>
                        <span className="hero__title-line">GroHair & <em className="hero__title-accent">GloSkin</em></span>
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up stagger-2">
                        AdGloSkin & AdGroHair Nagercoil is a complete aesthetic care destination offering
                        advanced solutions in dermatology and hair restoration. We provide personalized,
                        affordable treatments with a strong ethical foundation, helping clients regain
                        confidence through expert care.
                    </p>

                    <p className="hero__tagline animate-fade-in-up stagger-2">
                        <em>Rediscover your confidence, one glow and one strand at a time.</em>
                    </p>

                    <div className="hero__cta-group animate-fade-in-up stagger-3">
                        <a href="#contact" className="btn btn-primary btn-lg hero__cta">
                            Begin Your Transformation
                        </a>
                        <a href="#services" className="btn btn-ghost hero__cta-secondary">
                            <span>Explore Treatments</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="hero__credentials animate-fade-in-up stagger-4">
                        <div className="hero__credential">
                            <span className="hero__credential-icon">✓</span>
                            <span>Certified Dermatologists & Trichologists</span>
                        </div>
                        <div className="hero__credential">
                            <span className="hero__credential-icon">✓</span>
                            <span>FDA-Approved Equipment</span>
                        </div>
                        <div className="hero__credential">
                            <span className="hero__credential-icon">✓</span>
                            <span>6,000+ Successful Treatments</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual animate-fade-in stagger-2">
                    <div className="hero__image-container">
                        <div className="hero__image-frame">
                            <img
                                src={heroBanner}
                                alt="Premium skin treatment at Advanced GroHair & GloSkin"
                                className="hero__image"
                            />
                            <div className="hero__image-overlay"></div>
                        </div>

                        <div className="hero__float-card hero__float-card--top animate-float">
                            <div className="hero__float-card-icon">✨</div>
                            <div className="hero__float-card-content">
                                <span className="hero__float-card-title">Premium Care</span>
                                <span className="hero__float-card-text">Personalized treatments</span>
                            </div>
                        </div>

                        <div className="hero__float-card hero__float-card--bottom animate-float" style={{ animationDelay: '2s' }}>
                            <div className="hero__float-card-icon">🏆</div>
                            <div className="hero__float-card-content">
                                <span className="hero__float-card-title">Award Winning</span>
                                <span className="hero__float-card-text">Trusted by 3,000+ clients</span>
                            </div>
                        </div>

                        <div className="hero__accent-circle"></div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll">
                <span className="hero__scroll-text">Scroll to explore</span>
                <div className="hero__scroll-line">
                    <div className="hero__scroll-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
