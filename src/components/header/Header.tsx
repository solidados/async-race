import Button from '../../ui/buttons/Button.tsx';
import './styles.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <Button className={'header-button'} text={'Garage'} />
      <Button className={'header-button'} text={'Winners'} />
    </div>
  </header>
);

export default Header;
