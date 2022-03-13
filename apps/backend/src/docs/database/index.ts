import { Mongoose } from "mongoose";

import { logger } from "../../infra/logger/logger.service";

const database = new Mongoose();

database.connection.on("error", logger.error);

export { database };
