import { Dispatch, SetStateAction, createContext } from 'react';

import { GarageItem } from '../api/fetchGarageItems';

type PageContextType = {
  currentPage: string;
  garageItems?: GarageItem[];
  setGarageItems?: Dispatch<SetStateAction<GarageItem[] | undefined>>;
  togglePage: () => void;
};

const PageContext = createContext<PageContextType>({} as PageContextType);

export default PageContext;
