import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const LaserHairReduction = () => {
    return <TreatmentPage treatment={skinTreatmentsData['laser-hair-reduction']} />;
};

export default LaserHairReduction;
