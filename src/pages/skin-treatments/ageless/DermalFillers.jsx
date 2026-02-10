import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const DermalFillers = () => {
    return <TreatmentPage treatment={skinTreatmentsData['dermal-fillers']} />;
};

export default DermalFillers;
