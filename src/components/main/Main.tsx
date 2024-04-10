import { useState } from 'react';

import Garage from '../garage/Garage.tsx';
import Winners from '../winners/Winners.tsx';

const Main = () => {
  const [inGarage, _] = useState(true);

  return (
    <main>
      <div className="container">{inGarage ? <Garage /> : <Winners />}</div>
    </main>
  );
};

export default Main;
