const ServiceCard = ({ service, index }) => {
    return (
        <div className="services__card card" style={{ animationDelay: `${index * 0.1}s` }}>
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
                <a href="#contact" className="services__card-link">
                    <span>Learn More</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
