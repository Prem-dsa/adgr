import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const DiodeLaser = () => {
    return <TreatmentPage treatment={skinTreatmentsData['diode-laser']} />;
};

export default DiodeLaser;
