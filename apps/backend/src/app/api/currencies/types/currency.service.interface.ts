import { CurrencyDto } from "../dto";

export interface CurrencyServiceInterface {
  getAllCurrencies(): Promise<CurrencyDto[] | void>;
}
