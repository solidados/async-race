import handleError from '../errors/handleError';
import { GarageItem } from './fetchGarageItems';

// GET CAR BY ID
const getCar = async (id: number): Promise<GarageItem> => {
  let data;
  try {
    const response = await fetch(`http://localhost:3000/garage/${id}`);
    data = await response.json();
  } catch (error) {
    handleError(`${error}: 'Failed to get a car'`);
  }
  return data;
};

export default getCar;
