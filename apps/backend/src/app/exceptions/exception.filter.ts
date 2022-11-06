import { logger } from "@src/infra";
import { Request, Response } from "express";

import { ExceptionFilterInterface } from "./exception.filter.interface";
import { HTTPException } from "./http.exception";

export class ExceptionFilter implements ExceptionFilterInterface {
  public catch(error: Error | HTTPException, req: Request, res: Response): Response | void {
    if (error instanceof HTTPException) {
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
