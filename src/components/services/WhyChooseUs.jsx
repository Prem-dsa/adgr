import { whyChooseUsData } from '../../data/whyChooseUs';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us section" id="why-us">
            <div className="container">
                <div className="why-choose-us__header">
                    <span className="section-eyebrow">Why Choose Us</span>
                    <h2 className="why-choose-us__title">
                        Excellence in <em>Every Detail</em>
                    </h2>
                    <p className="why-choose-us__subtitle">
                        Discover what makes Advanced GroHair & GloSkin the premier destination for hair and skin treatments.
                    </p>
                </div>

                <div className="why-choose-us__grid">
                    {whyChooseUsData.map((item, index) => (
                        <div
                            key={item.title}
                            className="why-choose-us__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="why-choose-us__icon">{item.icon}</div>
                            <h3 className="why-choose-us__card-title">{item.title}</h3>
                            <p className="why-choose-us__card-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
