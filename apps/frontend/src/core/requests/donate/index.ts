import { httpClient } from '@core/httpClient';
import { CreateDonate } from '@core/api';

export const createDonate = async (body: CreateDonate) => {
  return httpClient.donate.postApiV1Donate(body);
};
