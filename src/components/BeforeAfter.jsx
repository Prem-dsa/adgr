import { useState, useRef, useCallback, useEffect } from 'react';
import './BeforeAfter.css';
import beforeImage from '../assets/before1.jpg';
import afterImage from '../assets/after1.jpg';

const BeforeAfter = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    // Track container width so before image matches after image exactly
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new ResizeObserver(([entry]) => {
            el.style.setProperty('--slider-container-width', `${entry.contentRect.width}px`);
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const updateSlider = useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let pos = ((clientX - rect.left) / rect.width) * 100;
        pos = Math.max(5, Math.min(95, pos));
        setSliderPos(pos);
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        updateSlider(e.clientX);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = useCallback((e) => {
        if (!isDragging.current) return;
        updateSlider(e.clientX);
    }, [updateSlider]);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseMove]);

    const handleTouchStart = (e) => {
        isDragging.current = true;
        updateSlider(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    const steps = [
        {
            title: 'Expert Consultation',
            description: 'Our certified dermatologists and trichologists analyze your hair and scalp health with advanced diagnostic tools to create a personalized treatment roadmap.',
        },
        {
            title: 'Precision Treatment',
            description: 'Using FDA-approved technology and minimally invasive techniques, we deliver targeted treatments designed for maximum results with minimal downtime.',
        },
        {
            title: 'Lasting Transformation',
            description: 'Our post-treatment retention plans ensure your results last. Regular follow-ups and maintenance keep your hair and skin at their best.',
        },
    ];

    return (
        <section className="before-after section" id="results">
            <div className="container">
                {/* Section Header */}
                <div className="before-after__header">
                    <span className="before-after__eyebrow">Our Process</span>
                    <h2 className="before-after__title">
                        Your Journey to <span>Transformation</span>
                    </h2>
                    <p className="before-after__desc">
                        From consultation to lasting results — experience our proven three-step approach.
                    </p>
                </div>

                {/* Two-Column Layout */}
                <div className="before-after__grid">
                    {/* Left: Steps */}
                    <div className="before-after__steps">
                        {steps.map((step, index) => (
                            <div key={index} className="before-after__step">
                                <div className="before-after__step-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="before-after__step-content">
                                    <span className="before-after__step-number">Step {index + 1}</span>
                                    <h3 className="before-after__step-title">{step.title}</h3>
                                    <p className="before-after__step-desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Slider */}
                    <div
                        className="before-after__slider"
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* After Image (full) */}
                        <img
                            src={afterImage}
                            alt="After treatment"
                            className="before-after__image before-after__image--after"
                            draggable="false"
                        />

                        {/* Before Image (clipped) */}
                        <div
                            className="before-after__before-clip"
                            style={{ width: `${sliderPos}%` }}
                        >
                            <img
                                src={beforeImage}
                                alt="Before treatment"
                                className="before-after__image before-after__image--before"
                                draggable="false"
                            />
                        </div>

                        {/* Labels */}
                        <span className="before-after__label before-after__label--before">Before</span>
                        <span className="before-after__label before-after__label--after">After</span>

                        {/* Slider Handle */}
                        <div
                            className="before-after__handle"
                            style={{ left: `${sliderPos}%` }}
                        >
                            <div className="before-after__handle-line"></div>
                            <div className="before-after__handle-knob">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8L22 12L18 16" />
                                    <path d="M6 8L2 12L6 16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
