import Button from '../../ui/buttons/Button.tsx';
import CarFeatures from '../CarFeatures/CarFeatures.tsx';
import './styles.scss';

const Garage = () => (
  <div className="garage">
    <div className="garage-menu">
      <Button className="garage-btn-race" text={'Race'} />
      <Button className="garage-btn-reset" text={'Reset'} />
      <CarFeatures blockName={'create'} />
      <CarFeatures blockName={'update'} />
      <Button className={'garage-btn-generate-cars'} text={'generate cars'} />
    </div>
  </div>
);

export default Garage;
