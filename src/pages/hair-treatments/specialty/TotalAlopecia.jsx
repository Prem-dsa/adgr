import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const TotalAlopecia = () => {
    return <TreatmentPage treatment={hairTreatmentsData['total-alopecia']} />;
};

export default TotalAlopecia;
