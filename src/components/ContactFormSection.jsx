import { useState } from 'react';
import './ContactFormSection.css';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        treatment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        // Add submission logic here
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            treatment: ''
        });
    };

    return (
        <section className="cfs section" id="get-in-touch">
            <div className="cfs__background">
                <div className="cfs__bg-pattern"></div>
                <div className="cfs__bg-glow"></div>
            </div>

            <div className="container">
                <div className="cfs__wrapper">
                    {/* Left Content */}
                    <div className="cfs__content">
                        <span className="section-eyebrow cfs__eyebrow">Contact Us</span>
                        <h2 className="cfs__title">Get in Touch</h2>
                        <p className="cfs__description">
                            Have a question or need support? We're just a message away.
                        </p>

                        <div className="cfs__info-cards">
                            <div className="cfs__info-card">
                                <div className="cfs__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="cfs__info-title">Call Us</h5>
                                    <p className="cfs__info-text">+91 75798 56789</p>
                                </div>
                            </div>
                            <div className="cfs__info-card">
                                <div className="cfs__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="cfs__info-title">Email</h5>
                                    <p className="cfs__info-text">info@adgrohair.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="cfs__form-card">
                        <form className="cfs__form" onSubmit={handleSubmit}>
                            <div className="cfs__row">
                                <div className="cfs__field">
                                    <input
                                        type="text"
                                        id="cfs-firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="cfs-firstName">First Name</label>
                                </div>
                                <div className="cfs__field">
                                    <input
                                        type="text"
                                        id="cfs-lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="cfs-lastName">Last Name</label>
                                </div>
                            </div>

                            <div className="cfs__field">
                                <input
                                    type="email"
                                    id="cfs-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="cfs-email">Email Address</label>
                            </div>

                            <div className="cfs__field">
                                <input
                                    type="tel"
                                    id="cfs-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="cfs-phone">Phone Number</label>
                            </div>

                            <div className="cfs__field">
                                <select
                                    id="cfs-treatment"
                                    name="treatment"
                                    value={formData.treatment}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Which treatments are you interested in?</option>
                                    <option value="hair">Hair Treatments</option>
                                    <option value="skin">Skin Treatments</option>
                                    <option value="both">Both</option>
                                </select>
                                <label htmlFor="cfs-treatment" className="cfs__label--select">Which treatments are you interested in?</label>
                            </div>

                            <button type="submit" className="cfs__submit">
                                Book Appointment
                                <span className="cfs__submit-glow"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
