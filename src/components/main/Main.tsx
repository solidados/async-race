import usePageContext from '../../modules/helpers/hooks/usePageContext.tsx';
import Garage from '../garage/Garage.tsx';
import Winners from '../winners/Winners.tsx';
import './style.scss';

const Main = () => {
  const { currentPage } = usePageContext();

  return (
    <main>
      <div className="container">
        {currentPage === 'Garage' ? <Garage /> : <Winners />}
      </div>
    </main>
  );
};

export default Main;
