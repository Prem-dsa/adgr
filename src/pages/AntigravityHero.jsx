import { useState, useEffect } from 'react';
import './AntigravityHero.css';

const AntigravityHero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generated = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 8,
            opacity: Math.random() * 0.4 + 0.1,
        }));
        setParticles(generated);
    }, []);

    return (
        <div className="ag-page">
            {/* Floating Particles */}
            <div className="ag-particles" aria-hidden="true">
                {particles.map(p => (
                    <span
                        key={p.id}
                        className="ag-particle"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            opacity: p.opacity,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="ag-nav">
                <div className="ag-nav__inner">
                    <a href="/" className="ag-nav__logo">
                        <span className="ag-nav__logo-icon">◈</span>
                        Antigravity
                    </a>

                    <div className={`ag-nav__links ${menuOpen ? 'ag-nav__links--open' : ''}`}>
                        <a href="#" className="ag-nav__link">Products</a>
                        <a href="#" className="ag-nav__link">Solutions</a>
                        <a href="#" className="ag-nav__link">Pricing</a>
                        <a href="#" className="ag-nav__link">Resources</a>
                    </div>

                    <a href="#" className="ag-nav__cta">
                        Get Started
                        <span className="ag-nav__cta-glow" aria-hidden="true"></span>
                    </a>

                    <button
                        className={`ag-nav__burger ${menuOpen ? 'ag-nav__burger--active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Hero Container */}
            <main className="ag-hero">
                <div className="ag-hero__container">

                    {/* Glowing Arc */}
                    <div className="ag-hero__arc-wrapper" aria-hidden="true">
                        <div className="ag-hero__arc"></div>
                        <div className="ag-hero__arc-bloom"></div>
                        <div className="ag-hero__arc-plasma"></div>
                    </div>

                    {/* Depth Lighting */}
                    <div className="ag-hero__light ag-hero__light--1" aria-hidden="true"></div>
                    <div className="ag-hero__light ag-hero__light--2" aria-hidden="true"></div>

                    {/* Content */}
                    <div className="ag-hero__content">
                        <div className="ag-hero__badge">
                            <span className="ag-hero__badge-dot"></span>
                            Powered by AI · Trusted by 50K+ Investors
                        </div>

                        <h1 className="ag-hero__title">
                            Invest With Confidence,
                            <br />
                            <span className="ag-hero__title-highlight">Grow Wealth</span> With Clarity
                        </h1>

                        <p className="ag-hero__subtitle">
                            The next-generation wealth platform that combines intelligent analytics,
                            real-time insights, and automated strategies to help you build lasting wealth.
                        </p>

                        <div className="ag-hero__actions">
                            <a href="#" className="ag-hero__btn-primary">
                                Start Investing Free
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <span className="ag-hero__btn-glow" aria-hidden="true"></span>
                            </a>
                            <a href="#" className="ag-hero__btn-secondary">
                                Watch Demo
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </a>
                        </div>

                        <div className="ag-hero__social-proof">
                            <div className="ag-hero__avatars">
                                <span className="ag-hero__avatar" style={{ background: '#ec4899' }}>J</span>
                                <span className="ag-hero__avatar" style={{ background: '#a855f7' }}>M</span>
                                <span className="ag-hero__avatar" style={{ background: '#6366f1' }}>S</span>
                                <span className="ag-hero__avatar" style={{ background: '#8b5cf6' }}>R</span>
                            </div>
                            <span className="ag-hero__proof-text">
                                <strong>2,847</strong> people started this week
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AntigravityHero;
