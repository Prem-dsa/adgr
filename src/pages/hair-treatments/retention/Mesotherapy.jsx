import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const Mesotherapy = () => {
    return <TreatmentPage treatment={hairTreatmentsData['mesotherapy']} />;
};

export default Mesotherapy;
