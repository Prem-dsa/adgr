import titaniumFueImg from '../../../assets/MESOTHETITANIUM-FUE-Hair-TransplantRAPY-.png';

const TitaniumFUE = () => {
    return (
        <section className="treatment-detail section">
            <div className="container">
                <div className="treatment-detail__header">
                    <span className="section-eyebrow">Restoration Plan</span>
                    <h1 className="treatment-detail__title">Titanium FUE Hair Transplant</h1>
                    <p className="treatment-detail__subtitle">
                        Premium hair transplant using titanium instruments for minimal trauma and faster healing.
                    </p>
                    <div className="treatment-page__hero-image">
                        <img src={titaniumFueImg} alt="Titanium FUE Hair Transplant" loading="lazy" />
                    </div>
                </div>

                <div className="treatment-detail__content">
                    <div className="treatment-detail__section">
                        <h2>What Is This Treatment?</h2>
                        <p>
                            Titanium FUE (Follicular Unit Extraction) is an advanced hair transplant technique
                            that uses premium titanium instruments for extracting and implanting hair follicles.
                            This method ensures minimal scarring and faster recovery.
                        </p>
                    </div>

                    <div className="treatment-detail__section">
                        <h2>Benefits</h2>
                        <ul>
                            <li>Minimal scarring due to titanium precision</li>
                            <li>Faster healing and recovery time</li>
                            <li>Natural-looking hairline design</li>
                            <li>Permanent, lifelong results</li>
                            <li>Suitable for various hair types</li>
                        </ul>
                    </div>

                    <div className="treatment-detail__cta">
                        <a href="#contact" className="btn btn-primary">Book Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TitaniumFUE;

