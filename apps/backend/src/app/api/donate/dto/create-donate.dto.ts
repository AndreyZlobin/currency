import { CurrencyCodeEnum } from "@api/currencies/types";

export class CreateDonateDto {
  amount!: number;

  currency!: CurrencyCodeEnum;
}
