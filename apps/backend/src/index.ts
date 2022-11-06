import "./utils/module-alias";
import "dotenv/config";

import { AuthController } from "@api/auth/auth.controller";
import { CurrencyController } from "@api/currencies/currencies.controller";
import { DonateController } from "@api/donate/donate.controller";
import dotenv from "dotenv";

import { App } from "./app/server";

dotenv.config();

const controllers = [new DonateController(), new CurrencyController(), new AuthController()];
const app = new App(controllers);

app.start();
