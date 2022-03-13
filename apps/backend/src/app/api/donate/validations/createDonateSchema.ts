import * as yup from "yup";

import { CurrencyCodeEnum } from "../../currencies/types";

export const createDonateSchema = yup.object({
  body: yup.object({
    amount: yup
      .number()
      .positive()
      .required()
      .min(1, "Amount must be greater than or equal to 1")
      .typeError("Amount must be number"),
    currency: yup.mixed().oneOf(Object.keys(CurrencyCodeEnum)).required(),
  }),
});
