import TreatmentPage from '../../../components/TreatmentPage';
import { skinTreatmentsData } from '../../../data/skinTreatmentsData';

const QSwitchedLaser = () => {
    return <TreatmentPage treatment={skinTreatmentsData['q-switched-laser']} />;
};

export default QSwitchedLaser;
