import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const FacePRP = () => {
    return <TreatmentPage treatment={skinTreatmentsData['face-prp']} />;
};

export default FacePRP;
