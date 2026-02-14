import { motion } from 'framer-motion';
import ContactFormSection from '../components/ContactFormSection';
import './BookConsultationPage.css';

const BookConsultationPage = () => {
    return (
        <div className="book-consultation-page">
            {/* Hero Banner */}
            <section className="book-consultation-page__hero">
                <div className="book-consultation-page__hero-bg">
                    <div className="book-consultation-page__hero-gradient" />
                    <div className="book-consultation-page__hero-glow" />
                </div>
                <div className="container">
                    <motion.div
                        className="book-consultation-page__hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="book-consultation-page__eyebrow">Book Now</span>
                        <h1 className="book-consultation-page__title">
                            Book Your <em>Consultation</em>
                        </h1>
                        <p className="book-consultation-page__subtitle">
                            Take the first step towards your transformation. Schedule a personalized
                            consultation with our certified specialists today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section (reusing existing component) */}
            <ContactFormSection />

            {/* Additional Info */}
            <section className="book-consultation-page__info">
                <div className="container">
                    <div className="book-consultation-page__info-grid">
                        <motion.div
                            className="book-consultation-page__info-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0 }}
                        >
                            <div className="book-consultation-page__info-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h4 className="book-consultation-page__info-title">Visit Us</h4>
                            <p className="book-consultation-page__info-text">
                                97, Beach Road, Next to Mannol Showroom<br />
                                Erulapappuram, Nagercoil<br />
                                Tamil Nadu – 629002, India
                            </p>
                        </motion.div>

                        <motion.div
                            className="book-consultation-page__info-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="book-consultation-page__info-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h4 className="book-consultation-page__info-title">Working Hours</h4>
                            <p className="book-consultation-page__info-text">
                                Monday – Saturday<br />
                                10:00 AM – 8:00 PM<br />
                                Sunday by Appointment
                            </p>
                        </motion.div>

                        <motion.div
                            className="book-consultation-page__info-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="book-consultation-page__info-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <h4 className="book-consultation-page__info-title">Quick Connect</h4>
                            <p className="book-consultation-page__info-text">
                                <a href="tel:+917579856789" className="book-consultation-page__info-link">+91 75798 56789</a><br />
                                <a href="https://wa.me/917579856789" target="_blank" rel="noopener noreferrer" className="book-consultation-page__info-link">WhatsApp Us</a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookConsultationPage;
