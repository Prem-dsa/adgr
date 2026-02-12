import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustIndicators from './components/TrustIndicators'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import BeforeAfter from './components/BeforeAfter'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

// Hair Treatment Category Index Pages
import RestorationIndex from './pages/hair-treatments/restoration/index'
import ReplacementIndex from './pages/hair-treatments/replacement/index'
import SpecialtyIndex from './pages/hair-treatments/specialty/index'
import RetentionIndex from './pages/hair-treatments/retention/index'
import NonInvasiveIndex from './pages/hair-treatments/non-invasive/index'

// Hair Treatment Pages - Restoration
import NanoFUE from './pages/hair-treatments/restoration/NanoFUE'
import FUEHairTransplant from './pages/hair-treatments/restoration/FUEHairTransplant'
import BasicHairTransplant from './pages/hair-treatments/restoration/BasicHairTransplant'
import PercutaneousFUE from './pages/hair-treatments/restoration/PercutaneousFUE'

// Hair Treatment Pages - Replacement
import BasicThinPoly from './pages/hair-treatments/replacement/BasicThinPoly'
import CelebrityChoice from './pages/hair-treatments/replacement/CelebrityChoice'
import CelebrityChoiceMirage from './pages/hair-treatments/replacement/CelebrityChoiceMirage'
import FullLace from './pages/hair-treatments/replacement/FullLace'
import MenFullCap from './pages/hair-treatments/replacement/MenFullCap'
import WomenFullCap from './pages/hair-treatments/replacement/WomenFullCap'

// Hair Treatment Pages - Specialty
import ScalpMicropigmentation from './pages/hair-treatments/specialty/ScalpMicropigmentation'
import PartialAlopecia from './pages/hair-treatments/specialty/PartialAlopecia'
import TotalAlopecia from './pages/hair-treatments/specialty/TotalAlopecia'
import Microblading from './pages/hair-treatments/specialty/Microblading'
import LipMicropigmentation from './pages/hair-treatments/specialty/LipMicropigmentation'
import EyelashLift from './pages/hair-treatments/specialty/EyelashLift'

// Hair Treatment Pages - Retention
import Mesotherapy from './pages/hair-treatments/retention/Mesotherapy'
import PRPProX27 from './pages/hair-treatments/retention/PRPProX27'
import GelPRP from './pages/hair-treatments/retention/GelPRP'
import RegenPro9 from './pages/hair-treatments/retention/RegenPro9'

// Hair Treatment Pages - Non-Invasive
import OxygenLaserTherapy from './pages/hair-treatments/non-invasive/OxygenLaserTherapy'

// Skin Treatment Category Index Pages
import BrighteningIndex from './pages/skin-treatments/brightening/index'
import AgelessIndex from './pages/skin-treatments/ageless/index'
import HairReductionIndex from './pages/skin-treatments/hair-reduction/index'
import DrySkinIndex from './pages/skin-treatments/dry-skin/index'
import IVTherapyIndex from './pages/skin-treatments/iv-therapy/index'

// Skin Treatment Pages - Brightening
import SkinPeels from './pages/skin-treatments/brightening/SkinPeels'
import FullBodyPeel from './pages/skin-treatments/brightening/FullBodyPeel'
import Microdermabrasion from './pages/skin-treatments/brightening/Microdermabrasion'
import QSwitchedLaser from './pages/skin-treatments/brightening/QSwitchedLaser'
import MNRFTreatment from './pages/skin-treatments/brightening/MNRFTreatment'

// Skin Treatment Pages - Ageless
import RFFacials from './pages/skin-treatments/ageless/RFFacials'
import Botox from './pages/skin-treatments/ageless/Botox'
import DermalFillers from './pages/skin-treatments/ageless/DermalFillers'
import FacePRP from './pages/skin-treatments/ageless/FacePRP'
import ThreadLift from './pages/skin-treatments/ageless/ThreadLift'

// Skin Treatment Pages - Hair Reduction
import NdYagLaser from './pages/skin-treatments/hair-reduction/NdYagLaser'
import DiodeLaser from './pages/skin-treatments/hair-reduction/DiodeLaser'
import LaserHairReduction from './pages/skin-treatments/hair-reduction/LaserHairReduction'

// Skin Treatment Pages - Dry Skin
import HydraFacial from './pages/skin-treatments/dry-skin/HydraFacial'

// Skin Treatment Pages - IV Therapy
import GlutathioneIV from './pages/skin-treatments/iv-therapy/GlutathioneIV'

