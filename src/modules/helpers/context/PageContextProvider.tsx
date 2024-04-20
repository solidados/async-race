import { FC, ReactNode, useState } from 'react';

import { GarageItem } from '../api/fetchGarageItems';
import PageContext from './PageContext.tsx';

type PageContextProviderProps = {
  children: ReactNode;
};

const PageContextProvider: FC<PageContextProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Garage');
  const [garageItems, setGarageItems] = useState<GarageItem[]>();

  const togglePage = (): void => {
    setCurrentPage((prevPage: string): string =>
      prevPage === 'Garage' ? 'Winners' : 'Garage'
    );
  };

  const value = {
    currentPage,
    garageItems,
    setGarageItems,
    togglePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
