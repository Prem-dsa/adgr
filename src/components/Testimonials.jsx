import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Business Owner',
            treatment: 'FUE Hair Transplant',
            quote: 'After years of struggling with hair loss, I finally found my solution at Advanced GroHair. The FUE transplant was painless, and the results exceeded my expectations. Truly life-changing experience.',
            image: 'https://adgronagercoil.com/wp-content/uploads/2024/10/testimonial-1.png'
        },
        {
            name: 'Priya Sharma',
            role: 'IT Professional',
            treatment: 'Skin Brightening',
            quote: 'The skin brightening treatment gave me the glow I always dreamed of. The doctors are highly professional, and the clinic maintains excellent hygiene standards. Absolutely recommend it.',
            image: 'https://adgronagercoil.com/wp-content/uploads/2024/10/testimonial-2.png'
        },
        {
            name: 'Mohammed Ali',
            role: 'Entrepreneur',
            treatment: 'PRP Treatment',
            quote: 'My hair density has improved significantly after the PRP sessions. The staff is courteous, and they explain every step of the procedure. The personalized care here is exceptional.',
            image: 'https://adgronagercoil.com/wp-content/uploads/2024/10/testimonial-3.png'
        },
        {
            name: 'Lakshmi Devi',
            role: 'Homemaker',
            treatment: 'Botox & Fillers',
            quote: 'I look 10 years younger after my anti-aging treatment! The procedure was quick with zero downtime. The team at AdGloSkin really understands the art of natural-looking results.',
            image: 'https://adgronagercoil.com/wp-content/uploads/2024/10/testimonial-4.png'
        },
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 6000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isAutoPlaying, testimonials.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 12000);
    };

    return (
        <section className="testimonials section" id="results">
            <div className="testimonials__background">
                <div className="testimonials__bg-pattern"></div>
            </div>

            <div className="container">
                <div className="testimonials__header section-header">
                    <span className="section-eyebrow">Client Stories</span>
                    <h2 className="testimonials__title">Voices of <em>Transformation</em></h2>
                    <p className="section-description">
                        Real stories from clients who trusted us with their transformation journey
                    </p>
                </div>

                <div className="testimonials__carousel">
                    <div className="testimonials__track">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonials__slide ${index === currentSlide ? 'testimonials__slide--active' : ''}`}
                            >
                                <div className="testimonials__card">
                                    <div className="testimonials__quote-mark">"</div>
                                    <blockquote className="testimonials__quote">
                                        {testimonial.quote}
                                    </blockquote>
                                    <div className="testimonials__author">
                                        <div className="testimonials__avatar-wrapper">
                                            <img src={testimonial.image} alt={testimonial.name} className="testimonials__avatar" />
                                        </div>
                                        <div className="testimonials__author-info">
                                            <strong className="testimonials__name">{testimonial.name}</strong>
                                            <span className="testimonials__role">{testimonial.role}</span>
                                            <span className="testimonials__treatment">{testimonial.treatment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials__nav">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`testimonials__nav-btn ${index === currentSlide ? 'testimonials__nav-btn--active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            >
                                <span className="testimonials__nav-progress"></span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
