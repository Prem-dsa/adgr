import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const FullBodyPeel = () => {
    return <TreatmentPage treatment={skinTreatmentsData['full-body-peel']} />;
};

export default FullBodyPeel;
