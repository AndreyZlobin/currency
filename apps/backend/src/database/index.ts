import { Mongoose } from "mongoose";

import { logger } from "../logger/logger.service";

const database = new Mongoose();

database.connection.on("error", logger.error);

export { database };
