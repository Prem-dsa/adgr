import { useState, useEffect, useRef } from 'react';
import { statisticsData } from '../../data/statisticsData';
import '../TrustIndicators.css';

const Statistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="trust" ref={sectionRef}>
            <div className="trust__background">
                <div className="trust__bg-gradient"></div>
                <div className="trust__bg-pattern"></div>
            </div>

            <div className="trust__container container">
                <div className="trust__header">
                    <span className="trust__eyebrow">Our Legacy of Excellence</span>
                    <h2 className="trust__title">Numbers That <em>Speak</em></h2>
                </div>

                <div className="trust__stats">
                    {statisticsData.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`trust__stat ${isVisible ? 'trust__stat--visible' : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="trust__stat-value">
                                <CountUp
                                    end={stat.value}
                                    isVisible={isVisible}
                                    duration={2500}
                                />
                                <span className="trust__stat-suffix">{stat.suffix}</span>
                            </div>
                            <div className="trust__stat-label">{stat.label}</div>
                            <div className="trust__stat-description">{stat.description}</div>
                            <div className="trust__stat-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CountUp Component with luxury easing
const CountUp = ({ end, isVisible, duration = 2500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const startValue = 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Luxury easing - slow start, fast middle, slow end
            const easeInOutQuart = progress < 0.5
                ? 8 * progress * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 4) / 2;

            const currentValue = Math.floor(startValue + (end - startValue) * easeInOutQuart);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, isVisible, duration]);

    return <span>{count.toLocaleString()}</span>;
};

export default Statistics;
