import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const RFFacials = () => {
    return <TreatmentPage treatment={skinTreatmentsData['rf-facials']} />;
};

export default RFFacials;
