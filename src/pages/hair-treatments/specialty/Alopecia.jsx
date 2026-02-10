const Alopecia = () => {
    return (
        <section className="treatment-detail section">
            <div className="container">
                <div className="treatment-detail__header">
                    <span className="section-eyebrow">Super Specialty</span>
                    <h1 className="treatment-detail__title">Alopecia Treatment</h1>
                    <p className="treatment-detail__subtitle">
                        Specialized solutions for partial and total alopecia conditions.
                    </p>
                </div>
                <div className="treatment-detail__content">
                    <div className="treatment-detail__section">
                        <h2>Partial Alopecia</h2>
                        <p>Targeted treatments for patchy hair loss with customized restoration plans.</p>
                    </div>
                    <div className="treatment-detail__section">
                        <h2>Total Alopecia</h2>
                        <p>Comprehensive solutions for complete hair loss including advanced medical and cosmetic options.</p>
                    </div>
                    <div className="treatment-detail__cta">
                        <a href="#contact" className="btn btn-primary">Book Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Alopecia;
