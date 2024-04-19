import { createContext } from 'react';

type PageContextType = {
  currentPage: string;
  togglePage: () => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export default PageContext;
