import { CurrencyCodeEnum } from "../../currencies/types";

export class DonateDto {
  readonly _id!: string;

  amount!: number;

  currency!: CurrencyCodeEnum;
}
