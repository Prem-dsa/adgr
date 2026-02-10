import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const ScalpMicropigmentation = () => {
    return <TreatmentPage treatment={hairTreatmentsData['scalp-micropigmentation']} />;
};

export default ScalpMicropigmentation;
