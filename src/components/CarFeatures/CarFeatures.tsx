import { FC } from 'react';

import Button from '../../ui/buttons/Button.tsx';
import './styles.scss';

type CarFeatureOptions = {
  blockName: string;
};

const CarFeatures: FC<CarFeatureOptions> = (props) => (
  <div className="car-features">
    <input type="text" />
    <input type="color" />
    <Button
      className={`garage-btn-${props.blockName}`}
      text={`${props.blockName}`}
    />
  </div>
);

export default CarFeatures;
