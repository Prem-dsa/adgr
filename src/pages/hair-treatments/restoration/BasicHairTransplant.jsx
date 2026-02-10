import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const BasicHairTransplant = () => {
    return <TreatmentPage treatment={hairTreatmentsData['basic-hair-transplant']} />;
};

export default BasicHairTransplant;
