const EyelashLip = () => {
    return (
        <section className="treatment-detail section">
            <div className="container">
                <div className="treatment-detail__header">
                    <span className="section-eyebrow">Super Specialty</span>
                    <h1 className="treatment-detail__title">Eyelash & Lip Treatments</h1>
                    <p className="treatment-detail__subtitle">
                        Enhanced lashes and beautifully defined lips.
                    </p>
                </div>
                <div className="treatment-detail__content">
                    <div className="treatment-detail__section">
                        <h2>Eyelash Lift and Extensions</h2>
                        <p>Professional lash lifting and extensions for dramatic, beautiful eyes.</p>
                    </div>
                    <div className="treatment-detail__section">
                        <h2>Lip Micropigmentation</h2>
                        <p>Semi-permanent lip color enhancement for naturally beautiful, defined lips.</p>
                    </div>
                    <div className="treatment-detail__cta">
                        <a href="#contact" className="btn btn-primary">Book Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EyelashLip;
