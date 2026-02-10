import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const SkinPeels = () => {
    return <TreatmentPage treatment={skinTreatmentsData['skin-peels']} />;
};

export default SkinPeels;
