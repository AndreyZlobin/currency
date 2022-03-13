import { NextFunction, Request, Response } from "express";

import { logger } from "../../logger/logger.service";
import { ExceptionFilterInterface } from "./exception.filter.interface";
import { HTTPError } from "./http.exception";

export class ExceptionFilter implements ExceptionFilterInterface {
  public catch(
    error: Error | HTTPError,
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    if (error instanceof HTTPError) {
      const { context, statusCode, message } = error;

      logger.error({
        route: req?.route?.path,
        context,
        message,
        statusCode,
      });
      return res.status(statusCode).json({ ok: false, statusCode, message, context });
    }
    logger.error({
      route: req?.route?.path,
      message: error.message,
    });
    return res.status(500).json({ ok: false, statusCode: 500, message: error.message });
  }
}
