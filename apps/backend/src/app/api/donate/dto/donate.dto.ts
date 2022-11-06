import { CurrencyCodeEnum } from "@api/currencies/types";

export class DonateDto {
  readonly _id!: string;

  amount!: number;

  currency!: CurrencyCodeEnum;
}
