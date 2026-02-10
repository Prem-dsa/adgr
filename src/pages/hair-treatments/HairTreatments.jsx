import { hairServices } from '../../data/servicesData';

const HairTreatments = () => {
    return (
        <section className="treatments-page section" id="hair-treatments">
            <div className="container">
                <div className="treatments-page__header">
                    <span className="section-eyebrow">Hair Restoration</span>
                    <h1 className="treatments-page__title">
                        Hair <em>Treatments</em>
                    </h1>
                    <p className="treatments-page__subtitle">
                        Comprehensive hair restoration solutions designed to restore your confidence with natural-looking results.
                    </p>
                </div>

                <div className="treatments-page__categories">
                    {hairServices.map((service, index) => (
                        <div key={service.title} className="treatments-page__category">
                            <div className="treatments-page__category-image">
                                <img src={service.image} alt={service.title} loading="lazy" />
                            </div>
                            <div className="treatments-page__category-content">
                                <span className="treatments-page__category-subtitle">{service.subtitle}</span>
                                <h2 className="treatments-page__category-title">{service.title}</h2>
                                <p className="treatments-page__category-description">{service.description}</p>
                                <div className="treatments-page__treatments">
                                    {service.treatments.map((treatment) => (
                                        <span key={treatment} className="treatments-page__tag">
                                            {treatment}
                                        </span>
                                    ))}
                                </div>
                                <a href="#contact" className="btn btn-primary">
                                    Book Consultation
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HairTreatments;
