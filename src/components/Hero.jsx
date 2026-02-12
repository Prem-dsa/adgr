import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import heroBanner from '../assets/website-banner-1-scaled.jpeg';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero__wrapper container">
                <div className="hero__card">
                    {/* Background Image + Overlay */}
                    <div className="hero__bg">
                        <motion.div
                            className="hero__bg-parallax"
                            style={{ y }}
                        >
                            <motion.img
                                src={heroBanner}
                                alt="Premium skin and hair treatment at Advanced GroHair & GloSkin"
                                className="hero__bg-image"
                                animate={{
                                    y: [0, -15, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                        <div className="hero__bg-overlay"></div>
                        <div className="hero__bg-glow"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="hero__inner">
                        <motion.div
                            className="hero__content"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="hero__eyebrow" variants={itemVariants}>
                                <span>Nagercoil's Premier Aesthetic Destination</span>
                            </motion.div>

                            <motion.h1 className="hero__title" variants={itemVariants}>
                                Welcome to Advanced<br />
                                GroHair & <span className="hero__title-accent">GloSkin</span>
                            </motion.h1>

                            <motion.p className="hero__subtitle" variants={itemVariants}>
                                A complete aesthetic care destination offering advanced solutions
                                in dermatology and hair restoration. Personalized, affordable
                                treatments with expert care.
                            </motion.p>

                            <motion.p className="hero__tagline" variants={itemVariants}>
                                Rediscover your confidence, one glow and one strand at a time.
                            </motion.p>

                            <motion.div className="hero__cta-group" variants={itemVariants}>
                                <motion.a
                                    href="#contact"
                                    className="hero__btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Begin Your Transformation
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#services"
                                    className="hero__btn-ghost"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                >
                                    Explore Treatments
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Right Side — Floating Info Cards */}
                        <motion.div
                            className="hero__aside"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="hero__info-card" variants={cardVariants}>
                                <div className="hero__info-icon">✨</div>
                                <div>
                                    <span className="hero__info-title">Premium Care</span>
                                    <span className="hero__info-text">Personalized treatments</span>
                                </div>
                            </motion.div>

                            <motion.div className="hero__info-card" variants={cardVariants}>
                                <div className="hero__info-icon">🏆</div>
                                <div>
                                    <span className="hero__info-title">Award Winning</span>
                                    <span className="hero__info-text">Trusted by 3,000+ clients</span>
                                </div>
                            </motion.div>

                            <motion.div className="hero__info-card" variants={cardVariants}>
                                <div className="hero__info-icon">🩺</div>
                                <div>
                                    <span className="hero__info-title">Expert Doctors</span>
                                    <span className="hero__info-text">Certified dermatologists</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bottom Credentials Bar */}
                    <div className="hero__credentials">
                        <div className="hero__credential">
                            <span className="hero__credential-check">✓</span>
                            <span>Certified Dermatologists & Trichologists</span>
                        </div>
                        <div className="hero__credential">
                            <span className="hero__credential-check">✓</span>
                            <span>FDA-Approved Equipment</span>
                        </div>
                        <div className="hero__credential">
                            <span className="hero__credential-check">✓</span>
                            <span>6,000+ Successful Treatments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
