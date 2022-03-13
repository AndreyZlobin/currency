import { Schema } from "mongoose";

import { database } from "../../../../database";
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

const currencyModel = database.model("Currency", currencySchema);

export { currencyModel };
