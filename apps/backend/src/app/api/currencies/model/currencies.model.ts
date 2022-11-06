import { database } from "@src/infra";
import { Schema } from "mongoose";

import { CurrencyDocument } from "../types";

const currencySchema = new Schema<CurrencyDocument>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    symbol: { type: String, required: true },
    rate: { type: Number, required: true },
  },
  { versionKey: false, collection: "currency" },
);

const currencyModel = database.createModel<CurrencyDocument>("Currency", currencySchema);

export { currencyModel };
