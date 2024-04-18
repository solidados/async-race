import usePageContext from '../../modules/helpers/hooks/usePageContext.tsx';
import Button from '../../ui/buttons/Button.tsx';
import './styles.scss';

const Header = () => {
  const { togglePage } = usePageContext();

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <Button
            className={'nav-button'}
            onClick={togglePage}
            text={'Garage'}
          />
          <Button
            className={'nav-button'}
            onClick={togglePage}
            text={'Winners'}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
