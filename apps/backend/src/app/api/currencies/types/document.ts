import { Document } from "mongoose";

import { CurrencyDto } from "../dto";

export interface CurrencyDocument extends Omit<CurrencyDto, "id">, Document {}
