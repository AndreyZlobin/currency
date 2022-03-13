import { AppClient } from '@core/api';
import { baseURL } from '@constants/root';

export const httpClient = new AppClient({
  BASE: baseURL,
});
