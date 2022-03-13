import { CurrencyCodeEnum } from "../types";

export class CurrencyDto {
  readonly id!: string;

  name!: string;

  code!: CurrencyCodeEnum;

  symbol!: string;

  rate!: number;
}
