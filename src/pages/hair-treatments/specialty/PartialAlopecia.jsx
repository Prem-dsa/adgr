import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const PartialAlopecia = () => {
    return <TreatmentPage treatment={hairTreatmentsData['partial-alopecia']} />;
};

export default PartialAlopecia;
