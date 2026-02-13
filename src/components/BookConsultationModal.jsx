import { useState, useEffect } from 'react';
import './BookConsultationModal.css';

const BookConsultationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        treatment: ''
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 400);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
        onClose();
    };

    return (
        <div className={`bcm-overlay ${isOpen ? 'bcm-overlay--open' : ''}`} onClick={onClose}>
            <div
                className={`bcm-container ${isOpen ? 'bcm-container--open' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Floating Energy Ring / Arc */}
                <div className="bcm-arc-wrapper" aria-hidden="true">
                    <div className="bcm-arc"></div>
                    <div className="bcm-arc-bloom"></div>
                    <div className="bcm-arc-plasma"></div>
                </div>

                {/* Close Button */}
                <button className="bcm-close" onClick={onClose} aria-label="Close modal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Header */}
                <div className="bcm-header">
                    <h2 className="bcm-title">Book Your Consultation</h2>
                    <p className="bcm-subtitle">Start your transformation journey today</p>
                </div>

                {/* Form */}
                <form className="bcm-form" onSubmit={handleSubmit}>
                    <div className="bcm-row">
                        <div className="bcm-field">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="bcm-field">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>

                    <div className="bcm-field">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="email">Email Address</label>
                    </div>

                    <div className="bcm-field">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="phone">Phone Number</label>
                    </div>

                    <div className="bcm-field">
                        <select
                            id="treatment"
                            name="treatment"
                            value={formData.treatment}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a treatment</option>
                            <option value="hair">FUE Hair Transplant</option>
                            <option value="prp">PRP Therapy</option>
                            <option value="skin">Skin Brightening</option>
                            <option value="laser">Laser Hair Reduction</option>
                        </select>
                        <label htmlFor="treatment" className="bcm-label--select">Which treatment are you interested in?</label>
                    </div>

                    <button type="submit" className="bcm-submit">
                        Confirm Appointment
                        <span className="bcm-submit-glow"></span>
                    </button>
                </form>

                {/* Background Decorations */}
                <div className="bcm-decor bcm-decor--1" aria-hidden="true"></div>
                <div className="bcm-decor bcm-decor--2" aria-hidden="true"></div>

                {/* Floating Particles */}
                <div className="bcm-particles" aria-hidden="true">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="bcm-particle" style={{
                            '--delay': `${Math.random() * 5}s`,
                            '--x': `${Math.random() * 100}%`,
                            '--y': `${Math.random() * 100}%`,
                            '--size': `${Math.random() * 3 + 1}px`,
                            '--dur': `${Math.random() * 10 + 10}s`
                        }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookConsultationModal;
