import { toast } from 'react-toastify';

const handleError = (error: string | unknown): void => {
  if (error instanceof Error && typeof error !== 'undefined') {
    toast.error(error.message);
  } else {
    toast.error('An unexpected error occurred');
  }
};

export default handleError;
