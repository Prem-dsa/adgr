import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/NAGERCOIL-1-1-scaled.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hairTreatments = {
    'Restoration Plan': [
      { name: 'Nano FUE Hair Transplant', path: '/hair-treatments/restoration/nano-fue' },
      { name: 'FUE Hair Transplant', path: '/hair-treatments/restoration/fue' },
      { name: 'Basic Hair Transplant', path: '/hair-treatments/restoration/basic-fue' },
      { name: 'Percutaneous FUE', path: '/hair-treatments/restoration/percutaneous-fue' },
    ],
    'Cosmetic Hair Replacement': [
      { name: 'Basic Thin Poly', path: '/hair-treatments/replacement/basic-thin-poly' },
      { name: 'Celebrity Choice', path: '/hair-treatments/replacement/celebrity-choice' },
      { name: 'Celebrity Choice Mirage', path: '/hair-treatments/replacement/celebrity-choice-mirage' },
      { name: 'Full Lace', path: '/hair-treatments/replacement/full-lace' },
      { name: 'Men Full Cap', path: '/hair-treatments/replacement/men-full-cap' },
      { name: 'Women Full Cap', path: '/hair-treatments/replacement/women-full-cap' },
    ],
    'Super Specialty': [
      { name: 'Scalp Micropigmentation', path: '/hair-treatments/specialty/scalp-micropigmentation' },
      { name: 'Partial Alopecia', path: '/hair-treatments/specialty/partial-alopecia' },
      { name: 'Total Alopecia', path: '/hair-treatments/specialty/total-alopecia' },
      { name: 'Microblading', path: '/hair-treatments/specialty/microblading' },
      { name: 'Eyelash Lift and Extensions', path: '/hair-treatments/specialty/eyelash-lift' },
      { name: 'Lip Micropigmentation', path: '/hair-treatments/specialty/lip-micropigmentation' },
    ],
    'Retention Plan': [
      { name: 'Mesotherapy', path: '/hair-treatments/retention/mesotherapy' },
      { name: 'PRP Pro+ Stem 27', path: '/hair-treatments/retention/prp-pro-x27' },
      { name: 'Gel PRP', path: '/hair-treatments/retention/gel-prp' },
      { name: 'Regen Pro 9', path: '/hair-treatments/retention/regen-pro-9' },
    ],
    'Non-Invasive Treatment': [
      { name: 'Oxygen Laser Therapy', path: '/hair-treatments/non-invasive/oxygen-laser-therapy' },
    ],
  };

  const skinTreatments = {
    'Skin Brightening & Pigmentation': [
      { name: 'Skin Peels', path: '/skin-treatments/brightening/skin-peels' },
      { name: 'Full Body Peel', path: '/skin-treatments/brightening/full-body-peel' },
      { name: 'Microdermabrasion', path: '/skin-treatments/brightening/microdermabrasion' },
      { name: 'Q-Switched Laser', path: '/skin-treatments/brightening/q-switched-laser' },
      { name: 'MNRF Treatment', path: '/skin-treatments/brightening/mnrf-treatment' },
    ],
    'Ageless': [
      { name: 'RF Facials', path: '/skin-treatments/ageless/rf-facials' },
      { name: 'Botox', path: '/skin-treatments/ageless/botox' },
      { name: 'Dermal Fillers', path: '/skin-treatments/ageless/dermal-fillers' },
      { name: 'Face PRP', path: '/skin-treatments/ageless/face-prp' },
      { name: 'Thread Lift', path: '/skin-treatments/ageless/thread-lift' },
    ],
    'Permanent Hair Reduction': [
      { name: 'Nd:YAG Laser', path: '/skin-treatments/hair-reduction/nd-yag-laser' },
      { name: 'Diode Laser', path: '/skin-treatments/hair-reduction/diode-laser' },
      { name: 'Laser Hair Reduction', path: '/skin-treatments/hair-reduction/laser-hair-reduction' },
    ],
    'Dry & Dull Skin': [
      { name: 'HydraFacial', path: '/skin-treatments/dry-skin/hydrafacial' },
    ],
    'IV Therapy': [
      { name: 'Glutathione IV', path: '/skin-treatments/iv-therapy/glutathione-iv' },
    ],
  };

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Hair Treatments', path: '/hair-treatments', hasDropdown: true, treatments: hairTreatments },
    { name: 'Skin Treatments', path: '/skin-treatments', hasDropdown: true, treatments: skinTreatments },
    { name: 'Results', path: '/results' },
    { name: 'Contact', path: '/contact' },
  ];

  // Navigate to a page route
  const navigateToPage = (path) => {
    closeMobileMenu();
    navigate(path);
  };

  const handleMobileDropdown = (itemName) => {
    if (openDropdown === itemName) {
      setOpenDropdown(null);
      setOpenSubmenu(null);
    } else {
      setOpenDropdown(itemName);
      setOpenSubmenu(null);
    }
  };

  const handleMobileSubmenu = (category) => {
    if (openSubmenu === category) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(category);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img
            src={logoImage}
            alt="Advanced GroHair & GloSkin"
            className="header__logo-img"
          />
        </Link>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`header__nav-item ${item.hasDropdown ? 'header__nav-item--has-dropdown' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className="header__nav-link header__nav-link--dropdown"
                      onClick={() => handleMobileDropdown(item.name)}
                      aria-expanded={openDropdown === item.name}
                    >
                      <span className="header__nav-link-text">{item.name}</span>
                      <svg className="header__dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 1L5 5L9 1" />
                      </svg>
                      <span className="header__nav-link-line"></span>
                    </button>

                    <div className={`header__dropdown ${openDropdown === item.name ? 'header__dropdown--open' : ''}`}>
                      <div className="header__dropdown-content">
                        {Object.entries(item.treatments).map(([category, subItems]) => (
                          <div key={category} className="header__dropdown-category">
                            <button
                              className="header__dropdown-category-title"
                              onClick={() => handleMobileSubmenu(category)}
                            >
                              <span>{category}</span>
                              <svg className={`header__submenu-arrow ${openSubmenu === category ? 'header__submenu-arrow--open' : ''}`} width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M1 1L5 5L9 1" />
                              </svg>
                            </button>
                            <ul className={`header__submenu ${openSubmenu === category ? 'header__submenu--open' : ''}`}>
                              {subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.path}
                                    className="header__submenu-link"
                                    onClick={closeMobileMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    className="header__nav-link"
                    onClick={() => navigateToPage(item.path)}
                  >
                    <span className="header__nav-link-text">{item.name}</span>
                    <span className="header__nav-link-line"></span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button
            className="header__cta-mobile btn btn-primary"
            onClick={() => navigateToPage('/book-consultation')}
          >
            Book Consultation
          </button>
        </nav>

        <button
          className="header__cta btn btn-primary"
          onClick={() => navigateToPage('/book-consultation')}
        >
          <span>Book Consultation</span>
        </button>

        <button
          className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
