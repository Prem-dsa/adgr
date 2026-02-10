import { Link } from 'react-router-dom';
import './TreatmentPage.css';

const TreatmentPage = ({ treatment }) => {
    return (
        <div className="treatment-page">
            <div className="treatment-page__header">
                <div className="container">
                    <Link to="/" className="treatment-page__back">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="treatment-page__title">{treatment.title}</h1>
                </div>
            </div>

            <div className="treatment-page__content">
                <div className="container">
                    {/* What is section */}
                    {treatment.whatIs && (
                        <section className="treatment-page__section">
                            <h2 className="treatment-page__section-title">{treatment.whatIsTitle || `What is ${treatment.title}?`}</h2>
                            <p className="treatment-page__text">{treatment.whatIs}</p>
                        </section>
                    )}

                    {/* How it works section */}
                    {treatment.howItWorks && treatment.howItWorks.length > 0 && (
                        <section className="treatment-page__section">
                            <h2 className="treatment-page__section-title">{treatment.howItWorksTitle || 'How Does It Work?'}</h2>
                            <div className="treatment-page__steps">
                                {treatment.howItWorks.map((step, index) => (
                                    <div key={index} className="treatment-page__step">
                                        <div className="treatment-page__step-number">{String(index + 1).padStart(2, '0')}</div>
                                        <div className="treatment-page__step-content">
                                            <h3 className="treatment-page__step-title">{step.title}</h3>
                                            <p className="treatment-page__step-text">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Benefits section */}
                    {treatment.benefits && treatment.benefits.length > 0 && (
                        <section className="treatment-page__section">
                            <h2 className="treatment-page__section-title">{treatment.benefitsTitle || 'Benefits'}</h2>
                            <ul className="treatment-page__list">
                                {treatment.benefits.map((benefit, index) => (
                                    <li key={index} className="treatment-page__list-item">
                                        <span className="treatment-page__list-icon">✓</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Conditions treated section */}
                    {treatment.conditions && treatment.conditions.length > 0 && (
                        <section className="treatment-page__section">
                            <h2 className="treatment-page__section-title">{treatment.conditionsTitle || 'Conditions Treated'}</h2>
                            <ul className="treatment-page__list treatment-page__list--conditions">
                                {treatment.conditions.map((condition, index) => (
                                    <li key={index} className="treatment-page__list-item">
                                        <span className="treatment-page__list-icon">•</span>
                                        <span>{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Why choose us section */}
                    {treatment.whyChooseUs && treatment.whyChooseUs.length > 0 && (
                        <section className="treatment-page__section treatment-page__section--highlight">
                            <h2 className="treatment-page__section-title">{treatment.whyChooseUsTitle || 'Why Choose Advanced GroHair?'}</h2>
                            <ul className="treatment-page__list">
                                {treatment.whyChooseUs.map((reason, index) => (
                                    <li key={index} className="treatment-page__list-item">
                                        <span className="treatment-page__list-icon">★</span>
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* CTA */}
                    <section className="treatment-page__cta">
                        <h3 className="treatment-page__cta-title">Ready to Begin Your Transformation?</h3>
                        <p className="treatment-page__cta-text">Schedule a personalized consultation with our specialists today.</p>
                        <div className="treatment-page__cta-buttons">
                            <a href="tel:+917579856789" className="btn btn-primary btn-lg">Call Now</a>
                            <a href="https://wa.me/917579856789" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">WhatsApp</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TreatmentPage;
