import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const BasicThinPoly = () => {
    return <TreatmentPage treatment={hairTreatmentsData['basic-thin-poly']} />;
};

export default BasicThinPoly;
