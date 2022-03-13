import { CreateDonate } from '@core/api';
import { useMutation } from 'react-query';
import { createDonate } from '@core/requests';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { errorHandler } from '@utils';

export const useCreateDonate = () => {
  return useMutation(async (body: CreateDonate) => createDonate(body), {
    onSuccess(res) {
      toast.success(res.message);
    },
    onError(error: Error | AxiosError) {
      errorHandler(error);
    },
  });
};
