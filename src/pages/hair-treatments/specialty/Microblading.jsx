import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const Microblading = () => {
    return <TreatmentPage treatment={hairTreatmentsData['microblading']} />;
};

export default Microblading;
