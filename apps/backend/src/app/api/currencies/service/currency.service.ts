import { CurrencyDto } from "../dto";
import { CurrencyRepository } from "../repository";
import { CurrencyServiceInterface } from "../types";

export class CurrencyService implements CurrencyServiceInterface {
  constructor(private readonly wordRepository = new CurrencyRepository()) {}

  async getAllCurrencies(): Promise<CurrencyDto[] | void> {
    return await this.wordRepository.findAll();
  }
}
