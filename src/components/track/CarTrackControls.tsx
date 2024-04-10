import Button from '../../ui/buttons/Button.tsx';

const CarTrackControls = () => (
  <div className="car-track-controls">
    <Button className={'car-track-controls-select'} text={'select'} />
    <Button className={'car-track-controls-remove'} text={'remove'} />
  </div>
);

export default CarTrackControls;
