export type GarageItem = {
  color: string;
  id: number;
  name: string;
};

const fetchGarageItems = async (): Promise<GarageItem[]> => {
  try {
    const response: Response = await fetch('http://localhost:3000/garage');
    if (!response.ok) {
      throw new Error('Failed to fetch garage items');
    }
    const data = await response.json();
    return data as GarageItem[];
  } catch (error) {
    console.error('Error fetching garage items:', error);
    throw error;
  }
};

export default fetchGarageItems;
