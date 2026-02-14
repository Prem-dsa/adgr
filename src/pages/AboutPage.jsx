import { motion } from 'framer-motion';
import './AboutPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' }
    })
};

const AboutPage = () => {
    return (
        <section className="about-page">
            <div className="container">
                {/* Hero */}
                <motion.div
                    className="about-page__hero"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <span className="about-page__eyebrow">About Us</span>
                    <h1 className="about-page__title">
                        Nagercoil's Premier <em>Aesthetic Destination</em>
                    </h1>
                    <p className="about-page__subtitle">
                        Advanced GroHair & GloSkin is a complete aesthetic care destination
                        offering advanced solutions in dermatology and hair restoration.
                        We combine medical expertise with cutting-edge technology to deliver
                        personalized, affordable treatments with compassionate care.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="about-page__mission">
                    <motion.div
                        className="about-page__mission-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <div className="about-page__mission-icon">🎯</div>
                        <h3 className="about-page__mission-title">Our Mission</h3>
                        <p className="about-page__mission-text">
                            To provide world-class hair restoration and skin care solutions
                            that are accessible, affordable, and personalized. We believe
                            everyone deserves to feel confident in their own skin and hair,
                            and we're committed to making premium aesthetic care available
                            to all.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-page__mission-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <div className="about-page__mission-icon">🔬</div>
                        <h3 className="about-page__mission-title">Our Vision</h3>
                        <p className="about-page__mission-text">
                            To be the most trusted aesthetic clinic in South India, recognized
                            for our clinical excellence, patient-first approach, and innovative
                            treatments. We aim to set new standards in hair and skin care through
                            continuous research and the adoption of breakthrough technologies.
                        </p>
                    </motion.div>
                </div>

                {/* Team */}
                <div className="about-page__team">
                    <div className="about-page__team-header">
                        <h2 className="about-page__team-title">Meet Our Experts</h2>
                        <p className="about-page__team-subtitle">
                            Certified dermatologists and trichologists dedicated to your transformation
                        </p>
                    </div>

                    <div className="about-page__team-grid">
                        <motion.div
                            className="about-page__team-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0}
                        >
                            <div className="about-page__team-avatar">👨‍⚕️</div>
                            <h4 className="about-page__team-name">Expert Trichologists</h4>
                            <span className="about-page__team-role">Hair Restoration</span>
                            <p className="about-page__team-bio">
                                Our team of certified trichologists brings years of experience in advanced
                                hair transplantation techniques including Nano FUE, Percutaneous FUE, and
                                cosmetic hair replacement systems.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-page__team-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                        >
                            <div className="about-page__team-avatar">👩‍⚕️</div>
                            <h4 className="about-page__team-name">Certified Dermatologists</h4>
                            <span className="about-page__team-role">Skin Aesthetics</span>
                            <p className="about-page__team-bio">
                                Our dermatology team specializes in advanced skincare protocols including
                                laser treatments, injectables, chemical peels, and anti-aging therapies,
                                ensuring the highest standards of clinical care.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-page__team-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={2}
                        >
                            <div className="about-page__team-avatar">🏥</div>
                            <h4 className="about-page__team-name">Support Team</h4>
                            <span className="about-page__team-role">Patient Care</span>
                            <p className="about-page__team-bio">
                                Our dedicated patient care coordinators ensure a seamless experience
                                from your first consultation through post-treatment follow-ups,
                                providing personalized attention every step of the way.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Values */}
                <div className="about-page__values">
                    <div className="about-page__values-header">
                        <h2 className="about-page__values-title">Our Core Values</h2>
                    </div>

                    <div className="about-page__values-grid">
                        {[
                            { icon: '✨', name: 'Excellence', desc: 'Uncompromising quality in every treatment and interaction' },
                            { icon: '🤝', name: 'Trust', desc: 'Transparent communication and honest medical guidance' },
                            { icon: '💡', name: 'Innovation', desc: 'Embracing the latest technology and techniques' },
                            { icon: '❤️', name: 'Compassion', desc: 'Treating every patient with empathy and respect' },
                        ].map((value, i) => (
                            <motion.div
                                key={value.name}
                                className="about-page__value-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                            >
                                <div className="about-page__value-icon">{value.icon}</div>
                                <h4 className="about-page__value-name">{value.name}</h4>
                                <p className="about-page__value-desc">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
