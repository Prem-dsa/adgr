import eyebrowImg from '../../../assets/Eyebrow-Transplant.png';
import beardImg from '../../../assets/BEARD-TRANSPLANT.png';
import moustacheImg from '../../../assets/2e76c5727095ff6774527c8a4cd81c81.jpg';

const EyebrowBeardMoustache = () => {
    const treatments = [
        { name: 'Eyebrow Transplant', description: 'Restore natural eyebrow shape and density for a more defined look.', image: eyebrowImg },
        { name: 'Beard Transplant', description: 'Achieve a fuller, natural-looking beard with permanent results.', image: beardImg },
        { name: 'Moustache Transplant', description: 'Precision transplant for a complete, well-defined moustache.', image: moustacheImg },
    ];

    return (
        <section className="treatment-detail section">
            <div className="container">
                <div className="treatment-detail__header">
                    <span className="section-eyebrow">Restoration Plan</span>
                    <h1 className="treatment-detail__title">Facial Hair Transplants</h1>
                    <p className="treatment-detail__subtitle">
                        Eyebrow, beard, and moustache transplants for complete facial harmony.
                    </p>
                </div>
                <div className="treatment-detail__grid">
                    {treatments.map((treatment) => (
                        <div key={treatment.name} className="treatment-detail__card">
                            <div className="treatment-detail__card-image">
                                <img src={treatment.image} alt={treatment.name} loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center', borderRadius: '12px', marginBottom: '16px' }} />
                            </div>
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

export default EyebrowBeardMoustache;

