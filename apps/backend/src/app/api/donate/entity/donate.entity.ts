import { CurrencyCodeEnum } from "../../currencies/types";

export class DonateEntity {
  constructor(private readonly _amount: number, private readonly _currency: CurrencyCodeEnum) {}

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  get donate() {
    const { amount, currency } = this;

    return { amount, currency };
  }
}
