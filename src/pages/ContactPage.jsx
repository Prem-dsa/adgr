import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
    const contactInfo = [
        {
            title: "Phone",
            text: "+91 75798 56789",
            link: "tel:+917579856789",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            )
        },
        {
            title: "Email",
            text: "info@adgrohair.com",
            link: "mailto:info@adgrohair.com",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            )
        },
        {
            title: "Address",
            text: "97, Beach Road, Next to Mannol Showroom, Erulapappuram, Nagercoil, Tamil Nadu – 629002",
            link: "https://maps.app.goo.gl/uXpXU5C37vYF3wS1A",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            )
        },
        {
            title: "Working Hours",
            text: "Mon – Sat: 10:00 AM – 8:00 PM (Sunday by Appointment)",
            link: "#",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            )
        }
    ];

    return (
        <div className="contact-page">
            <div className="contact-page__container">
                <motion.div
                    className="contact-page__header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="contact-page__title">Contact Us</h1>
                    <p className="contact-page__description">
                        Reach out to us for appointments, consultations, or any inquiries.
                    </p>
                </motion.div>

                <div className="contact-page__grid">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="contact-page__card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="contact-page__card-icon">
                                {item.icon}
                            </div>
                            <h3 className="contact-page__card-title">{item.title}</h3>
                            <p className="contact-page__card-text">
                                <a
                                    href={item.link}
                                    className="contact-page__card-link"
                                    target={item.title === "Address" ? "_blank" : "_self"}
                                    rel={item.title === "Address" ? "noopener noreferrer" : ""}
                                >
                                    {item.text}
                                </a>
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="contact-page__map-wrapper"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <iframe
                        title="Clinic Location"
                        className="contact-page__map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3644026362943!2d77.42436707489814!3d8.16853549186234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f13702a43369%3A0xc3f8e6e589410134!2sAdvanced%20GroHair%20-%20Nagercoil!5e0!3m2!1sen!2sin!4v1715694300000!5m2!1sen!2sin"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
