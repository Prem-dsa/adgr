import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const MNRFTreatment = () => {
    return <TreatmentPage treatment={skinTreatmentsData['mnrf-treatment']} />;
};

export default MNRFTreatment;
