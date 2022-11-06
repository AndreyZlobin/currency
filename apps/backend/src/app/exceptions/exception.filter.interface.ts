import { NextFunction, Request, Response } from "express";

import { HTTPException } from "./http.exception";

export interface ExceptionFilterInterface {
  catch(error: Error | HTTPException, req: Request, res: Response, next: NextFunction): void;
}
