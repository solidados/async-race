import { FC } from 'react';

import Button from '../../ui/buttons/Button.tsx';
import CarOptionInput from '../../ui/inputs/CarOptionInput.tsx';
import './styles.scss';

type CarFeatureOptions = {
  blockName: string;
};

const CarFeatures: FC<CarFeatureOptions> = (props) => (
  <div className="car-features">
    <CarOptionInput inputType={'text'} value={''} />
    <CarOptionInput inputType={'color'} value={''} />
    <Button
      className={`garage-btn-${props.blockName}`}
      text={`${props.blockName}`}
    />
  </div>
);

export default CarFeatures;
