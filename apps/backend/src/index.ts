import "dotenv/config";

import dotenv from "dotenv";

import { CurrencyController } from "./app/api/currencies/currencies.controller";
import { DonateController } from "./app/api/donate/donate.controller";
import { App } from "./app/server";

dotenv.config();

const controllers = [new DonateController(), new CurrencyController()];
const app = new App(controllers);

app.start();
