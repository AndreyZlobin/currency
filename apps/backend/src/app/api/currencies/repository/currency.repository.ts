import { CurrencyDto } from "../dto";
import { currencyModel } from "../model";
import { CurrencyRepositoryInterface } from "../types";

export class CurrencyRepository implements CurrencyRepositoryInterface {
  constructor(private readonly WordModel = currencyModel) {}

  async findAll(): Promise<CurrencyDto[]> {
    return this.WordModel.find();
  }
}
