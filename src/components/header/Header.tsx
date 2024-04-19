import usePageContext from '../../modules/helpers/hooks/usePageContext.tsx';
import Button from '../../ui/buttons/Button.tsx';
import './styles.scss';

const Header = () => {
  const { currentPage, togglePage } = usePageContext();

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <Button
            className={`nav-button ${currentPage === 'Garage' ? 'active' : ''}`}
            onClick={togglePage}
            text={'Garage'}
          />
          <Button
            className={`nav-button ${currentPage === 'Winners' ? 'active' : ''}`}
            onClick={togglePage}
            text={'Winners'}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
