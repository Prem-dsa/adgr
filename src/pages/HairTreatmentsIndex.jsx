import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hairServices } from '../data/servicesData';
import './TreatmentsPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' }
    })
};

const HairTreatmentsIndex = () => {
    return (
        <section className="treatments-page">
            <div className="container">
                {/* Hero */}
                <motion.div
                    className="treatments-page__hero"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <span className="treatments-page__eyebrow">Hair Restoration</span>
                    <h1 className="treatments-page__title">
                        Hair <em>Treatments</em>
                    </h1>
                    <p className="treatments-page__subtitle">
                        World-class hair restoration solutions combining artistry with
                        advanced medical technology. Discover your path to confidence.
                    </p>
                </motion.div>

                {/* Hair Treatment Cards */}
                <div className="treatments-page__section">
                    <div className="treatments-page__grid">
                        {hairServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="treatments-page__card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={index}
                            >
                                <div className="treatments-page__card-image">
                                    <img src={service.image} alt={service.title} loading="lazy" />
                                    <div className="treatments-page__card-image-overlay" />
                                </div>
                                <div className="treatments-page__card-body">
                                    <span className="treatments-page__card-subtitle">{service.subtitle}</span>
                                    <h3 className="treatments-page__card-title">{service.title}</h3>
                                    <p className="treatments-page__card-desc">{service.description}</p>
                                    <div className="treatments-page__card-tags">
                                        {service.treatments.map((t) => (
                                            <span key={t} className="treatments-page__card-tag">{t}</span>
                                        ))}
                                    </div>
                                    <Link to={service.categoryPath} className="treatments-page__card-link">
                                        <span>Learn More</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HairTreatmentsIndex;