// Home Page Component with scroll-to-section support
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a scrollTo target from navigation
    if (location.state?.scrollTo) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* ============================================ */}
          {/* HAIR TREATMENTS                             */}
          {/* ============================================ */}

          {/* Hair Treatments - Category Index Pages */}
          <Route path="/hair-treatments/restoration" element={<RestorationIndex />} />
          <Route path="/hair-treatments/replacement" element={<ReplacementIndex />} />
          <Route path="/hair-treatments/specialty" element={<SpecialtyIndex />} />
          <Route path="/hair-treatments/retention" element={<RetentionIndex />} />
          <Route path="/hair-treatments/non-invasive" element={<NonInvasiveIndex />} />

          {/* Hair Treatments - Restoration */}
          <Route path="/hair-treatments/restoration/nano-fue" element={<NanoFUE />} />
          <Route path="/hair-treatments/restoration/fue" element={<FUEHairTransplant />} />
          <Route path="/hair-treatments/restoration/basic-fue" element={<BasicHairTransplant />} />
          <Route path="/hair-treatments/restoration/percutaneous-fue" element={<PercutaneousFUE />} />

          {/* Hair Treatments - Replacement */}
          <Route path="/hair-treatments/replacement/basic-thin-poly" element={<BasicThinPoly />} />
          <Route path="/hair-treatments/replacement/celebrity-choice" element={<CelebrityChoice />} />
          <Route path="/hair-treatments/replacement/celebrity-choice-mirage" element={<CelebrityChoiceMirage />} />
          <Route path="/hair-treatments/replacement/full-lace" element={<FullLace />} />
          <Route path="/hair-treatments/replacement/men-full-cap" element={<MenFullCap />} />
          <Route path="/hair-treatments/replacement/women-full-cap" element={<WomenFullCap />} />

          {/* Hair Treatments - Specialty */}
          <Route path="/hair-treatments/specialty/scalp-micropigmentation" element={<ScalpMicropigmentation />} />
          <Route path="/hair-treatments/specialty/partial-alopecia" element={<PartialAlopecia />} />
          <Route path="/hair-treatments/specialty/total-alopecia" element={<TotalAlopecia />} />
          <Route path="/hair-treatments/specialty/microblading" element={<Microblading />} />
          <Route path="/hair-treatments/specialty/lip-micropigmentation" element={<LipMicropigmentation />} />
          <Route path="/hair-treatments/specialty/eyelash-lift" element={<EyelashLift />} />

          {/* Hair Treatments - Retention */}
          <Route path="/hair-treatments/retention/mesotherapy" element={<Mesotherapy />} />
          <Route path="/hair-treatments/retention/prp-pro-x27" element={<PRPProX27 />} />
          <Route path="/hair-treatments/retention/gel-prp" element={<GelPRP />} />
          <Route path="/hair-treatments/retention/regen-pro-9" element={<RegenPro9 />} />

          {/* Hair Treatments - Non-Invasive */}
          <Route path="/hair-treatments/non-invasive/oxygen-laser-therapy" element={<OxygenLaserTherapy />} />

          {/* ============================================ */}
          {/* SKIN TREATMENTS                             */}
          {/* ============================================ */}

          {/* Skin Treatments - Category Index Pages */}
          <Route path="/skin-treatments/brightening" element={<BrighteningIndex />} />
          <Route path="/skin-treatments/ageless" element={<AgelessIndex />} />
          <Route path="/skin-treatments/hair-reduction" element={<HairReductionIndex />} />
          <Route path="/skin-treatments/dry-skin" element={<DrySkinIndex />} />
          <Route path="/skin-treatments/iv-therapy" element={<IVTherapyIndex />} />

          {/* Skin Treatments - Brightening */}
          <Route path="/skin-treatments/brightening/skin-peels" element={<SkinPeels />} />
          <Route path="/skin-treatments/brightening/full-body-peel" element={<FullBodyPeel />} />
          <Route path="/skin-treatments/brightening/microdermabrasion" element={<Microdermabrasion />} />
          <Route path="/skin-treatments/brightening/q-switched-laser" element={<QSwitchedLaser />} />
          <Route path="/skin-treatments/brightening/mnrf-treatment" element={<MNRFTreatment />} />

          {/* Skin Treatments - Ageless */}
          <Route path="/skin-treatments/ageless/rf-facials" element={<RFFacials />} />
          <Route path="/skin-treatments/ageless/botox" element={<Botox />} />
          <Route path="/skin-treatments/ageless/dermal-fillers" element={<DermalFillers />} />
          <Route path="/skin-treatments/ageless/face-prp" element={<FacePRP />} />
          <Route path="/skin-treatments/ageless/thread-lift" element={<ThreadLift />} />

          {/* Skin Treatments - Hair Reduction */}
          <Route path="/skin-treatments/hair-reduction/nd-yag-laser" element={<NdYagLaser />} />
          <Route path="/skin-treatments/hair-reduction/diode-laser" element={<DiodeLaser />} />
          <Route path="/skin-treatments/hair-reduction/laser-hair-reduction" element={<LaserHairReduction />} />

          {/* Skin Treatments - Dry Skin */}
          <Route path="/skin-treatments/dry-skin/hydrafacial" element={<HydraFacial />} />

          {/* Skin Treatments - IV Therapy */}
          <Route path="/skin-treatments/iv-therapy/glutathione-iv" element={<GlutathioneIV />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
