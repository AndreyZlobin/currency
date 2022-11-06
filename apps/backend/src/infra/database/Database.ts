import { Mongoose, Schema } from "mongoose";

import { logger } from "../logger";

export class Database {
  // eslint-disable-next-line no-use-before-define
  static #instance: undefined | Database;
  private database!: Mongoose;

  constructor() {
    if (Database.#instance) {
      return this;
    }
    Database.#instance = this;

    this.database = new Mongoose();
    this.database.connection.on("error", logger.error);
  }

  public createModel<T extends object>(name: string, schema: Schema<T>) {
    return this.database.model(name, schema);
  }

  async connect(connectUrl: string) {
    try {
      await this.database.connect(connectUrl);
      logger.log("[DATABASE]: connected successfully");
    } catch (e) {
      logger.error(e);
      process.exit(1);
    }
  }

  async disconnect() {
    try {
      await this.database.disconnect();
    } catch (e) {
      logger.error(e);
      process.exit(1);
    }
  }
}

export const database = new Database();
