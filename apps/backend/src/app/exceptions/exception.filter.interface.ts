import { NextFunction, Request, Response } from "express";

import { HTTPError } from "./http.exception";

export interface ExceptionFilterInterface {
  catch(error: Error | HTTPError, req: Request, res: Response, next: NextFunction): void;
}
