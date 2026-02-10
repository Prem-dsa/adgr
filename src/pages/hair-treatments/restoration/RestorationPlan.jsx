const RestorationPlan = () => {
    const treatments = [
        { name: 'Titanium FUE', description: 'Premium hair transplant with titanium instruments for minimal scarring.' },
        { name: 'Nano FUE', description: 'Ultra-precise follicular extraction for natural hairline design.' },
        { name: 'FUE Hair Transplant', description: 'Standard follicular unit extraction with excellent results.' },
        { name: 'Basic Hair Transplant', description: 'Affordable hair restoration with proven techniques.' },
        { name: 'Percutaneous FUE', description: 'Advanced technique for faster healing and denser results.' },
        { name: 'Eyebrow Transplant', description: 'Restore natural eyebrow shape and density.' },
        { name: 'Beard Transplant', description: 'Fuller, natural-looking beard with permanent results.' },
        { name: 'Moustache Transplant', description: 'Precision transplant for a complete moustache.' },
    ];

    return (
        <section className="treatment-detail section">
            <div className="container">
                <div className="treatment-detail__header">
                    <span className="section-eyebrow">Hair Restoration</span>
                    <h1 className="treatment-detail__title">Restoration Plan</h1>
                    <p className="treatment-detail__subtitle">
                        Advanced hair transplant solutions for permanent, natural-looking results.
                    </p>
                </div>

                <div className="treatment-detail__grid">
                    {treatments.map((treatment) => (
                        <div key={treatment.name} className="treatment-detail__card">
                            <h3>{treatment.name}</h3>
                            <p>{treatment.description}</p>
                            <a href="#contact" className="btn btn-outline">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RestorationPlan;
