import usePageContext from '../../modules/helpers/hooks/usePageContext.tsx';
import Garage from '../garage/Garage.tsx';
import Winners from '../winners/Winners.tsx';

const Main = () => {
  const { inGarage } = usePageContext();

  return (
    <main>
      <div className="container">{inGarage ? <Garage /> : <Winners />}</div>
    </main>
  );
};

export default Main;
