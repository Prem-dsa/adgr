import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const OxygenLaserTherapy = () => {
    return <TreatmentPage treatment={hairTreatmentsData['oxygen-laser-therapy']} />;
};

export default OxygenLaserTherapy;
