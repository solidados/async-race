import handleError from '../errors/handleError';

export type GarageItem = {
  color: string;
  id: number;
  name: string;
};

// GET ALL CARS
const fetchGarageItems = async () => {
  let data: GarageItem[] = [];
  try {
    const response: Response = await fetch('http://localhost:3000/garage');
    data = await response.json();
  } catch (error) {
    handleError(`${error}: 'Failed to fetch garage items'`);
    return [];
  }
  return data;
};

export default fetchGarageItems;
