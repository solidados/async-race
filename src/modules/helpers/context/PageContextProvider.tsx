import { FC, ReactNode, useState } from 'react';

import PageContext from './PageContext.tsx';

type PageContextProviderProps = {
  children: ReactNode;
};

const PageContextProvider: FC<PageContextProviderProps> = ({ children }) => {
  const [inGarage, setInGarage] = useState(false);

  const togglePage = () => {
    setInGarage((prevInGarage) => !prevInGarage);
  };

  const value = {
    inGarage,
    togglePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
