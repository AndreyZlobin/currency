import { CurrencyCodeEnum } from "@api/currencies/types";
import { database } from "@src/infra";
import { Schema } from "mongoose";

import { DonateDocument } from "../types";

const donateSchema = new Schema<DonateDocument>(
  {
    amount: { type: Number, required: true, min: 1 },
    currency: { type: String, required: true, enum: CurrencyCodeEnum },
  },
  { versionKey: false, collection: "donations" },
);
const donationModel = database.createModel<DonateDocument>("Donation", donateSchema);

export { donationModel };
