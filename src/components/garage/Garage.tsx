import Button from '../../ui/buttons/Button.tsx';
import CarFeatures from '../CarFeatures/CarFeatures.tsx';
import CarTrack from '../track/CarTrack.tsx';
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
    <div className="garage-info">
      <div className="garage-info-wrapper">
        <h2>Garage (1)</h2>
        <h3>Page #1</h3>
      </div>
      <div className="page-controls">
        <Button className="page-prev" text={'<'} />
        <Button className="page-next" text={'>'} />
      </div>
    </div>
    <CarTrack />
  </div>
);

export default Garage;
