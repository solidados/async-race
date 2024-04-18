import CarControls from './CarControls.tsx';
import CarTrackControls from './CarTrackControls.tsx';

const CarControlPannel = () => (
  <div className="car-control-wrapper">
    <p>Mercedes GQL-500</p>
    <div className="car-control-pannel">
      <CarTrackControls />
      <CarControls />
    </div>
  </div>
);

export default CarControlPannel;
