import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const PercutaneousFUE = () => {
    return <TreatmentPage treatment={hairTreatmentsData['percutaneous-fue']} />;
};

export default PercutaneousFUE;
