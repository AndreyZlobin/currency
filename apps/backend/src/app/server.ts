import { IController } from "@src/app/core";
import { database, logger } from "@src/infra";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import { Server } from "http";

import { DB_CONFIG, keys } from "../config";
import { swaggerOptions } from "../docs";
import { getEnv } from "../shared";
import { ExceptionFilter } from "./exceptions";
const PREFIX = keys.API_PREFIX as string;

export class App {
  readonly #app: Express;

  #server: Server | undefined;

  readonly #port: number;

  constructor(private readonly controllers: IController[]) {
    this.#app = express();
    this.#port = Number(getEnv("PORT"));
  }

  get app(): Express {
    return this.#app;
  }

  get port() {
    return this.#port;
  }

  get server() {
    return this.#server;
  }

  set server(server) {
    this.#server = server;
  }

  initializeControllers(controllers: IController[]): void {
    controllers.forEach((controller) => this.app.use(PREFIX, controller.router));
  }

  useExceptionFilters(): void {
    const exceptions = new ExceptionFilter();

    this.app.use(exceptions.catch.bind(exceptions));
  }

  private useMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    this.app.use(cors({ allowedHeaders: "*" }));
    expressJSDocSwagger(this.app)(swaggerOptions(PREFIX));
  }

  public async start(): Promise<void> {
    const { DB_CONNECT } = DB_CONFIG;

    await database.connect(DB_CONNECT);
    this.useMiddlewares();
    this.initializeControllers(this.controllers);
    this.useExceptionFilters();

    this.server = this.app.listen(this.port, () => {
      logger.log(`[App]: Server was started on PORT ${this.port}`);
    });
  }

  public close(): void {
    this.server?.close();
  }
}
