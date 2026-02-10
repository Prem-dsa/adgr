import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'What makes Advanced GroHair & GloSkin different from other clinics?',
            answer: 'We combine world-class medical expertise with personalized care. Our board-certified specialists use only FDA-approved equipment, and we\'re committed to delivering natural-looking results tailored to each client\'s unique needs.'
        },
        {
            question: 'How long does a hair transplant procedure take?',
            answer: 'A typical FUE hair transplant takes 4-8 hours depending on the number of grafts. We ensure your complete comfort throughout the procedure with local anesthesia, comfortable seating, and breaks as needed.'
        },
        {
            question: 'What is the downtime after treatments?',
            answer: 'Most of our treatments have zero to minimal downtime. Procedures like Hydrafacials have no downtime, while laser treatments may have mild redness for 24-48 hours. We provide comprehensive aftercare guidance for optimal recovery.'
        },
        {
            question: 'Are financing options available?',
            answer: 'Yes, we believe everyone deserves access to quality aesthetic care. We offer flexible EMI options and customized payment plans. Contact us for a personalized consultation to discuss your options.'
        },
        {
            question: 'How soon can I expect to see results?',
            answer: 'Results vary by treatment. Hair transplant results are visible in 6-12 months. PRP shows improvement in 3-4 months. Skin treatments like peels show immediate glow with continued improvement over weeks.'
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq section" id="about">
            <div className="container">
                <div className="faq__wrapper">
                    <div className="faq__content">
                        <span className="section-eyebrow">Common Questions</span>
                        <h2 className="faq__title">Your Questions, <em>Answered</em></h2>
                        <p className="faq__subtitle">
                            We believe in transparency. Here are answers to some of the most common questions our clients ask.
                        </p>

                        <div className="faq__contact">
                            <p className="faq__contact-text">Still have questions?</p>
                            <a href="#contact" className="btn btn-primary">
                                Schedule a Consultation
                            </a>
                        </div>
                    </div>

                    <div className="faq__list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="faq__question-number">0{index + 1}</span>
                                    <span className="faq__question-text">{faq.question}</span>
                                    <span className="faq__icon">
                                        <span className="faq__icon-line faq__icon-line--h"></span>
                                        <span className="faq__icon-line faq__icon-line--v"></span>
                                    </span>
                                </button>
                                <div className="faq__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
