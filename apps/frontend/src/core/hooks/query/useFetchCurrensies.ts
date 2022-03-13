import { useQuery } from 'react-query';
import { fetchCurrencies } from '@core/requests';
import { CURRENCIES_KEY } from '@core/hooks/query/keys';
import { errorHandler } from '@utils';
import { ApiError } from '@core/api';

export const useFetchCurrencies = () => {
  return useQuery(CURRENCIES_KEY, async () => fetchCurrencies(), {
    onError(error: Error | ApiError) {
      errorHandler(error);
    },
  });
};
