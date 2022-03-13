import { httpClient } from '@core/httpClient';
import { Currency } from '@core/api';

export const fetchCurrencies = async (): Promise<Currency[]> => {
  return httpClient.currency.getApiV1Currency();
};
