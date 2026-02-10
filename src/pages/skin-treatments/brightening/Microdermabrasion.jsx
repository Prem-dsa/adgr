import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const Microdermabrasion = () => {
    return <TreatmentPage treatment={skinTreatmentsData['microdermabrasion']} />;
};

export default Microdermabrasion;
