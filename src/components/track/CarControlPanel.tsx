import { FC } from 'react';

import { GarageItem } from '../../modules/helpers/api/fetchGarageItems';
import CarControls from './CarControls.tsx';
import CarTrackControls from './CarTrackControls.tsx';

const CarControlPanel: FC<{ item: GarageItem }> = ({ item }) => (
  <div className="car-control-wrapper">
    <p>{item.name}</p>
    <div className="car-control-pannel">
      <CarTrackControls item={item} />
      <CarControls />
    </div>
  </div>
);
export default CarControlPanel;
