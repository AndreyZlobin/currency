import { toast } from 'react-toastify';
import { ApiError } from '@core/api';

export const errorHandler = (error: Error | ApiError) => {
  if (error instanceof ApiError) {
    toast.error(error?.body?.message);
    return;
  }
  toast.error('something went wrong');
};
