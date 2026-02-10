import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const EyelashLift = () => {
    return <TreatmentPage treatment={hairTreatmentsData['eyelash-lift']} />;
};

export default EyelashLift;
