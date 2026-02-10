import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { hairServices, skinServices } from '../data/servicesData';
import './Services.css';

const Services = () => {
    return (
        <section className="services section" id="services">
            <div className="container">
                {/* Hair Treatments */}
                <div className="services__category" id="hair">
                    <div className="services__header">
                        <div className="services__header-content">
                            <span className="section-eyebrow">
                                Hair Restoration
                            </span>
                            <h2 className="services__title">
                                Restore Your <em>Crown</em>
                            </h2>
                            <p className="services__subtitle">
                                World-class hair restoration solutions combining artistry with advanced medical technology.
                            </p>
                        </div>
                        <a href="#contact" className="btn btn-outline services__header-cta">
                            Explore All
                        </a>
                    </div>

                    <div className="services__grid">
                        {hairServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>
                </div>

                <div className="services__divider">
                    <span className="services__divider-text">✦</span>
                </div>

                {/* Skin Treatments */}
                <div className="services__category" id="skin">
                    <div className="services__header">
                        <div className="services__header-content">
                            <span className="section-eyebrow">
                                Skin Aesthetics
                            </span>
                            <h2 className="services__title">
                                Reveal Your <em>Radiance</em>
                            </h2>
                            <p className="services__subtitle">
                                Premium skincare protocols designed to restore youthful vitality and natural luminosity.
                            </p>
                        </div>
                        <a href="#contact" className="btn btn-outline services__header-cta">
                            Explore All
                        </a>
                    </div>

                    <div className="services__grid">
                        {skinServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('services__card--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="services__card card"
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="services__card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="services__card-image-overlay"></div>
            </div>
            <div className="services__card-content">
                <span className="services__card-subtitle">{service.subtitle}</span>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <div className="services__card-treatments">
                    {service.treatments.map((treatment) => (
                        <span key={treatment} className="services__card-tag">
                            {treatment}
                        </span>
                    ))}
                </div>
                <Link to={service.categoryPath} className="services__card-link">
                    <span>Learn More</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Services;
