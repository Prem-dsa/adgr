import { useState, useEffect } from 'react';
import './AntigravityTestimonials.css';

const testimonials = [
    {
        id: 1,
        quote: "The results exceeded every expectation I had. Within months, I saw a complete transformation that gave me back my confidence. The team's expertise and personalized approach made the entire journey seamless.",
        name: "Rajesh K.",
        role: "Business Owner, Nagercoil",
        tag: "FUE Hair Transplant",
        avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
        id: 2,
        quote: "I was skeptical at first, but the advanced technology and caring staff made all the difference. My skin has never looked this radiant. It truly feels like turning back the clock by a decade.",
        name: "Priya S.",
        role: "Software Engineer, Chennai",
        tag: "Skin Brightening",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 3,
        quote: "After trying multiple clinics, I finally found a place that combines cutting-edge science with genuine care. The PRP therapy results are remarkable — natural, subtle, and incredibly effective.",
        name: "Arun M.",
        role: "Entrepreneur, Trivandrum",
        tag: "PRP Therapy",
        avatar: "https://i.pravatar.cc/150?img=68",
    },
];

const AntigravityTestimonials = () => {
    const [active, setActive] = useState(0);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generated = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2.5 + 0.5,
            duration: Math.random() * 18 + 12,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.3 + 0.05,
        }));
        setParticles(generated);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const current = testimonials[active];

    return (
        <section className="agt">
            {/* Particles */}
            <div className="agt__particles" aria-hidden="true">
                {particles.map((p) => (
                    <span
                        key={p.id}
                        className="agt__particle"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            opacity: p.opacity,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Section Header */}
            <div className="agt__header">
                <span className="agt__label">Testimonials</span>
                <h2 className="agt__heading">What Our Clients Say</h2>
            </div>

            {/* Main Card */}
            <div className="agt__card-wrapper">
                {/* Glowing Arc */}
                <div className="agt__arc-wrapper" aria-hidden="true">
                    <div className="agt__arc"></div>
                    <div className="agt__arc-bloom"></div>
                </div>

                {/* Depth Lights */}
                <div className="agt__light agt__light--left" aria-hidden="true"></div>
                <div className="agt__light agt__light--right" aria-hidden="true"></div>

                <div className="agt__card">
                    {/* Quotation Mark */}
                    <div className="agt__quote-mark" aria-hidden="true">"</div>

                    {/* Testimonial Content */}
                    <div className="agt__content" key={current.id}>
                        <p className="agt__text">{current.quote}</p>

                        <div className="agt__avatar-wrapper">
                            <img
                                src={current.avatar}
                                alt={current.name}
                                className="agt__avatar"
                            />
                            <span className="agt__avatar-glow" aria-hidden="true"></span>
                        </div>

                        <div className="agt__author">
                            <span className="agt__name">{current.name}</span>
                            <span className="agt__role">{current.role}</span>
                        </div>

                        <span className="agt__tag">{current.tag}</span>
                    </div>

                    {/* Navigation Dots */}
                    <div className="agt__dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`agt__dot ${i === active ? 'agt__dot--active' : ''}`}
                                onClick={() => setActive(i)}
                                aria-label={`View testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AntigravityTestimonials;
