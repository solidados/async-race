import Button from '../../ui/buttons/Button.tsx';
import './styles.scss';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <nav className="nav">
        <Button className={'nav-button'} text={'Garage'} />
        <Button className={'nav-button'} text={'Winners'} />
      </nav>
    </div>
  </header>
);

export default Header;
