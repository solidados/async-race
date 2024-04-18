import { createContext } from 'react';

type PageContextType = {
  inGarage: boolean;
  togglePage: () => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export default PageContext;
