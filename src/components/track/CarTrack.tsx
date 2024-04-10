import Car from '../../ui/car/Car.tsx';
import CarControlPannel from './CarControlPannel.tsx';
import './styles.scss';

const CarTrack = () => (
  <div className="track">
    <CarControlPannel />
    <Car />
    <div className="track-racing"></div>
    <div className="track-finish"></div>
  </div>
);

export default CarTrack;
