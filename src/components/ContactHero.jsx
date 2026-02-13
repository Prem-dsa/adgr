import { motion } from 'framer-motion';
import './ContactHero.css';
import contactBg from '../assets/ChatGPT Image Feb 13, 2026, 11_08_43 AM.png';

const ContactHero = () => {
    return (
        <section
            className="contact-hero"
            style={{ backgroundImage: `url(${contactBg})` }}
        >
            <div className="contact-hero__overlay"></div>

            <motion.div
                className="contact-hero__content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            >
                <motion.h2
                    className="contact-hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    Have a Question? We're Here to Help.
                </motion.h2>

                <motion.p
                    className="contact-hero__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    Reach out to us and we'll get back to you quickly.
                </motion.p>

                <motion.a
                    href="#get-in-touch"
                    className="contact-hero__btn"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Contact Us
                </motion.a>
            </motion.div>
        </section>
    );
};

export default ContactHero;
