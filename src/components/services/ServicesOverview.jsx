import { hairServices, skinServices } from '../../data/servicesData';
import ServiceCard from './ServiceCard';
import '../Services.css';

const ServicesOverview = () => {
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

export default ServicesOverview;
