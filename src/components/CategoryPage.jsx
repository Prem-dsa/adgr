import { Link } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = ({ category }) => {
    return (
        <div className="category-page">
            <div className="category-page__header">
                <div className="container">
                    <Link to="/" className="category-page__back">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                    <span className="category-page__eyebrow">{category.eyebrow}</span>
                    <h1 className="category-page__title">{category.title}</h1>
                    <p className="category-page__description">{category.description}</p>
                </div>
            </div>

            <div className="category-page__content">
                <div className="container">
                    <div className="category-page__grid">
                        {category.treatments.map((treatment, index) => (
                            <Link
                                key={treatment.name}
                                to={treatment.path}
                                className="category-page__card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="category-page__card-icon">
                                    {treatment.icon || '✦'}
                                </div>
                                <h3 className="category-page__card-title">{treatment.name}</h3>
                                <p className="category-page__card-description">{treatment.description}</p>
                                <span className="category-page__card-link">
                                    View Details
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
