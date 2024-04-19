import { FC, ReactNode, useState } from 'react';

import PageContext from './PageContext.tsx';

type PageContextProviderProps = {
  children: ReactNode;
};

const PageContextProvider: FC<PageContextProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Garage');

  const togglePage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 'Garage' ? 'Winners' : 'Garage'
    );
  };

  const value = {
    currentPage,
    togglePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
