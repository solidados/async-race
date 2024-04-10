import CarControls from './CarControls.tsx';
import CarTrackControls from './CarTrackControls.tsx';

const CarControlPannel = () => (
  <div className="car-control-pannel">
    <CarTrackControls />
    <CarControls />
  </div>
);

export default CarControlPannel;
