import { useContext, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import fetchGarageItems, {
  GarageItem,
} from '../../modules/helpers/api/fetchGarageItems';
import PageContext from '../../modules/helpers/context/PageContext.tsx';
import Button from '../../ui/buttons/Button.tsx';
import CarFeatures from '../CarFeatures/CarFeatures.tsx';
import PageInfo from '../pageInfo/PageInfo.tsx';
import CarTrack from '../track/CarTrack.tsx';
import './styles.scss';

const handleFetchError = (error: unknown): void => {
  if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error('An unexpected error occurred');
  }
};

const fetchItems = async (
  setGarageItems: (items: GarageItem[]) => void
): Promise<void> => {
  try {
    const items = await fetchGarageItems();
    setGarageItems(items);
  } catch (error: unknown) {
    handleFetchError(error);
  }
};

const Garage = () => {
  const { garageItems, setGarageItems } = useContext(PageContext);
  const setGarageItemsCallback = useMemo(
    () => setGarageItems || ((): void => {}),
    [setGarageItems]
  );
  useEffect((): void => {
    fetchItems(setGarageItemsCallback);
  }, [setGarageItems, setGarageItemsCallback]);

  return (
    <div className="garage">
      <PageInfo
        itemsNumber={garageItems?.length ?? 0}
        pageNumber={1}
        pageTitle={'Garage'}
      />
      <div className="garage-menu">
        <Button className="garage-btn-race" text={'Race'} />
        <Button className="garage-btn-reset" text={'Reset'} />
        <CarFeatures blockName={'create'} />
        <CarFeatures blockName={'update'} />
        <Button className={'garage-btn-generate-cars'} text={'generate cars'} />
      </div>
      <ul>
        {garageItems &&
          garageItems.map((item) => (
            <li key={item.id}>
              <CarTrack item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Garage;
