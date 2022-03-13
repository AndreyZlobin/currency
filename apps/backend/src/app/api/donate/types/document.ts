import { Document } from "mongoose";

import { DonateDto } from "../dto";

export interface DonateDocument extends Omit<DonateDto, "_id">, Document {}
