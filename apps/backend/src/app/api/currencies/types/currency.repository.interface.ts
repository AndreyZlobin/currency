import { CurrencyDto } from "../dto";

export interface CurrencyRepositoryInterface {
  findAll(): Promise<CurrencyDto[]>;
}
