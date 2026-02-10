import TreatmentPage from '../../../components/TreatmentPage';
import { hairTreatmentsData } from '../../../data/hairTreatmentsData';

const CelebrityChoice = () => {
    return <TreatmentPage treatment={hairTreatmentsData['celebrity-choice']} />;
};

export default CelebrityChoice;
