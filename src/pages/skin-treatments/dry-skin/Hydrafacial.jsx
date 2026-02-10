import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const HydraFacial = () => {
    return <TreatmentPage treatment={skinTreatmentsData['hydrafacial']} />;
};

export default HydraFacial;
