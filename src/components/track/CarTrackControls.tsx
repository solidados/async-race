import { FC } from 'react';

import { GarageItem } from '../../modules/helpers/api/fetchGarageItems';
import getCar from '../../modules/helpers/api/getCar';
import Button from '../../ui/buttons/Button.tsx';

const CarTrackControls: FC<{ item: GarageItem }> = ({ item }) => (
  <div className="car-track-controls">
    <Button
      className={'car-track-controls-select'}
      onClick={() => getCar(item.id)}
      text={'select'}
    />
    <Button className={'car-track-controls-remove'} text={'remove'} />
  </div>
);

export default CarTrackControls;
