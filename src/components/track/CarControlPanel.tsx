import { FC } from 'react';

import CarControls from './CarControls.tsx';
import CarTrackControls from './CarTrackControls.tsx';

type CarControlPanelProps = {
  carName: string;
};
const CarControlPanel: FC<CarControlPanelProps> = ({ carName }) => (
  <div className="car-control-wrapper">
    <p>{carName}</p>
    <div className="car-control-pannel">
      <CarTrackControls />
      <CarControls />
    </div>
  </div>
);

export default CarControlPanel;
