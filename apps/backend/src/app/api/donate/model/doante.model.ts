import { Schema } from "mongoose";

import { database } from "../../../../docs/database";
import { CurrencyCodeEnum } from "../../currencies/types";
import { DonateDocument } from "../types";

const donateSchema = new Schema<DonateDocument>(
  {
    amount: { type: Number, required: true, min: 1 },
    currency: { type: String, required: true, enum: CurrencyCodeEnum },
  },
  { versionKey: false, collection: "donations" },
);
const donationModel = database.model("Donation", donateSchema);

export { donationModel };
