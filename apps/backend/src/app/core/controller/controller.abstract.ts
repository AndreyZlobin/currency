import { IController } from "@src/app/core";
import { logger, Route } from "@src/infra";
import { Response, Router } from "express";

export type ExpressReturnType = Response<unknown, Record<string, unknown>>;

export default abstract class Controller implements IController {
  protected constructor(public readonly path: string, public readonly router: Router = Router()) {}

  public initializeRoutes(routes: Route[]): void {
    routes.forEach(({ path, method, callback, middleware }) => {
      logger.log(`[${method.toLocaleUpperCase()}]: ${path}`);
      const middlewares = middleware || [];

      this.router[method](path, middlewares, callback);
    });
  }

  public send<T>(res: Response, code: number, message: T): ExpressReturnType {
    res.type("application/json");
    return res.status(code).json(message);
  }

  public ok<T>(res: Response, message: T): ExpressReturnType {
    return this.send<T>(res, 200, message);
  }

  public created<T>(res: Response, message: T): ExpressReturnType {
    return this.send<T>(res, 201, message);
  }
}

export { Controller };
