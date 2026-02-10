import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const Botox = () => {
    return <TreatmentPage treatment={skinTreatmentsData['botox']} />;
};

export default Botox;
