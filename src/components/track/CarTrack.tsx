import { GarageItem } from '../../modules/helpers/api/fetchGarageItems';
import Car from '../../ui/car/Car.tsx';
import CarControlPanel from './CarControlPanel.tsx';
import './styles.scss';

type CarTrackProps = {
  item: GarageItem;
};

const CarTrack = ({ item }: CarTrackProps) => (
  <div className="track">
    <CarControlPanel item={item} />
    <Car item={item} />
    <div className="track-racing"></div>
    <div className="track-finish"></div>
  </div>
);

export default CarTrack;
