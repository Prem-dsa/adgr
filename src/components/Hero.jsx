import './Hero.css';
import heroBanner from '../assets/website-banner-1-scaled.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__wrapper container">
                <div className="hero__card">
                    {/* Background Image + Overlay */}
                    <div className="hero__bg">
                        <img
                            src={heroBanner}
                            alt="Premium skin and hair treatment at Advanced GroHair & GloSkin"
                            className="hero__bg-image"
                        />
                        <div className="hero__bg-overlay"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="hero__inner">
                        <div className="hero__content">
                            <div className="hero__eyebrow">
                                <span>Nagercoil's Premier Aesthetic Destination</span>
                            </div>

                            <h1 className="hero__title">
                                Welcome to Advanced<br />
                                GroHair & <span className="hero__title-accent">GloSkin</span>
                            </h1>

                            <p className="hero__subtitle">
                                A complete aesthetic care destination offering advanced solutions
                                in dermatology and hair restoration. Personalized, affordable
                                treatments with expert care.
                            </p>

                            <p className="hero__tagline">
                                Rediscover your confidence, one glow and one strand at a time.
                            </p>

                            <div className="hero__cta-group">
                                <a href="#contact" className="hero__btn-primary">
                                    Begin Your Transformation
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a href="#services" className="hero__btn-ghost">
                                    Explore Treatments
                                </a>
                            </div>
                        </div>

                        {/* Right Side — Floating Info Cards */}
                        <div className="hero__aside">
                            <div className="hero__info-card">
                                <div className="hero__info-icon">✨</div>
                                <div>
                                    <span className="hero__info-title">Premium Care</span>
                                    <span className="hero__info-text">Personalized treatments</span>
                                </div>
                            </div>

                            <div className="hero__info-card">
                                <div className="hero__info-icon">🏆</div>
                                <div>
                                    <span className="hero__info-title">Award Winning</span>
                                    <span className="hero__info-text">Trusted by 3,000+ clients</span>
                                </div>
                            </div>

                            <div className="hero__info-card">
                                <div className="hero__info-icon">🩺</div>
                                <div>
                                    <span className="hero__info-title">Expert Doctors</span>
                                    <span className="hero__info-text">Certified dermatologists</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Credentials Bar */}
                    <div className="hero__credentials">
                        <div className="hero__credential">
                            <span className="hero__credential-check">✓</span>
                            <span>Certified Dermatologists & Trichologists</span>
                        </div>
                        <div className="hero__credential">
                            <span className="hero__credential-check">✓</span>
                            <span>FDA-Approved Equipment</span>
                        </div>
                        <div className="hero__credential">
                            <span className="hero__credential-check">✓</span>
                            <span>6,000+ Successful Treatments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
