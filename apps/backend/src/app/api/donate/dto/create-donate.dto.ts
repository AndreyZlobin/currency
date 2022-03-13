import { CurrencyCodeEnum } from "../../currencies/types";

export class CreateDonateDto {
  amount!: number;

  currency!: CurrencyCodeEnum;
}
